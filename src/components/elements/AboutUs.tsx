const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-us-images">
              <div className="about-img-1">
                <figure >
                  <img src="/images/about-image-1.jpg" alt="" />
                </figure>
              </div>
              <div className="about-img-2">
                <figure className="image-anime">
                  <img src="/images/about-image-2.jpg" alt="" />
                </figure>
                <div className="working-hours-box">
                  <div className="working-hours-body">
                    <ul>
                      <li>Parce qu’avoir la santé, c’est déjà un pas vers le bonheur.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-us-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">CE QUE DOCTAGNÉ FAIT</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">Œuvrer pour un monde en meilleure santé</h2>
                <p className="wow fadeInUp text-black" data-wow-delay="0.2s">Obtenez facilement un rendez-vous avec des professionnels de santé proche de chez vous grace à la digitalisation des secteurs. Doctagné utilise votre smartphone ou votre PC pour vous permettre d'être consulté par un professionnel médical sans vous déplacer.</p>
              </div>

              {/* <h4 className="wow fadeInUp" style={{ margin: '30px 0' }} >Nos 4 engagements pour mener à bien ces missions</h4> */}

              <div className="about-us-body">
                <div className="about-experience-box">
                  <div className="about-experience-item wow fadeInUp" data-wow-delay="0.4s">
                    <div className="icon-box">
                      <img src="/images/icon-about-experience-1.svg" alt=""  />
                    </div>
                    <div className="about-experience-content">
                      <h3>Une santé accessible, confidentielle et utile à tous.</h3>
                    </div>
                  </div>
                  <div className="about-experience-item wow fadeInUp" data-wow-delay="0.6s">
                    <div className="icon-box">
                      <img src="/images/icon-about-experience-2.svg" alt="" />
                    </div>
                    <div className="about-experience-content">
                      <h3>Chaque rendez-vous pris peut avoir un impact social.</h3>
                    </div>
                  </div>
                </div>
                <div className="trusted-profession-box wow fadeInUp" data-wow-delay="0.4s">
                  <div className="icon-box">
                    <img src="/images/icon-trusted-profession.svg"  alt="" />
                  </div>
                  <div className="trusted-profession-content">
                    <h3>Ensemble, œuvrons pour un monde en meilleure santé.</h3>
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

export default AboutUs;