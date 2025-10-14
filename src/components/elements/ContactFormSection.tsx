"use client";

import { useTranslation } from "react-i18next";

const ContactFormSection = () => {
  const { t } = useTranslation();

  return (
    <div className="contact-us-form">
      <div className="section-title">
        <h2 className="text-anime-style-3" data-cursor="-opaque">
          {t("contact-form.title")}
        </h2>
      </div>
      <div className="contact-form">
        <form id="contactForm" action="#" method="POST" data-toggle="validator" className="wow fadeInUp" data-wow-delay="0.2s">
          <div className="row">
            <div className="form-group col-md-6 mb-4">
              <input type="text" name="fname" className="form-control" id="fname" placeholder={t("contact-form.firstName")} required />
            </div>
            <div className="form-group col-md-6 mb-4">
              <input type="text" name="lname" className="form-control" id="lname" placeholder={t("contact-form.lastName")} required />
            </div>
            <div className="form-group col-md-6 mb-4">
              <input type="email" name="email" className="form-control" id="email" placeholder={t("contact-form.email")} required />
            </div>
            <div className="form-group col-md-6 mb-4">
              <input type="text" name="phone" className="form-control" id="phone" placeholder={t("contact-form.phone")} required />
            </div>
            <div className="form-group col-md-12 mb-5">
              <textarea name="message" className="form-control" id="message" rows={4} placeholder={t("contact-form.message")}></textarea>
            </div>
            <div className="col-md-12">
              <button type="submit" className="btn-default">{t("contact-form.send")}</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactFormSection;
