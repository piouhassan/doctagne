"use client";

import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="hero bg-section dark-section parallaxie">
      <div className="hero-section">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-9">
              <div className="hero-content">
                <div className="section-title">
                  <h1 className="text-anime-style-3" data-cursor="-opaque">
                    {t("hero.title")}
                  </h1>
                  <p className="wow fadeInUp">{t("hero.description")}</p>
                </div>
                <div className="hero-body">
                  <div
                    className="hero-btn wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <a href="https://app.doctagne.com/register" className="btn-default btn-dark">
                      {t("hero.button")}
                    </a>
                  </div>
                  <div
                    className="satisfy-client-box wow fadeInUp"
                    data-wow-delay="0.4s"
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
                    </div>
                    <div className="satisfy-client-content">
                      <p>
                        <span>{t("hero.statNumber")}</span>{" "}{t("hero.statText")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              {/* <div className="recovery-circle">
                <a href="/contact"><img src="/images/recovery-circle.svg" alt="" /></a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
