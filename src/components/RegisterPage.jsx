
// // import { useState } from "react";
// // import {
// //   Form,
// //   Button,
// //   Card,
// //   Container,
// //   Alert,
// //   Spinner,
// // } from "react-bootstrap";

// // import { useNavigate } from "react-router-dom";
// // import { useAuth } from "../context/AuthContext.jsx";
// // import { toast } from "react-toastify";

// // export default function RegisterPage() {
// //   const navigate = useNavigate();
// //   const { register } = useAuth();

// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [role, setRole] = useState("user");

// //   const [error, setError] = useState("");
// //   const [loading, setLoading] = useState(false);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     setError("");

// //     const cleanName = name.trim();
// //     const cleanEmail = email.trim().toLowerCase();

// //     // =========================
// //     // BASIC VALIDATION
// //     // =========================

// //     if (!cleanName) {
// //       toast.warning("Please enter your name");
// //       return;
// //     }

// //     if (!cleanEmail) {
// //       toast.warning("Please enter your email");
// //       return;
// //     }

// //     if (password.length < 6) {
// //       const message = "Password must be at least 6 characters";

// //       setError(message);
// //       toast.warning(message);

// //       return;
// //     }

// //     try {
// //       setLoading(true);

// //       const result = await register(
// //         cleanName,
// //         cleanEmail,
// //         password,
// //         role
// //       );

// //       console.log("Register Result:", result);

// //       // =========================
// //       // ADMIN REGISTRATION
// //       // =========================

// //       if (
// //         result.success &&
// //         result.user?.role === "admin"
// //       ) {
// //         toast.success(
// //           "Registration successful! OTP sent to your email."
// //         );

// //         navigate("/verify-otp", {
// //           replace: true,
// //           state: {
// //             email: cleanEmail,
// //           },
// //         });

// //         return;
// //       }

// //       // =========================
// //       // NORMAL USER REGISTRATION
// //       // =========================

// //       if (result.success) {
// //         toast.success(
// //           "Account created successfully!"
// //         );

// //         navigate("/", {
// //           replace: true,
// //         });

// //         return;
// //       }

// //       // =========================
// //       // REGISTRATION FAILED
// //       // =========================

// //       const message =
// //         result.message || "Registration failed";

// //       setError(message);
// //       toast.error(message);

// //     } catch (err) {
// //       console.error(
// //         "Register Error:",
// //         err.response?.data || err.message
// //       );

// //       const message =
// //         err.response?.data?.message ||
// //         err.message ||
// //         "Registration failed. Please try again.";

// //       setError(message);
// //       toast.error(message);

// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <Container
// //       className="d-flex justify-content-center align-items-center"
// //       style={{
// //         minHeight: "100vh",
// //         padding: "20px",
// //       }}
// //     >
// //       <Card
// //         className="shadow border-0"
// //         style={{
// //           width: "100%",
// //           maxWidth: "450px",
// //           borderRadius: "15px",
// //         }}
// //       >
// //         <Card.Body className="p-4">

// //           {/* =========================
// //               HEADER
// //           ========================= */}

// //           <h3 className="text-center mb-2">
// //             Create Account
// //           </h3>

// //           <p className="text-center text-muted mb-4">
// //             Register your account
// //           </p>

// //           {/* =========================
// //               ERROR
// //           ========================= */}

// //           {error && (
// //             <Alert
// //               variant="danger"
// //               dismissible
// //               onClose={() => setError("")}
// //             >
// //               {error}
// //             </Alert>
// //           )}

// //           <Form onSubmit={handleSubmit}>

// //             {/* =========================
// //                 NAME
// //             ========================= */}

// //             <Form.Group
// //               className="mb-3"
// //               controlId="registerName"
// //             >
// //               <Form.Label>
// //                 Full Name
// //               </Form.Label>

// //               <Form.Control
// //                 type="text"
// //                 placeholder="Enter your name"
// //                 value={name}
// //                 onChange={(e) =>
// //                   setName(e.target.value)
// //                 }
// //                 required
// //                 disabled={loading}
// //               />
// //             </Form.Group>

// //             {/* =========================
// //                 EMAIL
// //             ========================= */}

// //             <Form.Group
// //               className="mb-3"
// //               controlId="registerEmail"
// //             >
// //               <Form.Label>
// //                 Email Address
// //               </Form.Label>

// //               <Form.Control
// //                 type="email"
// //                 placeholder="Enter your email"
// //                 value={email}
// //                 onChange={(e) =>
// //                   setEmail(e.target.value)
// //                 }
// //                 required
// //                 disabled={loading}
// //               />
// //             </Form.Group>

// //             {/* =========================
// //                 PASSWORD
// //             ========================= */}

// //             <Form.Group
// //               className="mb-3"
// //               controlId="registerPassword"
// //             >
// //               <Form.Label>
// //                 Password
// //               </Form.Label>

// //               <Form.Control
// //                 type="password"
// //                 placeholder="Enter password"
// //                 value={password}
// //                 onChange={(e) =>
// //                   setPassword(e.target.value)
// //                 }
// //                 minLength={6}
// //                 required
// //                 disabled={loading}
// //               />

// //               <Form.Text className="text-muted">
// //                 Minimum 6 characters
// //               </Form.Text>
// //             </Form.Group>

// //             {/* =========================
// //                 ROLE
// //             ========================= */}

// //             <Form.Group
// //               className="mb-4"
// //               controlId="registerRole"
// //             >
// //               <Form.Label>
// //                 Account Type
// //               </Form.Label>

// //               <Form.Select
// //                 value={role}
// //                 onChange={(e) =>
// //                   setRole(e.target.value)
// //                 }
// //                 disabled={loading}
// //               >
// //                 <option value="user">
// //                   User
// //                 </option>

// //                 <option value="admin">
// //                   Admin
// //                 </option>
// //               </Form.Select>

// //               {role === "admin" && (
// //                 <Form.Text className="text-warning d-block mt-2">
// //                   Admin account ke email par
// //                   verification OTP bheja jayega.
// //                 </Form.Text>
// //               )}
// //             </Form.Group>

// //             {/* =========================
// //                 REGISTER BUTTON
// //             ========================= */}

// //             <Button
// //               type="submit"
// //               variant="primary"
// //               className="w-100"
// //               disabled={loading}
// //             >
// //               {loading ? (
// //                 <>
// //                   <Spinner
// //                     animation="border"
// //                     size="sm"
// //                     className="me-2"
// //                   />

// //                   Creating Account...
// //                 </>
// //               ) : (
// //                 "Register"
// //               )}
// //             </Button>

// //           </Form>

// //           {/* =========================
// //               LOGIN LINK
// //           ========================= */}

// //           <div className="text-center mt-4">

// //             <span className="text-muted">
// //               Already have an account?{" "}
// //             </span>

// //             <Button
// //               variant="link"
// //               className="p-0"
// //               onClick={() =>
// //                 navigate("/login")
// //               }
// //               disabled={loading}
// //             >
// //               Login
// //             </Button>

// //           </div>

// //         </Card.Body>
// //       </Card>
// //     </Container>
// //   );
// // }


// import { useState } from "react";
// import {
//   Form,
//   Button,
//   Card,
//   Container,
//   Alert,
//   Spinner,
//   InputGroup,
// } from "react-bootstrap";

// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext.jsx";
// import { toast } from "react-toastify";

// export default function RegisterPage() {
//   const navigate = useNavigate();
//   const { register } = useAuth();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("user");

//   // Password show/hide
//   const [showPassword, setShowPassword] = useState(false);

//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setError("");

//     const cleanName = name.trim();
//     const cleanEmail = email.trim().toLowerCase();

//     // =========================
//     // BASIC VALIDATION
//     // =========================

//     if (!cleanName) {
//       toast.warning("Please enter your name");
//       return;
//     }

//     if (!cleanEmail) {
//       toast.warning("Please enter your email");
//       return;
//     }

//     if (password.length < 6) {
//       const message = "Password must be at least 6 characters";

//       setError(message);
//       toast.warning(message);

//       return;
//     }

//     try {
//       setLoading(true);

//       const result = await register(
//         cleanName,
//         cleanEmail,
//         password,
//         role
//       );

//       console.log("Register Result:", result);

//       // =========================
//       // ADMIN REGISTRATION
//       // =========================

//       if (
//         result.success &&
//         result.user?.role === "admin"
//       ) {
//         toast.success(
//           "Registration successful! OTP sent to your email."
//         );

//         navigate("/verify-otp", {
//           replace: true,
//           state: {
//             email: cleanEmail,
//           },
//         });

//         return;
//       }

//       // =========================
//       // NORMAL USER REGISTRATION
//       // =========================

//       if (result.success) {
//         toast.success("Account created successfully!");

//         navigate("/", {
//           replace: true,
//         });

//         return;
//       }

//       // =========================
//       // REGISTRATION FAILED
//       // =========================

//       const message =
//         result.message || "Registration failed";

//       setError(message);
//       toast.error(message);

//     } catch (err) {
//       console.error(
//         "Register Error:",
//         err.response?.data || err.message
//       );

//       const message =
//         err.response?.data?.message ||
//         err.message ||
//         "Registration failed. Please try again.";

//       setError(message);
//       toast.error(message);

//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container
//       className="d-flex justify-content-center align-items-center"
//       style={{
//         minHeight: "100vh",
//         padding: "20px",
//       }}
//     >
//       <Card
//         className="shadow border-0"
//         style={{
//           width: "100%",
//           maxWidth: "450px",
//           borderRadius: "15px",
//         }}
//       >
//         <Card.Body className="p-4">

//           {/* =========================
//               HEADER
//           ========================= */}

//           <h3 className="text-center mb-2">
//             Create Account
//           </h3>

//           <p className="text-center text-muted mb-4">
//             Register your account
//           </p>

//           {/* =========================
//               ERROR
//           ========================= */}

//           {error && (
//             <Alert
//               variant="danger"
//               dismissible
//               onClose={() => setError("")}
//             >
//               {error}
//             </Alert>
//           )}

//           <Form onSubmit={handleSubmit}>

//             {/* =========================
//                 NAME
//             ========================= */}

//             <Form.Group
//               className="mb-3"
//               controlId="registerName"
//             >
//               <Form.Label>
//                 Full Name
//               </Form.Label>

//               <Form.Control
//                 type="text"
//                 placeholder="Enter your name"
//                 value={name}
//                 onChange={(e) =>
//                   setName(e.target.value)
//                 }
//                 required
//                 disabled={loading}
//               />
//             </Form.Group>

//             {/* =========================
//                 EMAIL
//             ========================= */}

//             <Form.Group
//               className="mb-3"
//               controlId="registerEmail"
//             >
//               <Form.Label>
//                 Email Address
//               </Form.Label>

//               <Form.Control
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) =>
//                   setEmail(e.target.value)
//                 }
//                 required
//                 disabled={loading}
//               />
//             </Form.Group>

//             {/* =========================
//                 PASSWORD
//             ========================= */}

//             <Form.Group
//               className="mb-3"
//               controlId="registerPassword"
//             >
//               <Form.Label>
//                 Password
//               </Form.Label>

//               <InputGroup>

//                 <Form.Control
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Enter password"
//                   value={password}
//                   onChange={(e) =>
//                     setPassword(e.target.value)
//                   }
//                   minLength={6}
//                   required
//                   disabled={loading}
//                 />

//                 <Button
//                   variant="outline-secondary"
//                   type="button"
//                   onClick={() =>
//                     setShowPassword(!showPassword)
//                   }
//                   disabled={loading}
//                   aria-label={
//                     showPassword
//                       ? "Hide password"
//                       : "Show password"
//                   }
//                 >
//                   {showPassword ? "Hide" : "Show"}
//                 </Button>

//               </InputGroup>

//               <Form.Text className="text-muted">
//                 Minimum 6 characters
//               </Form.Text>
//             </Form.Group>

//             {/* =========================
//                 ROLE
//             ========================= */}

//             <Form.Group
//               className="mb-4"
//               controlId="registerRole"
//             >
//               <Form.Label>
//                 Account Type
//               </Form.Label>

//               <Form.Select
//                 value={role}
//                 onChange={(e) =>
//                   setRole(e.target.value)
//                 }
//                 disabled={loading}
//               >
//                 <option value="user">
//                   User
//                 </option>

//                  <option value="admin">
//                 Admin
//                 </option> 
//               </Form.Select>

//               {role === "admin" && (
//                 <Form.Text className="text-warning d-block mt-2">
//                   Admin account ke email par
//                   verification OTP bheja jayega.
//                 </Form.Text>
//               )}
//             </Form.Group>

//             {/* =========================
//                 REGISTER BUTTON
//             ========================= */}

//             <Button
//               type="submit"
//               variant="primary"
//               className="w-100"
//               disabled={loading}
//             >
//               {loading ? (
//                 <>
//                   <Spinner
//                     animation="border"
//                     size="sm"
//                     className="me-2"
//                   />

//                   Creating Account...
//                 </>
//               ) : (
//                 "Register"
//               )}
//             </Button>

//           </Form>

//           {/* =========================
//               LOGIN LINK
//           ========================= */}

//           <div className="text-center mt-4">

//             <span className="text-muted">
//               Already have an account?{" "}
//             </span>

//             <Button
//               variant="link"
//               className="p-0"
//               onClick={() =>
//                 navigate("/login")
//               }
//               disabled={loading}
//             >
//               Login
//             </Button>

//           </div>

//         </Card.Body>
//       </Card>
//     </Container>
//   );
// }
import { useState } from "react";
import {
  Form,
  Button,
  Card,
  Container,
  Alert,
  Spinner,
  InputGroup,
} from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { toast } from "react-toastify";

export default function RegisterPage() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  // Password show/hide
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // ==========================================
  // ADMIN OPTION UNLOCK
  // ==========================================
  const [adminUnlocked, setAdminUnlocked] = useState(false);
  const [adminClickCount, setAdminClickCount] = useState(0);

  // Account Type par click count
  const handleAccountTypeClick = () => {
    // Agar Admin already unlock ho gaya hai
    if (adminUnlocked) {
      return;
    }

    const newCount = adminClickCount + 1;

    setAdminClickCount(newCount);

    // 10 clicks ke baad Admin unlock
    if (newCount >= 10) {
      setAdminUnlocked(true);

      toast.success("Admin option unlocked!");
    }
  };

  // ==========================================
  // REGISTER
  // ==========================================
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();

    // =========================
    // BASIC VALIDATION
    // =========================

    if (!cleanName) {
      toast.warning("Please enter your name");
      return;
    }

    if (!cleanEmail) {
      toast.warning("Please enter your email");
      return;
    }

    if (password.length < 6) {
      const message = "Password must be at least 6 characters";

      setError(message);
      toast.warning(message);

      return;
    }

    try {
      setLoading(true);

      const result = await register(
        cleanName,
        cleanEmail,
        password,
        role
      );

      console.log("Register Result:", result);

      // =========================
      // ADMIN REGISTRATION
      // =========================

      if (
        result.success &&
        result.user?.role === "admin"
      ) {
        toast.success(
          "Registration successful! OTP sent to your email."
        );

        navigate("/verify-otp", {
          replace: true,
          state: {
            email: cleanEmail,
          },
        });

        return;
      }

      // =========================
      // NORMAL USER REGISTRATION
      // =========================

      if (result.success) {
        toast.success("Account created successfully!");

        navigate("/", {
          replace: true,
        });

        return;
      }

      // =========================
      // REGISTRATION FAILED
      // =========================

      const message =
        result.message || "Registration failed";

      setError(message);
      toast.error(message);

    } catch (err) {
      console.error(
        "Register Error:",
        err.response?.data || err.message
      );

      const message =
        err.response?.data?.message ||
        err.message ||
        "Registration failed. Please try again.";

      setError(message);
      toast.error(message);

    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <Card
        className="shadow border-0"
        style={{
          width: "100%",
          maxWidth: "450px",
          borderRadius: "15px",
        }}
      >
        <Card.Body className="p-4">

          {/* =========================
              HEADER
          ========================= */}

          <h3 className="text-center mb-2">
            Create Account
          </h3>

          <p className="text-center text-muted mb-4">
            Register your account
          </p>

          {/* =========================
              ERROR
          ========================= */}

          {error && (
            <Alert
              variant="danger"
              dismissible
              onClose={() => setError("")}
            >
              {error}
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>

            {/* =========================
                NAME
            ========================= */}

            <Form.Group
              className="mb-3"
              controlId="registerName"
            >
              <Form.Label>
                Full Name
              </Form.Label>

              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                required
                disabled={loading}
              />
            </Form.Group>

            {/* =========================
                EMAIL
            ========================= */}

            <Form.Group
              className="mb-3"
              controlId="registerEmail"
            >
              <Form.Label>
                Email Address
              </Form.Label>

              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                required
                disabled={loading}
              />
            </Form.Group>

            {/* =========================
                PASSWORD
            ========================= */}

            <Form.Group
              className="mb-3"
              controlId="registerPassword"
            >
              <Form.Label>
                Password
              </Form.Label>

              <InputGroup>

                <Form.Control
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  minLength={6}
                  required
                  disabled={loading}
                />

                <Button
                  variant="outline-secondary"
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  disabled={loading}
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword
                    ? "Hide"
                    : "Show"}
                </Button>

              </InputGroup>

              <Form.Text className="text-muted">
                Minimum 6 characters
              </Form.Text>
            </Form.Group>

            {/* =========================
                ROLE
            ========================= */}

            <Form.Group
              className="mb-4"
              controlId="registerRole"
            >

              {/* 
                Account Type par 10 baar click
                karne par Admin unlock hoga
              */}
              <Form.Label
                onClick={handleAccountTypeClick}
                style={{
                  cursor: adminUnlocked
                    ? "default"
                    : "",
                  userSelect: "none",
                }}
                title={
                  !adminUnlocked
                    ? "Account Type"
                    : ""
                }
              >
                Account Type
              </Form.Label>

              <Form.Select
                value={role}
                onChange={(e) =>
                  setRole(e.target.value)
                }
                disabled={loading}
              >

                {/* User hamesha available */}
                <option value="user">
                  User
                </option>

                {/* 
                  Admin sirf 10 clicks ke baad
                */}
                {adminUnlocked && (
                  <option value="admin">
                    Admin
                  </option>
                )}

              </Form.Select>

              {/* Admin selected hone par message */}
              {role === "admin" &&
                adminUnlocked && (
                  <Form.Text className="text-warning d-block mt-2">
                    Admin account ke email par
                    verification OTP bheja jayega.
                  </Form.Text>
                )}

            </Form.Group>

            {/* =========================
                REGISTER BUTTON
            ========================= */}

            <Button
              type="submit"
              variant="primary"
              className="w-100"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner
                    animation="border"
                    size="sm"
                    className="me-2"
                  />

                  Creating Account...
                </>
              ) : (
                "Register"
              )}
            </Button>

          </Form>

          {/* =========================
              LOGIN LINK
          ========================= */}

          <div className="text-center mt-4">

            <span className="text-muted">
              Already have an account?{" "}
            </span>

            <Button
              variant="link"
              className="p-0"
              onClick={() =>
                navigate("/login")
              }
              disabled={loading}
            >
              Login
            </Button>

          </div>

        </Card.Body>
      </Card>
    </Container>
  );
}