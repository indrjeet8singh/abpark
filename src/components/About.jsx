import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Badge,
} from "react-bootstrap";
import "./About.css";

const About = () => {
  const defaultImage =
    "https://i.ibb.co/FLJkbq8Y/IMG-20260414-011437.jpg";

  const committeeMembers = [
    { name: "बलवीर सिंह", role: "अध्यक्ष", image: defaultImage },
    { name: "लाल सिंह", role: "कोषाध्यक्ष", image: defaultImage },
    {
      name: "सतपाल सिंह",
      role: "महामंत्री एवं मुख्य प्रवक्ता",
      image: defaultImage,
    },
    { name: "पुरुषोत्तम सरन", role: "मंत्री", image: defaultImage },
    { name: "विजेंद्र सिंह", role: "मंत्री", image: defaultImage },
    { name: "सुभाष", role: "प्रचारक", image: defaultImage },
    { name: "रामकिशन", role: "सदस्य", image: defaultImage },
    { name: "बचन सिंह", role: "सदस्य", image: defaultImage },
    { name: "खेमकरण", role: "सदस्य", image: defaultImage },
    { name: "मदन सिंह", role: "सदस्य", image: defaultImage },
    { name: "धर्मी", role: "सदस्य", image: defaultImage },
    { name: "मिथुन", role: "सदस्य", image: defaultImage },
    { name: "विपिन", role: "सदस्य", image: defaultImage },
  ];

 const managingTeam = [
    {
      memberPosition:"Head Coordinator",
      name: "रिंकू सिंह",
      images:
        "https://i.ibb.co/FLJkbq8Y/IMG-20260414-011437.jpg",
    },
    {
      memberPosition:"Coordinator",
      name: "शनि कुमार",
      images:
        "https://i.ibb.co/FLJkbq8Y/IMG-20260414-011437.jpg",
    },
    {
      memberPosition:" मैनेजिंग टीम सदस्य",
      name: "Indrajeet",
      images:
        "https://i.ibb.co/FLJkbq8Y/IMG-20260414-011437.jpg",
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
    <div className="about-page">

      {/* ================= HERO SECTION ================= */}
      <section className="about-hero">
        <Container>
          <Row className="align-items-center">

            <Col lg={8}>
              <Badge bg="light" text="dark" className="mb-3">
                जय भीम • बहुजन मिशन
              </Badge>

              <h1>डॉ. भीमराव अम्बेडकर पार्क</h1>

              <h3>
                ग्राम गंगाचोली, तहसील हसनपुर, जनपद अमरोहा
              </h3>

              <p>
                यह पार्क सामाजिक समानता, शिक्षा, भाईचारे और
                बाबा साहेब डॉ. भीमराव अम्बेडकर के विचारों को
                जन-जन तक पहुँचाने के उद्देश्य से समर्पित है।
              </p>
            </Col>

            <Col lg={4} className="text-center">
              <div className="ambedkar-symbol">
                <img
                  src="https://i.ibb.co/2YgdCGws/images.jpg"
                  alt="डॉ. भीमराव अम्बेडकर"
                  style={{
                    height: "200px",
                    width: "200px",
                    borderRadius: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Col>

          </Row>
        </Container>
      </section>


      {/* ================= ABOUT PARK ================= */}
      <section className="py-5">
        <Container>

          <div className="section-title text-center mb-5">
            <h2>अम्बेडकर पार्क के बारे में</h2>

            <p>
              सामाजिक चेतना, समानता और बहुजन समाज के सम्मान का प्रतीक
            </p>
          </div>

          <Row className="g-4">

            <Col md={4}>
              <Card className="info-card h-100 text-center">
                <Card.Body>

                  <div className="icon">📍</div>

                  <h4>स्थान</h4>

                  <p>
                    ग्राम गंगाचोली
                    <br />
                    तहसील हसनपुर
                    <br />
                    जनपद अमरोहा, उत्तर प्रदेश
                  </p>

                </Card.Body>
              </Card>
            </Col>


            <Col md={4}>
              <Card className="info-card h-100 text-center">
                <Card.Body>

                  <div className="icon">📐</div>

                  <h4>पार्क का क्षेत्रफल</h4>

                  <h3>0.2030 हेक्टेयर</h3>

                  <p>
                    सार्वजनिक सामाजिक एवं सांस्कृतिक गतिविधियों
                    के लिए समर्पित स्थान।
                  </p>

                </Card.Body>
              </Card>
            </Col>


            <Col md={4}>
              <Card className="info-card h-100 text-center">
                <Card.Body>

                  <div className="icon">📄</div>

                  <h4>गाटा संख्या</h4>

                  <h3>809</h3>

                  <p>
                    अम्बेडकर पार्क की भूमि से संबंधित
                    आधिकारिक विवरण।
                  </p>

                </Card.Body>
              </Card>
            </Col>

          </Row>
        </Container>
      </section>


      {/* ================= FOUNDER ================= */}
      <section className="founder-section py-5">
        <Container>

          <Row className="justify-content-center">

            <Col lg={9}>

              <Card className="founder-card border-0 shadow">

                <Card.Body className="p-5 text-center">

                  {/* Founder Image */}
                  <div
                    className="founder-icon"
                    style={{
                      width: "200px",
                      height: "200px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      margin: "0 auto 20px",
                    }}
                  >
                    <img
                      src="https://i.ibb.co/4Bqm6Bk/Whats-App-Image-2026-09-11-at-9-57-19-AM.jpg"
                      alt="श्री नन्हे सिंह जी"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  <h2>संस्थापक</h2>

                  <h3>श्री नन्हे सिंह जी</h3>

                  <h5>भूतपूर्व प्रधान</h5>

                  <p className="mt-3">
                    अम्बेडकर पार्क की स्थापना और इसके विकास में
                    श्री नन्हे सिंह जी का महत्वपूर्ण योगदान रहा है।
                    उनके प्रयासों और सामाजिक सोच के माध्यम से
                    यह पार्क समाज के लिए एक प्रेरणादायक स्थान बना।
                  </p>

                </Card.Body>

              </Card>

            </Col>

          </Row>

        </Container>
      </section>


      {/* ================= HISTORY ================= */}
      <section className="py-5">
        <Container>

          <div className="section-title text-center mb-4">
            <h2>पार्क की प्रेरणादायक यात्रा</h2>
          </div>

          <Row>

            <Col lg={10} className="mx-auto">

              <div className="history-box">

                <p>
                  डॉ. भीमराव अम्बेडकर पार्क ग्राम गंगाचोली के
                  सामाजिक, शैक्षिक और सांस्कृतिक विकास का एक
                  महत्वपूर्ण केंद्र है।
                </p>

                <p>
                  इस पार्क की स्थापना का उद्देश्य बाबा साहेब डॉ.
                  भीमराव अम्बेडकर के समानता, शिक्षा, संगठन और
                  सामाजिक न्याय के विचारों को समाज तक पहुँचाना है।
                </p>

                <p>
                  पार्क के निर्माण और विकास में गांव के अनेक
                  सम्मानित व्यक्तियों, समिति सदस्यों और सामाजिक
                  कार्यकर्ताओं ने अपना महत्वपूर्ण योगदान दिया है।
                </p>

                <blockquote>
                  "शिक्षित बनो, संगठित रहो और संघर्ष करो"
                </blockquote>

              </div>

            </Col>

          </Row>

        </Container>
      </section>


      {/* ================= COMMITTEE MEMBERS ================= */}
      <section className="committee-section py-5">

        <Container>

          <div className="section-title text-center mb-5">

            <h2>पार्क समिति एवं सदस्यगण</h2>

            <p>
              अम्बेडकर पार्क की देखरेख और विकास के लिए समर्पित टीम
            </p>

          </div>


          <Row className="g-4">

            {committeeMembers.map((member, index) => (

              <Col
                lg={3}
                md={4}
                sm={6}
                key={index}
              >

                <Card className="member-card h-100 text-center">

                  <Card.Body>

                    {/* Member Image */}
                    <div
                      className="member-avatar"
                      style={{
                        width: "90px",
                        height: "90px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        margin: "0 auto 15px",
                      }}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    </div>


                    <h5>{member.name}</h5>

                    <Badge bg="primary">
                      {member.role}
                    </Badge>

                  </Card.Body>

                </Card>

              </Col>

            ))}

          </Row>

        </Container>

      </section>


      {/* ================= MANAGING TEAM ================= */}
      <section className="py-5">

        <Container>

          <div className="section-title text-center mb-5">

            <h2>मैनेजिंग टीम</h2>

            <p>
              पार्क की गतिविधियों और प्रबंधन में सक्रिय सहयोगी
            </p>

          </div>


          <Row className="g-4 justify-content-center">

            {managingTeam.map((member, index) => (

              <Col
                lg={3}
                md={4}
                sm={6}
                key={index}
              >

                <Card className="managing-card text-center h-100">

                  <Card.Body>

                    {/* Team Image */}
                    <div
                      className="team-number"
                      style={{
                        width: "75px",
                        height: "75px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        margin: "0 auto 15px",
                      }}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    </div>


                    <h5>{member.name}</h5>

                    <p>
                      {member.memberPosition}
                    </p>

                  </Card.Body>

                </Card>

              </Col>

            ))}

          </Row>

        </Container>

      </section>


      {/* ================= VISION ================= */}
      <section className="vision-section py-5">

        <Container>

          <Row className="text-center">

            <Col md={4}>

              <div className="vision-box">

                <h2>🎓</h2>

                <h4>शिक्षा</h4>

                <p>
                  समाज में शिक्षा और जागरूकता को बढ़ावा देना।
                </p>

              </div>

            </Col>


            <Col md={4}>

              <div className="vision-box">

                <h2>⚖️</h2>

                <h4>समानता</h4>

                <p>
                  सभी नागरिकों के लिए समान अधिकार और सम्मान।
                </p>

              </div>

            </Col>


            <Col md={4}>

              <div className="vision-box">

                <h2>🤝</h2>

                <h4>एकता</h4>

                <p>
                  समाज में भाईचारा और संगठन की भावना को मजबूत करना।
                </p>

              </div>

            </Col>

          </Row>

        </Container>

      </section>

    </div>
  );
};

export default About;