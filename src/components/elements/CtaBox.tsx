"use client";

import { useTranslation } from "react-i18next";

const CtaBox = () => {
  const { t } = useTranslation();

  return (
    <div className="cta-box bg-section dark-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Contenu texte */}
          <div className="col-lg-6">
            <div className="cta-box-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">{t("cta.sectionTitle")}</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  {t("cta.mainTitle")}
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  {t("cta.description")}
                </p>
              </div>

              <div
                className="cta-box-list wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <ul>
                  <li>{t("cta.items.0")}</li>
                  <li>{t("cta.items.1")}</li>
                </ul>
              </div>

              <div
                className="cta-box-btn wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <a href="/inscription" className="btn-default btn-dark">
                  {t("cta.button")}
                </a>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="col-lg-6">
            <div className="cta-box-image">
              <figure>
                <img src="/images/cta-box-image.png" alt="CTA" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaBox;
