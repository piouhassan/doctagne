const services = [
  {
    title: "Prise de rendez-vous facile",
    icon: "/images/icon-service-1.svg",
    description: "Réservez rapidement un rendez-vous avec un médecin, un laboratoire ou une pharmacie partenaire, directement depuis votre smartphone ou PC.",
    delay: "0s"
  },
  {
    title: "Téléconsultation sécurisée",
    icon: "/images/icon-service-2.svg",
    description: "Consultez un professionnel de santé où que vous soyez, pour un suivi médical pratique et confidentiel.",
    delay: "0.2s"
  },
  {
    title: "Suivi des résultats d’analyses",
    icon: "/images/icon-service-3.svg",
    description: "Recevez et partagez vos résultats médicaux en ligne, pour un suivi rapide et précis de votre santé.",
    delay: "0.4s"
  },
  {
    title: "Gestion de votre santé familiale",
    icon: "/images/icon-service-4.svg",
    description: "Partagez de manière sécurisée les informations médicales avec vos proches et suivez la santé de votre famille facilement.",
    delay: "0.6s"
  },
  {
    title: "Conseils et prévention",
    icon: "/images/icon-service-5.svg",
    description: "Accédez à des recommandations personnalisées pour prévenir les maladies et maintenir votre bien-être.",
    delay: "0.8s"
  },
  {
    title: "Pharmacies partenaires",
    icon: "/images/icon-service-6.svg",
    description: "Localisez rapidement les pharmacies proches de vous et gérez vos ordonnances en ligne.",
    delay: "1s"
  },
  {
    title: "Programmes de santé personnalisés",
    icon: "/images/icon-service-7.svg",
    description: "Bénéficiez d’un accompagnement adapté à vos besoins, grâce à des outils numériques qui facilitent le suivi de votre santé.",
    delay: "1.2s"
  },
  {
    title: "Support et accompagnement continu",
    icon: "/images/icon-service-8.svg",
    description: "Notre équipe est disponible pour répondre à vos questions et vous guider tout au long de votre parcours santé.",
    delay: "1.4s"
  }
];

const PageServices = () => {
  return (
    <div className="page-services">
      <div className="container">
        <div className="row service-list">
          {services.map((service, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className={`service-item${index === 0 || index === 4 ? ' active' : ''} wow fadeInUp`} data-wow-delay={service.delay}>
                <div className="service-title">
                  <h3><a href="/service-single">{service.title}</a></h3>
                </div>
                <div className="icon-box">
                  <img src={service.icon} alt={service.title} />
                </div>
                <div className="service-content">
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageServices;
