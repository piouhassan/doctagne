"use client";

import { useTranslation } from "react-i18next";

const OurResults = () => {
  const { t } = useTranslation();

  return (
    <div className="our-results bg-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Colonne gauche : contenu */}
          <div className="col-lg-6">
            <div className="our-result-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">{t("results.sectionTitle")}</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  {t("results.mainTitle")}
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  {t("results.description")}
                </p>
              </div>

              <div className="result-item-list">
                {/* Item 1 */}
                <div
                  className="result-item wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div className="icon-box">
                    <img
                      src="/images/icon-result-item-1.svg"
                      alt={t("results.item1.title")}
                    />
                  </div>
                  <div className="result-item-content">
                    <h3>{t("results.item1.title")}</h3>
                    <p>{t("results.item1.text")}</p>
                  </div>
                </div>

                {/* Item 2 */}
                <div
                  className="result-item wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <div className="icon-box">
                    <img
                      src="/images/icon-result-item-2.svg"
                      alt={t("results.item2.title")}
                    />
                  </div>
                  <div className="result-item-content">
                    <h3>{t("results.item2.title")}</h3>
                    <p>{t("results.item2.text")}</p>
                  </div>
                </div>

                {/* Item 3 */}
                <div
                  className="result-item wow fadeInUp"
                  data-wow-delay="0.8s"
                >
                  <div className="icon-box">
                    <img
                      src="/images/icon-result-item-3.svg"
                      alt={t("results.item3.title")}
                    />
                  </div>
                  <div className="result-item-content">
                    <h3>{t("results.item3.title")}</h3>
                    <p>{t("results.item3.text")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne droite : image */}
          <div className="col-lg-6">
            <div className="result-image-box">
              <div className="result-image">
                <figure>
                  <img src="/images/result-image.jpg" alt="Result" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurResults;
