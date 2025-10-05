const WhyChooseUs = () => {
  return (
    <div className="why-choose-us">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="why-choose-us-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">why choose us</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">Why our rehab clinic make a difference</h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">At our rehab clinic, we combine medical expertise, compassionate care, and personalized treatment plans to help each individual heal holistically.</p>
              </div>
              <div className="why-choose-btn wow fadeInUp" data-wow-delay="0.4s">
                <a href="/about.html" className="btn-default">Learn More</a>
              </div>
              <div className="why-choose-item-box">
                <div className="why-choose-item wow fadeInUp" data-wow-delay="0.6s">
                  <div className="why-choose-item-content">
                    <h3>Healing Environment</h3>
                    <p>A safe, supportive, and judgment-free space designed to help you.</p>
                  </div>
                </div>
                <div className="why-choose-item wow fadeInUp" data-wow-delay="0.8s">
                  <div className="why-choose-item-content">
                    <h3>Comprehensive Aftercare</h3>
                    <p>A safe, supportive, and judgment-free space designed to help you.</p>
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
                  <p>Helped <span className="counter">12</span>K+ Happy Smiles</p>
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
