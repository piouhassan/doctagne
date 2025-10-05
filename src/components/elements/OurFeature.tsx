const OurFeature = () => {
  return (
    <div className="our-feature bg-section">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-6">
            <div className="section-title">
              <h3 className="wow fadeInUp">our feature</h3>
              <h2 className="text-anime-style-3" data-cursor="-opaque">Discover the key features of our care</h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-btn wow fadeInUp" data-wow-delay="0.2s">
              <a href="/contact.html" className="btn-default">contact us</a>
            </div>
          </div>
        </div>
        <div className="row feature-item-box">
          <div className="col-lg-4 col-md-6">
            <div className="feature-item active wow fadeInUp">
              <div className="icon-box">
                <img src="/images/icon-feature-1.svg" alt="Feature 1" />
              </div>
              <div className="feature-item-header">
                <h3>Comfortable Residential Facilities</h3>
              </div>
              <div className="feature-item-content">
                <p>Our commitment to personalize care ongoing support & proven recovery methods has high satisfaction rate.</p>
              </div>
              <div className="feature-counter-item">
                <div className="feature-counter-content">
                  <h2><span className="counter">98</span><sup>%</sup></h2>
                  <p>Lorem Ipsum Sit</p>
                </div>
                <div className="feature-counter-icon">
                  <img src="/images/icon-feature-counter-1.svg" alt="Counter 1" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="feature-item wow fadeInUp">
              <div className="icon-box">
                <img src="/images/icon-feature-2.svg" alt="Feature 2" />
              </div>
              <div className="feature-item-header">
                <h3>Aftercare & Relapse Prevention</h3>
              </div>
              <div className="feature-item-content">
                <p>Through hundreds of structured group therapy sessions each year, we foster connection, accountability.</p>
              </div>
              <div className="feature-counter-item">
                <div className="feature-counter-content">
                  <h2><span className="counter">3</span>k<sup>+</sup></h2>
                  <p>Lorem Ipsum Sit</p>
                </div>
                <div className="feature-counter-icon">
                  <img src="/images/icon-feature-counter-2.svg" alt="Counter 2" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="feature-item wow fadeInUp">
              <div className="icon-box">
                <img src="/images/icon-feature-3.svg" alt="Feature 3" />
              </div>
              <div className="feature-item-header">
                <h3>Life Skills & Vocational Support</h3>
              </div>
              <div className="feature-item-content">
                <p>Our evidence-based programs and dedicated aftercare support have led to lasting transformations.</p>
              </div>
              <div className="feature-counter-item">
                <div className="feature-counter-content">
                  <h2><span className="counter">87</span><sup>%</sup></h2>
                  <p>Lorem Ipsum Sit</p>
                </div>
                <div className="feature-counter-icon">
                  <img src="/images/icon-feature-counter-3.svg" alt="Counter 3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFeature;
