


import React from "react";
import { Navbar, Container, Button, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import './Appnav.css'

const AppNavbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // =========================
  // MOBILE NAVIGATION
  // =========================
  const handleMobileNavigate = (path) => {
    // पहले offcanvas बंद करें
    const offcanvasElement = document.getElementById("mobileSidebar");

    if (offcanvasElement) {
      const closeButton =
        offcanvasElement.querySelector(".btn-close");

      if (closeButton) {
        closeButton.click();
      }
    }

    // फिर route पर जाएं
    setTimeout(() => {
      navigate(path);
    }, 100);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <Navbar
        className="mb-0 m-0 shadow-sm bg-light"
        style={{ minHeight: "96px" }}
      >
        <Container fluid className="px-2 px-md-4">

          {/* LOGO */}
          <Navbar.Brand
            as={Link}
            to="/"
            className="d-flex align-items-center"
          >
            <div
              style={{
                height: "70px",
                width: "70px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                animation: "chakraRotate 7s linear infinite",
                flexShrink: 0,
              }}
            >
              <img
                src="https://i.ibb.co/84RFXYmB/logo.png"
                alt="Chakra"
                style={{
                  height: "70px",
                  width: "70px",
                  objectFit: "contain",
                }}
              />
            </div>

            <span className="fw-bold ms-2 d-none d-sm-block">
              अम्बेडकर पार्क गंगाचोली
            </span>
          </Navbar.Brand>

          {/* JAI BHIM */}
          <div class="text bhim">
    <span style="--i:1">J</span>
    <span style="--i:2">A</span>
    <span style="--i:3">I</span>
    <span class="space"></span>
    <span style="--i:4">B</span>
    <span style="--i:5">H</span>
    <span style="--i:6">I</span>
    <span style="--i:7">M</span>
    <span style="--i:8">!</span>
  </div>

  <!-- JAI BHARAT -->
  <div class="text bharat">
    <span style="--i:1">J</span>
    <span style="--i:2">A</span>
    <span style="--i:3">I</span>
    <span class="space"></span>
    <span style="--i:4">B</span>
    <span style="--i:5">H</span>
    <span style="--i:6">A</span>
    <span style="--i:7">R</span>
    <span style="--i:8">A</span>
    <span style="--i:9">T</span>
    <span style="--i:10">!</span>
  </div>

          {/* RIGHT SIDE */}
          <div className="ms-auto d-flex align-items-center">

            {/* ADMIN BUTTONS - DESKTOP */}
            {user?.role === "admin" && (
              <div className="d-none d-xl-flex align-items-center me-2">

                <Button
                  as={Link}
                  to="/ugaaiList"
                  variant="outline-primary"
                  size="sm"
                  className="me-1"
                >
                  Ugaai List
                </Button>

                <Button
                  as={Link}
                  to="/ugaaiUpload"
                  variant="outline-success"
                  size="sm"
                  className="me-1"
                >
                  Ugaai Upload
                </Button>

                <Button
                  as={Link}
                  to="/upload"
                  variant="outline-dark"
                  size="sm"
                >
                  Upload
                </Button>

              </div>
            )}

            {/* USER */}
            {user ? (
              <>
                <span className="me-2 d-none d-sm-inline">
                  Hi, {user.name}
                </span>

                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={logout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  as={Link}
                  to="/login"
                  variant="outline-primary"
                  size="sm"
                  className="me-1"
                >
                  Login
                </Button>

                <Button
                  as={Link}
                  to="/register"
                  variant="primary"
                  size="sm"
                  className="d-none d-sm-inline-block"
                >
                  Register
                </Button>
              </>
            )}

            {/* MOBILE MENU BUTTON */}
            <button
              className="btn btn-primary ms-2 mobile-menu-button"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#mobileSidebar"
              aria-controls="mobileSidebar"
            >
              ☰
            </button>

          </div>
        </Container>
      </Navbar>


      {/* ================= MOBILE MENU ================= */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="mobileSidebar"
        aria-labelledby="mobileSidebarLabel"
      >

        <div className="offcanvas-header bg-primary text-white">

          <h5
            className="offcanvas-title"
            id="mobileSidebarLabel"
          >
            ☸ अम्बेडकर पार्क
          </h5>

          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />

        </div>


        <div className="offcanvas-body">

          {/* ================= SIDEBAR LINKS ================= */}
          <Nav className="flex-column">

            <Nav.Link
              as="button"
              onClick={() => handleMobileNavigate("/")}
              className="text-start border-0 bg-transparent"
            >
              🏠 होम
            </Nav.Link>

            <Nav.Link
              as="button"
              onClick={() => handleMobileNavigate("/about")}
              className="text-start border-0 bg-transparent"
            >
              ℹ️ पार्क के बारे में
            </Nav.Link>

            <Nav.Link
              as="button"
              onClick={() => handleMobileNavigate("/ambedkar")}
              className="text-start border-0 bg-transparent"
            >
              📖 बाबासाहेब अम्बेडकर
            </Nav.Link>

            <Nav.Link
              as="button"
              onClick={() => handleMobileNavigate("/mahapurush")}
              className="text-start border-0 bg-transparent"
            >
              👨‍🏫 बहुजन महापुरुष
            </Nav.Link>

            <Nav.Link
              as="button"
              onClick={() => handleMobileNavigate("/activistpage")}
              className="text-start border-0 bg-transparent"
            >
              👥 सामाजिक कार्यकर्ता
            </Nav.Link>

            <Nav.Link
              as="button"
              onClick={() => handleMobileNavigate("/gallery")}
              className="text-start border-0 bg-transparent"
            >
              🖼️ गैलरी
            </Nav.Link>

            <Nav.Link
              as="button"
              onClick={() => handleMobileNavigate("/events")}
              className="text-start border-0 bg-transparent"
            >
              📅 कार्यक्रम
            </Nav.Link>

            <Nav.Link
              as="button"
              onClick={() => handleMobileNavigate("/committee")}
              className="text-start border-0 bg-transparent"
            >
              🤝 समिति सदस्य
            </Nav.Link>

            <Nav.Link
              as="button"
              onClick={() => handleMobileNavigate("/contact")}
              className="text-start border-0 bg-transparent"
            >
              📞 संपर्क करें
            </Nav.Link>

          </Nav>


          <hr />


          {/* ================= ADMIN MOBILE LINKS ================= */}
          {user?.role === "admin" && (
            <>
              <h6 className="text-primary fw-bold">
                Admin Menu
              </h6>

              <Nav className="flex-column">

                <Nav.Link
                  as="button"
                  onClick={() => handleMobileNavigate("/ugaaiList")}
                  className="text-start border-0 bg-transparent"
                >
                  📋 Ugaai List
                </Nav.Link>

                <Nav.Link
                  as="button"
                  onClick={() => handleMobileNavigate("/ugaaiUpload")}
                  className="text-start border-0 bg-transparent"
                >
                  📤 Ugaai Upload
                </Nav.Link>

                <Nav.Link
                  as="button"
                  onClick={() => handleMobileNavigate("/upload")}
                  className="text-start border-0 bg-transparent"
                >
                  ⬆️ Upload
                </Nav.Link>

              </Nav>

              <hr />
            </>
          )}


          {/* ================= MOBILE AUTH ================= */}
          {user ? (
            <>
              <div className="mb-3">
                <strong>
                  👤 {user.name}
                </strong>

                <div>
                  <small className="text-muted">
                    {user.role}
                  </small>
                </div>
              </div>

              <Button
                variant="outline-danger"
                className="w-100"
                onClick={logout}
                data-bs-dismiss="offcanvas"
              >
                🚪 Logout
              </Button>
            </>
          ) : (
            <div className="d-grid gap-2">

              <Button
                as={Link}
                to="/login"
                variant="outline-primary"
                data-bs-dismiss="offcanvas"
              >
                🔐 Login
              </Button>

              <Button
                as={Link}
                to="/register"
                variant="primary"
                data-bs-dismiss="offcanvas"
              >
                📝 Register
              </Button>

            </div>
          )}

        </div>
      </div>


      {/* ================= RESPONSIVE CSS ================= */}
      <style>
        {`
          .mobile-menu-button {
            display: block;
          }

          @media (min-width: 780px) {
            .mobile-menu-button {
              display: none;
            }

            #mobileSidebar {
              display: none !important;
            }
          }

          @media (max-width: 779px) {
            #mobileSidebar {
              width: 300px;
            }
          }

          .offcanvas-body .nav-link {
            cursor: pointer;
            width: 100%;
            padding: 12px 10px;
          }

          .offcanvas-body .nav-link:hover {
            background: #f1f1f1;
          }

          @keyframes chakraRotate {
            from {
              transform: rotate(0deg);
            }

            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </>
  );
};

export default AppNavbar;