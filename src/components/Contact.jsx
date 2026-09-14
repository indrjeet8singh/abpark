import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
} from "react-bootstrap";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Form Data:", formData);

    setSubmitted(true);

    setFormData({
      name: "",
      mobile: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="bg-light">
      {/* ================= HERO ================= */}

      <section className="bg-dark text-white py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={8}>
              <span className="badge bg-warning text-dark px-3 py-2 mb-3">
                अम्बेडकर पार्क
              </span>

              <h1 className="display-4 fw-bold">
                हमसे <span className="text-warning">संपर्क करें</span>
              </h1>

              <p className="lead mb-0">
                अम्बेडकर पार्क से संबंधित किसी भी जानकारी, सुझाव अथवा कार्यक्रम
                के संबंध में हमसे संपर्क करें।
              </p>
            </Col>

            <Col lg={4} className="text-lg-end mt-4 mt-lg-0">
              <div className="display-1">📞</div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= CONTACT SECTION ================= */}

      <section className="py-5">
        <Container>
          <Row className="g-4">
            {/* ================= CONTACT INFO ================= */}

            <Col lg={5}>
              <div className="mb-4">
                <span className="badge bg-primary px-3 py-2 mb-3">
                  संपर्क जानकारी
                </span>

                <h2 className="fw-bold">
                  आइए <span className="text-primary">जुड़ें</span>
                </h2>

                <p className="text-muted">
                  अम्बेडकर पार्क ग्राम गंगाचौली में स्थित है। पार्क से संबंधित
                  जानकारी एवं सुझाव के लिए आप हमसे संपर्क कर सकते हैं।
                </p>
              </div>

              {/* Address */}

              <Card className="border-0 shadow-sm rounded-4 mb-3">
                <Card.Body className="p-4">
                  <div className="d-flex">
                    <div
                      className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{
                        minWidth: "55px",
                        height: "55px",
                        fontSize: "25px",
                      }}
                    >
                      📍
                    </div>

                    <div>
                      <h5 className="fw-bold mb-1">पता</h5>

                      <p className="text-muted mb-0">
                        अम्बेडकर पार्क
                        <br />
                        ग्राम गंगाचौली
                        <br />
                        तहसील हसनपुर
                        <br />
                        जिला अमरोहा, उत्तर प्रदेश
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>

              {/* Phone */}

              <Card className="border-0 shadow-sm rounded-4 mb-3">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center">
                    <div
                      className="bg-success bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{
                        minWidth: "55px",
                        height: "55px",
                        fontSize: "25px",
                      }}
                    >
                      📞
                    </div>

                    <div>
                      <h5 className="fw-bold mb-1">फोन</h5>

                      <p className="text-muted mb-0">+91 9756030996</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>

              {/* Email */}

              <Card className="border-0 shadow-sm rounded-4 mb-3">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center">
                    <div
                      className="bg-danger bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{
                        minWidth: "55px",
                        height: "55px",
                        fontSize: "25px",
                      }}
                    >
                      ✉️
                    </div>

                    <div>
                      <h5 className="fw-bold mb-1">ईमेल</h5>

                      <p className="text-muted mb-0">dr.brassamiti@email.com</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>

              {/* Social */}

              <div className="mt-4">
                <h5 className="fw-bold mb-3">सोशल मीडिया</h5>

                <div className="d-flex gap-2">
                  <Button
                    variant="primary"
                    className="rounded-circle"
                    style={{ width: "45px", height: "45px" }}
                  >
                    f
                  </Button>

                  <Button
                    variant="danger"
                    className="rounded-circle"
                    style={{ width: "45px", height: "45px" }}
                  >
                    ▶
                  </Button>

                  <Button
                    variant="dark"
                    className="rounded-circle"
                    style={{ width: "45px", height: "45px" }}
                  >
                    X
                  </Button>

                  <Button
                    variant="success"
                    className="rounded-circle"
                    style={{ width: "45px", height: "45px" }}
                  >
                    W
                  </Button>
                </div>
              </div>
            </Col>

            {/* ================= CONTACT FORM ================= */}

            <Col lg={7}>
              <Card className="border-0 shadow rounded-4">
                <Card.Body className="p-4 p-md-5">
                  <div className="mb-4">
                    <h3 className="fw-bold">अपना संदेश भेजें</h3>

                    <p className="text-muted">
                      नीचे दिया गया फॉर्म भरकर हमें अपना संदेश भेजें।
                    </p>
                  </div>

                  {submitted && (
                    <Alert variant="success" className="rounded-3">
                      ✅ आपका संदेश सफलतापूर्वक भेज दिया गया है।
                    </Alert>
                  )}

                  <Form onSubmit={handleSubmit}>
                    {/* Name + Mobile */}

                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="fw-semibold">
                            आपका नाम
                          </Form.Label>

                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="अपना नाम लिखें"
                            required
                            className="py-2"
                          />
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="fw-semibold">
                            मोबाइल नंबर
                          </Form.Label>

                          <Form.Control
                            type="tel"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            placeholder="मोबाइल नंबर"
                            required
                            className="py-2"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    {/* Email + Subject */}

                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="fw-semibold">ईमेल</Form.Label>

                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="example@gmail.com"
                            className="py-2"
                          />
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="fw-semibold">विषय</Form.Label>

                          <Form.Select
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="py-2"
                            required
                          >
                            <option value="">विषय चुनें</option>

                            <option value="कार्यक्रम">
                              कार्यक्रम से संबंधित
                            </option>

                            <option value="सुझाव">सुझाव</option>

                            <option value="शिकायत">शिकायत</option>

                            <option value="अन्य">अन्य</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>

                    {/* Message */}

                    <Form.Group className="mb-4">
                      <Form.Label className="fw-semibold">
                        आपका संदेश
                      </Form.Label>

                      <Form.Control
                        as="textarea"
                        rows={6}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="अपना संदेश लिखें..."
                        required
                      />
                    </Form.Group>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-100 fw-bold"
                    >
                      संदेश भेजें →
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= MAP / LOCATION ================= */}

      <section className="pb-5">
        <Container>
          <Card className="border-0 shadow rounded-4 overflow-hidden">
            <Card.Body className="p-0">
              <div
                className="bg-secondary bg-opacity-10 d-flex align-items-center justify-content-center text-center"
                style={{ minHeight: "300px" }}
              >
                <div>
                  <div className="display-3 mb-3">📍</div>

                  <h3 className="fw-bold">अम्बेडकर पार्क</h3>

                  <p className="text-muted">
                    ग्राम गंगाचौली, तहसील हसनपुर, जिला अमरोहा, उत्तर प्रदेश
                  </p>

                  <Button
                    variant="primary"
                    href="https://maps.app.goo.gl/NhUN6ScQTva2w5da7"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Google Maps पर देखें
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Container>
      </section>

      {/* ================= FOOTER MESSAGE ================= */}

      <section className="bg-primary text-white py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={8}>
              <h3 className="fw-bold">आपका सुझाव हमारे लिए महत्वपूर्ण है।</h3>

              <p className="mb-0">
                आइए मिलकर शिक्षा, समानता, सामाजिक न्याय और भाईचारे के मूल्यों को
                आगे बढ़ाएं।
              </p>
            </Col>

            <Col md={4} className="text-md-end mt-3 mt-md-0">
              <span className="fs-1">⚖️ 📚 🤝 🇮🇳</span>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
