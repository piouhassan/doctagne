"use client";

import { useTranslation } from "react-i18next";

const ContactInfoSection = () => {
  const { t } = useTranslation();

  return (
    <div className="contact-us-content">
      <div className="section-title">
        <h3 className="wow fadeInUp">{t("contact-info.subtitle")}</h3>
        <h2 className="text-anime-style-3" data-cursor="-opaque">
          {t("contact-info.title")}
        </h2>
        <p className="wow fadeInUp" data-wow-delay="0.2s">
          {t("contact-info.description")}
        </p>
      </div>

      <div className="contact-info-box">
        <div className="contact-info-list">
          <div className="contact-info-item wow fadeInUp" data-wow-delay="0.4s">
            <div className="icon-box">
              <img src="/images/icon-phone.svg" alt="Phone" />
            </div>
            <div className="contact-item-content">
              <h3>{t("contact-info.phoneTitle")}</h3>
              <p><a href="tel:+22890015029">+(228) 90 01 50 29</a></p>
            </div>
          </div>

          <div className="contact-info-item wow fadeInUp" data-wow-delay="0.4s">
            <div className="icon-box">
              <img src="/images/icon-mail.svg" alt="Mail" />
            </div>
            <div className="contact-item-content">
              <h3>{t("contact-info.emailTitle")}</h3>
              <p><a href="mailto:contact@doctagne.com">contact@doctagne.com</a></p>
              <p><a href="mailto:support@doctagne.com">support@doctagne.com</a></p>
            </div>
          </div>

          <div className="contact-info-item wow fadeInUp" data-wow-delay="0.6s">
            <div className="icon-box">
              <img src="/images/icon-location.svg" alt="Adresse" />
            </div>
            <div className="contact-item-content">
              <h3>{t("contact-info.addressTitle")}</h3>
              <p>{t("contact-info.address")}</p>
            </div>
          </div>

          <div className="contact-info-item wow fadeInUp" data-wow-delay="0.6s">
            <div className="icon-box">
              <img src="/images/icon-clock.svg" alt="Horaires" />
            </div>
            <div className="contact-item-content">
              <h3>{t("contact-info.hoursTitle")}</h3>
              <p>{t("contact-info.days")}</p>
              <p>{t("contact-info.hours")}</p>
            </div>
          </div>
        </div>

        <div className="contact-social-links wow fadeInUp" data-wow-delay="0.8s">
          <h3>{t("contact-info.follow")}</h3>
          <ul>
            <li><a href="https://www.facebook.com/Doctagne/"><i className="fa-brands fa-facebook-f"></i></a></li>
            <li><a href="https://www.linkedin.com/doctagne"><i className="fa-brands fa-linkedin-in"></i></a></li>
            <li><a href="https://www.instagram.com/doctagne/"><i className="fa-brands fa-instagram"></i></a></li>
            <li><a href="https://x.com/doctagne"><i className="fa-brands fa-x-twitter"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoSection;
