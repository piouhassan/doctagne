const Hero = () => {
  return (
    <div className="hero bg-section dark-section parallaxie">
      <div className="hero-section">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-9">
              <div className="hero-content">
                <div className="section-title">
                  <h1 className="text-anime-style-3" data-cursor="-opaque">Votre santé à portée de main, où que vous soyez</h1>
                  <p className="wow fadeInUp">Gérez votre santé et celle de vos proches en toute sécurité. Prenez rendez-vous avec des médecins, pharmacies et laboratoires, consultez en ligne et suivez vos résultats médicaux sur une seule plateforme.</p>
                </div>
                <div className="hero-body">
                  <div className="hero-btn wow fadeInUp" data-wow-delay="0.2s">
                    <a href="/inscription" className="btn-default btn-dark">S'inscrire gratuitement</a>
                  </div>
                  <div className="satisfy-client-box wow fadeInUp" data-wow-delay="0.4s">
                    <div className="satisfy-client-images">
                      <div className="satisfy-client-image">
                        <figure className="image-anime">
                          <img src="/images/satisfy-client-img-1.jpg" alt="" />
                        </figure>
                      </div>
                      <div className="satisfy-client-image">
                        <figure className="image-anime">
                          <img src="/images/satisfy-client-img-2.jpg" alt="" />
                        </figure>
                      </div>
                      <div className="satisfy-client-image">
                        <figure className="image-anime">
                          <img src="/images/satisfy-client-img-3.jpg" alt="" />
                        </figure>
                      </div>
                      <div className="satisfy-client-image">
                        <figure className="image-anime">
                          <img src="/images/satisfy-client-img-4.jpg" alt="" />
                        </figure>
                      </div>
                    </div>
                    <div className="satisfy-client-content">
                      <p><span>5.5k+</span> Patients satisfaits</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              {/* <div className="recovery-circle">
                <a href="/contact"><img src="/images/recovery-circle.svg" alt="" /></a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;