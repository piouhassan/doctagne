
const OurPrograms = () => {
  const programs = [
    {
      title: "Médecins Généralistes",
      description: "Consultez des médecins généralistes qualifiés pour vos soins de santé primaires et préventifs.",
      delay: "0s"
    },
    {
      title: "Spécialistes",
      description: "Accédez à un réseau de spécialistes dans tous les domaines médicaux pour des soins experts.",
      delay: "0.2s"
    },
    {
      title: "Pharmacies Partenaires",
      description: "Trouvez facilement les pharmacies les plus proches et gérez vos ordonnances en ligne.",
      delay: "0.4s"
    },
    {
      title: "Laboratoires d'Analyses",
      description: "Réservez vos analyses et recevez vos résultats directement sur la plateforme de manière sécurisée.",
      delay: "0.6s"
    }
  ];

  return (
    <div className="our-programs text-black">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="programs-image-box">
              <div className="section-title">
                <h2 className="text-anime-style-3" data-cursor="-opaque">Notre réseau de professionnels de santé</h2>
              </div>
              <div className="programs-item-body">
                <div className="programs-body-content wow fadeInUp" data-wow-delay="0.2s">
                  <p>Nous collaborons avec un vaste réseau de professionnels de santé qualifiés pour vous offrir des soins accessibles et de qualité.</p>
                </div>
                <div className="programs-body-image">
                  <figure>
                    <img src="/images/programs-body-image.png" alt="Programmes" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="programs-item-list">
              {programs.map((program, idx) => (
                <div key={idx} className={`programs-item wow fadeInUp`} data-wow-delay={program.delay}>
                  <div className="programs-item-header">
                    <div className="programs-item-title">
                      <h3>{program.title}</h3>
                    </div>
                    <div className="program-btn">
                      <a href="/contact">
                        <img src="/images/arrow-white.svg" alt="Contact" />
                      </a>
                    </div>
                  </div>
                  <div className="programs-item-content">
                    <p>{program.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPrograms;