"use client";

import { useTranslation } from "react-i18next";

const OurPrograms = () => {
  const { t } = useTranslation();

  const programs = [
    {
      title: t("programs.items.0.title"),
      description: t("programs.items.0.description"),
      delay: "0s",
    },
    {
      title: t("programs.items.1.title"),
      description: t("programs.items.1.description"),
      delay: "0.2s",
    },
    {
      title: t("programs.items.2.title"),
      description: t("programs.items.2.description"),
      delay: "0.4s",
    },
    {
      title: t("programs.items.3.title"),
      description: t("programs.items.3.description"),
      delay: "0.6s",
    },
  ];

  return (
    <div className="our-programs text-black">
      <div className="container">
        <div className="row">
          {/* Partie gauche - image et texte d’introduction */}
          <div className="col-lg-6">
            <div className="programs-image-box">
              <div className="section-title">
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  {t("programs.mainTitle")}
                </h2>
              </div>
              <div className="programs-item-body">
                <div
                  className="programs-body-content wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <p>{t("programs.description")}</p>
                </div>
                <div className="programs-body-image">
                  <figure>
                    <img
                      src="/images/programs-body-image.png"
                      alt="Programmes"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>

          {/* Partie droite - liste des programmes */}
          <div className="col-lg-6">
            <div className="programs-item-list">
              {programs.map((program, idx) => (
                <div
                  key={idx}
                  className="programs-item wow fadeInUp"
                  data-wow-delay={program.delay}
                >
                  <div className="programs-item-header">
                    <div className="programs-item-title">
                      <h3>{program.title}</h3>
                    </div>
                    <div className="program-btn">
                      <a href="/contact">
                        <img
                          src="/images/arrow-white.svg"
                          alt="Contact"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="programs-item-content">
                    <p>{program.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPrograms;
