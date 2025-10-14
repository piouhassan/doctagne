"use client";

import { useTranslation } from "react-i18next";

const MainFooter = () => {
  const { t } = useTranslation();

  return (
    <footer className="main-footer bg-section dark-section">
      <div className="container">
        <div className="row">
          {/* Colonne gauche : description + contact */}
          <div className="col-lg-6">
            <div className="about-footer">
              <div className="footer-logo">
                <img src="/images/doctagne red.png" alt="Footer Logo" />
              </div>
              <div className="about-footer-content">
                <p>{t("footer.description")}</p>
              </div>

              <div className="footer-contact-details mt-5">
                <div className="footer-contact-item">
                  <div className="icon-box">
                    <img src="/images/icon-mail.svg" alt="Mail" />
                  </div>
                  <div className="footer-contact-item-content">
                    <p className="pt-2">
                      <a href="mailto:contact@doctagne.com">contact@doctagne.com</a>
                    </p>
                  </div>
                </div>
                <div className="footer-contact-item">
                  <div className="icon-box">
                    <img src="/images/icon-phone.svg" alt="Phone" />
                  </div>
                  <div className="footer-contact-item-content">
                    <p className="pt-2">
                      <a href="tel:+22890015029">+(228) 90 01 50 29</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne droite : newsletter */}
          <div className="col-lg-6">
            <div className="footer-newsletter-box">
              <div className="section-title">
                <h4 className="text-white" data-cursor="-opaque">
                  {t("footer.newsletterTitle")}
                </h4>
              </div>
              <div className="footer-newsletter-form">
                <form id="newslettersForm" action="#" method="POST">
                  <div className="form-group">
                    <input
                      type="email"
                      name="mail"
                      className="form-control"
                      id="mail"
                      placeholder={t("footer.placeholder")}
                      required
                    />
                    <button type="submit" className="newsletter-btn">
                      <i className="fa-regular fa-paper-plane"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Bas de page */}
          <div className="col-lg-12">
            <div className="footer-copyright">
              <div className="footer-copyright-text">
                <p>{t("footer.copyright")}</p>
              </div>
              <div className="footer-links">
                <ul>
                  <li><a href="/app">{t("footer.links.home")}</a></li>
                  <li><a href="/actualites">{t("footer.links.news")}</a></li>
                  <li><a href="/services">{t("footer.links.services")}</a></li>
                  <li><a href="/pharmacie-de-garde">{t("footer.links.pharmacy")}</a></li>
                  <li><a href="/contact">{t("footer.links.contact")}</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
