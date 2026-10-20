import React from "react";
import { Navbar, Container, Button, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const AppNavbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const isAdmin = user?.role === "admin";
  const isLoggedIn = Boolean(user);

  // Admin navigation links
  const adminLinks = [
    { path: "/ugaaiList", label: "Ugaai List", icon: "📋" },
    { path: "/ugaaiUpload", label: "Ugaai Upload", icon: "📤" },
    { path: "/upload", label: "Upload", icon: "⬆️" },
  ];

  // Public navigation links
  const publicLinks = [
    { path: "/", label: "🏠 होम" },
    { path: "/about", label: "ℹ️ पार्क के बारे में" },
    { path: "/ambedkar", label: "📖 बाबासाहेब अम्बेडकर" },
    { path: "/mahapurush", label: "👨‍🏫 बहुजन महापुरुष" },
    { path: "/activistpage", label: "👥 सामाजिक कार्यकर्ता" },
    { path: "/gallery", label: "🖼️ गैलरी" },
    { path: "/events", label: "📅 कार्यक्रम" },
    { path: "/committee", label: "🤝 समिति सदस्य" },
    { path: "/contact", label: "📞 संपर्क करें" },
  ];

  // Close mobile sidebar before navigation
  const handleMobileNavigate = (path) => {
    const offcanvasElement = document.getElementById("mobileSidebar");

    if (offcanvasElement && window.bootstrap?.Offcanvas) {
      const instance =
        window.bootstrap.Offcanvas.getInstance(offcanvasElement);

      instance?.hide();
    } else if (offcanvasElement) {
      offcanvasElement.querySelector(".btn-close")?.click();
    }

    setTimeout(() => {
      navigate(path);
    }, 100);
  };

  // Logout
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
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
            <div className="chakra-logo">
              <img
                src="https://i.ibb.co/84RFXYmB/logo.png"
                alt="Ambedkar Park Chakra"
              />
            </div>

            <span className="fw-bold ms-2 d-none d-sm-block">
              अम्बेडकर पार्क गंगाचोली
            </span>
          </Navbar.Brand>

          {/* JAI BHIM */}
          <h1 className="jai-bhim-title m-auto">
            जय भीम
          </h1>

          {/* RIGHT SIDE */}
          <div className="ms-auto d-flex align-items-center flex-shrink-0">

            {/* USERS LIST: ALL LOGGED-IN USERS */}
            {isLoggedIn && (
              <Button
                as={Link}
                to="/users"
                variant="outline-primary"
                size="sm"
                className="me-1"
                style={{
                  whiteSpace: "nowrap",
                  fontSize: "12px",
                  padding: "6px 8px",
                }}
              >
                👥 Users
              </Button>
            )}

            {/* ADMIN BUTTONS: DESKTOP */}
            {isAdmin && (
              <div className="d-none d-xl-flex align-items-center me-2">
                {adminLinks.map((item) => (
                  <Button
                    key={item.path}
                    as={Link}
                    to={item.path}
                    variant="outline-primary"
                    size="sm"
                    className="me-1"
                  >
                    {item.icon} {item.label}
                  </Button>
                ))}
              </div>
            )}

            {/* LOGGED-IN USER */}
            {isLoggedIn ? (
              <>
                <span className="me-2 d-none d-sm-inline">
                  Hi, {user.name}
                  {isAdmin && (
                    <span className="text-primary ms-1 fw-bold">
                      (Admin)
                    </span>
                  )}
                </span>

                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={handleLogout}
                  className="d-none d-sm-inline-block"
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
              className="btn btn-primary ms-1 mobile-menu-button"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#mobileSidebar"
              aria-controls="mobileSidebar"
              aria-label="Open navigation menu"
            >
              ☰
            </button>
          </div>
        </Container>
      </Navbar>

      {/* ================= MOBILE SIDEBAR ================= */}
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

          {/* PUBLIC LINKS */}
          <Nav className="flex-column">
            {publicLinks.map((item) => (
              <Nav.Link
                as="button"
                key={item.path}
                onClick={() => handleMobileNavigate(item.path)}
                className="text-start border-0 bg-transparent"
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>

          {/* USERS LIST: ALL LOGGED-IN USERS */}
          {isLoggedIn && (
            <>
              <hr />

              <h6 className="text-primary fw-bold">
                User Menu
              </h6>

              <Nav className="flex-column">
                <Nav.Link
                  as="button"
                  onClick={() => handleMobileNavigate("/users")}
                  className="text-start border-0 bg-transparent fw-semibold"
                >
                  👥 Users List
                </Nav.Link>
              </Nav>
            </>
          )}

          {/* ADMIN MENU */}
          {isAdmin && (
            <>
              <hr />

              <h6 className="text-primary fw-bold">
                Admin Menu
              </h6>

              <Nav className="flex-column">
                {adminLinks.map((item) => (
                  <Nav.Link
                    as="button"
                    key={item.path}
                    onClick={() => handleMobileNavigate(item.path)}
                    className="text-start border-0 bg-transparent"
                  >
                    {item.icon} {item.label}
                  </Nav.Link>
                ))}
              </Nav>
            </>
          )}

          {/* MOBILE AUTH */}
          <hr />

          {isLoggedIn ? (
            <>
              <div className="mb-3">
                <strong>👤 {user.name}</strong>

                <div>
                  <small className="text-muted">
                    {user.role}
                  </small>
                </div>
              </div>

              <Button
                variant="outline-danger"
                className="w-100"
                onClick={handleLogout}
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
      <style>{`
        .chakra-logo {
          height: 70px;
          width: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          animation: chakraRotate 7s linear infinite;
        }

        .chakra-logo img {
          height: 70px;
          width: 70px;
          object-fit: contain;
        }

        .jai-bhim-title {
          font-size: clamp(16px, 2vw, 28px);
          font-weight: bold;
          color: #0d6efd;
          white-space: nowrap;
          text-align: center;
        }

        .mobile-menu-button {
          display: block;
          flex-shrink: 0;
        }

        @media (min-width: 1200px) {
          .mobile-menu-button {
            display: none;
          }
        }

        @media (max-width: 779px) {
          #mobileSidebar {
            width: 300px;
            max-width: 85vw;
          }

          .chakra-logo {
            height: 44px;
            width: 44px;
          }

          .chakra-logo img {
            height: 44px;
            width: 44px;
          }

          .jai-bhim-title {
            font-size: 18px;
          }
        }

        @media (max-width: 380px) {
          .jai-bhim-title {
            font-size: 15px;
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
      `}</style>
    </>
  );
};

export default AppNavbar;