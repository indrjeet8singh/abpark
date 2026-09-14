import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Pagination, Autoplay } from "swiper/modules";

const Karyakram = () => {
  const sliderImages = [
    {
      image:
        "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=1400&q=80",
      title: "बाबा साहेब डॉ. भीमराव अम्बेडकर",
      description:
        "शिक्षा, समानता और सामाजिक न्याय के महान प्रतीक।",
    },
    {
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
      title: "अम्बेडकर पार्क",
      description:
        "ग्राम गंगाचौली में स्थित अम्बेडकर पार्क सामाजिक चेतना का केंद्र।",
    },
    {
      image:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1400&q=80",
      title: "सामाजिक एकता",
      description:
        "समानता, भाईचारे और सामाजिक एकता का संदेश।",
    },
    {
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=80",
      title: "सांस्कृतिक कार्यक्रम",
      description:
        "विभिन्न सामाजिक एवं सांस्कृतिक कार्यक्रमों का आयोजन।",
    },
  ];

  const programs = [
    {
      icon: "🎉",
      title: "जयंती समारोह",
      text: "बाबा साहेब डॉ. भीमराव अम्बेडकर की जयंती पर विशेष कार्यक्रम।",
    },
    {
      icon: "📚",
      title: "शैक्षिक कार्यक्रम",
      text: "शिक्षा के महत्व और विद्यार्थियों को जागरूक करने वाले कार्यक्रम।",
    },
    {
      icon: "🎤",
      title: "सामाजिक सम्मेलन",
      text: "सामाजिक समानता, अधिकार एवं जागरूकता से संबंधित सम्मेलन।",
    },
    {
      icon: "🌳",
      title: "पार्क विकास कार्यक्रम",
      text: "पार्क की स्वच्छता, सौंदर्यीकरण और विकास से जुड़े कार्यक्रम।",
    },
    {
      icon: "🤝",
      title: "सामाजिक एकता कार्यक्रम",
      text: "समाज में भाईचारा, समानता और एकता को बढ़ावा देने वाले आयोजन।",
    },
    {
      icon: "🕯️",
      title: "श्रद्धांजलि कार्यक्रम",
      text: "महापुरुषों के विचारों और योगदान को याद करने के लिए कार्यक्रम।",
    },
  ];

  const upcomingEvents = [
    {
      date: "14",
      month: "अप्रैल",
      title: "डॉ. भीमराव अम्बेडकर जयंती",
      description:
        "बाबा साहेब की जयंती के अवसर पर विशेष समारोह एवं सांस्कृतिक कार्यक्रम।",
    },
    {
      date: "26",
      month: "नवंबर",
      title: "संविधान दिवस",
      description:
        "भारतीय संविधान और बाबा साहेब के संवैधानिक योगदान पर विशेष कार्यक्रम।",
    },
    {
      date: "06",
      month: "दिसंबर",
      title: "महापरिनिर्वाण दिवस",
      description:
        "बाबा साहेब को श्रद्धांजलि एवं विचार गोष्ठी का आयोजन।",
    },
  ];

  return (
    <div className="bg-light">

      {/* ================= HERO SLIDER ================= */}

      <section>
        <Swiper
          slidesPerView={1}
          loop={true}
          speed={1200}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="karyakramSwiper"
        >
          {sliderImages.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="position-relative"
                style={{ height: "500px" }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-100 h-100"
                  style={{
                    objectFit: "cover",
                  }}
                />

                {/* Overlay */}
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(0,0,0,.80), rgba(0,0,0,.25))",
                  }}
                >
                  <div className="container">
                    <div className="col-lg-7 text-white">

                      <span className="badge bg-warning text-dark px-3 py-2 mb-3">
                        अम्बेडकर पार्क • गंगाचौली
                      </span>

                      <h1 className="display-4 fw-bold">
                        {item.title}
                      </h1>

                      <p className="lead">
                        {item.description}
                      </p>

                      <button className="btn btn-warning btn-lg px-4">
                        कार्यक्रम देखें
                      </button>

                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ================= TITLE ================= */}

      <section className="py-5">
        <div className="container">

          <div className="text-center mb-5">

            <span className="badge bg-primary px-3 py-2 mb-3">
              हमारे कार्यक्रम
            </span>

            <h2 className="display-6 fw-bold">
              अम्बेडकर पार्क के <span className="text-primary">कार्यक्रम</span>
            </h2>

            <p className="text-muted mx-auto" style={{ maxWidth: "750px" }}>
              ग्राम गंगाचौली स्थित अम्बेडकर पार्क में सामाजिक, शैक्षिक,
              सांस्कृतिक एवं जागरूकता से संबंधित विभिन्न कार्यक्रमों का
              आयोजन किया जाता है।
            </p>

          </div>

          {/* ================= PROGRAM CARDS ================= */}

          <div className="row g-4">

            {programs.map((program, index) => (
              <div className="col-md-6 col-lg-4" key={index}>

                <div className="card h-100 border-0 shadow-sm rounded-4">

                  <div className="card-body p-4">

                    <div
                      className="rounded-circle bg-primary bg-opacity-10 d-flex align-items-center justify-content-center mb-3"
                      style={{
                        width: "65px",
                        height: "65px",
                        fontSize: "30px",
                      }}
                    >
                      {program.icon}
                    </div>

                    <h4 className="fw-bold">
                      {program.title}
                    </h4>

                    <p className="text-muted mb-0">
                      {program.text}
                    </p>

                  </div>

                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= UPCOMING EVENTS ================= */}

      <section className="py-5 bg-white">

        <div className="container">

          <div className="text-center mb-5">

            <span className="badge bg-success px-3 py-2 mb-3">
              कार्यक्रम कैलेंडर
            </span>

            <h2 className="fw-bold">
              प्रमुख <span className="text-success">कार्यक्रम</span>
            </h2>

          </div>

          <div className="row g-4">

            {upcomingEvents.map((event, index) => (
              <div className="col-md-4" key={index}>

                <div className="card border-0 shadow h-100 rounded-4 overflow-hidden">

                  <div className="row g-0">

                    <div className="col-4 bg-primary text-white d-flex flex-column align-items-center justify-content-center">

                      <div className="display-5 fw-bold">
                        {event.date}
                      </div>

                      <div className="fs-5">
                        {event.month}
                      </div>

                    </div>

                    <div className="col-8">

                      <div className="card-body">

                        <h5 className="fw-bold">
                          {event.title}
                        </h5>

                        <p className="small text-muted mb-0">
                          {event.description}
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>
        </div>

      </section>

      {/* ================= ABOUT ================= */}

      <section className="py-5">

        <div className="container">

          <div className="row align-items-center g-5">

            <div className="col-lg-6">

              <div className="position-relative">

                <iframe
                  src="https://www.youtube.com/embed/scXNgyBGBd4"
                  alt="कार्यक्रम"
                  className="img-fluid rounded-4 shadow"
                  style={{
                    height: "400px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />

                <div
                  className="position-absolute bottom-0 w-100 start-0 bg-primary text-white p-3 rounded-end-4"
                >
                  <strong>ग्राम गंगाचौली</strong>
                  <br />
                  तहसील हसनपुर, जिला अमरोहा
                </div>

              </div>

            </div>

            <div className="col-lg-6">

              <span className="badge bg-primary px-3 py-2 mb-3">
                कार्यक्रमों के बारे में
              </span>

              <h2 className="display-6 fw-bold mb-4">
                विचारों से समाज में
                <span className="text-primary"> परिवर्तन</span>
              </h2>

              <p className="text-muted">
                अम्बेडकर पार्क ग्राम गंगाचौली, तहसील हसनपुर, जिला अमरोहा
                में स्थित एक महत्वपूर्ण सामाजिक एवं सार्वजनिक स्थल है।
              </p>

              <p className="text-muted">
                पार्क में समय-समय पर सामाजिक जागरूकता, शिक्षा, सांस्कृतिक
                गतिविधियों तथा महापुरुषों के विचारों से संबंधित कार्यक्रम
                आयोजित किए जाते हैं।
              </p>

              <div className="row mt-4">

                <div className="col-6 mb-3">
                  <h3 className="fw-bold text-primary">📚</h3>
                  <strong>शिक्षा</strong>
                  <p className="small text-muted">
                    शिक्षा एवं जागरूकता
                  </p>
                </div>

                <div className="col-6 mb-3">
                  <h3 className="fw-bold text-primary">⚖️</h3>
                  <strong>समानता</strong>
                  <p className="small text-muted">
                    समानता एवं न्याय
                  </p>
                </div>

                <div className="col-6">
                  <h3 className="fw-bold text-primary">🤝</h3>
                  <strong>एकता</strong>
                  <p className="small text-muted">
                    सामाजिक भाईचारा
                  </p>
                </div>

                <div className="col-6">
                  <h3 className="fw-bold text-primary">🇮🇳</h3>
                  <strong>संविधान</strong>
                  <p className="small text-muted">
                    संवैधानिक मूल्यों का सम्मान
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= GALLERY ================= */}

      <section className="py-5 bg-white">

        <div className="container">

          <div className="text-center mb-5">

            <span className="badge bg-dark px-3 py-2 mb-3">
              फोटो गैलरी
            </span>

            <h2 className="fw-bold">
              कार्यक्रमों की <span className="text-primary">झलक</span>
            </h2>

          </div>

          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            loop={true}
            speed={1000}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="pb-5"
          >

            {sliderImages.map((item, index) => (
              <SwiperSlide key={index}>

                <div className="card border-0 shadow-sm rounded-4 overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-100"
                    style={{
                      height: "250px",
                      objectFit: "cover",
                    }}
                  />

                  <div className="card-body">
                    <h5 className="fw-bold mb-0">
                      {item.title}
                    </h5>
                  </div>

                </div>

              </SwiperSlide>
            ))}

          </Swiper>

        </div>

      </section>

      {/* ================= LOCATION ================= */}

      <section className="py-5 bg-dark text-white">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-8">

              <h2 className="fw-bold">
                📍 अम्बेडकर पार्क
              </h2>

              <p className="mb-1">
                ग्राम गंगाचौली
              </p>

              <p className="mb-1">
                तहसील हसनपुर
              </p>

              <p className="mb-0">
                जिला अमरोहा, उत्तर प्रदेश
              </p>

            </div>

            <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">

              <button className="btn btn-warning btn-lg">
                📍 स्थान देखें
              </button>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Karyakram;