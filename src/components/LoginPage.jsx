// import { useState } from "react";
// import { Form, Button, Card, Container, Alert, Spinner } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext.jsx";

// export default function LoginPage() {
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setError("");

//     try {
//       setLoading(true);

//       const result = await login(email.trim(), password);

//       console.log("Login Result:", result);

//       if (result.success && result.user) {
//         // =========================
//         // ADMIN
//         // =========================
//         if (result.user.role === "admin") {
//           if (!result.user.isEmailVerified) {
//             navigate("/", {
//               state: {
//                 email: result.user.email,
//               },
//             });

//             return;
//           }

//           // Verified admin
//           navigate("/ugaaiList");
//           return;
//         }

//         // =========================
//         // NORMAL USER
//         // =========================
//         navigate("/");
//       }
//     } catch (err) {
//       console.error("Login Error:", err);

//       // OTP verification required
//       if (err.response?.status === 403) {
//         navigate("/", {
//           state: {
//             email: email.trim(),
//           },
//         });

//         return;
//       }

//       setError(err.response?.data?.message || "Invalid email or password");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container
//       className="
// d-flex
// justify-content-center
// align-items-center
// "
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
//           <h3 className="text-center mb-2">Welcome Back</h3>

//           <p className="text-center text-muted mb-4">Login to your account</p>

//           {error && (
//             <Alert variant="danger" dismissible onClose={() => setError("")}>
//               {error}
//             </Alert>
//           )}

//           <Form onSubmit={handleSubmit}>
//             {/* EMAIL */}
//             <Form.Group className="mb-3" controlId="loginEmail">
//               <Form.Label>Email Address</Form.Label>

//               <Form.Control
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 disabled={loading}
//               />
//             </Form.Group>

//             {/* PASSWORD */}
//             <Form.Group className="mb-4" controlId="loginPassword">
//               <Form.Label>Password</Form.Label>

//               <Form.Control
//                 type="password"
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 disabled={loading}
//               />
//             </Form.Group>

//             {/* LOGIN BUTTON */}
//             <Button
//               type="submit"
//               variant="primary"
//               className="w-100"
//               disabled={loading}
//             >
//               {loading ? (
//                 <>
//                   <Spinner animation="border" size="sm" className="me-2" />
//                   Logging in...
//                 </>
//               ) : (
//                 "Login"
//               )}
//             </Button>
//           </Form>

//           {/* REGISTER */}
//           <div className="text-center mt-4">
//             <span className="text-muted">Don't have an account? </span>

//             <Button
//               variant="link"
//               className="p-0"
//               onClick={() => navigate("/register")}
//               disabled={loading}
//             >
//               Register
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

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Password show / hide
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    try {
      setLoading(true);

      const result = await login(email.trim(), password);

      console.log("Login Result:", result);

      if (result.success && result.user) {
        // =========================
        // ADMIN
        // =========================
        if (result.user.role === "admin") {
          if (!result.user.isEmailVerified) {
            navigate("/", {
              state: {
                email: result.user.email,
              },
            });

            return;
          }

          // Verified admin
          navigate("/ugaaiList");
          return;
        }

        // =========================
        // NORMAL USER
        // =========================
        navigate("/");
      }
    } catch (err) {
      console.error("Login Error:", err);

      // OTP verification required
      if (err.response?.status === 403) {
        navigate("/", {
          state: {
            email: email.trim(),
          },
        });

        return;
      }

      setError(
        err.response?.data?.message ||
          "Invalid email or password"
      );
    } finally {
      setLoading(false);
    }
  };

  
  return (
    <Container
      className="
        d-flex
        justify-content-center
        align-items-center
      "
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
            Welcome Back
          </h3>

          <p className="text-center text-muted mb-4">
            Login to your account
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
                EMAIL
            ========================= */}

            <Form.Group
              className="mb-3"
              controlId="loginEmail"
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
              className="mb-4"
              controlId="loginPassword"
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
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
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
                  {showPassword ?"Hide"  : "Show"}
                </Button>

              </InputGroup>
            </Form.Group>

            {/* =========================
                LOGIN BUTTON
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
                  Logging in...
                </>
              ) : (
                "Login"
              )}
            </Button>

          </Form>

          {/* =========================
              REGISTER
          ========================= */}

          <div className="text-center mt-4">

            <span className="text-muted">
              Don't have an account?{" "}
            </span>

            <Button
              variant="link"
              className="p-0"
              onClick={() =>
                navigate("/register")
              }
              disabled={loading}
            >
              Register
            </Button>

          </div>

        </Card.Body>
      </Card>
    </Container>
  );
}
