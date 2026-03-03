"use client";
import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/navigation";

const OurTestimonials = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const partnersSwiperRef = useRef<SwiperType | null>(null);
  const { t } = useTranslation();

  const testimonials = t("testimonials.items", { returnObjects: true }) as {
    name: string;
    role: string;
    image: string;
    rating: number;
    text: string;
  }[];

  // Liste des logos partenaires
  const partnerLogos = [
    "/images/partners/logo1.png",
    "/images/partners/logo2.png", 
    "/images/partners/logo3.png",
  ];

  return (
    <>
      {/* Section témoignages (bloc rouge) */}
      <div className="our-testimonials bg-section dark-section" style={{ color: "#fff" }}>
        <div className="container">
          <div className="row align-items-center">
            {/* Section gauche - titre et bouton */}
            <div className="col-lg-4">
              <div className="testimonials-content" style={{ color: "#fff" }}>
                <span
                  className="section-label"
                  style={{ color: "#fff", fontWeight: 600, letterSpacing: 2 }}
                >
                  ● {t("testimonials.sectionTitle")}
                </span>
                <h2
                  className="text-anime-style-3"
                  data-cursor="-opaque"
                  style={{ color: "#fff" }}
                >
                  {t("testimonials.mainTitle")}
                </h2>
                <p style={{ color: "#fff" }}>{t("testimonials.description")}</p>
                <Link
                  href="/actualites"
                  className="btn-default btn-highlighted testimonials-btn"
                  style={{
                    borderRadius: 32,
                    padding: "20px 60px 20px 20px",
                    fontWeight: 600,
                    display: "inline-flex",
                    fontSize: 12,
                    alignItems: "center",
                    width: "fit-content",
                  }}
                >
                  {t("testimonials.button")}
                </Link>
              </div>
            </div>

            {/* Section droite - slider */}
            <div className="col-lg-8">
              <div className="testimonials-slider" style={{ color: "#fff" }}>
                <Swiper
                  modules={[Navigation, Autoplay]}
                  spaceBetween={30}
                  slidesPerView={1}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                >
                  {testimonials.map((testimonial, idx) => (
                    <SwiperSlide key={idx}>
                      <div className="testimonial-slide" style={{ color: "#fff" }}>
                        <div
                          className="testimonial-author-images"
                          style={{ marginBottom: 20 }}
                        >
                          <div className="testimonial-author-image">
                            <img src={testimonial.image} alt={testimonial.name} />
                          </div>
                        </div>
                        <div
                          className="testimonials-rating"
                          style={{ marginBottom: 12 }}
                        >
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <i
                              key={i}
                              className="fa-solid fa-star"
                              style={{
                                color: "#ffffff",
                                fontSize: 22,
                                marginRight: 2,
                              }}
                            ></i>
                          ))}
                        </div>
                        <p
                          className="testimonial-text"
                          style={{
                            color: "#fff",
                            fontSize: 18,
                            marginBottom: 16,
                            fontWeight: 400,
                          }}
                        >
                          "{testimonial.text}"
                        </p>
                        <div className="testimonial-author" style={{ color: "#fff" }}>
                          <h3
                            style={{
                              color: "#fff",
                              fontWeight: 700,
                              marginBottom: 4,
                            }}
                          >
                            {testimonial.name}
                          </h3>
                          <p style={{ color: "#fff", opacity: 0.8 }}>
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Navigation */}
                <div
                  className="testimonial-nav"
                  style={{ display: "flex", gap: 16, marginTop: 24 }}
                >
                  <button
                    className="testimonial-prev"
                    onClick={() => swiperRef.current?.slidePrev()}
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      background: "#1d4c57",
                      color: "#fff",
                      border: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 22,
                      cursor: "pointer",
                    }}
                  >
                    <i className="fa-solid fa-arrow-left"></i>
                  </button>
                  <button
                    className="testimonial-next"
                    onClick={() => swiperRef.current?.slideNext()}
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      background: "#1d4c57",
                      color: "#fff",
                      border: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 22,
                      cursor: "pointer",
                    }}
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section partenaires - Design Marquee Infini */}
      <div className="partners-marquee-wrapper" style={{ 
        padding: "60px 0", 
        background: "#f8f9fa", // Fond gris clair pour délimiter
        overflow: "hidden",
        position: "relative",
        borderTop: "1px solid #eee", // Bordure subtile en haut
        borderBottom: "1px solid #eee" // Bordure subtile en bas
      }}>
        <div className="container">
          <div className="text-center mb-40">
            <h4 style={{ 
              fontSize: "14px", 
              fontWeight: "600", 
              color: "#FB091A", 
              textTransform: "uppercase", 
              letterSpacing: "1px",
              marginBottom: "30px"
            }}>
              {t("testimonials.partners")}
            </h4>
          </div>
        </div>

        <div className="marquee-container" style={{ display: "flex", width: "fit-content" }}>
          {/* On double la liste pour l'effet infini */}
          {[...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, index) => (
            <div key={index} className="marquee-item" style={{
              padding: "0 60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                style={{
                  height: "80px",
                  width: "auto",
                  maxWidth: "none",
                  transition: "all 0.3s ease",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              />
            </div>
          ))}
        </div>

        <style jsx>{`
          .marquee-container {
            animation: marquee 40s linear infinite;
          }
          .marquee-container:hover {
            animation-play-state: paused;
          }
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @media (max-width: 768px) {
            .marquee-item { padding: 0 30px !important; }
            .marquee-item img { height: 45px !important; }
          }
        `}</style>
      </div>
    </>
  );
};

export default OurTestimonials;