const Features = () => {
  return (
    <div className="our-feature bg-section text-black">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-6">
            <div className="section-title">
              <h3 className="wow fadeInUp">Pourquoi choisir Doctagné</h3>
              <h2 className="text-anime-style-3" data-cursor="-opaque">Découvrez les avantages de notre plateforme</h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-btn wow fadeInUp" data-wow-delay="0.2s">
              <a href="/contact" className="btn-default">Contactez-nous</a>
            </div>
          </div>
        </div>
        <div className="row feature-item-box">
          <div className="col-lg-4 col-md-6">
            <div className="feature-item active wow fadeInUp">
              <div className="icon-box">
                <img src="/images/icon-feature-1.svg" alt="" />
              </div>
              <div className="feature-item-header">
                <h3>Rendez-vous Simplifiés</h3>
              </div>
              <div className="feature-item-content">
                <p>Notre engagement pour un service personnalisé et un suivi médical de qualité garantit un taux de satisfaction élevé.</p>
              </div>
              <div className="feature-counter-item">
                <div className="feature-counter-content">
                  <h2><span className="counter">98</span><sup>%</sup></h2>
                  <p>Taux de satisfaction</p>
                </div>
                <div className="feature-counter-icon">
                  <img src="/images/icon-feature-counter-1.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="feature-item wow fadeInUp">
              <div className="icon-box">
                <img src="/images/icon-feature-2.svg" alt="" />
              </div>
              <div className="feature-item-header">
                <h3>Réseau de Professionnels</h3>
              </div>
              <div className="feature-item-content">
                <p>Accédez à des milliers de médecins, pharmacies et laboratoires partenaires pour tous vos besoins de santé.</p>
              </div>
              <div className="feature-counter-item">
                <div className="feature-counter-content">
                  <h2><span className="counter">3</span>k<sup>+</sup></h2>
                  <p>Professionnels actifs</p>
                </div>
                <div className="feature-counter-icon">
                  <img src="/images/icon-feature-counter-2.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="feature-item wow fadeInUp">
              <div className="icon-box">
                <img src="/images/icon-feature-3.svg" alt="" />
              </div>
              <div className="feature-item-header">
                <h3>Suivi Médical Complet</h3>
              </div>
              <div className="feature-item-content">
                <p>Nos outils de gestion médicale et notre support dédié vous permettent un suivi optimal de votre santé.</p>
              </div>
              <div className="feature-counter-item">
                <div className="feature-counter-content">
                  <h2><span className="counter">87</span><sup>%</sup></h2>
                  <p>Amélioration du suivi</p>
                </div>
                <div className="feature-counter-icon">
                  <img src="/images/icon-feature-counter-3.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
