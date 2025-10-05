const WhatWeDo = () => {
  return (
    <div className="what-we-do">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="what-we-image-box">
              <div className="what-we-image">
                <figure className="image-anime reveal">
                  <img src="/images/what-we-image.jpg" alt="" />
                </figure>
              </div>
              <div className="what-we-contact-box wow fadeInUp" data-wow-delay="0.2s">
                <div className="what-we-contact-item">
                  <div className="icon-box">
                    <img src="/images/icon-mail.svg" alt="" />
                  </div>
                  <div className="what-we-contact-item-content">
                    <p>Email Address</p>
                    <h3><a href="mailto:info@domainname.com">info@domainname.com</a></h3>
                  </div>
                </div>
                <div className="what-we-contact-btn">
                  <a href="/contact.html" className="btn-default">contact us</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="what-we-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">what we do</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">What we do to support your recovery</h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">We offer personalized treatment plans, expert medical care, and emotional support to guide you through every stage of recovery</p>
              </div>
              <div className="what-we-item-box">
                <div className="what-we-item wow fadeInUp" data-wow-delay="0.4s">
                  <div className="icon-box">
                    <img src="/images/icon-what-we-item-1.svg" alt="" />
                  </div>
                  <div className="what-we-item-content">
                    <h3>Full Continuum of Care</h3>
                    <p>From medically supervised detox to aftercare and relapse prevention, we provide end-to-end support.</p>
                  </div>
                </div>
                <div className="what-we-item wow fadeInUp" data-wow-delay="0.6s">
                  <div className="icon-box">
                    <img src="/images/icon-what-we-item-2.svg" alt="" />
                  </div>
                  <div className="what-we-item-content">
                    <h3>Dual Diagnosis Treatment</h3>
                    <p>We treat both addiction & co-occurring mental health conditions such as anxiety, depression, or PTSD, ensuring a more complete.</p>
                  </div>
                </div>
                <div className="what-we-item wow fadeInUp" data-wow-delay="0.8s">
                  <div className="icon-box">
                    <img src="/images/icon-what-we-item-3.svg" alt="" />
                  </div>
                  <div className="what-we-item-content">
                    <h3>Family Support & Involvement</h3>
                    <p>Recovery is stronger with support. We offer family counseling, education, and involvement to rebuild trust.</p>
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
