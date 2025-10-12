const OurCare = () => {
  return (
    <div className="our-care">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="our-care-images">
              <div className="care-image-1">
                <figure>
                  <img src="/images/care-image-1.jpg" alt="Care 1" />
                </figure>
              </div>
              <div className="trusted-profession-box wow fadeInUp">
                <div className="icon-box">
                  <img src="/images/icon-trusted-profession.svg" alt="Trusted" />
                </div>
                <div className="trusted-profession-content">
                  <h3>3K professionnels médicaux de confiance</h3>
                </div>
              </div>
              <div className="care-image-2">
                <figure>
                  <img src="/images/care-image-2.jpg" alt="Care 2" />
                </figure>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="our-care-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">Notre accompagnement</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">Un accompagnement personnalisé </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">Doctagné met la technologie au service de l’humain. Grâce à notre plateforme, les patients bénéficient d’un accompagnement personnalisé, sécurisé et continu, du rendez-vous à la réception des résultats.</p>
              </div>
              <div className="care-counter-list">
                
                <div className="care-counter-item">
                  <div className="icon-box">
                    <img src="/images/icon-care-counter-2.svg" alt="Success" />
                  </div>
                  <div className="care-counter-item-content">
                    <h2><span className="counter">98</span>%</h2>
                    <p>de satisfaction</p>
                  </div>
                </div>
                <div className="care-counter-item">
                  <div className="icon-box">
                    <img src="/images/icon-care-counter-3.svg" alt="Global" />
                  </div>
                  <div className="care-counter-item-content">
                    <h2><span className="counter">3</span>K+</h2>
                    <p>professionnels </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCare;
