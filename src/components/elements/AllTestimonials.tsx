'use client';

import { useState } from 'react';

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
    image: "/images/author-5.jpg",
    rating: 5,
    text: "À mon âge, les déplacements fréquents à l'hôpital sont fatigants. La téléconsultation m'a permis de suivre mon traitement régulièrement sans me déplacer. Les médecins sont très professionnels et attentifs. Je recommande vivement !"
  },
  {
    name: "Aïssata Diop",
    role: "Infirmière",
    image: "/images/author-4.jpg",
    rating: 5,
    text: "En tant que professionnelle de santé, je recommande Doctagné à tous mes patients. La plateforme est intuitive et sécurisée. Un vrai progrès pour la santé digitale en Afrique."
  },
  {
    name: "Mohamed Keita",
    role: "Étudiant",
    image: "/images/author-6.jpg",
    rating: 5,
    text: "Parfait pour les étudiants ! Je peux consulter un médecin même avec un budget limité. Les téléconsultations sont très abordables."
  },
  {
    name: "Sophie Traoré",
    role: "Commerçante",
    image: "/images/author-7.jpg",
    rating: 5,
    text: "Je peux gérer ma santé sans fermer ma boutique. Les rendez-vous en ligne s'adaptent à mon emploi du temps. Excellent service !"
  },
  {
    name: "Papa Diouf",
    role: "Ingénieur",
    image: "/images/author-8.jpg",
    rating: 5,
    text: "La qualité des soins est remarquable. J'ai été impressionné par le professionnalisme des médecins et la facilité d'utilisation."
  }
];

const AllTestimonials = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  const showMore = () => {
    setVisibleCount(prevCount => prevCount + 4);
  };

  const visibleTestimonials = testimonials.slice(0, visibleCount);
  const hasMore = visibleCount < testimonials.length;

  return (
    <div className="our-testimonials bg-section dark-section">
      <div className="container">
        {/* En-tête */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <span className="section-label" style={{color: '#fff', fontWeight: 600, margin: '0 0 10px 0'}}>● TOUS LES TÉMOIGNAGES</span><br />
            <h2 className="text-anime-style-3" data-cursor="-opaque" style={{color: '#fff'}}>
              Ce que disent nos utilisateurs
            </h2>
            <p style={{color: '#fff'}}>
              Découvrez les expériences authentiques de ceux qui ont transformé leur accès aux soins grâce à Doctagné
            </p>
          </div>
        </div>

        {/* Grille des témoignages */}
        <div className="row">
          {visibleTestimonials.map((testimonial, idx) => (
            <div key={idx} className="col-lg-6 col-xl-3 mb-4">
              <div className="testimonial-card h-100">
                {/* Photo et informations de l'auteur */}
                <div className="testimonial-author-images">
                  <div className="testimonial-author-image">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                </div>

                {/* Informations de l'auteur */}
                <div className="testimonial-author">
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.role}</p>
                </div>

                {/* Étoiles de notation */}
                <div className="testimonials-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star"></i>
                  ))}
                </div>

                {/* Texte du témoignage */}
                <div className="testimonial-text">
                  <p>"{testimonial.text}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton Voir plus */}
        {hasMore && (
          <div className="row justify-content-center mt-4">
            <div className="col-auto">
              <button
                onClick={showMore}
                className="btn-default btn-highlighted testimonials-btn"
              >
                Voir plus de témoignages
              </button>
            </div>
          </div>
        )}

        {/* Message quand tous les témoignages sont affichés */}
        {!hasMore && testimonials.length > 4 && (
          <div className="row justify-content-center mt-4">
            <div className="col-auto">
              <p className="text-center" style={{color: '#fff'}}>
                Tous les témoignages sont affichés
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllTestimonials;