
const faqs = [
  {
    question: "What types of addiction do you treat?",
    answer: "We provide comprehensive treatment for wide range of addictions, including alcohol, prescription medications, opioids, heroin, cocaine, methamphetamine, and other substances.",
    delay: "0.2s"
  },
  {
    question: "Do you offer personalized treatment plans?",
    answer: "We provide comprehensive treatment for wide range of addictions, including alcohol, prescription medications, opioids, heroin, cocaine, methamphetamine, and other substances.",
    delay: "0.4s"
  },
  {
    question: "How do I know if I need rehab?",
    answer: "We provide comprehensive treatment for wide range of addictions, including alcohol, prescription medications, opioids, heroin, cocaine, methamphetamine, and other substances.",
    delay: "0.6s"
  },
  {
    question: "What kinds of programs do you offer?",
    answer: "We provide comprehensive treatment for wide range of addictions, including alcohol, prescription medications, opioids, heroin, cocaine, methamphetamine, and other substances.",
    delay: "0.8s"
  }
];

const OurFaqs = () => {
  return (
    <div className="our-faqs">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="faqs-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">Frequently asked question</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">Common questions about our rehab services</h2>
              </div>
              <div className="faq-accordion" id="faqaccordion">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="accordion-item wow fadeInUp" data-wow-delay={faq.delay}>
                    <h2 className="accordion-header" id={`heading${idx+1}`}>
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${idx+1}`} aria-expanded="false" aria-controls={`collapse${idx+1}`}>
                        Q{idx+1}. {faq.question}
                      </button>
                    </h2>
                    <div id={`collapse${idx+1}`} className="accordion-collapse collapse" aria-labelledby={`heading${idx+1}`} data-bs-parent="#faqaccordion">
                      <div className="accordion-body">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="faqs-image-box">
              <div className="faq-image">
                <figure className="image-anime">
                  <img src="/images/faq-image.jpg" alt="FAQ" />
                </figure>
              </div>
              <div className="faqs-contact-box">
                <div className="faqs-cta-box-content">
                  <h3>Need Any Help? We're Here To Help You!</h3>
                  <a href="/contact.html" className="btn-default btn-dark">Contact Us Now</a>
                </div>
                <div className="icon-box">
                  <img src="/images/icon-phone-accent.svg" alt="Phone" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFaqs;