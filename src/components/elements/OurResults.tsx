const OurResults = () => {
  return (
    <div className="our-results bg-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="our-result-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">Trusted by Many</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">Visible Results, Trusted </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">We offer personalized treatment plans, expert medical care, and emotional support to guide you through every stage of recovery</p>
              </div>
              <div className="result-item-list">
                <div className="result-item wow fadeInUp" data-wow-delay="0.4s">
                  <div className="icon-box">
                    <img src="/images/icon-result-item-1.svg" alt="Expert medical team" />
                  </div>
                  <div className="result-item-content">
                    <h3>Expert medical team</h3>
                    <p>From medically supervised detox to aftercare and relapse prevention, we provide end-to-end support.</p>
                  </div>
                </div>
                <div className="result-item wow fadeInUp" data-wow-delay="0.6s">
                  <div className="icon-box">
                    <img src="/images/icon-result-item-2.svg" alt="Advanced Technology" />
                  </div>
                  <div className="result-item-content">
                    <h3>Advanced Technology</h3>
                    <p>We treat both addiction & co-occurring mental health condition such as anxiety depression, or PTSD, ensuring a more complete.</p>
                  </div>
                </div>
                <div className="result-item wow fadeInUp" data-wow-delay="0.8s">
                  <div className="icon-box">
                    <img src="/images/icon-result-item-3.svg" alt="Patient-Centered Approach" />
                  </div>
                  <div className="result-item-content">
                    <h3>Patient-Centered Approach</h3>
                    <p>Recovery is stronger with support. We offer family counseling, education, and involvement to rebuild trust.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="result-image-box">
              <div className="result-image">
                <figure className="image-anime reveal">
                  <img src="/images/result-image.jpg" alt="Result" />
                </figure>
              </div>
              <div className="result-image-list-box">
                <div className="result-list-image">
                  <figure className="image-anime reveal">
                    <img src="/images/result-list-image-1.jpg" alt="Result List 1" />
                  </figure>
                </div>
                <div className="result-list-image">
                  <figure className="image-anime reveal">
                    <img src="/images/result-list-image-2.jpg" alt="Result List 2" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurResults;
