import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  Card,
  Form,
  Button,
  Alert,
  Spinner,
} from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

const API_URL = "https://ambedkar-backend.onrender.com/api/auth";

export default function VerifyOTP() {
  const navigate = useNavigate();
  const location = useLocation();

  // RegisterPage se email receive hogi
  const [email, setEmail] = useState(
    location.state?.email || ""
  );

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [error, setError] = useState("");

  // =========================
  // VERIFY OTP
  // =========================
  const handleVerify = async (e) => {
    e.preventDefault();

    setError("");

    const cleanEmail = email.trim().toLowerCase();
    const cleanOtp = otp.trim();

    if (!cleanEmail) {
      toast.warning("Please enter your email");
      return;
    }

    if (cleanOtp.length !== 6) {
      toast.warning("Please enter a valid 6 digit OTP");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        `${API_URL}/verify-otp`,
        {
          email: cleanEmail,
          otp: cleanOtp,
        }
      );

      console.log("Verify OTP Response:", response.data);

      if (response.data.success) {
        toast.success("Email verified successfully!");

        // Verification ke baad Login page
        navigate("/login", {
          replace: true,
          state: {
            email: cleanEmail,
          },
        });
      }
    } catch (err) {
      console.error(
        "OTP Verify Error:",
        err.response?.data || err.message
      );

      const message =
        err.response?.data?.message ||
        "OTP verification failed";

      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // RESEND OTP
  // =========================
  const handleResend = async () => {
    setError("");

    const cleanEmail = email.trim().toLowerCase();

    if (!cleanEmail) {
      toast.warning("Please enter your email");
      return;
    }

    try {
      setResending(true);

      const response = await axios.post(
        `${API_URL}/resend-otp`,
        {
          email: cleanEmail,
        }
      );

      console.log(
        "Resend OTP Response:",
        response.data
      );

      if (response.data.success) {
        toast.success("New OTP sent to your email!");

        // Purana OTP clear
        setOtp("");
      }
    } catch (err) {
      console.error(
        "Resend OTP Error:",
        err.response?.data || err.message
      );

      const message =
        err.response?.data?.message ||
        "Unable to resend OTP";

      setError(message);
      toast.error(message);
    } finally {
      setResending(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #f5f7fa, #e4ecf7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Container>
        <div className="d-flex justify-content-center">
          <Card
            className="shadow-lg border-0"
            style={{
              width: "100%",
              maxWidth: "450px",
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            {/* Header */}
            <div
              style={{
                background:
                  "linear-gradient(135deg, #003b73, #0066b3)",
                color: "white",
                padding: "30px 20px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "45px",
                  marginBottom: "10px",
                }}
              >
                ✉️
              </div>

              <h3 className="fw-bold mb-1">
                Verify Email
              </h3>

              <p className="mb-0">
                Admin Email Verification
              </p>
            </div>

            {/* Body */}
            <Card.Body className="p-4">

              <p className="text-center text-muted mb-4">
                आपके email पर भेजा गया 6 digit OTP
                enter करें।
              </p>

              {/* Error */}
              {error && (
                <Alert
                  variant="danger"
                  className="text-center"
                >
                  {error}
                </Alert>
              )}

              <Form onSubmit={handleVerify}>

                {/* Email */}
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">
                    Email Address
                  </Form.Label>

                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    placeholder="Enter your email"
                    required
                  />
                </Form.Group>

                {/* OTP */}
                <Form.Group className="mb-4">
                  <Form.Label className="fw-semibold">
                    Enter OTP
                  </Form.Label>

                  <Form.Control
                    type="text"
                    inputMode="numeric"
                    maxLength={6}
                    value={otp}
                    onChange={(e) => {
                      const value =
                        e.target.value.replace(
                          /\D/g,
                          ""
                        );

                      setOtp(value);
                    }}
                    placeholder="••••••"
                    className="text-center fw-bold"
                    style={{
                      fontSize: "28px",
                      letterSpacing: "10px",
                      height: "60px",
                    }}
                    required
                  />

                  <div className="text-center mt-2">
                    <small className="text-muted">
                      OTP 10 minutes के लिए valid है
                    </small>
                  </div>
                </Form.Group>

                {/* Verify Button */}
                <Button
                  type="submit"
                  variant="primary"
                  className="w-100 fw-bold"
                  style={{
                    height: "48px",
                  }}
                  disabled={
                    loading ||
                    otp.length !== 6
                  }
                >
                  {loading ? (
                    <>
                      <Spinner
                        animation="border"
                        size="sm"
                        className="me-2"
                      />
                      Verifying...
                    </>
                  ) : (
                    "Verify OTP"
                  )}
                </Button>

                {/* Resend */}
                <div className="text-center mt-4">
                  <span className="text-muted">
                    OTP नहीं मिला?
                  </span>{" "}

                  <Button
                    type="button"
                    variant="link"
                    className="p-0 fw-semibold"
                    onClick={handleResend}
                    disabled={resending}
                  >
                    {resending ? (
                      <>
                        <Spinner
                          animation="border"
                          size="sm"
                          className="me-1"
                        />
                        Sending...
                      </>
                    ) : (
                      "Resend OTP"
                    )}
                  </Button>
                </div>

                {/* Back Login */}
                <div className="text-center mt-3">
                  <Button
                    type="button"
                    variant="link"
                    className="text-decoration-none"
                    onClick={() =>
                      navigate("/")
                    }
                  >
                    Login
                  </Button>
                </div>

              </Form>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
}