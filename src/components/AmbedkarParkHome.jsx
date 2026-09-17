import React from "react";
import {
  Container,
  Row,
  Col,
  Carousel,
  Card,
  Button,
  Badge,
} from "react-bootstrap";

import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

const AmbedkarParkHome = () => {
  const features = [
    {
      icon: "📚",
      title: "शिक्षा",
      text: "बाबासाहेब ने शिक्षा को सामाजिक परिवर्तन और आत्मसम्मान का सबसे महत्वपूर्ण माध्यम माना।",
    },
    {
      icon: "⚖️",
      title: "समानता",
      text: "जाति, भेदभाव और असमानता के विरुद्ध बाबासाहेब का संघर्ष आज भी प्रेरणा देता है।",
    },
    {
      icon: "✊",
      title: "सामाजिक न्याय",
      text: "वंचित और शोषित वर्गों के अधिकारों एवं सम्मान के लिए जीवनभर संघर्ष किया।",
    },
    {
      icon: "📘",
      title: "संविधान",
      text: "भारतीय संविधान के निर्माण में बाबासाहेब का ऐतिहासिक और महत्वपूर्ण योगदान रहा।",
    },
  ];

  const history = [
    {
      year: "1891",
      title: "जन्म",
      text: "14 अप्रैल 1891 को महू, मध्य प्रदेश में डॉ. भीमराव रामजी अंबेडकर का जन्म हुआ।",
    },
    {
      year: "1913–1923",
      title: "उच्च शिक्षा",
      text: "उन्होंने भारत के साथ अमेरिका और इंग्लैंड में उच्च शिक्षा प्राप्त की और कानून, अर्थशास्त्र तथा राजनीति का गहन अध्ययन किया।",
    },
    {
      year: "1927",
      title: "महाड़ सत्याग्रह",
      text: "सार्वजनिक जलस्रोतों पर समान अधिकार के लिए महाड़ सत्याग्रह सामाजिक समानता के संघर्ष का महत्वपूर्ण अध्याय बना।",
    },
    {
      year: "1930",
      title: "कालाराम मंदिर आंदोलन",
      text: "नासिक में मंदिर प्रवेश और धार्मिक-सामाजिक समानता के अधिकार के लिए आंदोलन किया।",
    },
    {
      year: "1932",
      title: "पूना समझौता",
      text: "वंचित वर्गों के राजनीतिक प्रतिनिधित्व से जुड़े ऐतिहासिक समझौते में बाबासाहेब की महत्वपूर्ण भूमिका रही।",
    },
    {
      year: "1947",
      title: "स्वतंत्र भारत",
      text: "स्वतंत्र भारत के पहले कानून मंत्री बने और संविधान निर्माण की प्रक्रिया में महत्वपूर्ण भूमिका निभाई।",
    },
    {
      year: "1950",
      title: "संविधान लागू",
      text: "भारत का संविधान 26 जनवरी 1950 को लागू हुआ, जिसमें न्याय, स्वतंत्रता, समानता और बंधुता जैसे मूल्यों को स्थान मिला।",
    },
    {
      year: "1956",
      title: "बौद्ध धम्म दीक्षा",
      text: "14 अक्टूबर 1956 को नागपुर में बाबासाहेब ने बौद्ध धम्म ग्रहण किया।",
    },
  ];

  return (
    <div className="bg-light">
      {/* ================= NAVBAR ================= */}
      {/* <nav
        className="navbar navbar-expand-lg navbar-dark sticky-top shadow"
        style={{ backgroundColor: "#003b73" }}
      >
        <Container>
          <Link
            className="navbar-brand fw-bold fs-4"
            href="#home"
          >
            🔵 अंबेडकर पार्क
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#parkNavbar"
            aria-controls="parkNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="parkNavbar"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link className="nav-link active" href="#home">
                  होम
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  पार्क के बारे में
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" href="#history">
                  बाबासाहेब का संघर्ष
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" href="#features">
                  विशेषताएँ
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" href="#gallery">
                  गैलरी
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" href="#location">
                  स्थान
                </Link>
              </li>

            </ul>

            <Button
              href="#history"
              variant="light"
              className="ms-lg-3 rounded-pill px-4"
            >
              इतिहास पढ़ें
            </Button>
          </div>
        </Container>
      </nav> */}

      {/* ================= HERO ================= */}
      <section id="home" className="p-0">
        <Carousel fade interval={5000}>
          {/* SLIDE 1 */}
          <Carousel.Item>
            <img
              src="https://i.ibb.co/fYFcZNQz/IMG-20260414-203400.jpg"
              alt="अंबेडकर पार्क ग्राम गंगाचौली"
              className="d-block w-100"
              style={{
                height: "650px",
                objectFit: "cover",
                filter: "brightness(45%)",
              }}
            />

            {/* <Carousel.Caption className="mb-4 mb-md-5">

              <Badge
                bg="primary"
                className="px-3 py-2 mb-3 fs-6"
              >
                ग्राम गंगाचौली
              </Badge>

              <h1 className="display-3 fw-bold">
                अंबेडकर पार्क
              </h1>

              <p className="fs-4 fw-semibold">
                शिक्षा • समानता • स्वतंत्रता • न्याय • बंधुता
              </p>

              <p className="lead">
                ग्राम गंगाचौली, तहसील हसनपुर, जिला अमरोहा
              </p>

              <Button
                href="#about"
                variant="primary"
                size="lg"
                className="rounded-pill px-4"
              >
                पार्क के बारे में जानें
              </Button>

            </Carousel.Caption> */}
          </Carousel.Item>
          {/* SLIDE 2 */}
          <Carousel.Item>
            <img
              src="https://i.ibb.co/gM9ysvGF/Sanjay-Talwar-And-Other.jpg"
              alt="अंबेडकर पार्क"
              className="d-block w-100"
              style={{
                height: "650px",
                objectFit: "cover",
                filter: "brightness(40%)",
              }}
            />
          </Carousel.Item>
{/* ----------------------------------------------- */}
  <Carousel.Item>
            <img
              src="https://i.ibb.co/8n8xx3GQ/Whats-App-Image-2026-09-11-at-12-30-45-PM-2.jpg"
              alt="अंबेडकर पार्क"
              className="d-block w-100"
              style={{
                height: "650px",
                objectFit: "cover",
                filter: "brightness(40%)",
              }}
            />
          </Carousel.Item>
{/* --------------------------------------------------- */}
          {/* SLIDE 3 */}
          <Carousel.Item>
            <img
              src="https://i.ibb.co/PZdfrtTj/Chaman-And-Devdatta.jpg"
              alt="अंबेडकर पार्क image"
              className="d-block w-100"
              style={{
                height: "650px",
                objectFit: "cover",
                filter: "brightness(40%)",
              }}
            />

            <Carousel.Caption className="mb-5">
              <h1 className="display-4 fw-bold">
                बाबासाहेब के संघर्ष की प्रेरणा
              </h1>

              <p className="fs-5">
                सामाजिक भेदभाव के विरुद्ध संघर्ष से संविधान निर्माण तक की
                ऐतिहासिक यात्रा
              </p>

              <Button
                href="#history"
                variant="light"
                size="lg"
                className="rounded-pill px-4"
              >
                संघर्ष की कहानी पढ़ें
              </Button>
            </Carousel.Caption>
          </Carousel.Item>

          {/* SLIDE 3 */}
          <Carousel.Item>
            <img
              src="https://i.ibb.co/b84skjh/group2.jpg"
              alt="ग्राम गंगाचौली अंबेडकर पार्क image"
              className="d-block w-100"
              style={{
                height: "650px",
                objectFit: "cover",
                filter: "brightness(40%)",
              }}
            />

            <Carousel.Caption className="mb-5">
              <h1 className="display-4 fw-bold">
                एक पार्क, एक विचार, एक प्रेरणा
              </h1>

              <p className="fs-5">
                आने वाली पीढ़ियों को शिक्षा और समानता का संदेश देने वाला स्थान
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      {/* ================= INTRO ================= */}
      <Container className="py-5">
        <Row className="g-4 text-center">
          <Col md={4}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="p-4">
                <div className="display-4 mb-3">🏛️</div>

                <h4 className="fw-bold">अंबेडकर पार्क</h4>

                <p className="text-muted mb-0">
                  बाबासाहेब डॉ. भीमराव अंबेडकर के विचारों और सामाजिक न्याय के
                  संदेश को समर्पित सार्वजनिक स्थल।
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="p-4">
                <div className="display-4 mb-3">📍</div>

                <h4 className="fw-bold">ग्राम गंगाचौली</h4>

                <p className="text-muted mb-0">
                  तहसील हसनपुर, जिला अमरोहा, उत्तर प्रदेश।
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="p-4">
                <div className="display-4 mb-3">⚖️</div>

                <h4 className="fw-bold">समानता का संदेश</h4>

                <p className="text-muted mb-0">
                  शिक्षा, समानता, स्वतंत्रता, सामाजिक न्याय और भाईचारे की
                  प्रेरणा।
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* ================= ABOUT ================= */}
      <section id="about" className="py-5 bg-white">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <img
                src="https://i.ibb.co/7JzmsHkG/Whats-App-Image-2026-09-11-at-12-30-45-PM-1.jpg"
                alt="अंबेडकर पार्क गंगाचौली image"
                className="img-fluid rounded-4 shadow"
                style={{
                  width: "100%",
                  height: "450px",
                  objectFit: "cover",
                }}
              />
            </Col>

            <Col lg={6}>
              <Badge bg="primary" className="px-3 py-2 mb-3">
                पार्क के बारे में
              </Badge>

              <h2 className="display-6 fw-bold">अंबेडकर पार्क</h2>

              <p className="lead text-secondary">
                ग्राम गंगाचौली, तहसील हसनपुर, जिला अमरोहा में स्थित अंबेडकर
                पार्क बाबासाहेब डॉ. भीमराव अंबेडकर के विचारों और सामाजिक न्याय
                की भावना को समर्पित सार्वजनिक स्थल है।
              </p>

              <p className="text-muted">
                बाबासाहेब ने अपना जीवन सामाजिक भेदभाव, अस्पृश्यता और असमानता के
                विरुद्ध संघर्ष करते हुए शिक्षा, अधिकार और सम्मान की लड़ाई को आगे
                बढ़ाने में लगाया।
              </p>

              <p className="text-muted">
                यह पार्क आने वाली पीढ़ियों को उनके संघर्ष, विचार और संविधान में
                दिए गए समानता एवं न्याय के मूल्यों से परिचित कराने का एक माध्यम
                है।
              </p>

              <Button
                href="#history"
                variant="primary"
                className="rounded-pill px-4"
              >
                बाबासाहेब का संघर्ष →
              </Button>
            </Col>
          </Row>
          {/* <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/040u0a-CvRY"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div> */}
          <section className="py-5">
            <div className="container">
              <div className="text-center mb-4">
                <h2 className="fw-bold">अम्बेडकर पार्क गंगाचौली</h2>
                <p className="text-muted">हमारे पार्क की एक झलक</p>
              </div>

              <div
                style={{
                  maxWidth: "900px",
                  margin: "auto",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                  background: "#000",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    paddingBottom: "56.25%",
                  }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/040u0a-CvRY"
                    title="अम्बेडकर पार्क गंगाचौली"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      border: "none",
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
        </Container>
      </section>

      {/* ----------------------------------------------------- */}
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={2000}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        breakpoints={{
          // Mobile
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },

          // Tablet
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          // Desktop
          992: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className="slide-box">
            <img
              className=""
              style={{ height: "400px", marginBottom: "10px" }}
              src="https://i.ibb.co/HDF6cvcR/savitribai-Phule.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-box">
            <img
              className=""
              style={{ height: "400px", marginBottom: "10px" }}
              src="https://i.ibb.co/RGcJrV9q/shahuji-Maharaj.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-box">
            <img
              className=""
              style={{ height: "400px", marginBottom: "10px" }}
              src="https://i.ibb.co/3yTCX227/sant-Ravidas.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-box">
            <img
              className=""
              style={{ height: "400px", marginBottom: "10px" }}
              src="https://i.ibb.co/yBm765Yv/jyotiba-Phule.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        {/* 7777 */}
        <SwiperSlide>
          <div className="slide-box">
            <img
              className=""
              style={{ height: "400px", marginBottom: "10px" }}
              src="https://i.ibb.co/zTPFt3v2/kanshiram.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-box">
            <img
              className=""
              style={{ height: "400px", marginBottom: "10px" }}
              src="https://i.ibb.co/fVxh5TLn/kabir.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-box">
            <img
              className=""
              style={{ height: "400px", marginBottom: "10px" }}
              src="https://i.ibb.co/WN4CMJ0P/jagjivan-Ram.png"
              alt=""
            />
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="slide-box">
            <img
              className=""
              style={{ height: "400px", marginBottom: "10px" }}
              src="https://i.ibb.co/DH41GN1F/ambedkar.png"
              alt=""
            />
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="slide-box">
            <img
              className=""
              style={{ height: "400px", marginBottom: "10px" }}
              src="https://i.ibb.co/MxJhSdvM/birsa-Munda.png"
              alt=""
            />
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="slide-box">
            <img
              className=""
              style={{ height: "400px", marginBottom: "10px" }}
              src="https://i.ibb.co/QFSqSZJ6/periyar.png"
              alt=""
            />
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="slide-box">
            <img
              className=""
              style={{ height: "400px", marginBottom: "10px" }}
              src="https://i.ibb.co/LXsLJ2wN/gautam-buddha.png"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>

      {/* ------------------------------------------------------ */}

      {/* ================= BABASAHEB MESSAGE ================= */}
      <section
        className="py-5 text-white text-center"
        style={{ backgroundColor: "#003b73" }}
      >
        <Container>
          <div className="display-2 mb-3">🔵</div>

          <h2 className="display-5 fw-bold">शिक्षा, संगठन और संघर्ष</h2>

          <p className="lead mt-3 mx-auto" style={{ maxWidth: "850px" }}>
            बाबासाहेब का जीवन हमें सिखाता है कि शिक्षा और जागरूकता के माध्यम से
            समाज में सकारात्मक परिवर्तन लाया जा सकता है।
          </p>
        </Container>
      </section>

      {/* ================= HISTORY ================= */}
      <section id="history" className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <Badge bg="primary" className="px-3 py-2 mb-3">
              ऐतिहासिक यात्रा
            </Badge>

            <h2 className="display-5 fw-bold">बाबासाहेब का संघर्ष और इतिहास</h2>

            <p className="lead text-muted">
              सामाजिक समानता से संविधान निर्माण तक एक महान ऐतिहासिक यात्रा
            </p>
          </div>

          <Row className="g-4">
            {history.map((item, index) => (
              <Col md={6} lg={4} key={index}>
                <Card className="border-0 shadow-sm h-100">
                  <Card.Body className="p-4">
                    <Badge bg="primary" className="fs-6 px-3 py-2 mb-3">
                      {item.year}
                    </Badge>

                    <h4 className="fw-bold">{item.title}</h4>

                    <p className="text-muted mb-0">{item.text}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= STRUGGLE ================= */}
      <section
        className="py-5 text-white"
        style={{ backgroundColor: "#0056b3" }}
      >
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={5}>
              <img
                src="https://i.ibb.co/2YgdCGws/images.jpg"
                alt="अंबेडकर पार्क"
                className="img-fluid rounded-4 shadow-lg"
                style={{
                  width: "100%",
                  height: "380px",
                  objectFit: "cover",
                }}
              />
            </Col>

            <Col lg={7}>
              <Badge bg="light" text="dark" className="px-3 py-2 mb-3">
                संघर्ष से संविधान तक
              </Badge>

              <h2 className="display-5 fw-bold">बाबासाहेब की विरासत</h2>

              <p className="lead">
                बाबासाहेब का संघर्ष केवल उनके समय तक सीमित नहीं था। उनके विचार
                आज भी सामाजिक न्याय, लोकतंत्र और समानता के लिए प्रेरणा देते हैं।
              </p>

              <Row className="g-3 mt-3">
                <Col sm={6}>
                  <div className="border rounded-3 p-3 h-100">
                    <div className="fs-2">📚</div>
                    <h5 className="fw-bold">शिक्षा</h5>
                    <p className="mb-0 text-white-50">
                      ज्ञान के माध्यम से सशक्तिकरण।
                    </p>
                  </div>
                </Col>

                <Col sm={6}>
                  <div className="border rounded-3 p-3 h-100">
                    <div className="fs-2">⚖️</div>
                    <h5 className="fw-bold">समानता</h5>
                    <p className="mb-0 text-white-50">
                      सभी नागरिकों के लिए समान अधिकार।
                    </p>
                  </div>
                </Col>

                <Col sm={6}>
                  <div className="border rounded-3 p-3 h-100">
                    <div className="fs-2">✊</div>
                    <h5 className="fw-bold">संघर्ष</h5>
                    <p className="mb-0 text-white-50">
                      अन्याय और भेदभाव के विरुद्ध आवाज।
                    </p>
                  </div>
                </Col>

                <Col sm={6}>
                  <div className="border rounded-3 p-3 h-100">
                    <div className="fs-2">
                      <img
                        style={{ height: "40px" }}
                        src="https://i.ibb.co/4nCvStKZ/constitution.png"
                        alt=""
                      />
                    </div>
                    <h5 className="fw-bold">संविधान</h5>
                    <p className="mb-0 text-white-50">
                      लोकतांत्रिक भारत की मजबूत नींव।
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= FEATURES ================= */}
      <section id="features" className="py-5 bg-white">
        <Container>
          <div className="text-center mb-5">
            <Badge bg="primary" className="px-3 py-2 mb-3">
              पार्क की विशेषताएँ
            </Badge>

            <h2 className="display-6 fw-bold">
              हमारे पार्क की प्रमुख विशेषताएँ
            </h2>
          </div>

          <Row className="g-4">
            {features.map((feature, index) => (
              <Col md={6} lg={3} key={index}>
                <Card className="border-0 shadow-sm h-100 text-center">
                  <Card.Body className="p-4">
                    <div className="display-4 mb-3">{feature.icon}</div>

                    <h5 className="fw-bold">{feature.title}</h5>

                    <p className="text-muted mb-0">{feature.text}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= GALLERY ================= */}
      <section id="gallery" className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <Badge bg="primary" className="px-3 py-2 mb-3">
              फोटो गैलरी
            </Badge>

            <h2 className="display-6 fw-bold">अंबेडकर पार्क की झलक</h2>

            <p className="text-muted">
              ग्राम गंगाचौली के अंबेडकर पार्क की कुछ झलकियाँ
            </p>
          </div>

          <Row className="g-4">
            <Col md={6} lg={4}>
              <Card className="border-0 shadow-sm overflow-hidden h-100">
                <img
                  src="https://i.ibb.co/gM9ysvGF/Sanjay-Talwar-And-Other.jpg"
                  alt="अंबेडकर पार्क"
                  className="img-fluid"
                  style={{
                    height: "260px",
                    objectFit: "cover",
                    width: "100%",
                  }}
                />

                <Card.Body>
                  <h5 className="fw-bold mb-0">अंबेडकर पार्क</h5>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4}>
              <Card className="border-0 shadow-sm overflow-hidden h-100">
                <img
                  src="https://i.ibb.co/FLJkbq8Y/IMG-20260414-011437.jpg"
                  alt="पार्क परिसर"
                  className="img-fluid"
                  style={{
                    height: "260px",
                    objectFit: "cover",
                    width: "100%",
                  }}
                />

                <Card.Body>
                  <h5 className="fw-bold mb-0">पार्क परिसर</h5>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4}>
              <Card className="border-0 shadow-sm overflow-hidden h-100">
                <img
                  src="https://i.ibb.co/7JzmsHkG/Whats-App-Image-2026-09-11-at-12-30-45-PM-1.jpg"
                  alt="सामुदायिक कार्यक्रम"
                  className="img-fluid"
                  style={{
                    height: "260px",
                    objectFit: "cover",
                    width: "100%",
                  }}
                />

                <Card.Body>
                  <h5 className="fw-bold mb-0">सामुदायिक कार्यक्रम</h5>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4}>
              <Card className="border-0 shadow-sm overflow-hidden h-100">
                <img
                  src="https://i.ibb.co/HDyRPXTP/IMG-20260414-203417.jpg"
                  alt="माल्यार्पण"
                  className="img-fluid"
                  style={{
                    height: "260px",
                    objectFit: "cover",
                    width: "100%",
                  }}
                />

                <Card.Body>
                  <h5 className="fw-bold mb-0">माल्यार्पण</h5>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="border-0 shadow-sm overflow-hidden h-100">
                <img
                  src="https://i.ibb.co/fYFcZNQz/IMG-20260414-203400.jpg"
                  alt="माल्यार्पण"
                  className="img-fluid"
                  style={{
                    height: "260px",
                    objectFit: "cover",
                    width: "100%",
                  }}
                />

                <Card.Body>
                  <h5 className="fw-bold mb-0">माल्यार्पण</h5>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="border-0 shadow-sm overflow-hidden h-100">
                <img
                  src="https://i.ibb.co/7JzmsHkG/Whats-App-Image-2026-09-11-at-12-30-45-PM-1.jpg"
                  alt="सामुदायिक कार्यक्रम"
                  className="img-fluid"
                  style={{
                    height: "260px",
                    objectFit: "cover",
                    width: "100%",
                  }}
                />

                <Card.Body>
                  <h5 className="fw-bold mb-0">सामुदायिक कार्यक्रम</h5>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="border-0 shadow-sm overflow-hidden h-100">
                <img
                  src="https://i.ibb.co/8n8xx3GQ/Whats-App-Image-2026-09-11-at-12-30-45-PM-2.jpg"
                  alt="रात्रि कार्यक्रम"
                  className="img-fluid"
                  style={{
                    height: "260px",
                    objectFit: "cover",
                    width: "100%",
                  }}
                />

                <Card.Body>
                  <h5 className="fw-bold mb-0">रात्रि कार्यक्रम</h5>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= LOCATION ================= */}
      <section id="location" className="py-5 bg-white">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <Badge bg="primary" className="px-3 py-2 mb-3">
                📍 स्थान
              </Badge>

              <h2 className="display-6 fw-bold">
                अंबेडकर पार्क कहाँ स्थित है?
              </h2>

              <p className="lead text-secondary">
                ग्राम गंगाचौली, तहसील हसनपुर, जिला अमरोहा, उत्तर प्रदेश।
              </p>

              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4">
                  <p className="mb-2">
                    <strong>ग्राम:</strong> गंगाचौली
                  </p>

                  <p className="mb-2">
                    <strong>तहसील:</strong> हसनपुर
                  </p>

                  <p className="mb-2">
                    <strong>जिला:</strong> अमरोहा
                  </p>

                  <p className="mb-0">
                    <strong>राज्य:</strong> उत्तर प्रदेश
                  </p>
                </Card.Body>
              </Card>

              <Button
                variant="primary"
                size="lg"
                href="https://maps.app.goo.gl/NhUN6ScQTva2w5da7"
                target="_blank"
                rel="noreferrer"
                className="rounded-pill px-4 mt-4"
              >
                📍 Google Maps पर देखें
              </Button>
            </Col>

            <Col lg={6}>
              <div
                className="rounded-4 shadow overflow-hidden"
                style={{ height: "380px" }}
              >
                <iframe
                  title="Ambedkar Park Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218.72757170935904!2d78.22508905252731!3d28.700379363698282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390b6d432a705ee5%3A0x23fcb654416c9ec2!2sDr.%20B.R.Ambedkar%20Park!5e0!3m2!1sen!2sin!4v1788423780907!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AmbedkarParkHome;
