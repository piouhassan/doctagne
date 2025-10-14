"use client";

import { useTranslation } from "react-i18next";

const PharmaciePageHeader = () => {
  const { t } = useTranslation();

  return (
    <div
      className="page-header bg-section parallaxie"
      style={{ backgroundImage: `url('/images/pharmacie-header.jpg')` }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="page-header-box">
              <h1 className="text-anime-style-3" data-cursor="-opaque">
                {t("pharmacy-header.title")}
              </h1>
              <nav className="wow fadeInUp">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item active" aria-current="page">
                    {t("pharmacy-header.breadcrumb")}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmaciePageHeader;
