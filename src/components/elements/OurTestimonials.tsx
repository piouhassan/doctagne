'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { useRef } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const testimonials = [
  {
    name: "Mariama Touré",
    role: "Mère de famille",
    image: "/images/author-1.jpg",
    rating: 5,
    text: "Je n'aurais jamais imaginé qu'une plateforme médicale puisse être aussi simple et efficace. En tant que mère de famille, pouvoir gérer les rendez-vous de mes enfants, consulter leurs résultats d'analyses et même faire des téléconsultations depuis chez moi a vraiment changé mon quotidien."
  },
  {
    name: "Amadou Diallo",
    role: "Entrepreneur",
    image: "/images/author-2.jpg",
    rating: 5,
    text: "Avec mon emploi du temps chargé, Doctagné m'a permis de ne plus négliger ma santé. La prise de rendez-vous est rapide, je peux consulter en ligne et mes résultats d'analyses sont accessibles immédiatement. C'est exactement ce dont j'avais besoin !"
  },
  {
    name: "Fatou Ndiaye",
    role: "Professeur",
    image: "/images/author-3.jpg",
    rating: 5,
    text: "Trouver une pharmacie de garde à 2h du matin pour mon fils malade était toujours un calvaire. Maintenant avec Doctagné, je localise instantanément les pharmacies ouvertes près de chez moi. Une vraie tranquillité d'esprit pour les parents !"
  },
  {
    name: "Ibrahima Sow",
    role: "Retraité",
    image: "/images/author-1.jpg",
    rating: 5,
    text: "À mon âge, les déplacements fréquents à l'hôpital sont fatigants. La téléconsultation m'a permis de suivre mon traitement régulièrement sans me déplacer. Les médecins sont très professionnels et attentifs. Je recommande vivement !"
  }
];

const OurTestimonials = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="our-testimonials bg-section dark-section" style={{color: '#fff'}}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="testimonials-content" style={{color: '#fff'}}>
              <span className="section-label" style={{color: '#fff', fontWeight: 600, letterSpacing: 2}}>● TÉMOIGNAGES</span>
              <h2 className="text-anime-style-3" data-cursor="-opaque" style={{color: '#fff'}}>L'expérience de nos utilisateurs</h2>
              <p style={{color: '#fff'}}>Découvrez les témoignages de personnes qui ont transformé leur accès aux soins.</p>
              <a href="/actualites" className="btn-default btn-highlighted testimonials-btn" style={{borderRadius: 32, padding: '20px 40px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', width: 'fit-content'}}>
                Tous les avis
              </a>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="testimonials-slider" style={{color: '#fff'}}>
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
                    <div className="testimonial-slide" style={{color: '#fff'}}>
                      <div className="testimonial-author-images" style={{marginBottom: 20}}>
                        <div className="testimonial-author-image">
                          <img src={testimonial.image} alt={testimonial.name} />
                        </div>
                      </div>
                      <div className="testimonials-rating" style={{marginBottom: 12}}>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <i key={i} className="fa-solid fa-star" style={{color: '#ffffff', fontSize: 22, marginRight: 2}}></i>
                        ))}
                      </div>
                      <p className="testimonial-text" style={{color: '#fff', fontSize: 18, marginBottom: 16, fontWeight: 400}}>
                        "{testimonial.text}"
                      </p>
                      <div className="testimonial-author" style={{color: '#fff'}}>
                        <h3 style={{color: '#fff', fontWeight: 700, marginBottom: 4}}>{testimonial.name}</h3>
                        <p style={{color: '#fff', opacity: 0.8}}>{testimonial.role}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="testimonial-nav" style={{display: 'flex', gap: 16, marginTop: 24}}>
                <button
                  className="testimonial-prev"
                  onClick={() => swiperRef.current?.slidePrev()}
                  style={{width: 48, height: 48, borderRadius: '50%', background: '#1d4c57', color: '#fff', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, cursor: 'pointer'}}
                >
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button
                  className="testimonial-next"
                  onClick={() => swiperRef.current?.slideNext()}
                  style={{width: 48, height: 48, borderRadius: '50%', background: '#1d4c57', color: '#fff', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, cursor: 'pointer'}}
                >
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTestimonials;
