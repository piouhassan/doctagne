const OurApproach = () => {
  return (
    <div className="our-approach bg-section">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-6">
            <div className="section-title">
              <h3 className="wow fadeInUp">NOTRE APPROCHE</h3>
              <h2 className="text-anime-style-3" data-cursor="-opaque">Notre mission & vision pour un meilleur système de santé</h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-title-content wow fadeInUp" data-wow-delay="0.2s">
              <p>Chez Doctagné, nous plaçons le patient au centre de notre démarche.
Nous proposons des soins humains, accessibles et adaptés à chacun, grâce à une plateforme moderne et sécurisée. Notre approche repose sur la confiance, la simplicité et la qualité du suivi médical, pour rendre la santé plus proche de vous.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="approach-item-list">
              <div className="approach-item wow fadeInUp" data-wow-delay="0.4s">
                <div className="icon-box">
                  <img src="/images/icon-mission.svg" alt="Mission" />
                </div>
                <div className="approach-item-content">
                  <h3>Notre Mission</h3>
                  <p>Rendre les soins de santé accessibles, simples et connectés pour tous. Grâce à la technologie, Doctagné facilite la prise de rendez-vous, la téléconsultation et le suivi médical le tout dans un environnement sécurisé et humain.</p>
                </div>
              </div>
              <div className="approach-item wow fadeInUp" data-wow-delay="0.6s">
                <div className="icon-box">
                  <img src="/images/icon-vision.svg" alt="Vision" />
                </div>
                <div className="approach-item-content">
                  <h3>Notre Vision</h3>
                  <p>Bâtir un monde où chaque personne peut accéder facilement à des soins de qualité, où qu’elle se trouve. Doctagné aspire à devenir le pont entre les patients et les professionnels de santé, en combinant technologie, proximité et confiance.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="approach-image-box">
              <figure className="image-anime">
                <img src="/images/approach-image.jpg" alt="Approach" />
              </figure>
              <div className="approach-image-content wow fadeInUp" data-wow-delay="0.2s">
                <h3>Nos Valeurs</h3>
                <p>Chez Doctagné, nous croyons en une santé accessible, éthique et humaine. Nous plaçons la technologie au service du bien-être, pour rapprocher les professionnels de santé et les patients.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurApproach;
