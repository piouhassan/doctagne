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
  },
  {
    title: "Menstral Heallthic Counselfinity",
    icon: "/images/icon-service-5.svg",
    description: "Caring professionals who treat you with respect and understanding.",
    delay: "0.8s"
  },
  {
    title: "Addictora Recovent Programix",
    icon: "/images/icon-service-6.svg",
    description: "We're here for the entire journey - from detox to residential treatment,",
    delay: "1s"
  },
  {
    title: "Individual Wellness Planning",
    icon: "/images/icon-service-7.svg",
    description: "Our medically supervised detox programs ensure a safe, comfortable.",
    delay: "1.2s"
  },
  {
    title: "Behavioral Therapy Sessions",
    icon: "/images/icon-service-8.svg",
    description: "Our team of experts works closely with you to understand your history.",
    delay: "1.4s"
  }
];

const PageServices = () => {
  return (
    <div className="page-services">
      <div className="container">
        <div className="row service-list">
          {services.map((service, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className={`service-item${index === 0 || index === 4 ? ' active' : ''} wow fadeInUp`} data-wow-delay={service.delay}>
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
        </div>
      </div>
    </div>
  );
};

export default PageServices;
