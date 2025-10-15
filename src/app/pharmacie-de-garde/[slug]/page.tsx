import Layout from '@/components/layout/layout';
import { notFound } from 'next/navigation';
import { generateSEO, generatePharmacySchema } from '@/lib/seo';
import { pharmaciesData } from '@/lib/data';

// Fonction pour générer un slug à partir d'un nom
function generateSlug(nom: string): string {
  return nom
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Fonction pour récupérer les données de la pharmacie
async function getPharmacieData(slug: string) {
  const pharmacie = pharmaciesData.find(p => generateSlug(p.nom) === slug);
  return pharmacie || null;
}

// Génération des métadonnées statiques
export async function generateStaticParams() {
  return pharmaciesData.map((pharmacie) => ({
    slug: generateSlug(pharmacie.nom),
  }));
}

// Traductions locales (à remplacer par votre système i18n si nécessaire)
const translations = {
  fr: {
    breadcrumb: {
      home: "Accueil",
      pharmacies: "Pharmacies de garde"
    },
    sidebar: {
      info: {
        title: "Informations de la pharmacie",
        name: "Nom",
        address: "Adresse",
        city: "Ville",
        dutyType: "Distance entre vous",
        phone: "Téléphone",
        phone2: "Téléphone 2",
        coordinates: "Coordonnées GPS"
      },
      emergency: {
        title: "Urgence médicale ?",
        description: "Contactez directement la pharmacie pour toute urgence ou renseignement.",
        callDirect: "Appel direct"
      },
      location: {
        title: "Localisation GPS",
        viewOnMaps: "Voir sur Google Maps"
      }
    },
    content: {
      about: {
        title: "À propos de",
        description: "située à {address} dans le quartier de {city}. Cette pharmacie assure un service de qualité pour répondre aux besoins médicaux de la population."
      },
      service: {
        title: "Détails du service",
        description: "Cette pharmacie est équipée pour vous fournir les médicaments nécessaires et des conseils pharmaceutiques professionnels. Le personnel qualifié est disponible pour vous accompagner dans vos besoins de santé.",
        dutyType: "Distance entre vous"
      },
      access: {
        title: "Accès et localisation",
        fullAddress: "Adresse complète",
        mainContact: "Contact principal",
        secondaryContact: "Contact secondaire",
        getDirections: "Obtenir l'itinéraire"
      },
      recommendations: {
        title: "Recommandations",
        items: [
          "Présentez votre ordonnance si vous en avez une",
          "Signalez vos allergies médicamenteuses",
          "Précisez si c'est pour une urgence",
          "Conservez le numéro de téléphone pour rappel",
          "Vérifiez les horaires avant de vous déplacer"
        ]
      }
    },
    map: {
      title: "Localisation de"
    }
  },
  en: {
    // Ajoutez les traductions en anglais si nécessaire
  }
};

// Fonction pour générer les métadonnées (pour le SEO)
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pharmacie = await getPharmacieData(slug);
  
  if (!pharmacie) {
    return {
      title: 'Pharmacie non trouvée',
    };
  }

  return generateSEO({
    title: `${pharmacie.nom} - Pharmacie de Garde`,
    description: `${pharmacie.nom} située à ${pharmacie.adresse}, ${pharmacie.ville}. Contact: ${pharmacie.contact_1}. Service de garde disponible.`,
    url: `/pharmacie-de-garde/${slug}`,
    image: '/images/case-study-10.jpg',
    keywords: [
      "pharmacie de garde",
      pharmacie.nom,
      pharmacie.ville,
      "urgence médicale",
      "pharmacie ouverte",
    ],
  });
}

// Composant de carte interactive
function PharmacyMap({ latitude, longitude, nom }: { latitude: string; longitude: string; nom: string }) {
  return (
    <div className="google-map wow fadeInUp">
      <iframe
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387178.82361127954!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMzcnMTAuNyJOIDHCsDUyJzI1LjEiRQ!5e0!3m2!1sfr!2stg!4v1703159000000!5m2!1sfr!2stg`}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ width: '100%', height: '400px', border: 0 }}
        title={nom}
      />
    </div>
  );
}

export default async function PharmacieDeGardeSinglePage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const pharmacie = await getPharmacieData(slug);
  const t = translations.fr; // Utilisez votre système i18n ici
  
  if (!pharmacie) {
    return notFound();
  }

  // Générer le schéma JSON-LD pour la pharmacie
  const pharmacySchema = generatePharmacySchema({
    name: pharmacie.nom,
    description: `Pharmacie de garde située à ${pharmacie.ville}`,
    image: '/images/case-study-10.jpg',
    address: `${pharmacie.adresse}, ${pharmacie.ville}`,
    phone: pharmacie.contact_1,
    openingHours: pharmacie.distance || t.sidebar.info.dutyType,
    url: `/pharmacie-de-garde/${slug}`,
  });

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pharmacySchema) }}
      />
      
      {/* Header */}
      <div className="page-header bg-section parallaxie" style={{backgroundImage:`url('/images/post-4.jpg')` }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="text-anime-style-3" data-cursor="-opaque">{pharmacie.nom}</h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    
                    <li className="breadcrumb-item active" aria-current="page">
                      Doctagné / Pharmacies de garde / {pharmacie.nom}
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
                  <h3>{t.sidebar.info.title}</h3>
                  <ul>
                    <li>
                      <a href="#info">
                        <i className="fa-solid fa-building"></i>
                        <span>
                          <strong>{t.sidebar.info.name} :</strong><br />
                          {pharmacie.nom}
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#info">
                        <i className="fa-solid fa-location-dot"></i>
                        <span>
                          <strong>{t.sidebar.info.address} :</strong><br />
                          {pharmacie.adresse}
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#info">
                        <i className="fa-solid fa-city"></i>
                        <span>
                          <strong>{t.sidebar.info.city} :</strong><br />
                          {pharmacie.ville}
                        </span>
                      </a>
                    </li>
                    {pharmacie.distance && (
                      <li>
                        <a href="#info">
                          <i className="fa-solid fa-clock"></i>
                          <span>
                            <strong>{t.sidebar.info.dutyType} :</strong><br />
                            {pharmacie.distance}
                          </span>
                        </a>
                      </li>
                    )}
                    <li>
                      <a href={`tel:${pharmacie.contact_1}`}>
                        <i className="fa-solid fa-phone"></i>
                        <span>
                          <strong>{t.sidebar.info.phone} :</strong><br />
                          {pharmacie.contact_1}
                        </span>
                      </a>
                    </li>
                    {pharmacie.contact_2 && (
                      <li>
                        <a href={`tel:${pharmacie.contact_2}`}>
                          <i className="fa-solid fa-phone"></i>
                          <span>
                            <strong>{t.sidebar.info.phone2} :</strong><br />
                            {pharmacie.contact_2}
                          </span>
                        </a>
                      </li>
                    )}
                  </ul>
                </div>

                {/* Box urgence médicale */}
                <div className="sidebar-cta-box wow fadeInUp" data-wow-delay="0.25s">
                  <div className="sidebar-cta-content">
                    <h3>{t.sidebar.emergency.title}</h3>
                    <p>{t.sidebar.emergency.description}</p>
                  </div>
                  <div className="sidebar-contact-box">
                    <div className="icon-box">
                      <img src="/images/icon-cta-phone.svg" alt={t.sidebar.info.phone} />
                    </div>
                    <div className="sidebar-contact-content">
                      <p>{t.sidebar.emergency.callDirect}</p>
                      <h3>
                        <a href={`tel:${pharmacie.contact_1}`}>{pharmacie.contact_1}</a>
                      </h3>
                    </div>
                  </div>
                  <div className="sidebar-cta-image">
                    <figure className="image-anime">
                      <img 
                        src="/images/page-header-bg1.jpg"
                        alt={t.sidebar.emergency.title}
                      />
                    </figure>
                  </div>
                </div>

                {/* Localisation GPS */}
                {pharmacie.latitude && pharmacie.longitude && (
                  <div className="page-category-list wow fadeInUp" data-wow-delay="0.5s">
                    <h3>{t.sidebar.location.title}</h3>
                    <ul>
                      <li>
                        <a 
                          href={`https://www.google.com/maps?q=${pharmacie.latitude},${pharmacie.longitude}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa-solid fa-map-location-dot"></i>
                          <span>
                            <strong>{t.sidebar.info.coordinates} :</strong><br />
                            {pharmacie.latitude}, {pharmacie.longitude}
                          </span>
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
                        <i className="fa-solid fa-map-location-dot"></i> {t.sidebar.location.viewOnMaps}
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
                      nom={`${t.map.title} ${pharmacie.nom}`}
                    />
                  </div>
                )}

                {/* Description */}
                <div className="service-entry">
                  <div className="wow fadeInUp">
                    <h2>{t.content.about.title} {pharmacie.nom}</h2>
                    <p>
                      {pharmacie.nom} {t.content.about.description
                        .replace('{address}', pharmacie.adresse)
                        .replace('{city}', pharmacie.ville)}
                    </p>
                  </div>

                  {/* Détails du service */}
                  <div className="service-support-step wow fadeInUp" data-wow-delay="0.2s">
                    <h3>{t.content.service.title}</h3>
                    <div className="support-step-box">
                      <div className="support-step-image-content">
                        <div className="support-step-image">
                          <figure>
                            <img 
                              src="/images/case-study-100.jpg"
                              alt={t.content.service.title}
                            />
                          </figure>
                        </div>
                        <div className="support-step-content">
                          <p>{t.content.service.description}</p>
                          {pharmacie.distance && (
                            <p><strong>{t.content.service.dutyType} :</strong> {pharmacie.distance}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Accès et localisation */}
                  <div className="service-priority-box wow fadeInUp" data-wow-delay="0.4s">
                    <h3>{t.content.access.title}</h3>
                    <div className="service-priority-item-list">
                      <div className="what-we-item">
                        <div className="icon-box">
                          <i className="fa-solid fa-location-dot" style={{ fontSize: '30px', color: '#fff' }}></i>
                        </div>
                        <div className="what-we-item-content">
                          <h3>{t.content.access.fullAddress}</h3>
                          <p>{pharmacie.adresse}, {pharmacie.ville}</p>
                        </div>
                      </div>
                      <div className="what-we-item">
                        <div className="icon-box">
                          <i className="fa-solid fa-phone" style={{ fontSize: '30px', color: '#fff' }}></i>
                        </div>
                        <div className="what-we-item-content">
                          <h3>{t.content.access.mainContact}</h3>
                          <p><a href={`tel:${pharmacie.contact_1}`}>{pharmacie.contact_1}</a></p>
                        </div>
                      </div>
                      {pharmacie.contact_2 && (
                        <div className="what-we-item">
                          <div className="icon-box">
                            <i className="fa-solid fa-mobile-screen-button" style={{ fontSize: '30px', color: '#fff' }}></i>
                          </div>
                          <div className="what-we-item-content">
                            <h3>{t.content.access.secondaryContact}</h3>
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
                          {t.content.access.getDirections}
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Recommandations */}
                  <div className="service-empower-box wow fadeInUp" data-wow-delay="0.6s">
                    <div className="service-empower-content">
                      <h3>{t.content.recommendations.title}</h3>
                      <div className="service-empower-item-list">
                        <ul>
                          {t.content.recommendations.items.map((item: string, index: number) => (
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
      </div>
    </Layout>
  );
}