// Services.js
import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Gestion Medicale",
      icon: "/images/icon-service-1.svg",
      description: "Simplifiez la gestion de vos rendez-vous en un seul endroit. Avec notre solution, le suivi médical devient fluide, rapide et sans paperasse inutile.",
      delay: "0s"
    },
    {
      title: "Télémédecine",
      icon: "/images/icon-service-2.svg",
      description: "Consultation à distance, en toute sécurité. La santé n’attend pas. \n Accompagnement médical, où que vous soyez, à tout moment.",
      delay: "0.2s"
    },
    {
      title: "Pharmacie",
      icon: "/images/icon-service-3.svg",
      description: "Retrouvez facilement les médicaments prescrits et connectez vos patients à leur pharmacie la plus proche. Une continuité de soins, du diagnostic à la délivrance.",
      delay: "0.4s"
    },
    {
      title: "Laboratoire",
      icon: "/images/icon-service-4.svg",
      description: "Recevez et partagez les résultats d’analyses en ligne, sans déplacement. Gagnez du temps, assurez un meilleur suivi, et facilitez la communication entre médecin et patient.",
      delay: "0.6s"
    }
  ];

  return (
    <div className="our-services bg-section">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-6">
            <div className="section-title">
              <h3 className="wow fadeInUp">CE QUE DOCTAGNE PROPOSE</h3>
              <h2 className="text-anime-style-3" data-cursor="-opaque">Des services de santé accessibles et de qualité.</h2>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="section-title-content wow fadeInUp" data-wow-delay="0.2s">
              
            </div>
          </div>
        </div>

        <div className="row service-list">
          {services.map((service, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className={`service-item ${index === 0 ? 'active' : ''} wow fadeInUp`} data-wow-delay={service.delay}>
                <div className="service-title">
                  <h3><a href="/service-single">{service.title}</a></h3>
                </div>
                <div className="icon-box">
                  <img src={service.icon} alt={service.title} />
                </div>
                <div className="service-content">
                  <p>{service.description}</p>
                </div>
                <div className="service-btn">
                  <a href="/service-single" className="readmore-btn">En savoir plus</a>
                </div>
              </div>
            </div>
          ))}

          <div className="col-lg-12">
            <div className="section-footer-text wow fadeInUp" data-wow-delay="0.8s">
              <p><span>Gratuit</span>Faites le premier pas vers une meilleure santé – <a href="/book-appointment">planifiez dès aujourd’hui votre évaluation gratuite !</a></p>
            </div>
          </div>
        </div>            
      </div>
    </div>
  );
};

export default Services;