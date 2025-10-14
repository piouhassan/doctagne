"use client";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const WhyChooseUs = () => {
  const { t } = useTranslation();

  return (
    <div className="why-choose-us">
      <div className="container">
        <div className="row">
          {/* Contenu texte */}
          <div className="col-lg-6">
            <div className="why-choose-us-content text-black">
              <div className="section-title">
                <h3 className="wow fadeInUp">{t("why.sectionTitle")}</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  {t("why.mainTitle")}
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  {t("why.description")}
                </p>
              </div>
              <div
                className="why-choose-btn wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <Link href="/services" className="btn-default">
                  {t("why.button")}
                </Link>
              </div>

              <div className="why-choose-item-box">
                <div
                  className="why-choose-item wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <div className="why-choose-item-content">
                    <h3>{t("why.items.0.title")}</h3>
                    <p>{t("why.items.0.description")}</p>
                  </div>
                </div>
                <div
                  className="why-choose-item wow fadeInUp"
                  data-wow-delay="0.8s"
                >
                  <div className="why-choose-item-content">
                    <h3>{t("why.items.1.title")}</h3>
                    <p>{t("why.items.1.description")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image et statistiques */}
          <div className="col-lg-6">
            <div className="why-choose-image-box">
              <div className="why-choose-image">
                <figure>
                  <img src="/images/why-choose-image.png" alt="why-choose" />
                </figure>
              </div>

              <div
                className="satisfy-client-box wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="satisfy-client-images">
                  <div className="satisfy-client-image">
                    <figure className="image-anime">
                      <img
                        src="/images/satisfy-client-img-1.jpg"
                        alt="client"
                      />
                    </figure>
                  </div>
                  <div className="satisfy-client-image">
                    <figure className="image-anime">
                      <img
                        src="/images/satisfy-client-img-2.jpg"
                        alt="client"
                      />
                    </figure>
                  </div>
                  <div className="satisfy-client-image">
                    <figure className="image-anime">
                      <img
                        src="/images/satisfy-client-img-3.jpg"
                        alt="client"
                      />
                    </figure>
                  </div>
                  <div className="satisfy-client-image">
                    <figure className="image-anime">
                      <img
                        src="/images/satisfy-client-img-4.jpg"
                        alt="client"
                      />
                    </figure>
                  </div>
                  <div className="satisfy-client-image add-more">
                    <i className="fa-solid fa-plus"></i>
                  </div>
                </div>
                <div className="satisfy-client-content">
                  <p>
                    {t("why.statText")}{" "}
                    <span className="counter">{t("why.statNumber")}</span>K{" "}
                    {t("why.statEnd")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
