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
      title: "Créez votre compte",
      description: "Inscrivez-vous gratuitement en quelques clics et accédez à notre réseau de professionnels de santé.",
      delay: "0s"
    },
    {
      image: "/images/work-image-2.jpg",
      title: "Prenez rendez-vous",
      description: "Recherchez et réservez facilement un rendez-vous avec un médecin, une pharmacie ou un laboratoire.",
      delay: "0.2s"
    },
    {
      image: "/images/work-image-3.jpg",
      title: "En ligne ou en cabinet",
      description: "Choisissez entre une téléconsultation ou un rendez-vous en cabinet selon votre convenance.",
      delay: "0.4s"
    },
    {
      image: "/images/work-image-4.jpg",
      title: "Suivi et résultats",
      description: "Accédez à vos ordonnances, résultats d'analyses et historique médical depuis votre espace personnel.",
      delay: "0.6s"
    }
  ];

  return (
    <div className="how-it-work bg-section text-black">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            <div className="section-title section-title-center">
              <h3 className="wow fadeInUp">Comment ça marche</h3>
              <h2 className="text-anime-style-3" data-cursor="-opaque">Votre parcours de santé en 4 étapes simples</h2>
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