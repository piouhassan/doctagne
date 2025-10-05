const WhatWeDo = () => {
  return (
    <div className="what-we-do text-black">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="what-we-image-box">
              <div className="what-we-image">
                <figure className="">
                  <img src="/images/what-we-image.jpg" alt="" />
                </figure>
              </div>
              <div className="what-we-contact-box wow fadeInUp" data-wow-delay="0.2s">
                <div className="what-we-contact-item">
                  <div className="icon-box">
                    <img src="/images/icon-mail.svg" alt="" />
                  </div>
                  <div className="what-we-contact-item-content">
                    <p>Adresse Email</p>
                    <h3><a href="mailto:contact@doctagne.com">contact@doctagne.com</a></h3>
                  </div>
                </div>
                <div className="what-we-contact-btn">
                  <a href="/contact" className="btn-default">Contactez-nous</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="what-we-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">Ce que nous faisons</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">Comment nous facilitons votre accès aux soins</h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">Nous offrons une plateforme complète, un réseau de professionnels qualifiés et un accompagnement personnalisé pour chaque étape de votre parcours de santé</p>
              </div>
              <div className="what-we-item-box">
                <div className="what-we-item wow fadeInUp" data-wow-delay="0.4s">
                  <div className="icon-box">
                    <img src="/images/icon-what-we-item-1.svg" alt="" />
                  </div>
                  <div className="what-we-item-content">
                    <h3>Parcours de Soins Complet</h3>
                    <p>De la consultation médicale à la pharmacie et au laboratoire, nous assurons un suivi de bout en bout.</p>
                  </div>
                </div>
                <div className="what-we-item wow fadeInUp" data-wow-delay="0.6s">
                  <div className="icon-box">
                    <img src="/images/icon-what-we-item-2.svg" alt="" />
                  </div>
                  <div className="what-we-item-content">
                    <h3>Gestion Intelligente</h3>
                    <p>Nous centralisons vos rendez-vous médicaux, résultats d'analyses et ordonnances pour un suivi optimal de votre santé.</p>
                  </div>
                </div>
                <div className="what-we-item wow fadeInUp" data-wow-delay="0.8s">
                  <div className="icon-box">
                    <img src="/images/icon-what-we-item-3.svg" alt="" />
                  </div>
                  <div className="what-we-item-content">
                    <h3>Accompagnement Familial</h3>
                    <p>La santé est une affaire de famille. Nous facilitons le partage sécurisé d'informations avec vos proches.</p>
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

export default WhatWeDo;
