"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";

const OurFaqs = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: t("faqs.items.0.question"),
      answer: t("faqs.items.0.answer"),
      delay: "0.2s",
    },
    {
      question: t("faqs.items.1.question"),
      answer: t("faqs.items.1.answer"),
      delay: "0.4s",
    },
    {
      question: t("faqs.items.2.question"),
      answer: t("faqs.items.2.answer"),
      delay: "0.6s",
    },
    {
      question: t("faqs.items.3.question"),
      answer: t("faqs.items.3.answer"),
      delay: "0.8s",
    },
  ];

  return (
    <div className="our-faqs">
      <div className="container">
        <div className="row align-items-center">
          {/* Section FAQ (texte) */}
          <div className="col-lg-6">
            <div className="faqs-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">{t("faqs.sectionTitle")}</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  {t("faqs.mainTitle")}
                </h2>
              </div>

              <div className="faq-accordion" id="faqaccordion">
                {faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="accordion-item wow fadeInUp"
                    data-wow-delay={faq.delay}
                  >
                    <h2 className="accordion-header" id={`heading${idx + 1}`}>
                      <button
                        className={`accordion-button text-black ${
                          openIndex !== idx ? "collapsed" : ""
                        }`}
                        type="button"
                        onClick={() => toggleAccordion(idx)}
                        aria-expanded={openIndex === idx}
                        aria-controls={`collapse${idx + 1}`}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div
                      id={`collapse${idx + 1}`}
                      className={`accordion-collapse collapse ${
                        openIndex === idx ? "show" : ""
                      }`}
                      aria-labelledby={`heading${idx + 1}`}
                    >
                      <div className="accordion-body">
                        <p className="text-black">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section image et contact */}
          <div className="col-lg-6">
            <div className="faqs-image-box">
              <div className="faq-image">
                <figure className="image-anime">
                  <img src="/images/faq-image.jpg" alt="FAQ" />
                </figure>
              </div>
              <div className="faqs-contact-box">
                <div className="faqs-cta-box-content">
                  <h3>{t("faqs.contact.title")}</h3>
                  <a href="/contact" className="btn-default btn-dark">
                    {t("faqs.contact.button")}
                  </a>
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
