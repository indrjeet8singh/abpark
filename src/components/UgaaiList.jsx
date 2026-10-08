


// import React, { useEffect, useRef, useState } from "react";
// import axios from "axios";
// import {
//   Container,
//   Card,
//   Table,
//   Form,
//   Button,
//   Row,
//   Col,
//   Badge,
//   Modal,
//   Spinner,
//   Alert,
// } from "react-bootstrap";
// import { toast } from "react-toastify";
// import { FaEdit, FaTrash, FaPrint, FaSync } from "react-icons/fa";
// import { useReactToPrint } from "react-to-print";

// const API_URL = "https://ambedkar-backend.onrender.com/api/ugaai";

// const UgaaiList = () => {
//   const currentYear = new Date().getFullYear();

//   const printRef = useRef();

//   const [ugaaiData, setUgaaiData] = useState([]);
//   const [availableYears, setAvailableYears] = useState([]);

//   const [selectedYear, setSelectedYear] = useState(currentYear);

//   const [loading, setLoading] = useState(false);
//   const [yearsLoading, setYearsLoading] = useState(false);

//   const [showEditModal, setShowEditModal] = useState(false);

//   const [editData, setEditData] = useState({
//     _id: "",
//     date: "",
//     name: "",
//     fname: "",
//     amount: "",
//     remark: "",
//     status: "active",
//     year: currentYear,
//   });

//   // ==========================================
//   // GET YEARS
//   // ==========================================

//   const fetchYears = async () => {
//     try {
//       setYearsLoading(true);

//       const response = await axios.get(`${API_URL}/years`);

//       const years = response.data?.data || [];

//       setAvailableYears(years);

//       // अगर current year मौजूद है
//       if (years.includes(currentYear)) {
//         setSelectedYear(currentYear);
//       } else if (years.length > 0) {
//         setSelectedYear(years[0]);
//       }
//     } catch (error) {
//       console.error("Fetch Years Error:", error);

//       toast.error(
//         error.response?.data?.message ||
//           "Years load नहीं हो सके"
//       );
//     } finally {
//       setYearsLoading(false);
//     }
//   };

//   // ==========================================
//   // GET UGAI LIST BY YEAR
//   // ==========================================

//   const fetchUgaai = async (year = selectedYear) => {
//     try {
//       setLoading(true);

//       const response = await axios.get(
//         `${API_URL}?year=${Number(year)}`
//       );

//       setUgaaiData(response.data?.data || []);
//     } catch (error) {
//       console.error("Fetch Ugaai Error:", error);

//       setUgaaiData([]);

//       toast.error(
//         error.response?.data?.message ||
//           "Ugaai list load नहीं हो सकी"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ==========================================
//   // INITIAL LOAD
//   // ==========================================

//   useEffect(() => {
//     fetchYears();
//   }, []);

//   // ==========================================
//   // YEAR CHANGE
//   // ==========================================

//   useEffect(() => {
//     fetchUgaai(selectedYear);
//   }, [selectedYear]);

//   // ==========================================
//   // REFRESH
//   // ==========================================

//   const handleRefresh = async () => {
//     await fetchYears();
//     await fetchUgaai(selectedYear);
//   };

//   // ==========================================
//   // EDIT
//   // ==========================================

//   const handleEdit = (item) => {
//     setEditData({
//       _id: item._id,
//       date: item.date || "",
//       name: item.name || "",
//       fname: item.fname || "",
//       amount: item.amount ?? "",
//       remark: item.remark || "",
//       status: item.status || "active",
//       year: item.year || selectedYear,
//     });

//     setShowEditModal(true);
//   };

//   // ==========================================
//   // EDIT INPUT CHANGE
//   // ==========================================

//   const handleEditChange = (e) => {
//     const { name, value } = e.target;

//     setEditData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // ==========================================
//   // UPDATE
//   // ==========================================

//   const handleUpdate = async () => {
//     if (!editData.name.trim()) {
//       toast.error("नाम जरूरी है");
//       return;
//     }

//     try {
//       const token = localStorage.getItem("token");

//       if (!token) {
//         toast.error("Admin login required");
//         return;
//       }

//       const updateBody = {
//         date: editData.date,
//         name: editData.name.trim(),
//         fname: editData.fname.trim(),
//         amount:
//           editData.amount === ""
//             ? 0
//             : Number(editData.amount),
//         remark: editData.remark.trim(),
//         status: editData.status,
//         year: Number(editData.year),
//       };

//       await axios.put(
//         `${API_URL}/${editData._id}`,
//         updateBody,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       toast.success("Record successfully updated");

//       setShowEditModal(false);

//       await fetchYears();
//       await fetchUgaai(selectedYear);
//     } catch (error) {
//       console.error("Update Error:", error);

//       toast.error(
//         error.response?.data?.message ||
//           "Record update नहीं हो सका"
//       );
//     }
//   };

//   // ==========================================
//   // DELETE
//   // ==========================================

//   const handleDelete = async (id) => {
//     const confirmDelete = window.confirm(
//       "क्या आप इस record को delete करना चाहते हैं?"
//     );

//     if (!confirmDelete) return;

//     try {
//       const token = localStorage.getItem("token");

//       if (!token) {
//         toast.error("Admin login required");
//         return;
//       }

//       await axios.delete(`${API_URL}/${id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       toast.success("Record deleted successfully");

//       await fetchYears();
//       await fetchUgaai(selectedYear);
//     } catch (error) {
//       console.error("Delete Error:", error);

//       toast.error(
//         error.response?.data?.message ||
//           "Record delete नहीं हो सका"
//       );
//     }
//   };

//   // ==========================================
//   // PRINT
//   // ==========================================

//   const handlePrint = useReactToPrint({
//     contentRef: printRef,
//     documentTitle: `Ugaai_List_${selectedYear}`,
//   });

//   // ==========================================
//   // TOTAL
//   // ==========================================

//   const totalAmount = ugaaiData.reduce(
//     (total, item) => total + Number(item.amount || 0),
//     0
//   );

//   const activeCount = ugaaiData.filter(
//     (item) => item.status !== "deceased"
//   ).length;

//   const deceasedCount = ugaaiData.filter(
//     (item) => item.status === "deceased"
//   ).length;

//   // ==========================================
//   // AMOUNT CLASS
//   // ==========================================

//   const getAmountClass = (amount) => {
//     const value = Number(amount || 0);

//     if (value === 0) {
//       return "text-danger fw-bold";
//     }

//     if (value < 200) {
//       return "text-warning fw-bold";
//     }

//     if (value > 200) {
//       return "text-success fw-bold";
//     }

//     return "fw-bold";
//   };

//   return (
//     <>
//       <Container fluid className="py-3">
//         {/* ================================= */}
//         {/* HEADER */}
//         {/* ================================= */}

//         <Card className="shadow-sm border-0 mb-3">
//           <Card.Body>
//             <Row className="align-items-center g-3">
//               <Col lg={4} md={4}>
//                 <h3 className="mb-0">
//                   Ugaai List
//                 </h3>
//               </Col>

//               {/* YEAR */}
//               <Col lg={4} md={4}>
//                 <Form.Label className="fw-bold mb-1">
//                   वर्ष चुनें
//                 </Form.Label>

//                 <Form.Select
//                   value={selectedYear}
//                   onChange={(e) =>
//                     setSelectedYear(
//                       Number(e.target.value)
//                     )
//                   }
//                   disabled={yearsLoading}
//                 >
//                   {/* Current year भी दिखे */}
//                   {!availableYears.includes(currentYear) && (
//                     <option value={currentYear}>
//                       {currentYear}
//                     </option>
//                   )}

//                   {availableYears.map((year) => (
//                     <option key={year} value={year}>
//                       {year}
//                     </option>
//                   ))}
//                 </Form.Select>
//               </Col>

//               {/* BUTTONS */}
//               <Col
//                 lg={4}
//                 md={4}
//                 className="d-flex gap-2 justify-content-md-end"
//               >
//                 <Button
//                   variant="outline-primary"
//                   onClick={handleRefresh}
//                   disabled={loading}
//                 >
//                   <FaSync className="me-1" />

//                   Refresh
//                 </Button>

//                 <Button
//                   variant="dark"
//                   onClick={handlePrint}
//                   disabled={ugaaiData.length === 0}
//                 >
//                   <FaPrint className="me-1" />

//                   Print
//                 </Button>
//               </Col>
//             </Row>
//           </Card.Body>
//         </Card>

//         {/* ================================= */}
//         {/* SELECTED YEAR */}
//         {/* ================================= */}

//         <Alert variant="primary">
//           <strong>{selectedYear}</strong> की Ugaai List
//         </Alert>

//         {/* ================================= */}
//         {/* SUMMARY */}
//         {/* ================================= */}

//         <Row className="g-3 mb-3">
//           <Col xs={6} md={3}>
//             <Card className="shadow-sm border-0 h-100">
//               <Card.Body>
//                 <small className="text-muted">
//                   कुल Record
//                 </small>

//                 <h4 className="mb-0">
//                   {ugaaiData.length}
//                 </h4>
//               </Card.Body>
//             </Card>
//           </Col>

//           <Col xs={6} md={3}>
//             <Card className="shadow-sm border-0 h-100">
//               <Card.Body>
//                 <small className="text-muted">
//                   Active
//                 </small>

//                 <h4 className="text-success mb-0">
//                   {activeCount}
//                 </h4>
//               </Card.Body>
//             </Card>
//           </Col>

//           <Col xs={6} md={3}>
//             <Card className="shadow-sm border-0 h-100">
//               <Card.Body>
//                 <small className="text-muted">
//                   Deceased
//                 </small>

//                 <h4 className="text-secondary mb-0">
//                   {deceasedCount}
//                 </h4>
//               </Card.Body>
//             </Card>
//           </Col>

//           <Col xs={6} md={3}>
//             <Card className="shadow-sm border-0 h-100">
//               <Card.Body>
//                 <small className="text-muted">
//                   कुल राशि
//                 </small>

//                 <h4 className="text-primary mb-0">
//                   ₹ {totalAmount.toLocaleString("en-IN")}
//                 </h4>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>

//         {/* ================================= */}
//         {/* TABLE / PRINT AREA */}
//         {/* ================================= */}

//         <Card className="shadow-sm border-0">
//           <Card.Body>
//             <div ref={printRef}>
//               {/* PRINT HEADER */}

//               <div className="print-header text-center mb-3">
//                 <img
//                   src="https://i.ibb.co/84RFXYmB/logo.png"
//                   alt="Ambedkar Park"
//                   style={{
//                     width: "70px",
//                     height: "70px",
//                     objectFit: "contain",
//                   }}
//                 />

//                 <h3 className="mt-2 mb-1">
//                   अम्बेडकर पार्क गंगाचौली
//                 </h3>

//                 <h5>
//                   Ugaai List - {selectedYear}
//                 </h5>

//                 <p className="mb-2">
//                   कुल Record: {ugaaiData.length} |
//                   कुल राशि: ₹{" "}
//                   {totalAmount.toLocaleString("en-IN")}
//                 </p>

//                 <div className="ashok-chakra">
//                   ☸
//                 </div>
//               </div>

//               {/* LOADING */}

//               {loading ? (
//                 <div className="text-center py-5">
//                   <Spinner animation="border" />

//                   <p className="mt-2">
//                     {selectedYear} की list load हो रही है...
//                   </p>
//                 </div>
//               ) : ugaaiData.length === 0 ? (
//                 <div className="text-center py-5">
//                   <h5>
//                     {selectedYear} की Ugaai List में
//                     कोई record नहीं है।
//                   </h5>

//                   <p className="text-muted">
//                     आप इस वर्ष के लिए नया record
//                     Upload कर सकते हैं।
//                   </p>
//                 </div>
//               ) : (
//                 <div className="table-responsive">
//                   <Table
//                     bordered
//                     hover
//                     striped
//                     className="align-middle mb-0"
//                   >
//                     <thead className="table-dark">
//                       <tr>
//                         <th>#</th>
//                         <th>दिनांक</th>
//                         <th>नाम</th>
//                         <th>पिता का नाम</th>
//                         <th>राशि</th>
//                         <th>टिप्पणी</th>
//                         <th>स्थिति</th>
//                         <th className="no-print">
//                           Action
//                         </th>
//                       </tr>
//                     </thead>

//                     <tbody>
//                       {ugaaiData.map((item, index) => {
//                         const isDeceased =
//                           item.status === "deceased";

//                         return (
//                           <tr
//                             key={item._id}
//                             className={
//                               isDeceased
//                                 ? "table-secondary deceased-row"
//                                 : ""
//                             }
//                           >
//                             <td>
//                               {index + 1}
//                             </td>

//                             <td>
//                               {item.date || "-"}
//                             </td>

//                             <td>
//                               <strong>
//                                 {item.name}
//                               </strong>
//                             </td>

//                             <td>
//                               {item.fname || "-"}
//                             </td>

//                             <td
//                               className={getAmountClass(
//                                 item.amount
//                               )}
//                             >
//                               ₹{" "}
//                               {Number(
//                                 item.amount || 0
//                               ).toLocaleString("en-IN")}
//                             </td>

//                             <td>
//                               {item.remark || "-"}
//                             </td>

//                             <td>
//                               {isDeceased ? (
//                                 <Badge bg="secondary">
//                                   Deceased
//                                 </Badge>
//                               ) : (
//                                 <Badge bg="success">
//                                   Active
//                                 </Badge>
//                               )}
//                             </td>

//                             <td className="no-print">
//                               <div className="d-flex gap-2">
//                                 <Button
//                                   size="sm"
//                                   variant="outline-primary"
//                                   onClick={() =>
//                                     handleEdit(item)
//                                   }
//                                 >
//                                   <FaEdit />
//                                 </Button>

//                                 <Button
//                                   size="sm"
//                                   variant="outline-danger"
//                                   onClick={() =>
//                                     handleDelete(
//                                       item._id
//                                     )
//                                   }
//                                 >
//                                   <FaTrash />
//                                 </Button>
//                               </div>
//                             </td>
//                           </tr>
//                         );
//                       })}
//                     </tbody>

//                     {/* TOTAL */}

//                     <tfoot>
//                       <tr className="table-light fw-bold">
//                         <td
//                           colSpan="4"
//                           className="text-end"
//                         >
//                           कुल राशि
//                         </td>

//                         <td>
//                           ₹{" "}
//                           {totalAmount.toLocaleString(
//                             "en-IN"
//                           )}
//                         </td>

//                         <td colSpan="3"></td>
//                       </tr>
//                     </tfoot>
//                   </Table>
//                 </div>
//               )}
//             </div>
//           </Card.Body>
//         </Card>
//       </Container>

//       {/* ================================= */}
//       {/* EDIT MODAL */}
//       {/* ================================= */}

//       <Modal
//         show={showEditModal}
//         onHide={() => setShowEditModal(false)}
//         centered
//         size="lg"
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>
//             Ugaai Record Edit करें
//           </Modal.Title>
//         </Modal.Header>

//         <Modal.Body>
//           <Row>
//             {/* YEAR */}

//             <Col md={6} className="mb-3">
//               <Form.Label>
//                 वर्ष
//               </Form.Label>

//               <Form.Select
//                 name="year"
//                 value={editData.year}
//                 onChange={handleEditChange}
//               >
//                 {Array.from(
//                   {
//                     length: 11,
//                   },
//                   (_, index) =>
//                     currentYear - 5 + index
//                 ).map((year) => (
//                   <option
//                     key={year}
//                     value={year}
//                   >
//                     {year}
//                   </option>
//                 ))}
//               </Form.Select>
//             </Col>

//             {/* DATE */}

//             <Col md={6} className="mb-3">
//               <Form.Label>
//                 दिनांक
//               </Form.Label>

//               <Form.Control
//                 type="date"
//                 name="date"
//                 value={editData.date}
//                 onChange={handleEditChange}
//               />
//             </Col>

//             {/* NAME */}

//             <Col md={6} className="mb-3">
//               <Form.Label>
//                 नाम
//               </Form.Label>

//               <Form.Control
//                 type="text"
//                 name="name"
//                 value={editData.name}
//                 onChange={handleEditChange}
//               />
//             </Col>

//             {/* FATHER NAME */}

//             <Col md={6} className="mb-3">
//               <Form.Label>
//                 पिता का नाम
//               </Form.Label>

//               <Form.Control
//                 type="text"
//                 name="fname"
//                 value={editData.fname}
//                 onChange={handleEditChange}
//               />
//             </Col>

//             {/* AMOUNT */}

//             <Col md={6} className="mb-3">
//               <Form.Label>
//                 राशि
//               </Form.Label>

//               <Form.Control
//                 type="number"
//                 min="0"
//                 name="amount"
//                 value={editData.amount}
//                 onChange={handleEditChange}
//               />
//             </Col>

//             {/* STATUS */}

//             <Col md={6} className="mb-3">
//               <Form.Label>
//                 स्थिति
//               </Form.Label>

//               <Form.Select
//                 name="status"
//                 value={editData.status}
//                 onChange={handleEditChange}
//               >
//                 <option value="active">
//                   Active
//                 </option>

//                 <option value="deceased">
//                   Deceased
//                 </option>
//               </Form.Select>
//             </Col>

//             {/* REMARK */}

//             <Col md={12} className="mb-3">
//               <Form.Label>
//                 टिप्पणी
//               </Form.Label>

//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 name="remark"
//                 value={editData.remark}
//                 onChange={handleEditChange}
//               />
//             </Col>
//           </Row>
//         </Modal.Body>

//         <Modal.Footer>
//           <Button
//             variant="secondary"
//             onClick={() =>
//               setShowEditModal(false)
//             }
//           >
//             Cancel
//           </Button>

//           <Button
//             variant="primary"
//             onClick={handleUpdate}
//           >
//             Update
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       {/* ================================= */}
//       {/* PRINT CSS */}
//       {/* ================================= */}

//       <style>
//         {`
//           .print-header {
//             display: none;
//           }

//           .deceased-row {
//             opacity: 0.75;
//           }

//           @media print {

//             body {
//               background: white !important;
//             }

//             .no-print {
//               display: none !important;
//             }

//             .print-header {
//               display: block !important;
//             }

//             .card {
//               border: none !important;
//               box-shadow: none !important;
//             }

//             table {
//               width: 100% !important;
//               font-size: 12px !important;
//             }

//             .table-responsive {
//               overflow: visible !important;
//             }

//             @page {
//               size: A4 portrait;
//               margin: 10mm;
//             }

//             .ashok-chakra {
//               font-size: 35px;
//               margin-top: 5px;
//             }

//             .deceased-row {
//               background: #eeeeee !important;
//               -webkit-print-color-adjust: exact;
//               print-color-adjust: exact;
//             }
//           }

//           @media (max-width: 767px) {

//             .container-fluid {
//               padding-left: 8px !important;
//               padding-right: 8px !important;
//             }

//             h3 {
//               font-size: 22px;
//             }

//             .table {
//               font-size: 13px;
//               white-space: nowrap;
//             }

//             .table td,
//             .table th {
//               padding: 7px;
//             }
//           }
//         `}
//       </style>
//     </>
//   );
// };

// export default UgaaiList;


import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

import {
  Container,
  Card,
  Table,
  Form,
  Button,
  Row,
  Col,
  Badge,
  Modal,
  Spinner,
  Alert,
} from "react-bootstrap";

import { toast } from "react-toastify";
import { FaEdit, FaTrash, FaPrint, FaSync } from "react-icons/fa";
import { useReactToPrint } from "react-to-print";

const API_URL = "https://ambedkar-backend.onrender.com/api/ugaai";

const UgaaiList = () => {
  const currentYear = new Date().getFullYear();

  const printRef = useRef();

  const [ugaaiData, setUgaaiData] = useState([]);
  const [availableYears, setAvailableYears] = useState([]);

  const [selectedYear, setSelectedYear] = useState(currentYear);

  const [loading, setLoading] = useState(false);
  const [yearsLoading, setYearsLoading] = useState(false);

  const [showEditModal, setShowEditModal] = useState(false);

  const [editData, setEditData] = useState({
    _id: "",
    date: "",
    name: "",
    fname: "",
    amount: "",
    remark: "",
    status: "active",
    year: currentYear,
  });

  // ==========================================
  // GET YEARS
  // ==========================================

  const fetchYears = async () => {
    try {
      setYearsLoading(true);

      const response = await axios.get(`${API_URL}/years`);

      const years = response.data?.data || [];

      setAvailableYears(years);

      // अगर current year मौजूद है
      if (years.includes(currentYear)) {
        setSelectedYear(currentYear);
      } else if (years.length > 0) {
        setSelectedYear(years[0]);
      }
    } catch (error) {
      console.error("Fetch Years Error:", error);

      toast.error(
        error.response?.data?.message || "Years load नहीं हो सके"
      );
    } finally {
      setYearsLoading(false);
    }
  };

  // ==========================================
  // GET UGAI LIST BY YEAR
  // ==========================================

  const fetchUgaai = async (year = selectedYear) => {
    try {
      setLoading(true);

      const response = await axios.get(
        `${API_URL}?year=${Number(year)}`
      );

      setUgaaiData(response.data?.data || []);
    } catch (error) {
      console.error("Fetch Ugaai Error:", error);

      setUgaaiData([]);

      toast.error(
        error.response?.data?.message ||
          "Ugaai list load नहीं हो सकी"
      );
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // INITIAL LOAD
  // ==========================================

  useEffect(() => {
    fetchYears();
  }, []);

  // ==========================================
  // YEAR CHANGE
  // ==========================================

  useEffect(() => {
    fetchUgaai(selectedYear);
  }, [selectedYear]);

  // ==========================================
  // REFRESH
  // ==========================================

  const handleRefresh = async () => {
    await fetchYears();
    await fetchUgaai(selectedYear);
  };

  // ==========================================
  // EDIT
  // ==========================================

  const handleEdit = (item) => {
    setEditData({
      _id: item._id,
      date: item.date || "",
      name: item.name || "",
      fname: item.fname || "",
      amount: item.amount ?? "",
      remark: item.remark || "",
      status: item.status || "active",
      year: item.year || selectedYear,
    });

    setShowEditModal(true);
  };

  // ==========================================
  // EDIT INPUT CHANGE
  // ==========================================

  const handleEditChange = (e) => {
    const { name, value } = e.target;

    setEditData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ==========================================
  // UPDATE
  // ==========================================

  const handleUpdate = async () => {
    if (!editData.name.trim()) {
      toast.error("नाम जरूरी है");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        toast.error("Admin login required");
        return;
      }

      const updateBody = {
        date: editData.date,
        name: editData.name.trim(),
        fname: editData.fname.trim(),
        amount:
          editData.amount === ""
            ? 0
            : Number(editData.amount),
        remark: editData.remark.trim(),
        status: editData.status,
        year: Number(editData.year),
      };

      await axios.put(
        `${API_URL}/${editData._id}`,
        updateBody,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      toast.success("Record successfully updated");

      setShowEditModal(false);

      await fetchYears();
      await fetchUgaai(selectedYear);
    } catch (error) {
      console.error("Update Error:", error);

      toast.error(
        error.response?.data?.message ||
          "Record update नहीं हो सका"
      );
    }
  };

  // ==========================================
  // DELETE
  // ==========================================

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "क्या आप इस record को delete करना चाहते हैं?"
    );

    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        toast.error("Admin login required");
        return;
      }

      await axios.delete(`${API_URL}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Record deleted successfully");

      await fetchYears();
      await fetchUgaai(selectedYear);
    } catch (error) {
      console.error("Delete Error:", error);

      toast.error(
        error.response?.data?.message ||
          "Record delete नहीं हो सका"
      );
    }
  };

  // ==========================================
  // PRINT
  // ==========================================

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: `Ugaai_List_${selectedYear}`,
  });

  // ==========================================
  // TOTAL
  // ==========================================

  const totalAmount = ugaaiData.reduce(
    (total, item) => total + Number(item.amount || 0),
    0
  );

  const activeCount = ugaaiData.filter(
    (item) => item.status !== "deceased"
  ).length;

  const deceasedCount = ugaaiData.filter(
    (item) => item.status === "deceased"
  ).length;

  // ==========================================
  // AMOUNT CLASS
  // ==========================================

  const getAmountClass = (amount) => {
    const value = Number(amount || 0);

    if (value === 0) {
      return "text-danger fw-bold";
    }

    if (value < 200) {
      return "text-warning fw-bold";
    }

    if (value > 200) {
      return "text-success fw-bold";
    }

    return "fw-bold";
  };

  return (
    <>
      <Container fluid className="py-3">

        {/* ================================= */}
        {/* HEADER */}
        {/* ================================= */}

        <Card className="shadow-sm border-0 mb-3">
          <Card.Body>
            <Row className="align-items-center g-3">

              <Col lg={4} md={4}>
                <h3 className="mb-0">
                  Ugaai List
                </h3>
              </Col>

              {/* YEAR */}
              <Col lg={4} md={4}>
                <Form.Label className="fw-bold mb-1">
                  वर्ष चुनें
                </Form.Label>

                <Form.Select
                  value={selectedYear}
                  onChange={(e) =>
                    setSelectedYear(
                      Number(e.target.value)
                    )
                  }
                  disabled={yearsLoading}
                >
                  {/* Current year भी दिखे */}
                  {!availableYears.includes(currentYear) && (
                    <option value={currentYear}>
                      {currentYear}
                    </option>
                  )}

                  {availableYears.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </Form.Select>
              </Col>

              {/* BUTTONS */}
              <Col
                lg={4}
                md={4}
                className="d-flex gap-2 justify-content-md-end"
              >
                <Button
                  variant="outline-primary"
                  onClick={handleRefresh}
                  disabled={loading}
                >
                  <FaSync className="me-1" />
                  Refresh
                </Button>

                <Button
                  variant="dark"
                  onClick={handlePrint}
                  disabled={ugaaiData.length === 0}
                >
                  <FaPrint className="me-1" />
                  Print
                </Button>
              </Col>

            </Row>
          </Card.Body>
        </Card>

        {/* ================================= */}
        {/* SELECTED YEAR */}
        {/* ================================= */}

        <Alert variant="primary">
          <strong>{selectedYear}</strong> की Ugaai List
        </Alert>

        {/* ================================= */}
        {/* SUMMARY */}
        {/* ================================= */}

        <Row className="g-3 mb-3">

          <Col xs={6} md={3}>
            <Card className="shadow-sm border-0 h-100">
              <Card.Body>
                <small className="text-muted">
                  कुल Record
                </small>

                <h4 className="mb-0">
                  {ugaaiData.length}
                </h4>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={6} md={3}>
            <Card className="shadow-sm border-0 h-100">
              <Card.Body>
                <small className="text-muted">
                  Active
                </small>

                <h4 className="text-success mb-0">
                  {activeCount}
                </h4>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={6} md={3}>
            <Card className="shadow-sm border-0 h-100">
              <Card.Body>
                <small className="text-muted">
                  Deceased
                </small>

                <h4 className="text-secondary mb-0">
                  {deceasedCount}
                </h4>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={6} md={3}>
            <Card className="shadow-sm border-0 h-100">
              <Card.Body>
                <small className="text-muted">
                  कुल राशि
                </small>

                <h4 className="text-primary mb-0">
                  ₹ {totalAmount.toLocaleString("en-IN")}
                </h4>
              </Card.Body>
            </Card>
          </Col>

        </Row>

        {/* ================================= */}
        {/* TABLE / PRINT AREA */}
        {/* ================================= */}

        <Card className="shadow-sm border-0">
          <Card.Body>

            <div ref={printRef} className="print-area">

              {/* ================================= */}
              {/* PRINT WATERMARK */}
              {/* ================================= */}

              <div className="print-watermark">
                <img
                  src="https://i.ibb.co/qLBLDyLT/Parkwater-Mark.png"
                  alt="Ambedkar Park Watermark"
                />
              </div>

              {/* ================================= */}
              {/* PRINT HEADER */}
              {/* ================================= */}

              <div className="print-header text-center mb-3">

                <img
                  src="https://i.ibb.co/qLBLDyLT/Parkwater-Mark.png" 
                  alt="Ambedkar Park" 
                  style={{ 
                    width: "70px", 
                    height: "70px", 
                    objectFit: "contain", 
                  }} 
                /> 
 
                <h3 className="mt-2 mb-1"> 
                  अम्बेडकर पार्क गंगाचौली 
                </h3> 
 
                <h5> 
                  Ugaai List - {selectedYear} 
                </h5> 
 
                <p className="mb-2"> 
                  कुल Record: {ugaaiData.length} | 
                  कुल राशि: ₹{" "} 
                  {totalAmount.toLocaleString("en-IN")} 
                </p> 
 
                <div className="ashok-chakra"> 
                  ☸ 
                </div> 
 
              </div> 
 
              {/* ================================= */} 
              {/* LOADING */} 
              {/* ================================= */} 
 
              {loading ? ( 
                <div className="text-center py-5"> 
                  <Spinner animation="border" /> 
 
                  <p className="mt-2"> 
                    {selectedYear} की list load हो रही है... 
                  </p> 
                </div> 
              ) : ugaaiData.length === 0 ? ( 
 
                <div className="text-center py-5"> 
 
                  <h5> 
                    {selectedYear} की Ugaai List में 
                    कोई record नहीं है। 
                  </h5> 
 
                  <p className="text-muted"> 
                    आप इस वर्ष के लिए नया record 
                    Upload कर सकते हैं। 
                  </p> 
 
                </div> 
 
              ) : ( 
 
                <div className="table-responsive"> 
 
                  <Table 
                    bordered 
                    hover 
                    striped 
                    className="align-middle mb-0" 
                  > 
 
                    <thead className="table-dark"> 
 
                      <tr> 
                        <th>#</th> 
                        <th>दिनांक</th> 
                        <th>नाम</th> 
                        <th>पिता का नाम</th> 
                        <th>राशि</th> 
                        <th>टिप्पणी</th> 
                        <th>स्थिति</th> 
                        <th className="no-print"> 
                          Action 
                        </th> 
                      </tr> 
 
                    </thead> 
 
                    <tbody> 
 
                      {ugaaiData.map((item, index) => { 
 
                        const isDeceased = 
                          item.status === "deceased"; 
 
                        return ( 
 
                          <tr 
                            key={item._id} 
                            className={ 
                              isDeceased 
                                ? "table-secondary deceased-row" 
                                : "" 
                            } 
                          > 
 
                            <td> 
                              {index + 1} 
                            </td> 
 
                            <td> 
                              {item.date || "-"} 
                            </td> 
 
                            <td> 
                              <strong> 
                                {item.name} 
                              </strong> 
                            </td> 
 
                            <td> 
                              {item.fname || "-"} 
                            </td> 
 
                            <td 
                              className={getAmountClass( 
                                item.amount 
                              )} 
                            > 
                              ₹{" "} 
                              {Number( 
                                item.amount || 0 
                              ).toLocaleString("en-IN")} 
                            </td> 
 
                            <td> 
                              {item.remark || "-"} 
                            </td> 
 
                            <td> 
 
                              {isDeceased ? ( 
 
                                <Badge bg="secondary"> 
                                  Deceased 
                                </Badge> 
 
                              ) : ( 
 
                                <Badge bg="success"> 
                                  Active 
                                </Badge> 
 
                              )} 
 
                            </td> 
 
                            <td className="no-print"> 
 
                              <div className="d-flex gap-2"> 
 
                                <Button 
                                  size="sm" 
                                  variant="outline-primary" 
                                  onClick={() => 
                                    handleEdit(item) 
                                  } 
                                > 
                                  <FaEdit /> 
                                </Button> 
 
                                <Button 
                                  size="sm" 
                                  variant="outline-danger" 
                                  onClick={() => 
                                    handleDelete( 
                                      item._id 
                                    ) 
                                  } 
                                > 
                                  <FaTrash /> 
                                </Button> 
 
                              </div> 
 
                            </td> 
 
                          </tr> 
 
                        ); 
                      })} 
 
                    </tbody> 
 
                    {/* TOTAL */} 
 
                    <tfoot> 
 
                      <tr className="table-light fw-bold"> 
 
                        <td 
                          colSpan="4" 
                          className="text-end" 
                        > 
                          कुल राशि 
                        </td> 
 
                        <td> 
                          ₹{" "} 
                          {totalAmount.toLocaleString( 
                            "en-IN" 
                          )} 
                        </td> 
 
                        <td colSpan="3"></td> 
 
                      </tr> 
 
                    </tfoot> 
 
                  </Table> 
 
                </div> 
 
              )} 
 
            </div> 
 
          </Card.Body> 
        </Card> 
 
      </Container> 
 
      {/* ================================= */} 
      {/* EDIT MODAL */} 
      {/* ================================= */} 
 
      <Modal 
        show={showEditModal} 
        onHide={() => setShowEditModal(false)} 
        centered 
        size="lg" 
      > 
 
        <Modal.Header closeButton> 
 
          <Modal.Title> 
            Ugaai Record Edit करें 
          </Modal.Title> 
 
        </Modal.Header> 
 
        <Modal.Body> 
 
          <Row> 
 
            {/* YEAR */} 
 
            <Col md={6} className="mb-3"> 
 
              <Form.Label> 
                वर्ष 
              </Form.Label> 
 
              <Form.Select 
                name="year" 
                value={editData.year} 
                onChange={handleEditChange} 
              > 
 
                {Array.from( 
                  { 
                    length: 11, 
                  }, 
                  (_, index) => 
                    currentYear - 5 + index 
                ).map((year) => ( 
 
                  <option 
                    key={year} 
                    value={year} 
                  > 
                    {year} 
                  </option> 
 
                ))} 
 
              </Form.Select> 
 
            </Col> 
 
            {/* DATE */} 
 
            <Col md={6} className="mb-3"> 
 
              <Form.Label> 
                दिनांक 
              </Form.Label> 
 
              <Form.Control 
                type="date" 
                name="date" 
                value={editData.date} 
                onChange={handleEditChange} 
              /> 
 
            </Col> 
 
            {/* NAME */} 
 
            <Col md={6} className="mb-3"> 
 
              <Form.Label> 
                नाम 
              </Form.Label> 
 
              <Form.Control 
                type="text" 
                name="name" 
                value={editData.name} 
                onChange={handleEditChange} 
              /> 
 
            </Col> 
 
            {/* FATHER NAME */} 
 
            <Col md={6} className="mb-3"> 
 
              <Form.Label> 
                पिता का नाम 
              </Form.Label> 
 
              <Form.Control 
                type="text" 
                name="fname" 
                value={editData.fname} 
                onChange={handleEditChange} 
              /> 
 
            </Col> 
 
            {/* AMOUNT */} 
 
            <Col md={6} className="mb-3"> 
 
              <Form.Label> 
                राशि 
              </Form.Label> 
 
              <Form.Control 
                type="number" 
                min="0" 
                name="amount" 
                value={editData.amount} 
                onChange={handleEditChange} 
              /> 
 
            </Col> 
 
            {/* STATUS */} 
 
            <Col md={6} className="mb-3"> 
 
              <Form.Label> 
                स्थिति 
              </Form.Label> 
 
              <Form.Select 
                name="status" 
                value={editData.status} 
                onChange={handleEditChange} 
              > 
 
                <option value="active"> 
                  Active 
                </option> 
 
                <option value="deceased"> 
                  Deceased 
                </option> 
 
              </Form.Select> 
 
            </Col> 
 
            {/* REMARK */} 
 
            <Col md={12} className="mb-3"> 
 
              <Form.Label> 
                टिप्पणी 
              </Form.Label> 
 
              <Form.Control 
                as="textarea" 
                rows={3} 
                name="remark" 
                value={editData.remark} 
                onChange={handleEditChange} 
              /> 
 
            </Col> 
 
          </Row> 
 
        </Modal.Body> 
 
        <Modal.Footer> 
 
          <Button 
            variant="secondary" 
            onClick={() => 
              setShowEditModal(false) 
            } 
          > 
            Cancel 
          </Button> 
 
          <Button 
            variant="primary" 
            onClick={handleUpdate} 
          > 
            Update 
          </Button> 
 
        </Modal.Footer> 
 
      </Modal> 
 
      {/* ================================= */} 
      {/* PRINT CSS */} 
      {/* ================================= */} 
 
      <style> 
        {` 
 
          /* ========================================== 
             NORMAL SCREEN 
          ========================================== */ 
 
          .print-watermark { 
            display: none; 
          } 
 
          .print-header { 
            display: none; 
          } 
 
          .deceased-row { 
            opacity: 0.75; 
          } 
 
 
          /* ========================================== 
             PRINT 
          ========================================== */ 
 
          @media print { 
 
            body { 
              background: white !important; 
            } 
 
            .no-print { 
              display: none !important; 
            } 
 
            .print-area { 
              position: relative; 
            } 
 
            /* ------------------------------------------ 
               CENTER WATERMARK 
               300px x 300px 
            ------------------------------------------ */ 
 
            .print-watermark { 
              display: flex !important; 
 
              position: fixed; 
 
              top: 50%; 
              left: 50%; 
 
              width: 300px; 
              height: 300px; 
 
              transform: translate( 
                -50%, 
                -50% 
              ); 
 
              justify-content: center; 
              align-items: center; 
 
              z-index: 0; 
 
              pointer-events: none; 
            } 
 
            .print-watermark img { 
              width: 300px !important; 
              height: 300px !important; 
 
              object-fit: contain; 
 
              opacity: 0.10; 
            } 
 
            /* ------------------------------------------ 
               PRINT CONTENT ABOVE WATERMARK 
            ------------------------------------------ */ 
 
            .print-header, 
            .print-area table, 
            .print-area .table-responsive { 
              position: relative; 
              z-index: 1; 
            } 
 
            .print-header { 
              display: block !important; 
            } 
 
            .card { 
              border: none !important; 
              box-shadow: none !important; 
            } 
 
            table { 
              width: 100% !important; 
              font-size: 12px !important; 
            } 
 
            .table-responsive { 
              overflow: visible !important; 
            } 
 
            @page { 
              size: A4 portrait; 
              margin: 10mm; 
            } 
 
            .ashok-chakra { 
              font-size: 35px; 
              margin-top: 5px; 
            } 
 
            .deceased-row { 
              background: #eeeeee !important; 
 
              -webkit-print-color-adjust: exact; 
              print-color-adjust: exact; 
            } 
 
          } 
 
 
          /* ========================================== 
             MOBILE 
          ========================================== */ 
 
          @media (max-width: 767px) { 
 
            .container-fluid { 
              padding-left: 8px !important; 
              padding-right: 8px !important; 
            } 
 
            h3 { 
              font-size: 22px; 
            } 
 
            .table { 
              font-size: 13px; 
              white-space: nowrap; 
            } 
 
            .table td, 
            .table th { 
              padding: 7px; 
            } 
 
          } 
 
        `} 
      </style> 
 
    </> 
  ); 
}; 
 
export default UgaaiList; 
