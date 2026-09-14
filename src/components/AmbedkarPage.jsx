

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Ambedkar.css";


const Ambedkar = () => {
  return (
    <div className="ambedkar-page">

      {/* Hero Section */}
      <section className="ambedkar-hero">
        <Container>
          <Row className="align-items-center">

            <Col lg={7}>
              <span className="hero-badge">जय भीम</span>

              <h1>डॉ. भीमराव रामजी अम्बेडकर</h1>

              <h4>बाबासाहेब अम्बेडकर</h4>

              <p>
                डॉ. भीमराव अम्बेडकर भारत के महान समाज सुधारक,
                कानूनविद, अर्थशास्त्री और संविधान निर्माण में
                महत्वपूर्ण भूमिका निभाने वाले महान व्यक्तित्व थे।
              </p>

              <p className="hero-quote">
                "शिक्षित बनो, संगठित रहो और संघर्ष करो"
              </p>
            </Col>

            <Col lg={5} className="text-center">
              {/* यहाँ बाबासाहेब की फोटो लगाएँ */}
              <div className="ambedkar-image-box">
                <img src="https://i.ibb.co/DH41GN1F/ambedkar.png" alt="" style={{height:"380px"}} />
              </div>
            </Col>

          </Row>
        </Container>
      </section>
      {/* परिचय */}
      <section className="py-5">
        <Container>

          <div className="section-heading text-center">
            <h2>बाबासाहेब के बारे में</h2>
            <p>ज्ञान, समानता और सामाजिक न्याय के महान संदेशवाहक</p>
          </div>

          <Row className="justify-content-center mt-4">
            <Col lg={10}>

              <div className="content-box">
                <p>
                  डॉ. भीमराव रामजी अम्बेडकर, जिन्हें लोग प्यार और
                  सम्मान से बाबासाहेब अम्बेडकर कहते हैं, भारत के
                  महान समाज सुधारक थे।
                </p>

                <p>
                  उन्होंने अपना पूरा जीवन समाज में समानता, शिक्षा,
                  न्याय और मानव सम्मान के लिए संघर्ष करते हुए बिताया।
                </p>

                <p>
                  बाबासाहेब का मानना था कि हर व्यक्ति को बिना किसी
                  भेदभाव के शिक्षा, सम्मान और समान अधिकार मिलना चाहिए।
                </p>

              </div>

            </Col>
          </Row>

        </Container>
      </section>


      {/* जन्म और प्रारंभिक जीवन */}
      <section className="life-section py-5">
        <Container>

          <div className="section-heading text-center">
            <h2>जन्म और प्रारंभिक जीवन</h2>
          </div>

          <Row className="g-4 mt-3">

            <Col md={4}>
              <Card className="detail-card h-100">
                <Card.Body>
                  <div className="detail-icon">🎂</div>
                  <h4>जन्म</h4>
                  <p>14 अप्रैल 1891</p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="detail-card h-100">
                <Card.Body>
                  <div className="detail-icon">📍</div>
                  <h4>जन्म स्थान</h4>
                  <p>महू, मध्य प्रदेश</p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="detail-card h-100">
                <Card.Body>
                  <div className="detail-icon">🕯️</div>
                  <h4>महापरिनिर्वाण</h4>
                  <p>6 दिसंबर 1956</p>
                </Card.Body>
              </Card>
            </Col>

          </Row>

        </Container>
      </section>


      {/* शिक्षा */}
      <section className="py-5">
        <Container>

          <div className="section-heading text-center">
            <h2>शिक्षा का महत्व</h2>
            <p>बाबासाहेब शिक्षा को जीवन बदलने का सबसे बड़ा माध्यम मानते थे</p>
          </div>

          <Row className="justify-content-center">
            <Col lg={10}>

              <div className="content-box education-box">
                <p>
                  बाबासाहेब ने जीवन में अनेक कठिनाइयों का सामना किया,
                  लेकिन उन्होंने शिक्षा का रास्ता कभी नहीं छोड़ा।
                </p>

                <p>
                  उन्होंने भारत के साथ-साथ विदेशों में भी उच्च शिक्षा
                  प्राप्त की। उन्होंने अमेरिका और इंग्लैंड में अध्ययन किया।
                </p>

                <p>
                  उनका संदेश था कि समाज की उन्नति के लिए शिक्षा बहुत
                  जरूरी है। इसलिए उन्होंने लोगों को शिक्षित बनने के लिए
                  प्रेरित किया।
                </p>

              </div>

            </Col>
          </Row>

        </Container>
      </section>


      {/* समाज के लिए संघर्ष */}
      <section className="struggle-section py-5">
        <Container>

          <div className="section-heading text-center text-white">
            <h2>सामाजिक न्याय के लिए संघर्ष</h2>
            <p>
              बाबासाहेब ने जीवन भर समानता और सम्मान के लिए संघर्ष किया।
            </p>
          </div>

          <Row className="g-4 mt-3">

            <Col md={4}>
              <div className="struggle-card">
                <h2>⚖️</h2>
                <h4>समान अधिकार</h4>
                <p>
                  हर व्यक्ति को समान अधिकार और सम्मान मिले,
                  इसके लिए उन्होंने संघर्ष किया।
                </p>
              </div>
            </Col>

            <Col md={4}>
              <div className="struggle-card">
                <h2>🎓</h2>
                <h4>शिक्षा</h4>
                <p>
                  उन्होंने समाज के लोगों को शिक्षित बनने और
                  आगे बढ़ने के लिए प्रेरित किया।
                </p>
              </div>
            </Col>

            <Col md={4}>
              <div className="struggle-card">
                <h2>🤝</h2>
                <h4>संगठन</h4>
                <p>
                  उन्होंने लोगों को एकजुट होकर अपने अधिकारों
                  के लिए संघर्ष करने का संदेश दिया।
                </p>
              </div>
            </Col>

          </Row>

        </Container>
      </section>


      {/* संविधान */}
      <section className="constitution-section py-5">
        <Container>

          <Row className="align-items-center">

            <Col lg={5}>
              <div className="constitution-symbol">
                📖
              </div>
            </Col>

            <Col lg={7}>

              <h2>भारतीय संविधान में योगदान</h2>

              <p>
                भारत की आजादी के बाद देश के लिए संविधान तैयार किया गया।
                डॉ. भीमराव अम्बेडकर संविधान की प्रारूप समिति के अध्यक्ष थे।
              </p>

              <p>
                भारतीय संविधान सभी नागरिकों को समानता, स्वतंत्रता और
                न्याय के अधिकार देता है।
              </p>

              <p>
                बाबासाहेब ने संविधान के माध्यम से एक ऐसे भारत की कल्पना
                की जहाँ हर व्यक्ति को सम्मान और समान अवसर मिल सके।
              </p>

            </Col>

          </Row>

        </Container>
      </section>


      {/* बौद्ध धर्म */}
      <section className="py-5">
        <Container>

          <div className="section-heading text-center">
            <h2>बौद्ध धर्म की ओर</h2>
          </div>

          <Row className="justify-content-center">
            <Col lg={10}>

              <div className="content-box">
                <p>
                  बाबासाहेब ने जीवन के अंतिम समय में बौद्ध धर्म को अपनाया।
                उन्होंने बौद्ध धर्म के करुणा, समानता और मानवता के संदेश को
                महत्वपूर्ण माना।
                </p>

                <p>
                  14 अक्टूबर 1956 को नागपुर में उन्होंने बौद्ध धर्म अपनाया।
                इसके बाद उनके साथ बड़ी संख्या में लोगों ने भी बौद्ध धर्म
                ग्रहण किया।
                </p>

              </div>

            </Col>
          </Row>

        </Container>
      </section>


      {/* संदेश */}
      <section className="message-section py-5">
        <Container>

          <div className="text-center">

            <h2>बाबासाहेब का संदेश</h2>

            <div className="main-quote">
              <span>“</span>
              <p>
                शिक्षित बनो, संगठित रहो और संघर्ष करो।
              </p>
              <span>”</span>
            </div>

            <p className="mt-4">
              यह संदेश आज भी हमें शिक्षा, एकता और अपने अधिकारों के
              प्रति जागरूक रहने की प्रेरणा देता है।
            </p>

          </div>

        </Container>
      </section>


      {/* विरासत */}
      <section className="legacy-section py-5">
        <Container>

          <div className="section-heading text-center">
            <h2>बाबासाहेब की विरासत</h2>
          </div>

          <Row className="g-4 mt-3">

            <Col md={3}>
              <div className="legacy-card">
                <h2>🎓</h2>
                <h5>शिक्षा</h5>
              </div>
            </Col>

            <Col md={3}>
              <div className="legacy-card">
                <h2>⚖️</h2>
                <h5>न्याय</h5>
              </div>
            </Col>

            <Col md={3}>
              <div className="legacy-card">
                <h2>🤝</h2>
                <h5>समानता</h5>
              </div>
            </Col>

            <Col md={3}>
              <div className="legacy-card">
                <h2>☸️</h2>
                <h5>मानवता</h5>
              </div>
            </Col>

          </Row>

        </Container>
      </section>

    </div>
  );
};

export default Ambedkar;

