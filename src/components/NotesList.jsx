import React from "react";



function NotesList() {
  const mahapurush = [
    {
      id: 1,
      name: "Dr. B. R. Ambedkar",
      image: "https://i.ibb.co/2YgdCGws/images.jpg",
    },
    {
      id: 2,
      name: "Jyotiba Phule",
      image: "https://i.ibb.co/2YgdCGws/images.jpg",
    
    },
    {
      id: 3,
      name: "Savitribai Phule",
      image: "https://i.ibb.co/2YgdCGws/images.jpg",
    },
    {
      id: 4,
      name: "Shahuji Maharaj",
      image: "https://i.ibb.co/2YgdCGws/images.jpg",
    },
    {
      id: 5,
      name: "Sant Ravidas",
      image: "https://i.ibb.co/2YgdCGws/images.jpg",
    },
    {
      id: 6,
      name: "Guru Ghasidas",
      image: "https://i.ibb.co/2YgdCGws/images.jpg",
    },
    {
      id: 7,
      name: "Narayan Guru",
      image: "https://i.ibb.co/2YgdCGws/images.jpg",
    },
    {
      id: 8,
      name: "Birsa Munda",
      image: "https://i.ibb.co/2YgdCGws/images.jpg",
    },
    {
      id: 9,
      name: "Jagjivan Ram",
      image: "https://i.ibb.co/2YgdCGws/images.jpg",
    },
    {
      id: 10,
      name: "Kanshi Ram",
      image: "https://i.ibb.co/2YgdCGws/images.jpg",
    },
    {
      id: 11,
      name: "Periyar",
      image: "https://i.ibb.co/2YgdCGws/images.jpg",
    },
    {
      id: 12,
      name: "Kabir",
      image: "https://i.ibb.co/2YgdCGws/images.jpg",
    },
  ];

  // Desktop ke liye 2-2 images ka group
  const desktopSlides = [];

  for (let i = 0; i < mahapurush.length; i += 2) {
    desktopSlides.push(mahapurush.slice(i, i + 2));
  }

  return (
    <>
      {/* ================= DESKTOP: 2 CARDS ================= */}
      <div
        id="desktopCarousel"
        className="carousel slide d-none d-lg-block"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {desktopSlides.map((slide, index) => (
            <div
              className={`carousel-item ${
                index === 0 ? "active" : ""
              }`}
              key={`desktop-slide-${index}`}
            >
              <div
                className="row g-3"
                style={{
                  paddingLeft: "50px",
                  paddingRight: "50px",
                }}
              >
                {slide.map((person) => (
                  <div
                    className="col-6"
                    key={person.id}
                  >
                    <div
                      className="card h-100 border-0 shadow-sm"
                      style={{
                        borderRadius: "10px",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={person.image}
                        alt={person.name}
                        style={{
                          width: "100%",
                          height: "350px",
                          objectFit: "contain",
                          padding: "15px",
                        }}
                      />

                      <div
                        className="card-body text-center"
                        style={{
                          padding: "10px",
                        }}
                      >
                        {/* Name agar dikhana ho */}
                        {/* <h5 className="mb-0">
                          {person.name}
                        </h5> */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#desktopCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bg-dark rounded-circle"
            style={{
              width: "40px",
              height: "40px",
              backgroundSize: "50%",
            }}
          ></span>
        </button>

        {/* Next Button */}
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#desktopCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon bg-dark rounded-circle"
            style={{
              width: "40px",
              height: "40px",
              backgroundSize: "50%",
            }}
          ></span>
        </button>
      </div>

      {/* ================= TABLET + MOBILE: 1 CARD ================= */}
      <div
        id="mobileCarousel"
        className="carousel slide d-lg-none"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {mahapurush.map((person, index) => (
            <div
              className={`carousel-item ${
                index === 0 ? "active" : ""
              }`}
              key={person.id}
            >
              <div
                style={{
                  paddingLeft: "45px",
                  paddingRight: "45px",
                }}
              >
                <div
                  className="card border-0 shadow-sm"
                  style={{
                    borderRadius: "10px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={person.image}
                    alt={person.name}
                    style={{
                      width: "100%",
                      height: "280px",
                      objectFit: "contain",
                      padding: "15px",
                    }}
                  />

                  <div
                    className="card-body text-center"
                    style={{
                      padding: "10px",
                    }}
                  >
                    <h5 className="mb-0">
                      {person.name}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#mobileCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bg-dark rounded-circle"
            style={{
              width: "35px",
              height: "35px",
              backgroundSize: "50%",
            }}
          ></span>
        </button>

        {/* Next Button */}
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#mobileCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon bg-dark rounded-circle"
            style={{
              width: "35px",
              height: "35px",
              backgroundSize: "50%",
            }}
          ></span>
        </button>
      </div>
    </>
  );
}

export default NotesList;