const OurCare = () => {
  return (
    <div className="our-care">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="our-care-images">
              <div className="care-image-1">
                <figure className="image-anime reveal">
                  <img src="/images/care-image-1.jpg" alt="Care 1" />
                </figure>
                <div className="recovery-circle">
                  <a href="/book-appointment.html"><img src="/images/recovery-circle.svg" alt="Recovery" /></a>
                </div>
              </div>
              <div className="trusted-profession-box wow fadeInUp">
                <div className="icon-box">
                  <img src="/images/icon-trusted-profession.svg" alt="Trusted" />
                </div>
                <div className="trusted-profession-content">
                  <h3>Trusted 5K Medical Professionals</h3>
                </div>
              </div>
              <div className="care-image-2">
                <figure className="image-anime reveal">
                  <img src="/images/care-image-2.jpg" alt="Care 2" />
                </figure>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="our-care-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">How We Care</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">Personalized care with a human touch</h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">We offer personalized treatment plans expert medical care and emotional support to guide you through every stage of recovery</p>
              </div>
              <div className="care-counter-list">
                <div className="care-counter-item">
                  <div className="icon-box">
                    <img src="/images/icon-care-counter-1.svg" alt="Experience" />
                  </div>
                  <div className="care-counter-item-content">
                    <h2><span className="counter">25</span>+</h2>
                    <p>Years of experience</p>
                  </div>
                </div>
                <div className="care-counter-item">
                  <div className="icon-box">
                    <img src="/images/icon-care-counter-2.svg" alt="Success" />
                  </div>
                  <div className="care-counter-item-content">
                    <h2><span className="counter">80</span>%</h2>
                    <p>Client success rate</p>
                  </div>
                </div>
                <div className="care-counter-item">
                  <div className="icon-box">
                    <img src="/images/icon-care-counter-3.svg" alt="Global" />
                  </div>
                  <div className="care-counter-item-content">
                    <h2><span className="counter">20</span>+</h2>
                    <p>Global reach</p>
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
