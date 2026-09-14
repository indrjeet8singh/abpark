import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <aside
      className="d-none d-md-block position-fixed start-0 bg-light border-end"
      style={{
        top: "90px",
        left: 0,
        width: "280px",
        height: "calc(100vh - 80px)",
        overflowY: "auto",
        zIndex: 1040,
      }}
    >
      {/* Logo / Brand */}
      <Link
        to="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
      >
        <span className="fs-2 me-2">☸</span>

        <span className="fs-4 fw-bold">अम्बेडकर पार्क</span>
      </Link>

      <hr />

      {/* Menu */}
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link
            to="/"
            className={`nav-link ${isActive("/") ? "active" : "link-dark"}`}
          >
            <span className="me-2">🏠</span>
            होम
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            className={`nav-link ${
              isActive("/about") ? "active" : "link-dark"
            }`}
          >
            <span className="me-2">ℹ️</span>
            पार्क के बारे में
          </Link>
        </li>

        <li>
          <Link
            to="/ambedkar"
            className={`nav-link ${
              isActive("/ambedkar") ? "active" : "link-dark"
            }`}
          >
            <span className="me-2">📖</span>
            बाबासाहेब अम्बेडकर
          </Link>
        </li>

        <li>
          <Link
            to="/mahapurush"
            className={`nav-link ${
              isActive("/mahapurush") ? "active" : "link-dark"
            }`}
          >
            <span className="me-2">👨‍🏫</span>
            बहुजन महापुरुष
          </Link>
        </li>

        {/* <li>
          <Link
            to="/activistpage"
            className={`nav-link ${
              isActive("/activistpage") ? "active" : "link-dark"
            }`}
          >
            <span className="me-2">👥</span>
            सामाजिक कार्यकर्ता
          </Link>
        </li> */}

        <li>
          <Link
            to="/gallery"
            className={`nav-link ${
              isActive("/gallery") ? "active" : "link-dark"
            }`}
          >
            <span className="me-2">🖼️</span>
            गैलरी
          </Link>
        </li>

        <li>
          <Link
            to="/events"
            className={`nav-link ${
              isActive("/events") ? "active" : "link-dark"
            }`}
          >
            <span className="me-2">📅</span>
            कार्यक्रम
          </Link>
        </li>

        <li>
          <Link
            to="/committee"
            className={`nav-link ${
              isActive("/committee") ? "active" : "link-dark"
            }`}
          >
            <span className="me-2">🤝</span>
            समिति सदस्य
          </Link>
        </li>

        <li>
          <Link
            to="/contact"
            className={`nav-link ${
              isActive("/contact") ? "active" : "link-dark"
            }`}
          >
            <span className="me-2">📞</span>
            संपर्क करें
          </Link>
        </li>
      </ul>

      <hr />

    </aside>
  );
};

export default Sidebar;
