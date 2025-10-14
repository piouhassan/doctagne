"use client";

import { useTranslation } from "react-i18next";

const OurApproach = () => {
  const { t } = useTranslation();

  return (
    <div className="our-approach bg-section">
      <div className="container">
        {/* Section Title */}
        <div className="row section-row align-items-center">
          <div className="col-lg-6">
            <div className="section-title">
              <h3 className="wow fadeInUp">{t("our-approach.sectionTitle")}</h3>
              <h2 className="text-anime-style-3" data-cursor="-opaque">
                {t("our-approach.mainTitle")}
              </h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="section-title-content wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <p>{t("our-approach.description")}</p>
            </div>
          </div>
        </div>

        {/* Mission / Vision / Valeurs */}
        <div className="row">
          <div className="col-lg-6">
            <div className="approach-item-list">
              {/* Mission */}
              <div
                className="approach-item wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="icon-box">
                  <img src="/images/icon-mission.svg" alt="Mission" />
                </div>
                <div className="approach-item-content">
                  <h3>{t("our-approach.mission.title")}</h3>
                  <p>{t("our-approach.mission.text")}</p>
                </div>
              </div>

              {/* Vision */}
              <div
                className="approach-item wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <div className="icon-box">
                  <img src="/images/icon-vision.svg" alt="Vision" />
                </div>
                <div className="approach-item-content">
                  <h3>{t("our-approach.vision.title")}</h3>
                  <p>{t("our-approach.vision.text")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Valeurs */}
          <div className="col-lg-6">
            <div className="approach-image-box">
              <figure className="image-anime">
                <img src="/images/approach-image.jpg" alt="Approach" />
              </figure>
              <div
                className="approach-image-content wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <h3>{t("our-approach.values.title")}</h3>
                <p>{t("our-approach.values.text")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurApproach;
