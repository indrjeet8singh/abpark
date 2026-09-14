import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function ActivistPage() {
  const activists = [
    {
      id: 1,
      name: "सामाजिक कार्यकर्ता का नाम",
      role: "बहुजन समाज सेवक एवं सामाजिक कार्यकर्ता",
      image:
        "https://i.ibb.co/ZphDjgjF/Mobile-Azad-home.png",
      location: "उत्तर प्रदेश, भारत",
      description:
        "समाज में समानता, शिक्षा, सामाजिक न्याय और मानव अधिकारों के लिए निरंतर कार्य करने वाले सामाजिक कार्यकर्ता।",
      achievements: [
        "शिक्षा जागरूकता अभियान",
        "सामाजिक न्याय आंदोलन",
        "युवा जागरूकता कार्यक्रम",
        "गरीब एवं जरूरतमंद लोगों की सहायता",
      ],
    },
  ];

  return (
    <div className="container py-5">
      
      {/* Page Heading */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary">
          हमारे सामाजिक कार्यकर्ता
        </h1>

        <p className="text-muted">
          समाज, शिक्षा और समानता के लिए कार्य करने वाले प्रेरणादायक लोग
        </p>
      </div>

      <div className="row justify-content-center">
        {activists.map((activist) => (
          <div className="col-lg-10" key={activist.id}>
            
            <div className="card border-0 shadow-lg overflow-hidden">
              <div className="row g-0">

                {/* Image Section */}
                <div className="col-md-4">
                  <img
                    src={activist.image}
                    alt={activist.name}
                    className="img-fluid h-100 w-100"
                    style={{
                      objectFit: "cover",
                      minHeight: "400px",
                    }}
                  />
                </div>

                {/* Content Section */}
                <div className="col-md-8">
                  <div className="card-body p-4 p-lg-5">

                    <h2 className="fw-bold">
                      {activist.name}
                    </h2>

                    <h5 className="text-primary mb-3">
                      {activist.role}
                    </h5>

                    <p className="text-muted">
                      <FaMapMarkerAlt className="me-2 text-danger" />
                      {activist.location}
                    </p>

                    <hr />

                    {/* About */}
                    <h4 className="fw-bold mt-4">
                      परिचय
                    </h4>

                    <p className="text-secondary">
                      {activist.description}
                    </p>

                    {/* Achievements */}
                    <h4 className="fw-bold mt-4">
                      प्रमुख कार्य
                    </h4>

                    <div className="row">
                      {activist.achievements.map(
                        (achievement, index) => (
                          <div
                            className="col-md-6 mb-3"
                            key={index}
                          >
                            <div className="p-3 border rounded bg-light">
                              ✅ {achievement}
                            </div>
                          </div>
                        )
                      )}
                    </div>

                    {/* Buttons */}
                    <div className="mt-4 d-flex flex-wrap gap-2">

                      <button className="btn btn-primary">
                        <FaFacebookF />
                      </button>

                      <button className="btn btn-danger">
                        <FaInstagram />
                      </button>

                      <button className="btn btn-danger">
                        <FaYoutube />
                      </button>

                      <button className="btn btn-info text-white">
                        <FaTwitter />
                      </button>

                      <button className="btn btn-dark ms-md-3">
                        <FaEnvelope className="me-2" />
                        संपर्क करें
                      </button>

                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivistPage;