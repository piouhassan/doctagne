interface ProcessStep {
  number: string;
  title: string;
  description: string;
  delay: string;
}


const HowItWork = () => {
  const steps = [
    {
      image: "/images/work-image-1.jpg",
      title: "Confidential Consultation",
      description: "Our admissions team is available 24/7 to listen, answer your questions and guide you through.",
      delay: "0s"
    },
    {
      image: "/images/work-image-2.jpg",
      title: "Personalized Assessment",
      description: "We conduct a thorough evaluation of your needs, health, and goals to design a treatment plan",
      delay: "0.2s"
    },
    {
      image: "/images/work-image-3.jpg",
      title: "Begin Treatment",
      description: "Start your path to healing with compassionate care, evidence based therapies.",
      delay: "0.4s"
    },
    {
      image: "/images/work-image-4.jpg",
      title: "Ongoing Support",
      description: "We provide a customized aftercare plan along with relapse prevention tools and access",
      delay: "0.6s"
    }
  ];

  return (
    <div className="how-it-work bg-section">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            <div className="section-title section-title-center">
              <h3 className="wow fadeInUp">How it work</h3>
              <h2 className="text-anime-style-3" data-cursor="-opaque">Your recovery journey step by step guide</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="work-item-list">
              {steps.map((step, idx) => (
                <div key={idx} className={`work-item work-box-${idx + 1} wow fadeInUp`} data-wow-delay={step.delay}>
                  <div className="work-item-image">
                    <figure className="image-anime">
                      <img src={step.image} alt={step.title} />
                    </figure>
                  </div>
                  <div className="work-item-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;