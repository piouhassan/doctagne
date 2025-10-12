const ContactFormSection = () => {
  return (
    <div className="contact-us-form">
      <div className="section-title">
        <h2 className="text-anime-style-3" data-cursor="-opaque">Contactez nous</h2>
      </div>
      <div className="contact-form">
        <form id="contactForm" action="#" method="POST" data-toggle="validator" className="wow fadeInUp" data-wow-delay="0.2s">
          <div className="row">
            <div className="form-group col-md-6 mb-4">
              <input type="text" name="fname" className="form-control" id="fname" placeholder="Prénom" required />
              <div className="help-block with-errors"></div>
            </div>
            <div className="form-group col-md-6 mb-4">
              <input type="text" name="lname" className="form-control" id="lname" placeholder="Nom" required />
              <div className="help-block with-errors"></div>
            </div>
            <div className="form-group col-md-6 mb-4">
              <input type="email" name="email" className="form-control" id="email" placeholder="E-mail" required />
              <div className="help-block with-errors"></div>
            </div>
            <div className="form-group col-md-6 mb-4">
              <input type="text" name="phone" className="form-control" id="phone" placeholder="Téléphone" required />
              <div className="help-block with-errors"></div>
            </div>
            <div className="form-group col-md-12 mb-5">
              <textarea name="message" className="form-control" id="message" rows={4} placeholder="Message"></textarea>
              <div className="help-block with-errors"></div>
            </div>
            <div className="col-md-12">
              <button type="submit" className="btn-default">Envoyer</button>
              <div id="msgSubmit" className="h3 hidden"></div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactFormSection;
