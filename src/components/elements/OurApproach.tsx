const OurApproach = () => {
  return (
    <div className="our-approach bg-section">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-6">
            <div className="section-title">
              <h3 className="wow fadeInUp">our approach</h3>
              <h2 className="text-anime-style-3" data-cursor="-opaque">Our mission & vision for better healthcare</h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-title-content wow fadeInUp" data-wow-delay="0.2s">
              <p>At Rehab clinic, we are committed to delivering compassionate, high-quality healthcare tailored to each patient's needs. Our mission is to provide reliable, accessible, and modern medical services.</p>
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
                  <h3>Our Mission</h3>
                  <p>To provide patient-focused, ethical, and high-quality medical care using advanced technology and compassionate service.</p>
                </div>
              </div>
              <div className="approach-item wow fadeInUp" data-wow-delay="0.6s">
                <div className="icon-box">
                  <img src="/images/icon-vision.svg" alt="Vision" />
                </div>
                <div className="approach-item-content">
                  <h3>Our Vision</h3>
                  <p>To provide patient-focused, ethical, and high-quality medical care using advanced technology and compassionate service.</p>
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
                <h3>Our Value</h3>
                <p>To provide patient-focused, ethical & high-quality medical care & advance technology compassionate service.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurApproach;
