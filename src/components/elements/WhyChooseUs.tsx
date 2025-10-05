const WhyChooseUs = () => {
  return (
    <div className="why-choose-us">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="why-choose-us-content text-black">
              <div className="section-title">
                <h3 className="wow fadeInUp">Pourquoi nous choisir</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">Pourquoi Doctagné fait la différence</h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">Chez Doctagné, nous combinons expertise technologique, accompagnement personnalisé et réseau de professionnels qualifiés pour faciliter votre parcours de santé.</p>
              </div>
              <div className="why-choose-btn wow fadeInUp" data-wow-delay="0.4s">
                <a href="/about" className="btn-default">En savoir plus</a>
              </div>
              <div className="why-choose-item-box">
                <div className="why-choose-item wow fadeInUp" data-wow-delay="0.6s">
                  <div className="why-choose-item-content">
                    <h3>Plateforme Sécurisée</h3>
                    <p>Un environnement numérique sûr et confidentiel pour gérer vos rendez-vous médicaux en toute sérénité.</p>
                  </div>
                </div>
                <div className="why-choose-item wow fadeInUp" data-wow-delay="0.8s">
                  <div className="why-choose-item-content">
                    <h3>Suivi Continu</h3>
                    <p>Un accompagnement complet de la prise de rendez-vous jusqu'au suivi de vos résultats d'analyses.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="why-choose-image-box">
              <div className="why-choose-image">
                <figure>
                  <img src="/images/why-choose-image.png" alt="" />
                </figure>
              </div>
              <div className="satisfy-client-box wow fadeInUp" data-wow-delay="0.2s">
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
                  <div className="satisfy-client-image add-more">
                    <i className="fa-solid fa-plus"></i>
                  </div>
                </div>
                <div className="satisfy-client-content">
                  <p>Plus de <span className="counter">12</span>K patients satisfaits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
