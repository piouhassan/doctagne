"use client";

import { useTranslation } from "react-i18next";

interface ProcessStep {
  image: string;
  title: string;
  description: string;
  delay: string;
}

const HowItWork = () => {
  const { t } = useTranslation();

  const steps: ProcessStep[] = [
    {
      image: "/images/work-image-1.jpg",
      title: t("how.steps.0.title"),
      description: t("how.steps.0.description"),
      delay: "0s",
    },
    {
      image: "/images/work-image-2.jpg",
      title: t("how.steps.1.title"),
      description: t("how.steps.1.description"),
      delay: "0.2s",
    },
    {
      image: "/images/work-image-3.jpg",
      title: t("how.steps.2.title"),
      description: t("how.steps.2.description"),
      delay: "0.4s",
    },
    {
      image: "/images/work-image-4.jpg",
      title: t("how.steps.3.title"),
      description: t("how.steps.3.description"),
      delay: "0.6s",
    },
  ];

  return (
    <div className="how-it-work bg-section text-black">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            <div className="section-title section-title-center">
              <h3 className="wow fadeInUp">{t("how.sectionTitle")}</h3>
              <h2 className="text-anime-style-3" data-cursor="-opaque">
                {t("how.mainTitle")}
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="work-item-list">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className={`work-item work-box-${idx + 1} wow fadeInUp`}
                  data-wow-delay={step.delay}
                >
                  <div className="work-item-image">
                    <figure className="image-anime">
                      <img src={step.image} alt={step.title} />
                    </figure>
                  </div>
                  <div className="work-item-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
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

export default HowItWork;
