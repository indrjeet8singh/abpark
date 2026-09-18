


// import React, { useEffect, useRef, useState } from "react";
// import {
//   Container,
//   Table,
//   Button,
//   Spinner,
//   Alert,
//   Modal,
//   Form,
//   Row,
//   Col,
// } from "react-bootstrap";

// import { useReactToPrint } from "react-to-print";
// import { toast } from "react-toastify";

// import {
//   FaEdit,
//   FaTrash,
//   FaPrint,
//   FaSave,
//   FaTimes,
// } from "react-icons/fa";


// const UgaaiList = () => {
//   const printRef = useRef(null);

//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   // ================= EDIT STATES =================
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [editData, setEditData] = useState(null);
//   const [editLoading, setEditLoading] = useState(false);

//   // ================= DELETE STATES =================
//   const [deleteLoading, setDeleteLoading] = useState(false);

//   // =====================================================
//   // AMOUNT COLOR
//   // =====================================================

//   const getAmountClass = (amount) => {
//     const value = Number(amount) || 0;

//     if (value === 0) {
//       return "amount-red";
//     }

//     if (value < 200) {
//       return "amount-yellow";
//     }

//     return "amount-green";
//   };

//   // =====================================================
//   // GET UGAII DATA
//   // =====================================================

//   useEffect(() => {
//     const fetchUgaaiData = async () => {
//       try {
//         setLoading(true);

//         const response = await fetch(
//      "https://ambedkar-backend.onrender.com/api/ugaai"
//         );

//         if (!response.ok) {
//           throw new Error("Data fetch nahi ho paya");
//         }

//         const result = await response.json();

//         console.log("API Response:", result);

//         if (Array.isArray(result)) {
//           setData(result);
//         } else if (Array.isArray(result.data)) {
//           setData(result.data);
//         } else {
//           setData([]);
//         }
//       } catch (error) {
//         console.error(error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUgaaiData();
//   }, []);

//   // =====================================================
//   // TOTAL AMOUNT
//   // =====================================================

//   const totalAmount = data.reduce(
//     (total, item) => total + Number(item.amount || 0),
//     0
//   );

//   // =====================================================
//   // PRINT
//   // =====================================================

//   const handlePrint = useReactToPrint({
//     contentRef: printRef,
//     documentTitle: "Ugaai List",
//   });

//   // =====================================================
//   // OPEN EDIT MODAL
//   // =====================================================

//   const handleEdit = (item) => {
//     setEditData({
//       _id: item._id,
//       date: item.date || "",
//       name: item.name || "",
//       fname: item.fname || "",
//       amount: item.amount ?? "",
//       remark: item.remark || "",
//       status: item.status?.toLowerCase() || "active",
//     });

//     setShowEditModal(true);
//   };

//   // =====================================================
//   // EDIT INPUT CHANGE
//   // =====================================================

//   const handleEditChange = (e) => {
//     const { name, value } = e.target;

//     setEditData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // =====================================================
//   // UPDATE UGAII
//   // =====================================================

//   const handleUpdate = async (e) => {
//     e.preventDefault();

//     if (!editData?._id) {
//       toast.error("Record ID नहीं मिला");
//       return;
//     }

//     try {
//       setEditLoading(true);

//       const token = localStorage.getItem("token");

//       if (!token) {
//         throw new Error(
//           "Login session expire ho gayi hai. Please login again."
//         );
//       }

//       const response = await fetch(
//            `https://ambedkar-backend.onrender.com/api/ugaai/${editData._id}`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify({
//             date: editData.date,
//             name: editData.name.trim(),
//             fname: editData.fname.trim(),
//             amount: Number(editData.amount) || 0,
//             remark: editData.remark.trim(),
//             status: editData.status,
//           }),
//         }
//       );

//       const result = await response.json();

//       if (!response.ok) {
//         throw new Error(
//           result.message || "Data update nahi hua"
//         );
//       }

//       setData((prevData) =>
//         prevData.map((item) =>
//           item._id === editData._id
//             ? {
//                 ...item,
//                 date: editData.date,
//                 name: editData.name,
//                 fname: editData.fname,
//                 amount: Number(editData.amount) || 0,
//                 remark: editData.remark,
//                 status: editData.status,
//               }
//             : item
//         )
//       );

//       toast.success(
//         result.message || "डेटा सफलतापूर्वक अपडेट हो गया"
//       );

//       setShowEditModal(false);
//       setEditData(null);
//     } catch (error) {
//       console.error("Update Error:", error);

//       toast.error(
//         error.message || "डेटा अपडेट नहीं हुआ"
//       );
//     } finally {
//       setEditLoading(false);
//     }
//   };

//   // =====================================================
//   // DELETE UGAII
//   // =====================================================

//   const handleDelete = async (id) => {
//     if (!id) {
//       toast.error("Record ID नहीं मिला");
//       return;
//     }

//     const confirmDelete = window.confirm(
//       "⚠️ क्या आप इस सदस्य का रिकॉर्ड delete करना चाहते हैं?\n\nयह कार्रवाई वापस नहीं की जा सकती।"
//     );

//     if (!confirmDelete) {
//       return;
//     }

//     try {
//       setDeleteLoading(true);

//       const token = localStorage.getItem("token");

//       if (!token) {
//         throw new Error(
//           "Login session expire ho gayi hai. Please login again."
//         );
//       }

//       const response = await fetch(
//         `https://ambedkar-backend.onrender.com/api/ugaai/${id}`,
//         {
//           method: "DELETE",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       const result = await response.json();

//       if (!response.ok) {
//         throw new Error(
//           result.message || "Data delete nahi hua"
//         );
//       }

//       setData((prevData) =>
//         prevData.filter((item) => item._id !== id)
//       );

//       toast.success(
//         result.message || "डेटा सफलतापूर्वक delete हो गया"
//       );
//     } catch (error) {
//       console.error("Delete Error:", error);

//       toast.error(
//         error.message || "डेटा delete नहीं हुआ"
//       );
//     } finally {
//       setDeleteLoading(false);
//     }
//   };

//   // =====================================================
//   // LOADING
//   // =====================================================

//   if (loading) {
//     return (
//       <div className="text-center py-5">
//         <Spinner animation="border" variant="primary" />

//         <p className="mt-3">
//           Data load ho raha hai...
//         </p>
//       </div>
//     );
//   }

//   // =====================================================
//   // ERROR
//   // =====================================================

//   if (error) {
//     return (
//       <Container className="py-5">
//         <Alert variant="danger">
//           {error}
//         </Alert>
//       </Container>
//     );
//   }

//   return (
//     <div className="ugaai-page">

//       {/* ================================================= */}
//       {/* INTERNAL CSS */}
//       {/* ================================================= */}

//       <style>
//         {`

//         .ugaai-page {
//           background: #f8f9fa;
//           min-height: 100vh;
//         }

//         .ugaai-header h2 {
//           font-weight: 700;
//           color: #212529;
//         }

//         .ugaai-header p {
//           color: #6c757d;
//         }

//         /* ================= STATUS ================= */

//         .status-info {
//           display: grid;
//           grid-template-columns: repeat(4, 1fr);
//           gap: 15px;
//         }

//         .status-box {
//           padding: 15px;
//           border-radius: 10px;
//           text-align: center;
//           font-weight: 600;
//           background: white;
//           box-shadow: 0 3px 12px rgba(0,0,0,0.08);
//         }

//         .status-box.green {
//           border-left: 5px solid #198754;
//         }

//         .status-box.yellow {
//           border-left: 5px solid #ffc107;
//         }

//         .status-box.red {
//           border-left: 5px solid #dc3545;
//         }

//         .status-box.gray {
//           border-left: 5px solid #6c757d;
//         }

//         /* ================= TABLE ================= */

//         .ugaai-table {
//           background: white;
//           border-radius: 10px;
//           overflow: hidden;
//           box-shadow: 0 4px 15px rgba(0,0,0,0.08);
//         }

//         .ugaai-table th {
//           white-space: nowrap;
//         }

//         .ugaai-table td {
//           vertical-align: middle;
//         }

//         /* ================= AMOUNT ROW COLORS ================= */

//         .ugaai-table tr.amount-red {
//           border-bottom: 5px solid #dc3545 !important;
//         }

//         .ugaai-table tr.amount-yellow {
//           border-bottom: 5px solid #ffc107 !important;
//         }

//         .ugaai-table tr.amount-green {
//           border-bottom: 5px solid #198754 !important;
//         }

//         /* Amount text */

//         .amount-red td:nth-child(5) {
//           color: #dc3545 !important;
//         }

//         .amount-yellow td:nth-child(5) {
//           color: #d39e00 !important;
//         }

//         .amount-green td:nth-child(5) {
//           color: #198754 !important;
//         }

//         /* ================= DECEASED ================= */

//         .deceased-row {
//           opacity: 0.75;
//           background: #fff5f5 !important;
//         }

//         /* ================= PRINT AREA ================= */

//         .print-area {
//           display: none;
//         }

//         /* ================= MOBILE ================= */

//         @media (max-width: 767px) {

//           .status-info {
//             grid-template-columns: repeat(2, 1fr);
//             gap: 10px;
//           }

//           .status-box {
//             font-size: 14px;
//             padding: 12px 8px;
//           }

//           .ugaai-header h2 {
//             font-size: 22px;
//           }

//           .ugaai-table {
//             font-size: 13px;
//           }

//         }

//         @media (max-width: 480px) {

//           .status-info {
//             grid-template-columns: 1fr 1fr;
//           }

//           .status-box {
//             font-size: 12px;
//           }

//         }

//         /* ================= PRINT ================= */

//         @media print {

//           @page {
//             size: A4;
//             margin: 10mm;
//           }

//           html,
//           body {
//             background: white !important;
//             margin: 0 !important;
//             padding: 0 !important;
//           }

//           body {
//             -webkit-print-color-adjust: exact !important;
//             print-color-adjust: exact !important;
//           }

//           .ugaai-page {
//             background: white !important;
//           }

//           .print-hide {
//             display: none !important;
//           }

//           .print-area {
//             display: block !important;

//             /*
//               IMPORTANT:
//               Watermark पूरे print area पर रहेगा।
//             */
//             position: relative;
//             width: 100%;
//             min-height: 100%;
//             overflow: hidden;
//           }

//           .print-content {
//             width: 100%;
//             padding: 10px;

//             /*
//               Content को watermark से ऊपर रखने के लिए
//             */
//             position: relative;
//             z-index: 2;
//           }

//           /* ==========================================
//              FULL PAGE WATERMARK
//              ========================================== */

//           .print-area::before {
//             content:
//               "अम्बेडकर पार्क गंगाचोली";

//             position: fixed;

//             top: 50%;
//             left: 50%;

//             width: 160%;
//             height: 160%;

//             transform:
//               translate(-50%, -50%)
//               rotate(45deg);

//             display: flex;
//             align-items: center;
//             justify-content: center;

//             text-align: center;

//             font-size: 60px;
//             font-weight: 600;
//             line-height: 4.5;

//             letter-spacing: 3px;

//             color: rgba(44, 1, 215, 0.38);

//             white-space: normal;

//             z-index: 999;

//             pointer-events: none;

//             /*
//               पूरे page पर watermark repeat जैसा effect
//             */
//             background-image:
//               repeating-linear-gradient(
//                 -35deg,
//                 transparent 0,
//                 transparent 130px,
//                 rgba(0, 86, 179, 0.035) 130px,
//                 rgba(0, 86, 179, 0.035) 132px
//               );
//           }

//           /* ==========================================
//              PRINT HEADER
//              ========================================== */

//           .print-header {
//             display: flex;
//             justify-content: space-between;
//             align-items: center;
//             border-bottom: 3px solid #000;
//             padding-bottom: 15px;
//             margin-bottom: 15px;

//             position: relative;
//             z-index: 3;

//             background: rgba(255,255,255,0.92);
//           }

//           .ambedkar-photo {
//             width: 80px;
//             height: 100px;
//             object-fit: contain;
//           }

//           .print-title {
//             text-align: center;
//             flex: 1;
//           }

//           .print-title h1 {
//             font-size: 25px;
//             margin: 0;
//             white-space: pre-line;
//           }

//           .print-title h2 {
//             font-size: 20px;
//             margin: 5px 0;
//           }

//           .print-title p {
//             margin: 0;
//             font-size: 13px;
//           }

//           .chakra-box {
//             width: 80px;
//           }

//           .ashok-chakra {
//             width: 75px;
//             height: 75px;
//           }

//           /* ==========================================
//              PRINT META
//              ========================================== */

//           .print-meta {
//             display: grid;
//             grid-template-columns: repeat(4, 1fr);
//             gap: 10px;
//             border: 1px solid #000;
//             padding: 10px;
//             margin-bottom: 15px;
//             font-size: 12px;

//             position: relative;
//             z-index: 3;

//             background: rgba(255,255,255,0.90);
//           }

//           /* ==========================================
//              PRINT TABLE
//              ========================================== */

//           .print-table {
//             width: 100%;
//             border-collapse: collapse;
//             font-size: 12px;

//             position: relative;
//             z-index: 3;

//             background: rgba(255,255,255,0.90);
//           }

//           .print-table th,
//           .print-table td {
//             border: 1px solid #000;
//             padding: 7px;
//             text-align: center;
//           }

//           .print-table th {
//             background: #eee !important;
//           }

//           .print-table tbody td {
//             background: rgba(255,255,255,0.90);
//           }

//           /* PRINT AMOUNT COLORS */

//           .print-table tr.amount-red {
//             border-bottom: 4px solid #dc3545 !important;
//           }

//           .print-table tr.amount-yellow {
//             border-bottom: 4px solid #ffc107 !important;
//           }

//           .print-table tr.amount-green {
//             border-bottom: 4px solid #198754 !important;
//           }

//           /* ==========================================
//              PRINT FOOTER
//              ========================================== */

//           .print-footer {
//             display: flex;
//             justify-content: space-between;
//             border-top: 2px solid #000;
//             margin-top: 20px;
//             padding-top: 10px;
//             font-size: 12px;

//             position: relative;
//             z-index: 3;

//             background: rgba(255,255,255,0.90);
//           }

//           /* ==========================================
//              PAGE BREAK
//              ========================================== */

//           .print-table tr {
//             page-break-inside: avoid;
//           }

//           .print-table thead {
//             display: table-header-group;
//           }

//           .print-table tfoot {
//             display: table-footer-group;
//           }

//         }

//         `}
//       </style>

//       {/* ================================================= */}
//       {/* HEADER */}
//       {/* ================================================= */}

//       <Container fluid className="py-4">

//         <div className="ugaai-header text-center mb-4">

//           <h2>
//             उगाई सदस्य सूची
//           </h2>

//           <p>
//             सहयोग करने वाले लोगों की सूची
//           </p>

//         </div>

//         {/* ================================================= */}
//         {/* STATUS */}
//         {/* ================================================= */}

//         <div className="status-info mb-4">

//           <div className="status-box green">
//             कुल सदस्य: {data.length}
//           </div>

//           <div className="status-box yellow">
//             सक्रिय सदस्य:{" "}
//             {
//               data.filter(
//                 (item) =>
//                   item.status?.toLowerCase() ===
//                   "active"
//               ).length
//             }
//           </div>

//           <div className="status-box red">
//             निष्क्रिय सदस्य:{" "}
//             {
//               data.filter(
//                 (item) =>
//                   item.status?.toLowerCase() ===
//                   "deceased"
//               ).length
//             }
//           </div>

//           <div className="status-box gray">
//             कुल राशि: ₹{totalAmount}
//           </div>

//         </div>

//         {/* ================================================= */}
//         {/* PRINT BUTTON */}
//         {/* ================================================= */}

//         <div className="text-end mb-3 print-hide">

//           <Button
//             variant="primary"
//             onClick={handlePrint}
//             className="print-button"
//           >
//             <FaPrint className="me-2" />
//             Print
//           </Button>

//         </div>

//         {/* ================================================= */}
//         {/* TABLE */}
//         {/* ================================================= */}

//         <div className="table-responsive print-hide">

//           <Table
//             bordered
//             hover
//             className="ugaai-table align-middle"
//           >

//             <thead className="table-primary">

//               <tr>
//                 <th>क्रमांक</th>
//                 <th>दिनांक</th>
//                 <th>नाम</th>
//                 <th>पिता का नाम</th>
//                 <th>राशि</th>
//                 <th>टिप्पणी</th>
//                 <th>स्थिति</th>
//                 <th className="text-center">
//                   कार्यवाही
//                 </th>
//               </tr>

//             </thead>

//             <tbody>

//               {data.length === 0 ? (

//                 <tr>

//                   <td
//                     colSpan="8"
//                     className="text-center py-4"
//                   >
//                     कोई डेटा उपलब्ध नहीं है
//                   </td>

//                 </tr>

//               ) : (

//                 data.map((item, index) => (

//                   <tr
//                     key={item._id}
//                     className={`
//                       ${getAmountClass(item.amount)}
//                       ${
//                         item.status?.toLowerCase() ===
//                         "deceased"
//                           ? "deceased-row"
//                           : ""
//                       }
//                     `}
//                   >

//                     <td>
//                       {index + 1}
//                     </td>

//                     <td>
//                       {item.date}
//                     </td>

//                     <td className="fw-semibold">
//                       {item.name}
//                     </td>

//                     <td>
//                       {item.fname}
//                     </td>

//                     <td className="fw-semibold">
//                       ₹{Number(item.amount) || 0}
//                     </td>

//                     <td>
//                       {item.remark || "-"}
//                     </td>

//                     <td>

//                       {item.status?.toLowerCase() ===
//                       "active" ? (

//                         <span className="badge bg-success">
//                           सक्रिय
//                         </span>

//                       ) : (

//                         <span className="badge bg-danger">
//                           निष्क्रिय
//                         </span>

//                       )}

//                     </td>

//                     {/* ACTION */}

//                     <td>

//                       <div className="d-flex justify-content-center gap-2">

//                         <Button
//                           variant="outline-primary"
//                           size="sm"
//                           onClick={() =>
//                             handleEdit(item)
//                           }
//                           title="Edit"
//                         >
//                           <FaEdit />
//                         </Button>

//                         <Button
//                           variant="outline-danger"
//                           size="sm"
//                           onClick={() =>
//                             handleDelete(item._id)
//                           }
//                           disabled={deleteLoading}
//                           title="Delete"
//                         >

//                           {deleteLoading ? (

//                             <Spinner
//                               animation="border"
//                               size="sm"
//                             />

//                           ) : (

//                             <FaTrash />

//                           )}

//                         </Button>

//                       </div>

//                     </td>

//                   </tr>

//                 ))

//               )}

//             </tbody>

//             <tfoot>

//               <tr>

//                 <th colSpan="4">
//                   कुल राशि
//                 </th>

//                 <th>
//                   ₹{totalAmount}
//                 </th>

//                 <th colSpan="3"></th>

//               </tr>

//             </tfoot>

//           </Table>

//         </div>

//       </Container>

//       {/* ================================================= */}
//       {/* EDIT MODAL */}
//       {/* ================================================= */}

//       <Modal
//         show={showEditModal}
//         onHide={() => {
//           if (!editLoading) {
//             setShowEditModal(false);
//             setEditData(null);
//           }
//         }}
//         centered
//         size="lg"
//       >

//         <Modal.Header closeButton>

//           <Modal.Title className="fw-bold">

//             <FaEdit className="text-primary me-2" />

//             सदस्य की जानकारी संपादित करें

//           </Modal.Title>

//         </Modal.Header>

//         <Form onSubmit={handleUpdate}>

//           <Modal.Body>

//             {editData && (

//               <Row className="g-3">

//                 {/* DATE */}

//                 <Col md={6}>

//                   <Form.Group>

//                     <Form.Label className="fw-semibold">
//                       दिनांक
//                     </Form.Label>

//                     <Form.Control
//                       type="date"
//                       name="date"
//                       value={editData.date}
//                       onChange={handleEditChange}
//                       disabled={editLoading}
//                     />

//                   </Form.Group>

//                 </Col>

//                 {/* NAME */}

//                 <Col md={6}>

//                   <Form.Group>

//                     <Form.Label className="fw-semibold">
//                       सदस्य का नाम
//                     </Form.Label>

//                     <Form.Control
//                       type="text"
//                       name="name"
//                       value={editData.name}
//                       onChange={handleEditChange}
//                       placeholder="सदस्य का नाम"
//                       required
//                       disabled={editLoading}
//                     />

//                   </Form.Group>

//                 </Col>

//                 {/* FATHER NAME */}

//                 <Col md={6}>

//                   <Form.Group>

//                     <Form.Label className="fw-semibold">
//                       पिता का नाम
//                     </Form.Label>

//                     <Form.Control
//                       type="text"
//                       name="fname"
//                       value={editData.fname}
//                       onChange={handleEditChange}
//                       placeholder="पिता का नाम"
//                       disabled={editLoading}
//                     />

//                   </Form.Group>

//                 </Col>

//                 {/* AMOUNT */}

//                 <Col md={6}>

//                   <Form.Group>

//                     <Form.Label className="fw-semibold">
//                       जमा राशि
//                     </Form.Label>

//                     <div className="input-group">

//                       <span className="input-group-text">
//                         ₹
//                       </span>

//                       <Form.Control
//                         type="number"
//                         name="amount"
//                         value={editData.amount}
//                         onChange={handleEditChange}
//                         min="0"
//                         placeholder="राशि"
//                         disabled={editLoading}
//                       />

//                     </div>

//                   </Form.Group>

//                 </Col>

//                 {/* REMARK */}

//                 <Col md={8}>

//                   <Form.Group>

//                     <Form.Label className="fw-semibold">
//                       रिमार्क
//                     </Form.Label>

//                     <Form.Control
//                       as="textarea"
//                       rows={3}
//                       name="remark"
//                       value={editData.remark}
//                       onChange={handleEditChange}
//                       placeholder="कोई टिप्पणी..."
//                       disabled={editLoading}
//                     />

//                   </Form.Group>

//                 </Col>

//                 {/* STATUS */}

//                 <Col md={4}>

//                   <Form.Group>

//                     <Form.Label className="fw-semibold">
//                       स्थिति
//                     </Form.Label>

//                     <Form.Select
//                       name="status"
//                       value={editData.status}
//                       onChange={handleEditChange}
//                       disabled={editLoading}
//                     >

//                       <option value="active">
//                         सक्रिय
//                       </option>

//                       <option value="deceased">
//                         मृत
//                       </option>

//                     </Form.Select>

//                   </Form.Group>

//                 </Col>

//               </Row>

//             )}

//           </Modal.Body>

//           <Modal.Footer>

//             <Button
//               variant="secondary"
//               onClick={() => {
//                 setShowEditModal(false);
//                 setEditData(null);
//               }}
//               disabled={editLoading}
//             >

//               <FaTimes className="me-2" />

//               बंद करें

//             </Button>

//             <Button
//               variant="primary"
//               type="submit"
//               disabled={editLoading}
//             >

//               {editLoading ? (

//                 <>
//                   <Spinner
//                     animation="border"
//                     size="sm"
//                     className="me-2"
//                   />

//                   अपडेट हो रहा है...
//                 </>

//               ) : (

//                 <>
//                   <FaSave className="me-2" />

//                   बदलाव सेव करें
//                 </>

//               )}

//             </Button>

//           </Modal.Footer>

//         </Form>

//       </Modal>

//       {/* ================================================= */}
//       {/* PRINT AREA */}
//       {/* ================================================= */}

//       <div
//         ref={printRef}
//         className="print-area"
//       >

//         <div className="print-content">

//           {/* PRINT HEADER */}

//           <div className="print-header">

//             <div className="ambedkar-box">

//               <img
//                 src="https://i.ibb.co/2YgdCGws/images.jpg"
//                 alt="Dr. B. R. Ambedkar"
//                 className="ambedkar-photo"
//               />

//             </div>

//             <div className="print-title">

//               <h1>
//                 योगदान सदस्य सूची 
//                 अम्बेडकर पार्क गंगाचोली
//               </h1>

//               <h2>
//                 बहुजन मिशन
//               </h2>

//               <p>
//                 सदस्यों की संपूर्ण जानकारी एवं योगदान विवरण
//               </p>

//             </div>

//             <div className="chakra-box">

//               <svg
//                 className="ashok-chakra"
//                 viewBox="0 0 200 200"
//                 xmlns="http://www.w3.org/2000/svg"
//               >

//                 <circle
//                   cx="100"
//                   cy="100"
//                   r="82"
//                   fill="none"
//                   stroke="#0066cc"
//                   strokeWidth="7"
//                 />

//                 <circle
//                   cx="100"
//                   cy="100"
//                   r="15"
//                   fill="none"
//                   stroke="#0066cc"
//                   strokeWidth="5"
//                 />

//                 <circle
//                   cx="100"
//                   cy="100"
//                   r="5"
//                   fill="#0066cc"
//                 />

//                 {Array.from({
//                   length: 24,
//                 }).map((_, index) => {

//                   const angle =
//                     (index * 15 * Math.PI) / 180;

//                   const x1 =
//                     100 +
//                     18 *
//                       Math.cos(angle);

//                   const y1 =
//                     100 +
//                     18 *
//                       Math.sin(angle);

//                   const x2 =
//                     100 +
//                     78 *
//                       Math.cos(angle);

//                   const y2 =
//                     100 +
//                     78 *
//                       Math.sin(angle);

//                   return (
//                     <line
//                       key={index}
//                       x1={x1}
//                       y1={y1}
//                       x2={x2}
//                       y2={y2}
//                       stroke="#0066cc"
//                       strokeWidth="3"
//                     />
//                   );
//                 })}

//               </svg>

//             </div>

//           </div>

//           {/* PRINT META */}

//           <div className="print-meta">

//             <div>
//               <strong>कुल सदस्य:</strong>{" "}
//               {data.length}
//             </div>

//             <div>
//               <strong>सक्रिय सदस्य:</strong>{" "}
//               {
//                 data.filter(
//                   (item) =>
//                     item.status?.toLowerCase() ===
//                     "active"
//                 ).length
//               }
//             </div>

//             <div>
//               <strong>निष्क्रिय सदस्य:</strong>{" "}
//               {
//                 data.filter(
//                   (item) =>
//                     item.status?.toLowerCase() ===
//                     "deceased"
//                 ).length
//               }
//             </div>

//             <div>
//               <strong>कुल राशि:</strong>{" "}
//               ₹{totalAmount}
//             </div>

//           </div>

//           {/* PRINT TABLE */}

//           <table className="print-table">

//             <thead>

//               <tr>
//                 <th>क्रमांक</th>
//                 <th>दिनांक</th>
//                 <th>नाम</th>
//                 <th>पिता का नाम</th>
//                 <th>राशि</th>
//                 <th>टिप्पणी</th>
//                 <th>स्थिति</th>
//               </tr>

//             </thead>

//             <tbody>

//               {data.map((item, index) => (

//                 <tr
//                   key={item._id}
//                   className={getAmountClass(item.amount)}
//                 >

//                   <td>
//                     {index + 1}
//                   </td>

//                   <td>
//                     {item.date}
//                   </td>

//                   <td>
//                     {item.name}
//                   </td>

//                   <td>
//                     {item.fname}
//                   </td>

//                   <td>
//                     ₹{Number(item.amount) || 0}
//                   </td>

//                   <td>
//                     {item.remark || "-"}
//                   </td>

//                   <td>
//                     {item.status?.toLowerCase() ===
//                     "active"
//                       ? "सक्रिय"
//                       : "निष्क्रिय"}
//                   </td>

//                 </tr>

//               ))}

//             </tbody>

//             <tfoot>

//               <tr>

//                 <th colSpan="4">
//                   कुल राशि
//                 </th>

//                 <th>
//                   ₹{totalAmount}
//                 </th>

//                 <th colSpan="2"></th>

//               </tr>

//             </tfoot>

//           </table>

//           {/* PRINT FOOTER */}

//           <div className="print-footer">

//             <div>
//               <strong>
//                 बहुजन मिशन
//               </strong>
//             </div>

//             <div>
//               जय भीम • जय भारत
//             </div>

//           </div>

//         </div>

//       </div>

//     </div>
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
        error.response?.data?.message ||
          "Years load नहीं हो सके"
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
            <div ref={printRef}>
              {/* PRINT HEADER */}

              <div className="print-header text-center mb-3">
                <img
                  src="https://i.ibb.co/84RFXYmB/logo.png"
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

              {/* LOADING */}

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
          .print-header {
            display: none;
          }

          .deceased-row {
            opacity: 0.75;
          }

          @media print {

            body {
              background: white !important;
            }

            .no-print {
              display: none !important;
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
