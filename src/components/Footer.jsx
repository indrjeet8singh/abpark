import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";
import { IoHome } from "react-icons/io5";
import { FcGallery } from "react-icons/fc";
import { IoIosPeople } from "react-icons/io";
import { RiLoginCircleFill } from "react-icons/ri";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="ambedkar-footer">
      {/* Top Footer */}
      <Container className="py-5">
        <Row className="g-4">
          {/* About */}
          <Col lg={4} md={6}>
            <h4 className="footer-title">☸ अम्बेडकर पार्क</h4>

            <p className="footer-text">
              अम्बेडकर पार्क सामाजिक समानता, शिक्षा, भाईचारे और मानव सम्मान के
              विचारों को आगे बढ़ाने का एक प्रयास है।
            </p>

            <p className="footer-address">
              📍 ग्राम गंगाचोली, हसनपुर
              <br />
              जनपद अमरोहा, उत्तर प्रदेश
            </p>
          </Col>

          {/* Quick Links */}
          <Col lg={2} md={6}>
            <h5 className="footer-heading">महत्वपूर्ण लिंक</h5>

            <ul className="footer-links">
              <li>
                <Link to="/">होम</Link>
              </li>

              <li>
                <Link to="/about">हमारे बारे में</Link>
              </li>

              <li>
                <Link to="/ambedkar">बाबासाहेब</Link>
              </li>

              <li>
                <Link to="/mahapurush">बहुजन महापुरुष</Link>
              </li>

              <li>
                <Link to="/gallery">गैलरी</Link>
              </li>
            </ul>
          </Col>

          {/* More Links */}
          <Col lg={2} md={6}>
            <h5 className="footer-heading">अन्य जानकारी</h5>

            <ul className="footer-links">
              <li>
                <Link to="/events">आगामी कार्यक्रम</Link>
              </li>

              <li>
                <Link to="/committee">समिति सदस्य</Link>
              </li>

              <li>
                <Link to="/ugaai">सहयोग राशि सूची</Link>
              </li>

              <li>
                <Link to="/contact">संपर्क करें</Link>
              </li>
            </ul>
          </Col>

          {/* Contact */}
          <Col lg={4} md={6}>
            <h5 className="footer-heading">संपर्क करें</h5>

            <div className="contact-info">
              <p>
                <span>📞</span>
                <a href="tel:+919756030996">+91 9756030996</a>
              </p>

              <p>
                <span>✉️</span>
                <a href="dr.brassamiti@email.com">dr.brassamiti@email.com</a>
              </p>

              <p>
                <span>📍</span>
                ग्राम गंगाचोली, हसनपुर, अमरोहा, उत्तर प्रदेश
              </p>
            </div>

            <div className="footer-message">
              <span>“</span>
              शिक्षित बनो, संगठित रहो और संघर्ष करो।
              <span>”</span>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Bottom Quote */}
      <div className="footer-quote">
        <Container className="text-center">
          <h5>☸ जय भीम • जय भारत • नमो बुद्धाय ☸</h5>

          <p>शिक्षा • समानता • न्याय • भाईचारा • मानवता</p>
        </Container>
      </div>

      {/* Bottom Copyright */}
      <div className="footer-bottom">
        <Container>
          <Row className="align-items-center text-center">
            <Col md={4} className="text-md-start">
              <p className="mb-0">
                © {currentYear} अम्बेडकर पार्क, सर्वाधिकार
                सुरक्षित।
              </p>
            </Col>

            <Col md={4} className="text-md-center">
              <p className="mb-0">Developed By INDRA TALWAR</p>
            </Col>

            <Col md={4} className="text-md-end">
              <p className="mb-0">समाज • शिक्षा • समानता • एकता</p>
            </Col>
          </Row>
        </Container>
      </div>
      {/* mobile-tab */}

      {/* Bottom Quote */}
      <div className="footer-quote d-md-none bg-blue">
<Container
  fluid
  className="d-flex d-md-none fixed-bottom justify-content-around align-items-center bg-blue pt-2 shadow-lg py-3"
>
  <Link to="/">
  <IoHome size={30} />
  </Link>
  <Link to="/gallery">  <FcGallery size={30} /></Link>
<Link to="/committee">
 <IoIosPeople size={30} /></Link>
<Link to="/login"><RiLoginCircleFill size={30} /></Link>
 
  
</Container>
      </div>
    </footer>
  );
};

export default Footer;
