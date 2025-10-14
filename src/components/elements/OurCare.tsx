"use client";

import { useTranslation } from "react-i18next";

const OurCare = () => {
  const { t } = useTranslation();

  return (
    <div className="our-care">
      <div className="container">
        <div className="row align-items-center">
          {/* Images à gauche */}
          <div className="col-lg-6">
            <div className="our-care-images">
              <div className="care-image-1">
                <figure>
                  <img src="/images/care-image-1.jpg" alt="Care 1" />
                </figure>
              </div>

              <div className="trusted-profession-box wow fadeInUp">
                <div className="icon-box">
                  <img
                    src="/images/icon-trusted-profession.svg"
                    alt="Trusted"
                  />
                </div>
                <div className="trusted-profession-content">
                  <h3>{t("our-care.trustedProfessionals")}</h3>
                </div>
              </div>

              <div className="care-image-2">
                <figure>
                  <img src="/images/care-image-2.jpg" alt="Care 2" />
                </figure>
              </div>
            </div>
          </div>

          {/* Contenu à droite */}
          <div className="col-lg-6">
            <div className="our-care-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">
                  {t("our-care.sectionTitle")}
                </h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  {t("our-care.mainTitle")}
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  {t("our-care.description")}
                </p>
              </div>

              <div className="care-counter-list">
                <div className="care-counter-item">
                  <div className="icon-box">
                    <img
                      src="/images/icon-care-counter-2.svg"
                      alt="Success"
                    />
                  </div>
                  <div className="care-counter-item-content">
                    <h2>
                      <span className="counter">98</span>%
                    </h2>
                    <p>{t("our-care.satisfaction")}</p>
                  </div>
                </div>

                <div className="care-counter-item">
                  <div className="icon-box">
                    <img
                      src="/images/icon-care-counter-3.svg"
                      alt="Global"
                    />
                  </div>
                  <div className="care-counter-item-content">
                    <h2>
                      <span className="counter">3</span>K+
                    </h2>
                    <p>{t("our-care.professionals")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCare;
