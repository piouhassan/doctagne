"use client";

import { useTranslation } from "react-i18next";

const PageServices = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t("page-services.item1.title"),
      icon: "/images/icon-service-1.svg",
      description: t("page-services.item1.description"),
      delay: "0s",
    },
    {
      title: t("page-services.item2.title"),
      icon: "/images/icon-service-2.svg",
      description: t("page-services.item2.description"),
      delay: "0.2s",
    },
    {
      title: t("page-services.item3.title"),
      icon: "/images/icon-service-3.svg",
      description: t("page-services.item3.description"),
      delay: "0.4s",
    },
    {
      title: t("page-services.item4.title"),
      icon: "/images/icon-service-4.svg",
      description: t("page-services.item4.description"),
      delay: "0.6s",
    },
    {
      title: t("page-services.item5.title"),
      icon: "/images/icon-service-5.svg",
      description: t("page-services.item5.description"),
      delay: "0.8s",
    },
    {
      title: t("page-services.item6.title"),
      icon: "/images/icon-service-6.svg",
      description: t("page-services.item6.description"),
      delay: "1s",
    },
    {
      title: t("page-services.item7.title"),
      icon: "/images/icon-service-7.svg",
      description: t("page-services.item7.description"),
      delay: "1.2s",
    },
    {
      title: t("page-services.item8.title"),
      icon: "/images/icon-service-8.svg",
      description: t("page-services.item8.description"),
      delay: "1.4s",
    },
  ];

  return (
    <div className="page-services">
      <div className="container">
        <div className="row service-list">
          {services.map((service, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div
                className={`service-item${
                  index === 0 || index === 4 ? " active" : ""
                } wow fadeInUp`}
                data-wow-delay={service.delay}
              >
                <div className="service-title">
                  <h3>
                    <a href="/service-single">{service.title}</a>
                  </h3>
                </div>
                <div className="icon-box">
                  <img src={service.icon} alt={service.title} />
                </div>
                <div className="service-content">
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageServices;
