
const CtaBox = () => {
  return (
    <div className="cta-box bg-section dark-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="cta-box-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">Rejoignez-nous</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">Commencez votre parcours santé avec nous dès aujourd'hui !</h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">Notre équipe est disponible pour vous accompagner dans votre parcours de santé avec un service personnalisé, des professionnels qualifiés et un suivi adapté à vos besoins.</p>
              </div>
              <div className="cta-box-list wow fadeInUp" data-wow-delay="0.4s">
                <ul>
                  <li>Gestion familiale des rendez-vous</li>
                  <li>Support client réactif</li>
                </ul>
              </div>
              <div className="cta-box-btn wow fadeInUp" data-wow-delay="0.6s">
                <a href="/inscription" className="btn-default btn-dark">Créer un compte gratuitement</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="cta-box-image">
              <figure>
                <img src="/images/cta-box-image.png" alt="CTA" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaBox;