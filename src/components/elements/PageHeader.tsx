"use client";

import { useTranslation } from "react-i18next";

const PageHeader = () => {
  const { t } = useTranslation();

  return (
    <div
      className="page-header bg-section parallaxie"
      style={{ backgroundImage: `url('/images/actualites-header.jpg')` }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="page-header-box">
              <h1 className="text-anime-style-3" data-cursor="-opaque">
                {t("pageHeader.title")}
              </h1>
              <nav className="wow fadeInUp">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item active" aria-current="page">
                    {t("pageHeader.path")}
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

export default PageHeader;
