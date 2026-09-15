


import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import "./Committee.css";

const Committee = () => {
  const committeeMembers = [
    {
      initial:
        "https://i.ibb.co/FLJkbq8Y/IMG-20260414-011437.jpg",
      name: "बलवीर सिंह",
      role: "अध्यक्ष",
    },
    {
      initial:
        "https://i.ibb.co/FLJkbq8Y/IMG-20260414-011437.jpg",
      name: "लाल सिंह",
      role: "कोषाध्यक्ष",
    },
    {
      initial:
        "https://i.ibb.co/FLJkbq8Y/IMG-20260414-011437.jpg",
      name: "सतपाल सिंह",
      role: "महामंत्री एवं मुख्य प्रवक्ता",
    },
    {
      initial:
        "https://i.ibb.co/FLJkbq8Y/IMG-20260414-011437.jpg",
      name: "पुरुषोत्तम सरन",
      role: "मंत्री",
    },
    {
      initial:
        "https://i.ibb.co/FLJkbq8Y/IMG-20260414-011437.jpg",
      name: "विजेंद्र सिंह",
      role: "मंत्री",
    },
    {
      initial:
        "https://i.ibb.co/FLJkbq8Y/IMG-20260414-011437.jpg",
      name: "सुभाष",
      role: "प्रचारक",
    },
    {
      initial:
        "https://i.ibb.co/FLJkbq8Y/IMG-20260414-011437.jpg",
      name: "रामकिशन",
      role: "सदस्य",
    },
    {
      initial: "https://i.ibb.co/x8MCsTgm/bachan.jpg",
      name: "बचन सिंह",
      role: "सदस्य",
    },
    {
      initial:
        "https://i.ibb.co/FLJkbq8Y/IMG-20260414-011437.jpg",
      name: "खेमकरण",
      role: "सदस्य",
    },
    {
      initial:
        "https://i.ibb.co/FLJkbq8Y/IMG-20260414-011437.jpg",
      name: "Malkhan Singh",
      role: "सदस्य",
    },
    {
      initial:
        "https://i.ibb.co/v67QG2f6/mithun.jpg",
      name: "मिथुन",
      role: "सदस्य",
    },
    {
      initial:
        "https://i.ibb.co/FLJkbq8Y/IMG-20260414-011437.jpg",
      name: "विपिन",
      role: "सदस्य",
    },
  ];

  const managingTeam = [
    {
      memberPosition:"Head Coordinator",
      name: "रिंकू सिंह",
      images:
        "https://i.ibb.co/XZdpKLwf/file-000000004f408211b37b356deabe239a.png",
    },
    {
      memberPosition:"Coordinator",
      name: "शनि कुमार",
      images:
        "https://i.ibb.co/Xr4pM9KW/Sunny-photo-ntpc.jpg",
    },
    {
      memberPosition:" मैनेजिंग टीम सदस्य",
      name: "Indrajeet",
      images:
        "https://i.ibb.co/LXpnJy4m/1000229023.webp",
    },
    {
      memberPosition:" मैनेजिंग टीम सदस्य",
      name: "देवदत्त गौतम",
      images:
        "https://i.ibb.co/pr1J0ZGs/dedatta-Gautam.jpg",
    },
    {
      memberPosition:" मैनेजिंग टीम सदस्य",
      name: "अनिल कुमार",
      images:
        "https://i.ibb.co/FLJkbq8Y/IMG-20260414-011437.jpg",
    },
    {
      memberPosition:" मैनेजिंग टीम सदस्य",
      name: "अनिल कुमार",
      images:
        "https://i.ibb.co/FLJkbq8Y/IMG-20260414-011437.jpg",
    },
    {
      memberPosition:" मैनेजिंग टीम सदस्य",
      name: "उम्मेद गौतम",
      images:
        "https://i.ibb.co/HfVgJvsm/image-1400684.jpg",
    },
    {
      memberPosition:" मैनेजिंग टीम सदस्य",
      name: "कपिल",
      images:
        "https://i.ibb.co/FLJkbq8Y/IMG-20260414-011437.jpg",

    },
    {
      memberPosition:" मैनेजिंग टीम सदस्य",
      name: "Abhishek Talwar",
      images:
        "https://i.ibb.co/hR8DvqtQ/abhishek-Talwar.jpg",
    },
    {
      memberPosition:" मैनेजिंग टीम सदस्य",
      name: "सूर्यकांत",
      images:
        "https://i.ibb.co/4w4vGFjx/surya-Kant.jpg",
    },
  ];

  return (
    <div className="committee-page bg-light py-5">

      {/* Header */}
      <Container className="mb-5">
        <div className="text-center">
          <Badge bg="primary" className="px-3 py-2 mb-3">
            अम्बेडकर पार्क समिति
          </Badge>

          <h1 className="fw-bold text-dark committee-main-title">
            समिति एवं <span className="text-primary">सदस्यगण</span>
          </h1>

          <p className="text-secondary mx-auto committee-intro">
            अम्बेडकर पार्क की देखरेख, विकास और सामाजिक गतिविधियों के लिए
            समर्पित समिति एवं प्रबंधन टीम।
          </p>
        </div>
      </Container>

      {/* Founder Section */}
      <Container className="mb-5">
        <Card className="border-0 shadow-lg overflow-hidden founder-card">
          <Row className="g-0 align-items-stretch">

            {/* Founder Image */}
            <Col
              lg={4}
              className="text-white text-center p-0 founder-image-col"
            >
              <img
                src="https://i.ibb.co/4Bqm6Bk/Whats-App-Image-2026-09-11-at-9-57-19-AM.jpg"
                alt="श्री नन्हे सिंह जी"
                className="founder-background-image"
              />

              {/* Overlay */}
              <div className="founder-overlay"></div>

              {/* Founder Content */}
              <div className="founder-content">

                <div className="founder-profile">
                  <img
                    src="https://i.ibb.co/4Bqm6Bk/Whats-App-Image-2026-09-11-at-9-57-19-AM.jpg"
                    alt="श्री नन्हे सिंह जी"
                  />
                </div>

                <h3 className="fw-bold mb-1">
                  श्री नन्हे सिंह जी
                </h3>

                <p className="mb-2 fs-5">
                  भूतपूर्व प्रधान
                </p>

                <hr className="border-white opacity-75 founder-line" />

                <h5 className="fw-bold mb-0">
                  संस्थापक
                </h5>
              </div>
            </Col>

            {/* Founder Description */}
            <Col lg={8}>
              <div className="p-4 p-lg-5 founder-description">
                <h3 className="fw-bold text-primary mb-3">
                  संस्थापक का महत्वपूर्ण योगदान
                </h3>

                <p className="text-secondary fs-5">
                  अम्बेडकर पार्क की स्थापना और इसके विकास में
                  <strong> श्री नन्हे सिंह जी</strong> का महत्वपूर्ण योगदान
                  रहा है। उनके प्रयासों और सामाजिक सोच के माध्यम से यह पार्क
                  समाज के लिए एक प्रेरणादायक स्थान बना।
                </p>

                <div className="bg-light border-start border-primary border-4 p-3">
                  <p className="mb-0 fw-semibold">
                    समाज के विकास, शिक्षा और समानता के उद्देश्य से अम्बेडकर
                    पार्क को एक प्रेरणादायक सामाजिक केंद्र के रूप में विकसित
                    करने में उनका योगदान उल्लेखनीय रहा है।
                  </p>
                </div>
              </div>
            </Col>

          </Row>
        </Card>
      </Container>

      {/* History / Journey */}
      <Container className="mb-5">
        <Card className="border-0 shadow-sm">
          <Card.Body className="p-4 p-lg-5">

            <div className="text-center mb-4">
              <h2 className="fw-bold">
                पार्क की{" "}
                <span className="text-primary">
                  प्रेरणादायक यात्रा
                </span>
              </h2>

              <div className="mx-auto bg-primary journey-line"></div>
            </div>

            <p className="text-secondary fs-5 text-center">
              डॉ. भीमराव अम्बेडकर पार्क ग्राम गंगाचोली के सामाजिक,
              शैक्षिक और सांस्कृतिक विकास का एक महत्वपूर्ण केंद्र है।
            </p>

            <Row className="g-4 mt-2">

              <Col md={4}>
                <div className="text-center h-100 p-4 border rounded-3">
                  <div className="fs-1 mb-3">🎓</div>
                  <h5 className="fw-bold">शिक्षा</h5>
                  <p className="text-secondary mb-0">
                    शिक्षा और जागरूकता के माध्यम से समाज को आगे बढ़ाने
                    का संदेश।
                  </p>
                </div>
              </Col>

              <Col md={4}>
                <div className="text-center h-100 p-4 border rounded-3">
                  <div className="fs-1 mb-3">🤝</div>
                  <h5 className="fw-bold">संगठन</h5>
                  <p className="text-secondary mb-0">
                    समाज को संगठित कर सामाजिक एकता और भाईचारे को
                    मजबूत करना।
                  </p>
                </div>
              </Col>

              <Col md={4}>
                <div className="text-center h-100 p-4 border rounded-3">
                  <div className="fs-1 mb-3">⚖️</div>
                  <h5 className="fw-bold">सामाजिक न्याय</h5>
                  <p className="text-secondary mb-0">
                    समानता, स्वतंत्रता और सामाजिक न्याय के विचारों
                    को आगे बढ़ाना।
                  </p>
                </div>
              </Col>

            </Row>

            <div className="text-center mt-5">
              <div className="bg-primary text-white rounded-3 p-4 shadow-sm">
                <h4 className="fw-bold mb-2">
                  "शिक्षित बनो, संगठित रहो और संघर्ष करो"
                </h4>
                <small>
                  — बाबा साहेब डॉ. भीमराव अम्बेडकर
                </small>
              </div>
            </div>

          </Card.Body>
        </Card>
      </Container>

      {/* Committee Members */}
      <Container className="mb-5">

        <div className="text-center mb-4">
          <Badge bg="primary" className="mb-2">
            समिति सदस्य
          </Badge>

          <h2 className="fw-bold">
            पार्क समिति एवं{" "}
            <span className="text-primary">
              सदस्यगण
            </span>
          </h2>

          <p className="text-secondary">
            अम्बेडकर पार्क की देखरेख और विकास के लिए समर्पित टीम
          </p>
        </div>

        <Row className="g-4">

          {committeeMembers.map((member, index) => (
            <Col
              key={index}
              xs={12}
              sm={6}
              lg={6}
              xl={3}
            >
              <Card className="committee-member-card h-100 border-0 shadow-sm text-center">

                <Card.Body className="p-3 p-sm-4">

                  {/* Responsive Image */}
                  <div className="committee-image-wrapper">
                    <img
                      src={member.initial}
                      alt={member.name}
                      className="committee-member-image"
                    />
                  </div>

                  <h5 className="fw-bold mb-2 committee-member-name">
                    {member.name}
                  </h5>

                  <Badge
                    bg="light"
                    text="primary"
                    className="committee-role"
                  >
                    {member.role}
                  </Badge>

                </Card.Body>
              </Card>
            </Col>
          ))}

        </Row>
      </Container>

      {/* Managing Team */}
      <Container>

        <div className="text-center mb-4">
          <Badge bg="dark" className="mb-2">
            Management
          </Badge>

          <h2 className="fw-bold">
            मैनेजिंग{" "}
            <span className="text-primary">
              टीम
            </span>
          </h2>

          <p className="text-secondary">
            पार्क की गतिविधियों और प्रबंधन में सक्रिय सहयोगी
          </p>
        </div>

        <Row className="g-3">

          {managingTeam.map((member, index) => (
            <Col
              xs={12}
              sm={6}
              lg={3}
              key={index}
            >
              <Card className="managing-card border-0 shadow-sm h-100">

                <Card.Body className="d-flex align-items-center">

                  <div className="managing-image-wrapper">
                    <img
                      src={member.images}
                      alt={member.name}
                      className="managing-image"
                    />
                  </div>

                  <div className="managing-info">
                    <h6 className="fw-bold mb-1">
                      {member.name}
                    </h6>

                    <small className="text-secondary">
                      {member.memberPosition}
                     
                    </small>
                  </div>

                </Card.Body>
              </Card>
            </Col>
          ))}

        </Row>
      </Container>

      {/* Bottom Message */}
      <Container className="mt-5">

        <div className="text-center bg-dark text-white rounded-4 p-4 p-lg-5 shadow">

          <h3 className="fw-bold">
            समाज की एकता — पार्क की शक्ति
          </h3>

          <p className="mb-0 text-white-50">
            सभी समिति सदस्यों, सामाजिक कार्यकर्ताओं और ग्रामवासियों के
            सहयोग से अम्बेडकर पार्क निरंतर विकास की ओर अग्रसर है।
          </p>

        </div>

      </Container>

    </div>
  );
};

export default Committee;
