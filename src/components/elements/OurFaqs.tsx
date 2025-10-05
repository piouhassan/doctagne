'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "Comment prendre rendez-vous sur Doctagné ?",
    answer: "Il suffit de créer un compte gratuit, de rechercher le professionnel de santé (médecin, pharmacie ou laboratoire) et de choisir un créneau disponible. Vous recevrez une confirmation par email et SMS.",
    delay: "0.2s"
  },
  {
    question: "La plateforme est-elle sécurisée ?",
    answer: "Absolument ! Vos données médicales sont cryptées et protégées selon les normes RGPD. Seuls vous et les professionnels de santé que vous consultez ont accès à vos informations.",
    delay: "0.4s"
  },
  {
    question: "Puis-je consulter en ligne avec un médecin ?",
    answer: "Oui, Doctagné propose la téléconsultation avec des médecins qualifiés. Vous pouvez choisir entre une consultation à distance ou en cabinet selon vos besoins.",
    delay: "0.6s"
  },
  {
    question: "Comment accéder à mes résultats d'analyses ?",
    answer: "Une fois vos analyses effectuées dans un de nos laboratoires partenaires, les résultats sont automatiquement disponibles dans votre espace personnel de manière sécurisée.",
    delay: "0.8s"
  }
];

const OurFaqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="our-faqs ">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="faqs-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">Questions fréquentes</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">Questions courantes sur nos services</h2>
              </div>
              <div className="faq-accordion" id="faqaccordion">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="accordion-item wow fadeInUp" data-wow-delay={faq.delay}>
                    <h2 className="accordion-header" id={`heading${idx+1}`}>
                      <button
                        className={`accordion-button text-black ${openIndex !== idx ? 'collapsed' : ''}`}
                        type="button"
                        onClick={() => toggleAccordion(idx)}
                        aria-expanded={openIndex === idx}
                        aria-controls={`collapse${idx+1}`}
                      >
                      {faq.question}
                      </button>
                    </h2>
                    <div
                      id={`collapse${idx+1}`}
                      className={`accordion-collapse collapse ${openIndex === idx ? 'show' : ''}`}
                      aria-labelledby={`heading${idx+1}`}
                    >
                      <div className="accordion-body ">
                        <p className="text-black">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="faqs-image-box">
              <div className="faq-image">
                <figure className="image-anime">
                  <img src="/images/faq-image.jpg" alt="FAQ" />
                </figure>
              </div>
              <div className="faqs-contact-box">
                <div className="faqs-cta-box-content">
                  <h3>Besoin d'aide ? Nous sommes là pour vous !</h3>
                  <a href="/contact" className="btn-default btn-dark">Contactez-nous</a>
                </div>
                <div className="icon-box">
                  <img src="/images/icon-phone-accent.svg" alt="Phone" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFaqs;
