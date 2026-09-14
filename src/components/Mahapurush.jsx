
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Mahapurush.css";


const Mahapurush = () => {
  const mahapurushList = [
   
    {
      name: "महात्मा ज्योतिबा फुले",
      title: "महान समाज सुधारक",
      image: "https://i.ibb.co/yBm765Yv/jyotiba-Phule.png",
      about:
        "महात्मा ज्योतिबा फुले ने शिक्षा और सामाजिक समानता के लिए महत्वपूर्ण कार्य किया। उन्होंने वंचित और कमजोर वर्गों की शिक्षा के लिए अपना जीवन समर्पित किया।",
    },
     {
      name: "डॉ. भीमराव रामजी अम्बेडकर",
      title: "बाबासाहेब अम्बेडकर",
      image: "https://i.ibb.co/2YgdCGws/images.jpg",
      about:
        "बाबासाहेब अम्बेडकर महान समाज सुधारक और भारतीय संविधान की प्रारूप समिति के अध्यक्ष थे। उन्होंने शिक्षा, समानता और सामाजिक न्याय के लिए जीवन भर संघर्ष किया।",
    },
    {
      name: "सावित्रीबाई फुले",
      title: "भारत की महान महिला शिक्षिका",
      image: "https://i.ibb.co/HDF6cvcR/savitribai-Phule.png",
      about:
        "सावित्रीबाई फुले ने महिलाओं और वंचित समाज की शिक्षा के लिए महत्वपूर्ण कार्य किया। उन्होंने लड़कियों को शिक्षा से जोड़ने का ऐतिहासिक काम किया।",
    },
    {
      name: "छत्रपति शाहूजी महाराज",
      title: "समाज सुधारक एवं शासक",
      image: "https://i.ibb.co/RGcJrV9q/shahuji-Maharaj.png",
      about:
        "शाहूजी महाराज ने शिक्षा और सामाजिक न्याय को बढ़ावा दिया। उन्होंने कमजोर और वंचित वर्गों को आगे बढ़ने के अवसर देने का महत्वपूर्ण काम किया।",
    },
    {
      name: "संत रविदास",
      title: "महान संत और समाज सुधारक",
      image: "https://i.ibb.co/3yTCX227/sant-Ravidas.png",
      about:
        "संत रविदास ने प्रेम, समानता और मानवता का संदेश दिया। उन्होंने ऊँच-नीच और भेदभाव से ऊपर उठकर सभी को सम्मान देने की शिक्षा दी।",
    },
    {
      name: "गुरु घासीदास",
      title: "महान संत और समाज सुधारक",
      image:"https://i.ibb.co/27pYX3LS/guru-Ghasidas.png",
      about:
        "गुरु घासीदास जी ने सत्य, समानता और मानवता का संदेश दिया। उन्होंने समाज में भेदभाव और अन्याय के खिलाफ लोगों को जागरूक किया।",
    },
    {
      name: "नारायण गुरु",
      title: "महान समाज सुधारक",
      image: "https://i.ibb.co/7Nn5PW2b/narayan-Guru.png",
      about:
        "नारायण गुरु ने समानता, शिक्षा और भाईचारे का संदेश दिया। उन्होंने समाज से भेदभाव और ऊँच-नीच को समाप्त करने के लिए कार्य किया।",
    },
    {
      name: "बिरसा मुंडा",
      title: "महान आदिवासी जननायक",
      image: "https://i.ibb.co/MxJhSdvM/birsa-Munda.png",
      about:
        "बिरसा मुंडा ने आदिवासी समाज के अधिकारों और सम्मान के लिए संघर्ष किया। वे साहस, संघर्ष और आदिवासी स्वाभिमान के महान प्रतीक हैं।",
    },
    {
      name: "बाबू जगजीवन राम",
      title: "स्वतंत्रता सेनानी एवं जननेता",
      image: "https://i.ibb.co/WN4CMJ0P/jagjivan-Ram.png",
      about:
        "बाबू जगजीवन राम ने देश की राजनीति और सामाजिक विकास में महत्वपूर्ण योगदान दिया। उन्होंने वंचित और कमजोर वर्गों के अधिकारों के लिए कार्य किया।",
    },
    {
      name: "मान्यवर कांशीराम साहब",
      title: "बहुजन समाज के महान नेता",
      image: "https://i.ibb.co/zTPFt3v2/kanshiram.png",
      about:
        "मान्यवर कांशीराम साहब ने बहुजन समाज को संगठित करने का महत्वपूर्ण कार्य किया। उन्होंने सामाजिक और राजनीतिक जागरूकता का संदेश दिया।",
    },
    {
      name: "पेरियार ई. वी. रामासामी",
      title: "महान समाज सुधारक",
      image: "https://i.ibb.co/QFSqSZJ6/periyar.png",
      about:
        "पेरियार ने सामाजिक भेदभाव और असमानता के खिलाफ आवाज उठाई। उन्होंने आत्मसम्मान, समानता और तर्कपूर्ण सोच को बढ़ावा दिया।",
    },
    {
      name: "संत कबीर दास",
      title: "महान संत और कवि",
      image: "https://i.ibb.co/fVxh5TLn/kabir.png",
      about:
        "संत कबीर ने मानवता, प्रेम और भाईचारे का संदेश दिया। उन्होंने भेदभाव, पाखंड और ऊँच-नीच के खिलाफ लोगों को जागरूक किया।",
    },
  ];

  return (
    <section className="mahapurush-page py-5">
      <Container>

        <div className="text-center mb-5">
          <span className="jai-bhim">
            जय भीम • जय भारत
          </span>

          <h1 className="page-title mt-3">
            बहुजन महापुरुष
          </h1>

          <p className="page-subtitle">
            महान व्यक्तित्व जिन्होंने समाज को शिक्षा,
            समानता, न्याय और मानवता का मार्ग दिखाया।
          </p>
        </div>

        <Row className="g-4">
          {mahapurushList.map((person, index) => (
            <Col lg={3} md={4} sm={6} key={index}>

              <Card className="mahapurush-card h-100">

                {/* Photo */}
                <div className="image-wrapper">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="mahapurush-image"
                  />
                </div>

                <Card.Body className="text-center">

                  <h5 className="mahapurush-name">
                    {person.name}
                  </h5>

                  <p className="mahapurush-title">
                    {person.title}
                  </p>

                  <div className="line"></div>

                  <p className="mahapurush-about">
                    {person.about}
                  </p>

                </Card.Body>

              </Card>

            </Col>
          ))}
        </Row>

      </Container>
    </section>
  );
};

export default Mahapurush;

