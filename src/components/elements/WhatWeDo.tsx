"use client";

import { useTranslation } from "react-i18next";

const WhatWeDo = () => {
  const { t } = useTranslation();

  const items = [
    {
      icon: "/images/icon-what-we-item-1.svg",
      title: t("what.items.0.title"),
      description: t("what.items.0.description"),
      delay: "0.4s",
    },
    {
      icon: "/images/icon-what-we-item-2.svg",
      title: t("what.items.1.title"),
      description: t("what.items.1.description"),
      delay: "0.6s",
    },
    {
      icon: "/images/icon-what-we-item-3.svg",
      title: t("what.items.2.title"),
      description: t("what.items.2.description"),
      delay: "0.8s",
    },
  ];

  return (
    <div className="what-we-do text-black">
      <div className="container">
        <div className="row align-items-center">
          {/* Colonne image */}
          <div className="col-lg-6">
            <div className="what-we-image-box">
              <div className="what-we-image">
                <figure>
                  <img src="/images/what-we-image.jpg" alt="what-we" />
                </figure>
              </div>

              <div
                className="what-we-contact-box wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="what-we-contact-item">
                  <div className="icon-box">
                    <img src="/images/icon-mail.svg" alt="mail" />
                  </div>
                  <div className="what-we-contact-item-content">
                    <p>{t("what.contact.label")}</p>
                    <h3>
                      <a href="mailto:contact@doctagne.com">
                        {t("what.contact.email")}
                      </a>
                    </h3>
                  </div>
                </div>
                <div className="what-we-contact-btn">
                  <a href="/contact" className="btn-default">
                    {t("what.contact.button")}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne texte */}
          <div className="col-lg-6">
            <div className="what-we-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">{t("what.sectionTitle")}</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  {t("what.mainTitle")}
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  {t("what.description")}
                </p>
              </div>

              <div className="what-we-item-box">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="what-we-item wow fadeInUp"
                    data-wow-delay={item.delay}
                  >
                    <div className="icon-box">
                      <img src={item.icon} alt={`item-${index}`} />
                    </div>
                    <div className="what-we-item-content">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
