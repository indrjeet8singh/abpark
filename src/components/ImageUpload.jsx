
import { useState } from "react";
import {
  Container,
  Card,
  Form,
  Button,
  Image,
  Spinner,
  Alert,
} from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  // =========================
  // SELECT IMAGE
  // =========================
  const handleChange = (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) return;

    // Image validation
    if (!selectedFile.type.startsWith("image/")) {
      toast.error("केवल image file select करें");
      return;
    }

    // 5 MB limit
    if (selectedFile.size > 5 * 1024 * 1024) {
      toast.error("Image का size 5 MB से कम होना चाहिए");
      return;
    }

    setFile(selectedFile);
    setImageUrl("");

    // Preview
    const previewUrl = URL.createObjectURL(selectedFile);
    setPreview(previewUrl);
  };

  // =========================
  // UPLOAD IMAGE
  // =========================
  const handleUpload = async (e) => {
    e.preventDefault();

    if (!file) {
      toast.warning("पहले image select करें");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("image", file);

      const response = await axios.post(
        "https://api.imgbb.com/1/upload",
        formData,
        {
          params: {
            key: import.meta.env.VITE_IMGBB_API_KEY,
          },
        }
      );

      const url = response.data.data.url;

      setImageUrl(url);

      toast.success("Image successfully upload हो गई");

    } catch (error) {
      console.error(
        "Upload Error:",
        error.response?.data || error.message
      );

      toast.error(
        error.response?.data?.error?.message ||
          "Image upload failed"
      );
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // REMOVE IMAGE
  // =========================
  const handleRemove = () => {
    setFile(null);
    setPreview("");
    setImageUrl("");

    const input = document.getElementById(
      "imageInput"
    );

    if (input) {
      input.value = "";
    }
  };

  return (
    <Container className="py-4">

      <Card
        className="border-0 shadow mx-auto"
        style={{
          maxWidth: "600px",
          borderRadius: "15px",
        }}
      >

        <Card.Body className="p-4">

          {/* TITLE */}
          <h3 className="text-center mb-2">
            🖼️ Image Upload
          </h3>

          <p className="text-center text-muted mb-4">
            अम्बेडकर पार्क की Gallery के लिए Image Upload करें
          </p>


          {/* FORM */}
          <Form onSubmit={handleUpload}>

            {/* FILE */}
            <Form.Group className="mb-4">

              <Form.Label className="fw-bold">
                Select Image
              </Form.Label>

              <Form.Control
                id="imageInput"
                type="file"
                accept="image/*"
                onChange={handleChange}
                disabled={loading}
              />

              <Form.Text className="text-muted">
                JPG, JPEG, PNG या WEBP • Maximum 5 MB
              </Form.Text>

            </Form.Group>


            {/* PREVIEW */}
            {preview && (
              <Card className="mb-4">

                <Card.Body>

                  <h6 className="fw-bold mb-3">
                    Image Preview
                  </h6>

                  <div className="text-center">

                    <Image
                      src={preview}
                      alt="Preview"
                      fluid
                      rounded
                      style={{
                        maxHeight: "300px",
                        objectFit: "contain",
                      }}
                    />

                  </div>

                  <Button
                    variant="outline-danger"
                    size="sm"
                    className="mt-3"
                    onClick={handleRemove}
                    disabled={loading}
                  >
                    🗑️ Remove Image
                  </Button>

                </Card.Body>

              </Card>
            )}


            {/* UPLOAD BUTTON */}
            <Button
              type="submit"
              variant="primary"
              className="w-100"
              disabled={!file || loading}
            >

              {loading ? (
                <>
                  <Spinner
                    animation="border"
                    size="sm"
                    className="me-2"
                  />

                  Uploading...
                </>
              ) : (
                <>
                  ⬆️ Upload Image
                </>
              )}

            </Button>

          </Form>


          {/* SUCCESS */}
          {imageUrl && (
            <Alert
              variant="success"
              className="mt-4"
            >

              <h6 className="fw-bold">
                ✅ Upload Successful
              </h6>

              <Image
                src={imageUrl}
                alt="Uploaded"
                fluid
                rounded
                style={{
                  maxHeight: "200px",
                }}
              />

              <Form.Control
                className="mt-3"
                value={imageUrl}
                readOnly
              />

              <Button
                variant="outline-success"
                size="sm"
                className="mt-2"
                onClick={() => {
                  navigator.clipboard.writeText(
                    imageUrl
                  );

                  toast.success(
                    "Image URL copied"
                  );
                }}
              >
                📋 Copy Image URL
              </Button>

            </Alert>
          )}

        </Card.Body>

      </Card>

    </Container>
  );
};

export default ImageUpload;
