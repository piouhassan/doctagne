import Layout from '@/components/layout/layout';
import { notFound } from 'next/navigation';

// Exemple de données statiques, à remplacer par une vraie source de données
const PHARMACIES = [
  {
    slug: '1',
    title: 'Pharmacie Centrale - Garde Nuit',
    image: '/images/case-study-1.jpg',
    description: 'Pharmacie ouverte la nuit pour toutes vos urgences.',
    details: {
      startDate: '10 Avril 2025',
      location: 'Paris',
      client: 'Pharmacie Centrale',
      duration: '1 Nuit',
    },
    sidebarImage: '/images/sidebar-cta-image.jpg',
    phone: '+33123456789',
  },
  // ...autres pharmacies
];

export default function PharmacieDeGardeSinglePage({ params }: { params: { slug: string } }) {
  const pharmacie = PHARMACIES.find(p => p.slug === params.slug);
  if (!pharmacie) return notFound();

  return (
    <Layout>
      <div className="page-header bg-section parallaxie">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="text-anime-style-3" data-cursor="-opaque">{pharmacie.title}</h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">home</a></li>
                    <li className="breadcrumb-item"><a href="/pharmacie-de-garde">pharmacies de garde</a></li>
                    <li className="breadcrumb-item active" aria-current="page">{pharmacie.title}</li>
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
                  <h3>Détails pharmacie</h3>
                  <ul>
                    <li><b>Nom :</b> {pharmacie.details.client}</li>
                    <li><b>Date :</b> {pharmacie.details.startDate}</li>
                    <li><b>Lieu :</b> {pharmacie.details.location}</li>
                    <li><b>Durée :</b> {pharmacie.details.duration}</li>
                    <li><b>Contact :</b> <a href={`tel:${pharmacie.phone}`}>{pharmacie.phone}</a></li>
                  </ul>
                </div>
                <div className="sidebar-cta-box wow fadeInUp" data-wow-delay="0.25s">
                  <div className="sidebar-cta-content">
                    <h3>Plus d'informations</h3>
                    <p>Contactez la pharmacie pour toute urgence ou renseignement.</p>
                  </div>
                  <div className="sidebar-contact-box">
                    <div className="icon-box">
                      <img src="/images/icon-cta-phone.svg" alt="" />
                    </div>
                    <div className="sidebar-contact-content">
                      <p>Appelez</p>
                      <h3><a href={`tel:${pharmacie.phone}`}>{pharmacie.phone}</a></h3>
                    </div>
                  </div>
                  <div className="sidebar-cta-image">
                    <figure className="image-anime">
                      <img src={pharmacie.sidebarImage} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            {/* Main content */}
            <div className="col-lg-8">
              <div className="case-study-single-content">
                <div className="page-single-image">
                  <figure className="image-anime reveal">
                    <img src={pharmacie.image} alt={pharmacie.title} />
                  </figure>
                </div>
                <div className="case-study-entry">
                  <p className="wow fadeInUp">{pharmacie.description}</p>
                  {/* Ajoute ici d'autres infos, horaires, services, etc. */}
                </div>
                {/* Section FAQ ou autres sections si besoin */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}