
const CtaBox = () => {
  return (
    <div className="cta-box bg-section dark-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="cta-box-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">Contact Us</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">Start your healing journey with us today!</h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">Our team is here 24/7 to support your healing journey with compassionate care, expert treatment, and a personalized plan built just for you.</p>
              </div>
              <div className="cta-box-list wow fadeInUp" data-wow-delay="0.4s">
                <ul>
                  <li>Family Involvement & Education</li>
                  <li>24/7 Admissions Support</li>
                </ul>
              </div>
              <div className="cta-box-btn wow fadeInUp" data-wow-delay="0.6s">
                <a href="/book-appointment.html" className="btn-default btn-dark">Schedule a free consultation</a>
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