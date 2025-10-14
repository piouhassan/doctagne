"use client";

import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className="about-us">
      <div className="container">
        <div className="row align-items-center">
          {/* Colonne gauche avec images */}
          <div className="col-lg-6">
            <div className="about-us-images">
              <div className="about-img-1">
                <figure>
                  <img src="/images/about-image-1.jpg" alt="about" />
                </figure>
              </div>
              <div className="about-img-2">
                <figure className="image-anime">
                  <img src="/images/about-image-2.jpg" alt="about" />
                </figure>
                <div className="working-hours-box">
                  <div className="working-hours-body">
                    <ul>
                      <li>{t("about.quote")}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne droite avec contenu */}
          <div className="col-lg-6">
            <div className="about-us-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">{t("about.sectionTitle")}</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  {t("about.mainTitle")}
                </h2>
                <p className="wow fadeInUp text-black" data-wow-delay="0.2s">
                  {t("about.description")}
                </p>
              </div>

              <div className="about-us-body">
                <div className="about-experience-box">
                  <div
                    className="about-experience-item wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <div className="icon-box">
                      <img
                        src="/images/icon-about-experience-1.svg"
                        alt="experience"
                      />
                    </div>
                    <div className="about-experience-content">
                      <h3>{t("about.item1")}</h3>
                    </div>
                  </div>
                  <div
                    className="about-experience-item wow fadeInUp"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-box">
                      <img
                        src="/images/icon-about-experience-2.svg"
                        alt="experience"
                      />
                    </div>
                    <div className="about-experience-content">
                      <h3>{t("about.item2")}</h3>
                    </div>
                  </div>
                </div>

                <div
                  className="trusted-profession-box wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div className="icon-box">
                    <img
                      src="/images/icon-trusted-profession.svg"
                      alt="trusted"
                    />
                  </div>
                  <div className="trusted-profession-content">
                    <h3>{t("about.final")}</h3>
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

export default AboutUs;
