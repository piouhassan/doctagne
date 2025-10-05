// Services.js
import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Addiction Recovery Programs",
      icon: "/images/icon-service-1.svg",
      description: "Caring professionals who treat you with respect and understanding.",
      delay: "0s"
    },
    {
      title: "Medical & Clinical Services",
      icon: "/images/icon-service-2.svg",
      description: "We're here for the entire journey - from detox to residential treatment,",
      delay: "0.2s"
    },
    {
      title: "Holistic & Wellness Services",
      icon: "/images/icon-service-3.svg",
      description: "Our medically supervised detox programs ensure a safe, comfortable.",
      delay: "0.4s"
    },
    {
      title: "Intensive Outpatient Program",
      icon: "/images/icon-service-4.svg",
      description: "Our team of experts works closely with you to understand your history.",
      delay: "0.6s"
    }
  ];

  return (
    <div className="our-services bg-section">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-6">
            <div className="section-title">
              <h3 className="wow fadeInUp">our services</h3>
              <h2 className="text-anime-style-3" data-cursor="-opaque">Healing support through proven rehab services</h2>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="section-title-content wow fadeInUp" data-wow-delay="0.2s">
              <p>Our rehab clinic offers evidence-based treatments and support to help you achieve lasting recovery. With personalized care plans and a team experienced professionals, we guide you every step of the way.</p>
            </div>
          </div>
        </div>

        <div className="row service-list">
          {services.map((service, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className={`service-item ${index === 0 ? 'active' : ''} wow fadeInUp`} data-wow-delay={service.delay}>
                <div className="service-title">
                  <h3><a href="/service-single">{service.title}</a></h3>
                </div>
                <div className="icon-box">
                  <img src={service.icon} alt={service.title} />
                </div>
                <div className="service-content">
                  <p>{service.description}</p>
                </div>
                <div className="service-btn">
                  <a href="/service-single" className="readmore-btn">Learn More</a>
                </div>
              </div>
            </div>
          ))}

          <div className="col-lg-12">
            <div className="section-footer-text wow fadeInUp" data-wow-delay="0.8s">
              <p><span>Free</span>Take the first step toward a healthier you - <a href="/book-appointment">schedule your free assessment today!</a></p>
            </div>
          </div>
        </div>            
      </div>
    </div>
  );
};

export default Services;