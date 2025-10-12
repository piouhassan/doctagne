const OurResults = () => {
  return (
    <div className="our-results bg-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="our-result-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">CONFIANCE EN DOCTAGNE</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">Résultats visibles</h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">Avec Doctagné, accédez à un suivi médical simple, rapide et sécurisé. Notre plateforme connecte patients et professionnels de santé pour des soins efficaces, humains et accessibles à tous.</p>
              </div>
              <div className="result-item-list">
                <div className="result-item wow fadeInUp" data-wow-delay="0.4s">
                  <div className="icon-box">
                    <img src="/images/icon-result-item-1.svg" alt="Expert medical team" />
                  </div>
                  <div className="result-item-content">
                    <h3>Équipe médicale experte</h3>
                    <p>Notre réseau regroupe des médecins, pharmaciens et laboratoires partenaires rigoureusement sélectionnés. Vous bénéficiez d’un accompagnement fiable et professionnel à chaque étape de votre parcours santé.</p>
                  </div>
                </div>
                <div className="result-item wow fadeInUp" data-wow-delay="0.6s">
                  <div className="icon-box">
                    <img src="/images/icon-result-item-2.svg" alt="Advanced Technology" />
                  </div>
                  <div className="result-item-content">
                    <h3>Technologie Avancée</h3>
                    <p>Doctagné met la puissance du numérique au service de votre bien-être. Grâce à une plateforme moderne et sécurisée, vous pouvez prendre rendez-vous, consulter et suivre vos résultats où que vous soyez.</p>
                  </div>
                </div>
                <div className="result-item wow fadeInUp" data-wow-delay="0.8s">
                  <div className="icon-box">
                    <img src="/images/icon-result-item-3.svg" alt="Patient-Centered Approach" />
                  </div>
                  <div className="result-item-content">
                    <h3>Approche centrée sur le patient</h3>
                    <p>Parce que chaque personne est unique, nous plaçons vos besoins et votre confort au cœur de notre mission.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="result-image-box">
              <div className="result-image">
                <figure>
                  <img src="/images/result-image.jpg" alt="Result" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurResults;
