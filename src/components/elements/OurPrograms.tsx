
const OurPrograms = () => {
  const programs = [
    {
      title: "Holistic Therapy",
      description: "Holistic Therapy focuse on healing of mind body spirit through practices.",
      delay: "0s"
    },
    {
      title: "Pure Balance",
      description: "Pure Balance focuses on healing the mind, body, spirit through practices.",
      delay: "0.2s"
    },
    {
      title: "Natural Path",
      description: "Natural Path focuses on healing the mind, body, spirit through practices.",
      delay: "0.4s"
    },
    {
      title: "Health Horizon",
      description: "Health Horizon focuses on healing the mind, body, spirit through practices.",
      delay: "0.6s"
    }
  ];

  return (
    <div className="our-programs">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="programs-image-box">
              <div className="section-title">
                <h2 className="text-anime-style-3" data-cursor="-opaque">Our most trusted treatment programs</h2>
              </div>
              <div className="programs-item-body">
                <div className="programs-body-content wow fadeInUp" data-wow-delay="0.2s">
                  <p>We offer evidence-base client-centered treatment programs that have helped countless individuals.</p>
                </div>
                <div className="programs-body-image">
                  <figure>
                    <img src="/images/programs-body-image.png" alt="Programs" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="programs-item-list">
              {programs.map((program, idx) => (
                <div key={idx} className={`programs-item wow fadeInUp`} data-wow-delay={program.delay}>
                  <div className="programs-item-header">
                    <div className="programs-item-title">
                      <h3>{program.title}</h3>
                    </div>
                    <div className="program-btn">
                      <a href="/contact.html">
                        <img src="/images/arrow-white.svg" alt="Contact" />
                      </a>
                    </div>
                  </div>
                  <div className="programs-item-content">
                    <p>{program.description}</p>
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

export default OurPrograms;