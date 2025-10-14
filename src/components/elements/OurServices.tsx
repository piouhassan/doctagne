"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t("services.items.0.title"),
      icon: "/images/icon-service-1.svg",
      description: t("services.items.0.description"),
      delay: "0s",
      slug: "gestion-medicale",
    },
    {
      title: t("services.items.1.title"),
      icon: "/images/icon-service-2.svg",
      description: t("services.items.1.description"),
      delay: "0.2s",
      slug: "telemedecine",
    },
    {
      title: t("services.items.2.title"),
      icon: "/images/icon-service-3.svg",
      description: t("services.items.2.description"),
      delay: "0.4s",
      slug: "pharmacie",
    },
    {
      title: t("services.items.3.title"),
      icon: "/images/icon-service-4.svg",
      description: t("services.items.3.description"),
      delay: "0.6s",
      slug: "laboratoire",
    },
  ];

  return (
    <div className="our-services bg-section">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-6">
            <div className="section-title">
              <h3 className="wow fadeInUp">{t("services.sectionTitle")}</h3>
              <h2 className="text-anime-style-3" data-cursor="-opaque">
                {t("services.mainTitle")}
              </h2>
            </div>
          </div>

          <div className="col-lg-6">
            <div
              className="section-title-content wow fadeInUp"
              data-wow-delay="0.2s"
            ></div>
          </div>
        </div>

        <div className="row service-list">
          {services.map((service, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div
                className={`service-item ${index === 0 ? "active" : ""}`}
                data-wow-delay={service.delay}
              >
                <div className="service-title">
                  <h3>
                    <Link href={`/services/${service.slug}`}>{service.title}</Link>
                  </h3>
                </div>
                <div className="icon-box">
                  <Image src={service.icon} alt={service.title} width={20} height={20} style={{color : "white" }} />
                </div>
                <div className="service-content">
                  <p className={`${index !== 0 ? "" : "active"}`}>
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <div className="col-lg-12">
            <div
              className="section-footer-text wow fadeInUp text-black"
              data-wow-delay="0.8s"
            >
              <p>
                <span>{t("services.footer.highlight")}</span>
                {t("services.footer.text")}{" "}
                <Link href="https://app.doctagne.com">
                  {t("services.footer.link")}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
