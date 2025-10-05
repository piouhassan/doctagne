


const avatarStyle = {
  width: 56,
  height: 56,
  borderRadius: "50%",
  objectFit: "cover",
  border: "3px solid #fff",
  marginRight: "-16px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
};

const OurTestimonials = () => {
  return (
    <div className="our-testimonials bg-section dark-section" style={{color: '#fff'}}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="testimonials-content" style={{color: '#fff'}}>
              <span className="section-label" style={{color: '#fff', fontWeight: 600, letterSpacing: 2}}>● TESTIMONIALS</span>
              <h2 className="text-anime-style-3" data-cursor="-opaque" style={{color: '#fff'}}>Recovery journey shared by our former clients</h2>
              <p style={{color: '#fff'}}>Discover inspiring story from individuals who have overcome addiction and rebuilt their lives through our compassionate care.</p>
              <a href="/testimonials.html" className="btn-default btn-highlighted testimonials-btn" style={{borderRadius: 32, padding: '20px 40px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', width: '38%'}}>
                View All Reviews
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="testimonials-slider" style={{color: '#fff'}}>
              <div className="testimonial-author-images">
                <div className="testimonial-author-image">
                  <img src="/images/author-1.jpg" alt="Avatar 1" />
                </div>
                <div className="testimonial-author-image">
                  <img src="/images/author-2.jpg" alt="Avatar 2" />
                </div>
                <div className="testimonial-author-image">
                  <img src="/images/author-3.jpg" alt="Avatar 3" />
                </div>
              </div>
              <div className="testimonial-slide" style={{color: '#fff'}}>
                <div className="testimonials-rating" style={{marginBottom: 12}}>
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star" style={{color: '#1d4c57', fontSize: 22, marginRight: 2}}></i>
                  ))}
                </div>
                <p className="testimonial-text" style={{color: '#fff', fontSize: 18, marginBottom: 16, fontWeight: 400}}>
                  "I never imagined that a rehab facility could feel like home, but that's exactly what this place became for me. I had hit rock bottom after years of alcohol abuse and losing my job. The environment here was warm, non judgmental, and deeply supportive."
                </p>
                <div className="testimonial-author" style={{color: '#fff'}}>
                  <h3 style={{color: '#fff', fontWeight: 700, marginBottom: 4}}>Isabella Clarke</h3>
                  <p style={{color: '#fff', opacity: 0.8}}>M.D. , Radical Orange Pty Ltd.</p>
                </div>
                <div className="testimonial-nav" style={{display: 'flex', gap: 16, marginTop: 24}}>
                  <button className="testimonial-prev" style={{width: 48, height: 48, borderRadius: '50%', background: '#1d4c57', color: '#fff', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22}}><i className="fa-solid fa-arrow-left"></i></button>
                  <button className="testimonial-next" style={{width: 48, height: 48, borderRadius: '50%', background: '#1d4c57', color: '#fff', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22}}><i className="fa-solid fa-arrow-right"></i></button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="company-supports-row" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 32, flexWrap: 'wrap', marginTop: 48}}>
              {[1,2,3,1,2,3].map((n, idx) => (
                <div key={idx} className="company-supports-logo" style={{display: 'flex', alignItems: 'center', gap: 10}}>
                  <img src={`/images/company-supports-logo-${n}.svg`} alt="Logoipsum"  />
                  <span> </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTestimonials;