import Layout from '@/components/layout/layout';
import { notFound } from 'next/navigation';
import { generateSEO, generatePharmacySchema } from '@/lib/seo';

// Exemple de données statiques, à remplacer par une vraie source de données
const PHARMACIES = [
  {
    slug: 'pharmacie-centrale',
    title: 'Pharmacie Centrale - Garde Nuit',
    image: '/images/case-study-1.jpg',
    description: 'Pharmacie ouverte la nuit pour toutes vos urgences médicales. Située au cœur de la ville, la Pharmacie Centrale assure un service de garde de nuit pour répondre à vos besoins en médicaments et produits de santé urgents.',
    details: {
      startDate: '10 Avril 2025',
      location: 'Paris, 75001',
      client: 'Pharmacie Centrale',
      duration: 'Toute la nuit',
      horaires: '22h00 - 06h00',
      services: 'Médicaments d\'urgence, Premiers soins, Conseils pharmaceutiques'
    },
    sidebarImage: '/images/sidebar-cta-image.jpg',
    phone: '+33123456789',
    address: '123 Avenue de la Liberté, 75001 Paris',
    quartier: 'Centre-ville',
    type_garde: 'nuit'
  },
  {
    slug: 'pharmacie-du-marche',
    title: 'Pharmacie du Marché - Garde Dimanche',
    image: '/images/case-study-2.jpg',
    description: 'Service de garde dominical pour assurer la continuité des soins pendant le weekend.',
    details: {
      startDate: '11 Avril 2025',
      location: 'Paris, 75002',
      client: 'Pharmacie du Marché',
      duration: 'Dimanche entier',
      horaires: '08h00 - 20h00',
      services: 'Médicaments, Parapharmacie, Pansements'
    },
    sidebarImage: '/images/sidebar-cta-image.jpg',
    phone: '+33123456790',
    address: '45 Rue du Commerce, 75002 Paris',
    quartier: 'Adawlato',
    type_garde: 'dimanche'
  },
  {
    slug: 'pharmacie-de-la-paix',
    title: 'Pharmacie de la Paix - Garde 24h/24',
    image: '/images/case-study-3.jpg',
    description: 'Pharmacie ouverte 24h/24 pour répondre à toutes vos urgences médicales.',
    details: {
      startDate: '12 Avril 2025',
      location: 'Paris, 75003',
      client: 'Pharmacie de la Paix',
      duration: '24h/24',
      horaires: '00h00 - 24h00',
      services: 'Urgences médicales, Médicaments, Conseils 24h/24'
    },
    sidebarImage: '/images/sidebar-cta-image.jpg',
    phone: '+33123456791',
    address: '78 Boulevard du 13 Janvier, 75003 Paris',
    quartier: 'Tokoin',
    type_garde: '24h'
  }
];

// Fonction pour récupérer les données de la pharmacie
function getPharmacieData(slug: string) {
  return PHARMACIES.find(p => p.slug === slug);
}

// Génération des métadonnées statiques
export async function generateStaticParams() {
  return PHARMACIES.map((pharmacie) => ({
    slug: pharmacie.slug,
  }));
}

// Fonction pour générer les métadonnées (optionnel - pour le SEO)
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pharmacie = getPharmacieData(slug);
  
  if (!pharmacie) {
    return {
      title: 'Pharmacie non trouvée',
    };
  }

  return generateSEO({
    title: pharmacie.title,
    description: pharmacie.description,
    url: `/pharmacie-de-garde/${slug}`,
    image: pharmacie.image,
    keywords: [
      "pharmacie de garde",
      pharmacie.details.client,
      pharmacie.quartier,
      pharmacie.type_garde,
      "urgence médicale",
      "pharmacie ouverte",
    ],
  });
}

export default async function PharmacieDeGardeSinglePage({ params }: { params: Promise<{ slug: string }> }) {
  // Await the params
  const { slug } = await params;
  const pharmacie = getPharmacieData(slug);
  
  if (!pharmacie) {
    return notFound();
  }

  // Générer le schéma JSON-LD pour la pharmacie
  const pharmacySchema = generatePharmacySchema({
    name: pharmacie.details.client,
    description: pharmacie.description,
    image: pharmacie.image,
    address: pharmacie.address,
    phone: pharmacie.phone,
    openingHours: pharmacie.details.horaires,
    url: `/pharmacie-de-garde/${slug}`,
  });

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pharmacySchema) }}
      />
      <div className="page-header bg-section parallaxie" style={{backgroundImage:`url('/images/post-4.jpg')` }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="text-anime-style-3" data-cursor="-opaque">{pharmacie.title}</h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">Accueil</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="/pharmacie-de-garde">Pharmacies de garde</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {pharmacie.details.client}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-case-study-single">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="page-single-sidebar">
                <div className="case-study-category-list wow fadeInUp">
                  <h3>Informations de la pharmacie</h3>
                  <ul>
                    <li>
                      <b>Nom :</b> {pharmacie.details.client}
                    </li>
                    <li>
                      <b>Adresse :</b> {pharmacie.address}
                    </li>
                    <li>
                      <b>Quartier :</b> {pharmacie.quartier}
                    </li>
                    <li>
                      <b>Type de garde :</b> {pharmacie.type_garde}
                    </li>
                    <li>
                      <b>Horaires :</b> {pharmacie.details.horaires}
                    </li>
                    <li>
                      <b>Date :</b> {pharmacie.details.startDate}
                    </li>
                    <li>
                      <b>Durée :</b> {pharmacie.details.duration}
                    </li>
                    <li>
                      <b>Téléphone :</b> 
                      <a href={`tel:${pharmacie.phone}`}> {pharmacie.phone}</a>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-cta-box wow fadeInUp" data-wow-delay="0.25s">
                  <div className="sidebar-cta-content">
                    <h3>Urgence médicale ?</h3>
                    <p>Contactez directement la pharmacie pour toute urgence ou renseignement.</p>
                  </div>
                  <div className="sidebar-contact-box">
                    <div className="icon-box">
                      <img src="/images/icon-cta-phone.svg" alt="Téléphone" />
                    </div>
                    <div className="sidebar-contact-content">
                      <p>Appel direct</p>
                      <h3>
                        <a href={`tel:${pharmacie.phone}`}>{pharmacie.phone}</a>
                      </h3>
                    </div>
                  </div>
                  <div className="sidebar-cta-image">
                    <figure className="image-anime">
                      <img 
                        src={pharmacie.sidebarImage??'/images/placeholder-pharmacy.jpg'}
                        alt="Contact urgence"
                      />
                    </figure>
                  </div>
                </div>

                {/* Services proposés */}
                <div className="case-study-category-list wow fadeInUp" data-wow-delay="0.5s">
                  <h3>Services disponibles</h3>
                  <ul>
                    {pharmacie.details.services.split(', ').map((service, index) => (
                      <li key={index}>
                        <b>✓</b> {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="col-lg-8">
              <div className="case-study-single-content">
                <div className="page-single-image">
                  <figure className="image-anime reveal">
                    <img 
                      src={pharmacie.image??'/images/placeholder-pharmacy.jpg'}
                      alt={pharmacie.title}
                    />
                  </figure>
                </div>

                <div className="case-study-entry">
                  <div className="wow fadeInUp">
                    <h2>À propos de cette pharmacie</h2>
                    <p>{pharmacie.description}</p>
                  </div>

                  {/* Informations détaillées */}
                  <div className="whole-person-care-box wow fadeInUp" data-wow-delay="0.2s">
                    <h3>Détails du service de garde</h3>
                    <p>
                      Cette pharmacie assure un service de garde <strong>{pharmacie.type_garde}</strong> 
                      pour répondre aux besoins urgents de la population. Le personnel qualifié est 
                      disponible pour vous conseiller et vous fournir les médicaments nécessaires.
                    </p>
                  </div>

                  {/* Accès et localisation */}
                  <div className="long-term-care-box wow fadeInUp" data-wow-delay="0.4s">
                    <h3>Accès et localisation</h3>
                    <p>
                      <strong>Adresse :</strong> {pharmacie.address}<br/>
                      <strong>Quartier :</strong> {pharmacie.quartier}<br/>
                      <strong>Période de garde :</strong> {pharmacie.details.startDate}<br/>
                      <strong>Horaires :</strong> {pharmacie.details.horaires}
                    </p>
                  </div>

                  {/* Recommandations */}
                  <div className="commitment-box wow fadeInUp" data-wow-delay="0.6s">
                    <h3>Recommandations</h3>
                    <ul>
                      <li>Présentez votre ordonnance si vous en avez une</li>
                      <li>Signalez vos allergies médicamenteuses</li>
                      <li>Précisez si c'est pour une urgence</li>
                      <li>Conservez le numéro de téléphone pour rappel</li>
                    </ul>
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