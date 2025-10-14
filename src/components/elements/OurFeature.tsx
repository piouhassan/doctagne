"use client";

import { useTranslation } from "react-i18next";

const OurFeature = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: "/images/icon-feature-1.svg",
      title: t("feature.items.0.title"),
      description: t("feature.items.0.description"),
      counter: "98",
      counterSymbol: "%",
      counterText: t("feature.items.0.counterText"),
      counterIcon: "/images/icon-feature-counter-1.svg",
    },
    {
      icon: "/images/icon-feature-2.svg",
      title: t("feature.items.1.title"),
      description: t("feature.items.1.description"),
      counter: "3",
      counterSymbol: "k+",
      counterText: t("feature.items.1.counterText"),
      counterIcon: "/images/icon-feature-counter-2.svg",
    },
    {
      icon: "/images/icon-feature-3.svg",
      title: t("feature.items.2.title"),
      description: t("feature.items.2.description"),
      counter: "87",
      counterSymbol: "%",
      counterText: t("feature.items.2.counterText"),
      counterIcon: "/images/icon-feature-counter-3.svg",
    },
  ];

  return (
    <div className="our-feature bg-section">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-6">
            <div className="section-title">
              <h3 className="wow fadeInUp">{t("feature.sectionTitle")}</h3>
              <h2 className="text-anime-style-3" data-cursor="-opaque">
                {t("feature.mainTitle")}
              </h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-btn wow fadeInUp" data-wow-delay="0.2s">
              <a href="/contact" className="btn-default">
                {t("feature.button")}
              </a>
            </div>
          </div>
        </div>

        <div className="row feature-item-box">
          {features.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div
                className={`feature-item wow fadeInUp ${
                  index === 0 ? "active" : ""
                }`}
                data-wow-delay={`${index * 0.2}s`}
              >
                <div className="icon-box">
                  <img src={item.icon} alt={`feature-${index}`} />
                </div>
                <div className="feature-item-header">
                  <h3>{item.title}</h3>
                </div>
                <div className="feature-item-content">
                  <p>{item.description}</p>
                </div>
                <div className="feature-counter-item">
                  <div className="feature-counter-content">
                    <h2>
                      <span className="counter">{item.counter}</span>
                      <sup>{item.counterSymbol}</sup>
                    </h2>
                    <p>{item.counterText}</p>
                  </div>
                  <div className="feature-counter-icon">
                    <img src={item.counterIcon} alt={`counter-${index}`} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurFeature;
