

import React, { useState } from "react";
import { Container, Modal, Button } from "react-bootstrap";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import "./Gallery.css";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  // ==========================================
  // GALLERY IMAGES
  // ==========================================
  const images = [
    {
      id: 1,
      imageUrl: "https://i.ibb.co/84RFXYmB/logo.png.jpg",
      title: "अम्बेडकर पार्क",
      description: "ग्राम गंगाचोली का अम्बेडकर पार्क",
    },
    {
      id: 2,
      imageUrl: "https://i.ibb.co/84RFXYmB/logo.png.jpg",
      title: "बाबा साहेब डॉ. भीमराव अम्बेडकर",
      description: "भारत के महान समाज सुधारक एवं संविधान निर्माता",
    },
    {
      id: 3,
      imageUrl: "https://i.ibb.co/84RFXYmB/logo.png.jpg",
      title: "अम्बेडकर पार्क परिसर",
      description: "पार्क का सुंदर एवं स्वच्छ परिसर",
    },
    {
      id: 4,
      imageUrl: "https://i.ibb.co/84RFXYmB/logo.png.jpg",
      title: "पार्क का मुख्य द्वार",
      description: "अम्बेडकर पार्क का मुख्य प्रवेश द्वार",
    },
    {
      id: 5,
      imageUrl: "https://i.ibb.co/84RFXYmB/logo.png.jpg",
      title: "बाबा साहेब की प्रतिमा",
      description: "डॉ. बी. आर. अम्बेडकर की प्रतिमा",
    },
    {
      id: 6,
      imageUrl: "https://i.ibb.co/84RFXYmB/logo.png.jpg",
      title: "पार्क का सौंदर्य",
      description: "अम्बेडकर पार्क का सुंदर दृश्य",
    },
    {
      id: 7,
      imageUrl: "https://i.ibb.co/84RFXYmB/logo.png.jpg",
      title: "ग्राम गंगाचोली",
      description: "ग्राम गंगाचोली में स्थित अम्बेडकर पार्क",
    },
    {
      id: 8,
      imageUrl: "https://i.ibb.co/84RFXYmB/logo.png.jpg",
      title: "स्मारक स्थल",
      description: "ऐतिहासिक स्मृति एवं सामाजिक चेतना का स्थल",
    },
    {
      id: 9,
      imageUrl: "https://i.ibb.co/84RFXYmB/logo.png.jpg",
      title: "अम्बेडकर पार्क कार्यक्रम",
      description: "पार्क में आयोजित सामाजिक कार्यक्रम",
    },
    {
      id: 10,
      imageUrl: "https://i.ibb.co/84RFXYmB/logo.png.jpg",
      title: "सामाजिक जागरूकता",
      description: "सामाजिक समानता एवं जागरूकता का संदेश",
    },
    {
      id: 11,
      imageUrl: "https://i.ibb.co/84RFXYmB/logo.png.jpg",
      title: "संविधान दिवस",
      description: "संविधान एवं लोकतंत्र के प्रति सम्मान",
    },
    {
      id: 12,
      imageUrl: "https://i.ibb.co/84RFXYmB/logo.png.jpg",
      title: "जय भीम",
      description: "बाबा साहेब के विचारों को समर्पित स्थल",
    },
    {
      id: 13,
      imageUrl: "https://i.ibb.co/84RFXYmB/logo.png.jpg",
      title: "पार्क परिसर",
      description: "पार्क का हरित एवं सुंदर वातावरण",
    },
    {
      id: 14,
      imageUrl: "https://i.ibb.co/84RFXYmB/logo.png.jpg",
      title: "सामाजिक एकता",
      description: "समानता और सामाजिक एकता का संदेश",
    },
    {
      id: 15,
      imageUrl: "https://i.ibb.co/84RFXYmB/logo.png.jpg",
      title: "बाबा साहेब स्मृति",
      description: "महान व्यक्तित्व की स्मृति में बनाया गया स्थल",
    },
    {
      id: 16,
      imageUrl: "https://i.ibb.co/84RFXYmB/logo.png.jpg",
      title: "अम्बेडकर जयंती",
      description: "अम्बेडकर जयंती के अवसर का कार्यक्रम",
    },
    {
      id: 17,
      imageUrl: "https://i.ibb.co/84RFXYmB/logo.png.jpg",
      title: "पार्क का दृश्य",
      description: "अम्बेडकर पार्क का आकर्षक दृश्य",
    },
    {
      id: 18,
      imageUrl: "https://i.ibb.co/84RFXYmB/logo.png.jpg",
      title: "ग्राम विकास",
      description: "ग्राम के विकास एवं सामाजिक चेतना का प्रतीक",
    },
    {
      id: 19,
      imageUrl: "https://i.ibb.co/84RFXYmB/logo.png.jpg",
      title: "महापुरुष स्मृति",
      description: "महापुरुषों के विचारों को समर्पित स्थल",
    },
    {
      id: 20,
      imageUrl: "https://i.ibb.co/84RFXYmB/logo.png.jpg",
      title: "शिक्षा का संदेश",
      description: "शिक्षा, समानता और स्वतंत्रता का संदेश",
    },
    {
      id: 21,
      imageUrl: "https://i.ibb.co/84RFXYmB/logo.png.jpg",
      title: "सामाजिक कार्यक्रम",
      description: "ग्राम में आयोजित सामाजिक कार्यक्रम",
    },
    {
      id: 22,
      imageUrl: "https://i.ibb.co/84RFXYmB/logo.png.jpg",
      title: "अम्बेडकर पार्क समारोह",
      description: "विशेष अवसर पर आयोजित समारोह",
    },
    {
      id: 23,
      imageUrl: "https://i.ibb.co/84RFXYmB/logo.png.jpg",
      title: "बाबा साहेब के विचार",
      description: "शिक्षित बनो, संगठित रहो और संघर्ष करो",
    },
    {
      id: 24,
      imageUrl: "https://i.ibb.co/84RFXYmB/logo.png.jpg",
      title: "पार्क प्रवेश",
      description: "अम्बेडकर पार्क में प्रवेश का दृश्य",
    },
    {
      id: 25,
      imageUrl: "https://i.ibb.co/84RFXYmB/logo.png.jpg",
      title: "ग्राम गंगाचोली",
      description: "ग्राम गंगाचोली का सुंदर वातावरण",
    },
    {
      id: 26,
      imageUrl: "https://i.ibb.co/84RFXYmB/logo.png.jpg",
      title: "समानता का संदेश",
      description: "सभी के लिए समानता और सम्मान",
    },
    {
      id: 27,
      imageUrl: "https://i.ibb.co/84RFXYmB/logo.png.jpg",
      title: "पार्क समारोह",
      description: "अम्बेडकर पार्क में आयोजित विशेष कार्यक्रम",
    },
    {
      id: 28,
      imageUrl: "https://i.ibb.co/84RFXYmB/logo.png.jpg",
      title: "सामाजिक चेतना",
      description: "समाज में जागरूकता फैलाने का प्रयास",
    },
    {
      id: 29,
      imageUrl: "https://i.ibb.co/84RFXYmB/logo.png.jpg",
      title: "बाबा साहेब",
      description: "डॉ. भीमराव अम्बेडकर को नमन",
    },
    {
      id: 30,
      imageUrl: "https://i.ibb.co/84RFXYmB/logo.png.jpg",
      title: "अम्बेडकर पार्क",
      description: "पार्क का मनोरम दृश्य",
    },
    {
      id: 31,
      imageUrl: "https://i.ibb.co/84RFXYmB/logo.png.jpg",
      title: "समाज सुधार",
      description: "सामाजिक सुधार एवं समानता का संदेश",
    },
    {
      id: 32,
      imageUrl: "https://i.ibb.co/84RFXYmB/logo.png.jpg",
      title: "जय भीम",
      description: "बाबा साहेब के संघर्ष और विचारों को नमन",
    },
    {
      id: 33,
      imageUrl: "https://i.ibb.co/84RFXYmB/logo.png.jpg",
      title: "पार्क का वातावरण",
      description: "स्वच्छ एवं शांत वातावरण",
    },
    {
      id: 34,
      imageUrl: "https://i.ibb.co/84RFXYmB/logo.png.jpg",
      title: "सामाजिक एकता कार्यक्रम",
      description: "ग्रामवासियों द्वारा आयोजित कार्यक्रम",
    },
    {
      id: 35,
      imageUrl: "https://i.ibb.co/yctyQ0xy/unnamed.jpg.jpg",
      title: "अम्बेडकर जयंती",
      description: "अम्बेडकर जयंती के अवसर पर आयोजन",
    },
    {
      id: 36,
      imageUrl: "https://i.ibb.co/yctyQ0xy/unnamed.jpg.jpg",
      title: "संविधान निर्माता",
      description: "भारतीय संविधान के प्रमुख शिल्पकार डॉ. बी. आर. अम्बेडकर",
    },
    {
      id: 37,
      imageUrl: "https://i.ibb.co/yctyQ0xy/unnamed.jpg.jpg",
      title: "पार्क परिसर",
      description: "अम्बेडकर पार्क का विस्तृत परिसर",
    },
    {
      id: 38,
      imageUrl: "https://i.ibb.co/99gtK5Ln/indra.jpg",
      title: "ग्रामवासी",
      description: "पार्क से जुड़े ग्रामवासियों की सहभागिता",
    },
    {
      id: 39,
      imageUrl: "https://i.ibb.co/99gtK5Ln/indra.jpg",
      title: "सामाजिक संदेश",
      description: "शिक्षा और समानता का संदेश",
    },
    {
      id: 40,
      imageUrl: "https://i.ibb.co/99gtK5Ln/indra.jpg",
      title: "अम्बेडकर पार्क स्मृति",
      description: "ग्राम गंगाचोली का गौरव अम्बेडकर पार्क",
    },
  ];

  // ==========================================
  // PAGINATION
  // ==========================================

  const imagesPerPage = 8;

  const totalPages = Math.ceil(images.length / imagesPerPage);

  const startIndex = (currentPage - 1) * imagesPerPage;

  const currentImages = images.slice(
    startIndex,
    startIndex + imagesPerPage
  );

  // ==========================================
  // PAGE CHANGE
  // ==========================================

  const changePage = (page) => {
    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ==========================================
  // RENDER
  // ==========================================

  return (
    <>
      {/* ======================================
          GALLERY HEADER
      ====================================== */}

      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h1 className="fw-bold text-primary">
              📸 अम्बेडकर पार्क गैलरी
            </h1>

            <p className="text-muted mb-0">
              ग्राम गंगाचोली के अम्बेडकर पार्क की यादगार तस्वीरें
            </p>
          </div>

          {/* ==================================
              SWIPER SLIDER
          ================================== */}
<Swiper
  modules={[
    Pagination,
    Autoplay,
    EffectCoverflow,
  ]}
  effect="coverflow"
  grabCursor={true}
  centeredSlides={true}
  loop={images.length > 3}
  autoplay={{
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}
  speed={1000}
  pagination={{
    clickable: true,
    dynamicBullets: true,
  }}
  spaceBetween={25}
  slidesPerView={1}
  breakpoints={{
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  }}
  coverflowEffect={{
    rotate: 0,
    stretch: 0,
    depth: 120,
    modifier: 1,
    slideShadows: true,
  }}
  className="myGallerySwiper"
>
  {images.map((item) => (
    <SwiperSlide key={item.id}>
      <div
        className="gallery-card"
        onClick={() => setSelectedImage(item)}
        style={{ cursor: "pointer" }}
      >
        <div className="gallery-image-wrapper">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="gallery-image"
          />

          <div className="gallery-overlay">
            <span className="gallery-view-icon">
              🔍
            </span>
          </div>
        </div>

        <div className="gallery-card-body">
          <h5>{item.title}</h5>
          <p>{item.description}</p>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>
        </Container>
      </section>

      {/* ======================================
          ALL GALLERY
      ====================================== */}

      <section className="py-5">
        <Container>
          <div className="text-center mb-4">
            <h2 className="fw-bold">
              हमारी तस्वीरें
            </h2>

            <p className="text-muted">
              कुल {images.length} तस्वीरें
            </p>
          </div>

          {/* ==================================
              PAGINATED GRID
          ================================== */}

          <div className="row g-4">
            {currentImages.map((item) => (
              <div
                className="col-12 col-sm-6 col-lg-4 col-xl-4"
                key={item.id}
              >
                <div
                  className="gallery-card "
                  onClick={() => setSelectedImage(item)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="gallery-image-wrapper m-auto">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="gallery-image " style={{height:"250px",width:"250px",borderRadius:"20%"}}
                      loading="lazy"
                    />

                    {/* <div className="gallery-overlay">
                      <span className="gallery-view-icon">
                        🔍
                      </span>
                    </div> */}
                  </div>

                  <div className="gallery-card-body">
                    <h5>{item.title}</h5>

                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ==================================
              PAGINATION
          ================================== */}

          {totalPages > 1 && (
            <div className="d-flex justify-content-center mt-5">
              <nav aria-label="Gallery pagination">
                <ul className="pagination pagination-lg">

                  {/* PREVIOUS */}

                  <li
                    className={`page-item ${
                      currentPage === 1 ? "disabled" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() =>
                        changePage(
                          Math.max(currentPage - 1, 1)
                        )
                      }
                      disabled={currentPage === 1}
                    >
                      ‹
                    </button>
                  </li>

                  {/* PAGE NUMBERS */}

                  {Array.from(
                    { length: totalPages },
                    (_, index) => index + 1
                  ).map((page) => (
                    <li
                      key={page}
                      className={`page-item ${
                        currentPage === page
                          ? "active"
                          : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => changePage(page)}
                      >
                        {page}
                      </button>
                    </li>
                  ))}

                  {/* NEXT */}

                  <li
                    className={`page-item ${
                      currentPage === totalPages
                        ? "disabled"
                        : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() =>
                        changePage(
                          Math.min(
                            currentPage + 1,
                            totalPages
                          )
                        )
                      }
                      disabled={
                        currentPage === totalPages
                      }
                    >
                      ›
                    </button>
                  </li>

                </ul>
              </nav>
            </div>
          )}

          {/* PAGE INFO */}

          <div className="text-center text-muted mt-3">
            Page {currentPage} of {totalPages}
          </div>
        </Container>
      </section>

      {/* ======================================
          IMAGE MODAL
      ====================================== */}

      <Modal
        show={!!selectedImage}
        onHide={() => setSelectedImage(null)}
        centered
        size="xl"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedImage?.title}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="text-center p-2">
          {selectedImage && (
            <>
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                className="img-fluid rounded"
                style={{
                  maxHeight: "75vh",
                  objectFit: "contain",
                }}
              />

              <div className="mt-3">
                <h5>{selectedImage.title}</h5>

                <p className="text-muted mb-0">
                  {selectedImage.description}
                </p>
              </div>
            </>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setSelectedImage(null)}
          >
            बंद करें
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Gallery;

