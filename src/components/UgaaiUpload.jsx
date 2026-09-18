
// import React, { useState } from "react";
// import {
//   Container,
//   Form,
//   Button,
//   Alert,
//   Spinner,
//   Card,
//   Row,
//   Col,
// } from "react-bootstrap";
// import axios from "axios";
// import { toast } from "react-toastify";
// import {
//   FaUserPlus,
//   FaCalendarAlt,
//   FaUser,
//   FaMoneyBillWave,
//   FaRegCommentDots,
//   FaCheckCircle,
//   FaSave,
// } from "react-icons/fa";

// const UgaaiUpload = () => {
//   const [formData, setFormData] = useState({
//     date: "",
//     name: "",
//     fname: "",
//     amount: "",
//     remark: "",
//     status: "active",
//   });

//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   // =========================
//   // INPUT CHANGE
//   // =========================
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // =========================
//   // FORM SUBMIT
//   // =========================
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setLoading(true);
//     setMessage("");
//     setError("");

//     try {
//       const token = localStorage.getItem("token");

//       if (!token) {
//         throw new Error(
//           "Login session expire ho gayi hai. Please login again."
//         );
//       }

//       const response = await axios.post(
//         "https://ambedkar-backend.onrender.com/api/ugaai",
//         {
//           date: formData.date,
//           name: formData.name.trim(),
//           fname: formData.fname.trim(),
//           amount: Number(formData.amount) || 0,
//           remark: formData.remark.trim(),
//           status: formData.status,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       console.log("Ugaai Upload Response:", response.data);

//       const successMessage =
//         response.data?.message || "डेटा सफलतापूर्वक सेव हो गया 🎉";

//       setMessage(successMessage);
//       toast.success(successMessage);

//       setFormData({
//         date: "",
//         name: "",
//         fname: "",
//         amount: "",
//         remark: "",
//         status: "active",
//       });
//     } catch (err) {
//       console.error(
//         "Ugaai Upload Error:",
//         err.response?.data || err.message
//       );

//       const errorMessage =
//         err.response?.data?.message ||
//         err.message ||
//         "डेटा सेव नहीं हुआ";

//       setError(errorMessage);
//       toast.error(errorMessage);

//       if (
//         err.response?.status === 401 &&
//         (errorMessage.includes("token") ||
//           errorMessage.includes("authorized"))
//       ) {
//         localStorage.removeItem("token");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container fluid className="py-3 py-md-4 bg-light min-vh-100">
//       <Container>

//         {/* ================= HEADER ================= */}
//         <Card className="border-0 shadow-sm mb-4 overflow-hidden">
//           <Card.Body className="p-3 p-md-4">
//             <div className="d-flex align-items-center gap-3">

//               <div
//                 className="bg-primary text-white rounded-circle d-flex
//                 align-items-center justify-content-center flex-shrink-0"
//                 style={{
//                   width: "55px",
//                   height: "55px",
//                 }}
//               >
//                 <FaUserPlus size={23} />
//               </div>

//               <div>
//                 <h3 className="fw-bold mb-1">
//                   उगाही सदस्य जोड़ें
//                 </h3>

//                 <p className="text-muted mb-0 small">
//                   सदस्य की उगाही एवं व्यक्तिगत जानकारी दर्ज करें
//                 </p>
//               </div>

//             </div>
//           </Card.Body>
//         </Card>

//         {/* ================= ALERTS ================= */}
//         {message && (
//           <Alert
//             variant="success"
//             dismissible
//             onClose={() => setMessage("")}
//             className="shadow-sm"
//           >
//             <FaCheckCircle className="me-2" />
//             {message}
//           </Alert>
//         )}

//         {error && (
//           <Alert
//             variant="danger"
//             dismissible
//             onClose={() => setError("")}
//             className="shadow-sm"
//           >
//             {error}
//           </Alert>
//         )}

//         {/* ================= FORM CARD ================= */}
//         <Card className="border-0 shadow-sm">
//           <Card.Body className="p-3 p-md-4">

//             <Form onSubmit={handleSubmit}>

//               <Row className="g-3">

//                 {/* DATE */}
//                 <Col md={6}>
//                   <Form.Group>
//                     <Form.Label className="fw-semibold">
//                       <FaCalendarAlt className="text-primary me-2" />
//                       दिनांक
//                     </Form.Label>

//                     <Form.Control
//                       type="date"
//                       name="date"
//                       value={formData.date}
//                       onChange={handleChange}
//                       disabled={loading}
//                       className="py-2"
//                     />
//                   </Form.Group>
//                 </Col>

//                 {/* NAME */}
//                 <Col md={6}>
//                   <Form.Group>
//                     <Form.Label className="fw-semibold">
//                       <FaUser className="text-primary me-2" />
//                       सदस्य का नाम
//                     </Form.Label>

//                     <Form.Control
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       placeholder="सदस्य का नाम दर्ज करें"
//                       required
//                       disabled={loading}
//                       className="py-2"
//                     />
//                   </Form.Group>
//                 </Col>

//                 {/* FATHER NAME */}
//                 <Col md={6}>
//                   <Form.Group>
//                     <Form.Label className="fw-semibold">
//                       <FaUser className="text-primary me-2" />
//                       पिता का नाम
//                     </Form.Label>

//                     <Form.Control
//                       type="text"
//                       name="fname"
//                       value={formData.fname}
//                       onChange={handleChange}
//                       placeholder="पिता का नाम दर्ज करें"
//                       disabled={loading}
//                       className="py-2"
//                     />
//                   </Form.Group>
//                 </Col>

//                 {/* AMOUNT */}
//                 <Col md={6}>
//                   <Form.Group>
//                     <Form.Label className="fw-semibold">
//                       <FaMoneyBillWave className="text-success me-2" />
//                       जमा राशि
//                     </Form.Label>

//                     <div className="input-group">
//                       <span className="input-group-text fw-bold">
//                         ₹
//                       </span>

//                       <Form.Control
//                         type="number"
//                         name="amount"
//                         value={formData.amount}
//                         onChange={handleChange}
//                         placeholder="जमा राशि"
//                         min="0"
//                         disabled={loading}
//                         className="py-2"
//                       />
//                     </div>
//                   </Form.Group>
//                 </Col>

//                 {/* REMARK */}
//                 <Col md={8}>
//                   <Form.Group>
//                     <Form.Label className="fw-semibold">
//                       <FaRegCommentDots className="text-primary me-2" />
//                       रिमार्क
//                     </Form.Label>

//                     <Form.Control
//                       as="textarea"
//                       rows={3}
//                       name="remark"
//                       value={formData.remark}
//                       onChange={handleChange}
//                       placeholder="कोई टिप्पणी या जानकारी..."
//                       disabled={loading}
//                     />
//                   </Form.Group>
//                 </Col>

//                 {/* STATUS */}
//                 <Col md={4}>
//                   <Form.Group>
//                     <Form.Label className="fw-semibold">
//                       <FaCheckCircle className="text-success me-2" />
//                       स्थिति
//                     </Form.Label>

//                     <Form.Select
//                       name="status"
//                       value={formData.status}
//                       onChange={handleChange}
//                       disabled={loading}
//                       className="py-2"
//                     >
//                       <option value="active">
//                         सक्रिय
//                       </option>

//                       <option value="deceased">
//                         निष्क्रिय
//                       </option>
//                     </Form.Select>
//                   </Form.Group>
//                 </Col>

//                 {/* BUTTON */}
//                 <Col xs={12} className="mt-4">
//                   <Button
//                     type="submit"
//                     variant="primary"
//                     disabled={loading}
//                     className="w-100 py-2 fw-semibold shadow-sm"
//                   >
//                     {loading ? (
//                       <>
//                         <Spinner
//                           animation="border"
//                           size="sm"
//                           className="me-2"
//                         />
//                         डेटा सेव हो रहा है...
//                       </>
//                     ) : (
//                       <>
//                         <FaSave className="me-2" />
//                         डेटा सेव करें
//                       </>
//                     )}
//                   </Button>
//                 </Col>

//               </Row>
//             </Form>
//           </Card.Body>
//         </Card>

//         {/* FOOTER INFO */}
//         <div className="text-center text-muted small mt-3">
//           सभी आवश्यक जानकारी सही तरीके से दर्ज करें।
//         </div>

//       </Container>
//     </Container>
//   );
// };

// export default UgaaiUpload;





import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Card,
  Form,
  Button,
  Row,
  Col,
  Alert,
} from "react-bootstrap";
import { toast } from "react-toastify";

const API_URL = "https://ambedkar-backend.onrender.com/api/ugaai";

const UgaaiUpload = () => {
  const currentYear = new Date().getFullYear();

  const [formData, setFormData] = useState({
    date: "",
    name: "",
    fname: "",
    amount: "",
    remark: "",
    status: "active",
    year: currentYear,
  });

  const [loading, setLoading] = useState(false);

  // Year options
  const years = [];

  for (let year = currentYear - 5; year <= currentYear + 5; year++) {
    years.push(year);
  }

  // Input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      toast.error("कृपया नाम दर्ज करें");
      return;
    }

    if (!formData.year) {
      toast.error("कृपया वर्ष चुनें");
      return;
    }

    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      if (!token) {
        toast.error("Admin login required");
        return;
      }

      const data = {
        date: formData.date,
        name: formData.name.trim(),
        fname: formData.fname.trim(),
        amount:
          formData.amount === "" ? 0 : Number(formData.amount),
        remark: formData.remark.trim(),
        status: formData.status,
        year: Number(formData.year),
      };

      const response = await axios.post(API_URL, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.data?.success) {
        toast.success(`${formData.year} की Ugaai list में record जोड़ दिया गया`);

        // Form reset
        setFormData({
          date: "",
          name: "",
          fname: "",
          amount: "",
          remark: "",
          status: "active",
          year: Number(formData.year),
        });
      } else {
        toast.success("Record successfully added");
      }
    } catch (error) {
      console.error("Ugaai Add Error:", error);

      toast.error(
        error.response?.data?.message ||
          "Record add नहीं हो सका"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="py-4">
      <Card className="shadow-sm border-0">
        <Card.Body>
          <h3 className="mb-4 text-center">
            Ugaai List में नया Record जोड़ें
          </h3>

          <Form onSubmit={handleSubmit}>
            <Row>
              {/* Year */}
              <Col md={6} className="mb-3">
                <Form.Label>
                  वर्ष <span className="text-danger">*</span>
                </Form.Label>

                <Form.Select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                >
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </Form.Select>

                <Form.Text className="text-muted">
                  जिस वर्ष की list में record जोड़ना है, वह वर्ष चुनें।
                </Form.Text>
              </Col>

              {/* Date */}
              <Col md={6} className="mb-3">
                <Form.Label>दिनांक</Form.Label>

                <Form.Control
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />
              </Col>

              {/* Name */}
              <Col md={6} className="mb-3">
                <Form.Label>
                  नाम <span className="text-danger">*</span>
                </Form.Label>

                <Form.Control
                  type="text"
                  name="name"
                  placeholder="नाम दर्ज करें"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Col>

              {/* Father Name */}
              <Col md={6} className="mb-3">
                <Form.Label>पिता का नाम</Form.Label>

                <Form.Control
                  type="text"
                  name="fname"
                  placeholder="पिता का नाम"
                  value={formData.fname}
                  onChange={handleChange}
                />
              </Col>

              {/* Amount */}
              <Col md={6} className="mb-3">
                <Form.Label>राशि</Form.Label>

                <Form.Control
                  type="number"
                  min="0"
                  placeholder="राशि दर्ज करें"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                />
              </Col>

              {/* Status */}
              <Col md={6} className="mb-3">
                <Form.Label>स्थिति</Form.Label>

                <Form.Select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="active">Active</option>
                  <option value="deceased">Deceased</option>
                </Form.Select>
              </Col>

              {/* Remark */}
              <Col md={12} className="mb-3">
                <Form.Label>टिप्पणी</Form.Label>

                <Form.Control
                  as="textarea"
                  rows={3}
                  name="remark"
                  placeholder="कोई टिप्पणी..."
                  value={formData.remark}
                  onChange={handleChange}
                />
              </Col>

              {/* Selected Year Alert */}
              <Col md={12}>
                <Alert variant="info">
                  <strong>{formData.year}</strong> की Ugaai list में
                  यह record save होगा।
                </Alert>
              </Col>

              {/* Submit */}
              <Col md={12}>
                <Button
                  type="submit"
                  variant="primary"
                  disabled={loading}
                  className="w-100"
                >
                  {loading
                    ? "Saving..."
                    : `${formData.year} की List में Record जोड़ें`}
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UgaaiUpload;
