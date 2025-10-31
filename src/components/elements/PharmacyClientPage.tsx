'use client';

import Layout from '@/components/layout/layout';
import { useTranslation } from "react-i18next";
import { useEffect } from 'react';

interface Pharmacy {
  nom: string;
  adresse: string;
  ville: string;
  pays?: string;
  contact_1: string;
  contact_2?: string;
  latitude?: string;
  longitude?: string;
}

interface PharmacyClientPageProps {
  pharmacie: Pharmacy;
  slug: string;
  pharmacySchema: any;
}

// Composant de carte interactive
function PharmacyMap({ latitude, longitude, nom }: { latitude: string; longitude: string; nom: string }) {
  return (
    <div className="google-map wow fadeInUp">
      <iframe
        src={`https://www.google.com/maps?q=${latitude},${longitude}&z=14&output=embed`}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ width: '100%', height: '400px', border: 0 }}
        title={nom}
      />
    </div>
  );
}

export default function PharmacyClientPage({ pharmacie, slug, pharmacySchema }: PharmacyClientPageProps) {
  const { t } = useTranslation();

  // Fonction pour insérer les variables dans les chaînes (ex: {address}, {city})
  function replaceVars(text: string): string {
    return text
      .replace('{address}', pharmacie.adresse)
      .replace('{city}', pharmacie.ville)
      .replace('{country}', pharmacie.pays || '')
      .replace('{name}', pharmacie.nom);
  }

  // Récupérer les éléments de recommandations
  const recommendationItems = t("pharmacy.detail.content.recommendations.items", { returnObjects: true }) as string[];

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pharmacySchema) }}
      />

      {/* Header */}
      <div className="page-header bg-section parallaxie" style={{ backgroundImage: `url('/images/post-4.jpg')` }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="text-anime-style-3" data-cursor="-opaque">{pharmacie.nom}</h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page">
                      {t("pharmacy.detail.breadcrumb.home")} / {t("pharmacy.detail.breadcrumb.pharmacies")} / {pharmacie.nom}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="page-service-single">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="page-single-sidebar">
                {/* Informations de la pharmacie */}
                <div className="page-category-list wow fadeInUp">
                  <h3>{t("pharmacy.detail.sidebar.info.title")}</h3>
                  <ul>
                    <li>
                      <a href="#info">
                        <i className="fa-solid fa-building"></i>
                        <span><strong>{t("pharmacy.detail.sidebar.info.name")} :</strong><br />{pharmacie.nom}</span>
                      </a>
                    </li>
                    <li>
                      <a href="#info">
                        <i className="fa-solid fa-location-dot"></i>
                        <span><strong>{t("pharmacy.detail.sidebar.info.address")} :</strong><br />{pharmacie.adresse}</span>
                      </a>
                    </li>
                    <li>
                      <a href="#info">
                        <i className="fa-solid fa-city"></i>
                        <span><strong>{t("pharmacy.detail.sidebar.info.city")} :</strong><br />{pharmacie.ville}</span>
                      </a>
                    </li>
                    {pharmacie.pays && (
                      <li>
                        <a href="#info">
                          <i className="fa-solid fa-globe"></i>
                          <span><strong>{t("pharmacy.detail.sidebar.info.country")} :</strong><br />{pharmacie.pays}</span>
                        </a>
                      </li>
                    )}
                    <li>
                      <a href={`tel:${pharmacie.contact_1}`}>
                        <i className="fa-solid fa-phone"></i>
                        <span><strong>{t("pharmacy.detail.sidebar.info.phone")} :</strong><br />{pharmacie.contact_1}</span>
                      </a>
                    </li>
                    {pharmacie.contact_2 && (
                      <li>
                        <a href={`tel:${pharmacie.contact_2}`}>
                          <i className="fa-solid fa-phone"></i>
                          <span><strong>{t("pharmacy.detail.sidebar.info.phone2")} :</strong><br />{pharmacie.contact_2}</span>
                        </a>
                      </li>
                    )}
                  </ul>
                </div>

                {/* Urgence médicale */}
                <div className="sidebar-cta-box wow fadeInUp" data-wow-delay="0.25s">
                  <div className="sidebar-cta-content">
                    <h3>{t("pharmacy.detail.sidebar.emergency.title")}</h3>
                    <p>{t("pharmacy.detail.sidebar.emergency.description")}</p>
                  </div>
                  <div className="sidebar-contact-box">
                    <div className="icon-box">
                      <img src="/images/icon-cta-phone.svg" alt={t("pharmacy.detail.sidebar.info.phone")} />
                    </div>
                    <div className="sidebar-contact-content">
                      <p>{t("pharmacy.detail.sidebar.emergency.callDirect")}</p>
                      <h3><a href={`tel:${pharmacie.contact_1}`}>{pharmacie.contact_1}</a></h3>
                    </div>
                  </div>
                </div>

                {/* Localisation GPS */}
                {pharmacie.latitude && pharmacie.longitude && (
                  <div className="page-category-list wow fadeInUp" data-wow-delay="0.5s">
                    <h3>{t("pharmacy.detail.sidebar.location.title")}</h3>
                    <ul>
                      <li>
                        <a href={`https://www.google.com/maps?q=${pharmacie.latitude},${pharmacie.longitude}`} target="_blank" rel="noopener noreferrer">
                          <i className="fa-solid fa-map-location-dot"></i>
                          <span><strong>{t("pharmacy.detail.sidebar.info.coordinates")} :</strong><br />{pharmacie.latitude}, {pharmacie.longitude}</span>
                        </a>
                      </li>
                    </ul>
                    <div className="sidebar-cta-box mt-3" style={{ padding: '15px' }}>
                      <a
                        href={`https://www.google.com/maps?q=${pharmacie.latitude},${pharmacie.longitude}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-default btn-highlighted"
                        style={{ width: '100%', textAlign: 'center' }}
                      >
                        <i className="fa-solid fa-map-location-dot"></i> {t("pharmacy.detail.sidebar.location.viewOnMaps")}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Contenu principal */}
            <div className="col-lg-8">
              <div className="service-single-content">
                {/* Carte interactive */}
                {pharmacie.latitude && pharmacie.longitude && (
                  <div className="page-single-image" style={{ marginBottom: '40px' }}>
                    <PharmacyMap 
                      latitude={pharmacie.latitude} 
                      longitude={pharmacie.longitude} 
                      nom={replaceVars(t("pharmacy.detail.map.title"))} 
                    />
                  </div>
                )}

                {/* Description */}
                <div className="service-entry">
                  <div className="wow fadeInUp">
                    <h2>{replaceVars(t("pharmacy.detail.content.about.title"))}</h2>
                    <p>{replaceVars(t("pharmacy.detail.content.about.description"))}</p>
                  </div>

                  {/* Détails du service */}
                  <div className="service-support-step wow fadeInUp" data-wow-delay="0.2s">
                    <h3>{t("pharmacy.detail.content.service.title")}</h3>
                    <div className="support-step-box">
                      <div className="support-step-image-content">
                        <div className="support-step-image">
                          <figure>
                            <img src="/images/case-study-100.jpg" alt={t("pharmacy.detail.content.service.title")} />
                          </figure>
                        </div>
                        <div className="support-step-content">
                          <p>{t("pharmacy.detail.content.service.description")}</p>
                          {pharmacie.pays && <p><strong>{t("pharmacy.detail.content.service.country")} :</strong> {pharmacie.pays}</p>}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Accès et localisation */}
                  <div className="service-priority-box wow fadeInUp" data-wow-delay="0.4s">
                    <h3>{t("pharmacy.detail.content.access.title")}</h3>
                    <div className="service-priority-item-list">
                      <div className="what-we-item">
                        <div className="icon-box"><i className="fa-solid fa-location-dot" /></div>
                        <div className="what-we-item-content">
                          <h3>{t("pharmacy.detail.content.access.fullAddress")}</h3>
                          <p>{pharmacie.adresse}, {pharmacie.ville}, {pharmacie.pays}</p>
                        </div>
                      </div>
                      <div className="what-we-item">
                        <div className="icon-box"><i className="fa-solid fa-phone" /></div>
                        <div className="what-we-item-content">
                          <h3>{t("pharmacy.detail.content.access.mainContact")}</h3>
                          <p><a href={`tel:${pharmacie.contact_1}`}>{pharmacie.contact_1}</a></p>
                        </div>
                      </div>
                      {pharmacie.contact_2 && (
                        <div className="what-we-item">
                          <div className="icon-box"><i className="fa-solid fa-mobile-screen-button" /></div>
                          <div className="what-we-item-content">
                            <h3>{t("pharmacy.detail.content.access.secondaryContact")}</h3>
                            <p><a href={`tel:${pharmacie.contact_2}`}>{pharmacie.contact_2}</a></p>
                          </div>
                        </div>
                      )}
                    </div>
                    {pharmacie.latitude && pharmacie.longitude && (
                      <div className="mt-4">
                        <a
                          href={`https://www.google.com/maps?q=${pharmacie.latitude},${pharmacie.longitude}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-default"
                        >
                          {t("pharmacy.detail.content.access.getDirections")}
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Recommandations */}
                  <div className="service-empower-box wow fadeInUp" data-wow-delay="0.6s">
                    <div className="service-empower-content">
                      <h3>{t("pharmacy.detail.content.recommendations.title")}</h3>
                      <ul>
                        {recommendationItems.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}