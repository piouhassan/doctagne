const pharmacies = [
  {
    image: "/images/case-study-1.jpg",
    title: "Pharmacie Centrale - Garde Nuit",
    link: "/pharmacie-de-garde/1",
    delay: "0s"
  },
  {
    image: "/images/case-study-2.jpg",
    title: "Pharmacie du Centre - Garde Dimanche",
    link: "/pharmacie-de-garde/2",
    delay: "0.2s"
  },
  {
    image: "/images/case-study-3.jpg",
    title: "Pharmacie de la Gare - Garde 24h/24",
    link: "/pharmacie-de-garde/3",
    delay: "0.4s"
  },
  {
    image: "/images/case-study-4.jpg",
    title: "Pharmacie du Parc - Garde Semaine",
    link: "/pharmacie-de-garde/4",
    delay: "0.6s"
  },
  {
    image: "/images/case-study-5.jpg",
    title: "Pharmacie des Fleurs - Garde Urgence",
    link: "/pharmacie-de-garde/5",
    delay: "0.8s"
  },
  {
    image: "/images/case-study-6.jpg",
    title: "Pharmacie République - Garde Jour Férié",
    link: "/pharmacie-de-garde/6",
    delay: "1s"
  }
];

const PharmacieCaseStudy = () => {
  return (
    <div className="page-case-study">
      <div className="container">
        <div className="row">
          {pharmacies.map((pharmacie, idx) => (
            <div key={idx} className="col-lg-4 col-md-6">
              <div className="case-study-item wow fadeInUp" data-wow-delay={pharmacie.delay}>
                <div className="case-study-image">
                  <figure className="image-anime">
                    <img src={pharmacie.image} alt={pharmacie.title} />
                  </figure>
                  <div className="case-study-btn">
                    <a href={pharmacie.link}><img src="/images/arrow-white.svg" alt="Voir" /></a>
                  </div>
                </div>
                <div className="case-study-content">
                  <h2><a href={pharmacie.link}>{pharmacie.title}</a></h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PharmacieCaseStudy;
