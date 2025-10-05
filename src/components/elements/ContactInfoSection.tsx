const ContactInfoSection = () => {
  return (
    <div className="contact-us-content">
      <div className="section-title">
        <h3 className="wow fadeInUp">Contactez-nous</h3>
        <h2 className="text-anime-style-3" data-cursor="-opaque">Informations de contact</h2>
        <p className="wow fadeInUp" data-wow-delay="0.2s">
          Trouvez un professionnel de santé en quelques clics, proche de chez vous, au cabinet en ligne ou à domicile. Se soigner n'a jamais été aussi facile.
        </p>
      </div>
      <div className="contact-info-box">
        <div className="contact-info-list">
          <div className="contact-info-item wow fadeInUp" data-wow-delay="0.4s">
            <div className="icon-box">
              <img src="/images/icon-phone.svg" alt="Téléphone" />
            </div>
            <div className="contact-item-content">
              <h3>Numéro Téléphone</h3>
              <p><a href="tel:+22890015029">+(228) 90 01 50 29</a></p>
            </div>
          </div>
          <div className="contact-info-item wow fadeInUp" data-wow-delay="0.4s">
            <div className="icon-box">
              <img src="/images/icon-mail.svg" alt="Mail" />
            </div>
            <div className="contact-item-content">
              <h3>Adresse Email</h3>
              <p><a href="mailto:contact@doctagne.com">contact@doctagne.com</a></p>
              <p><a href="mailto:support@doctagne.com">support@doctagne.com</a></p>
            </div>
          </div>
          <div className="contact-info-item wow fadeInUp" data-wow-delay="0.6s">
            <div className="icon-box">
              <img src="/images/icon-location.svg" alt="Adresse" />
            </div>
            <div className="contact-item-content">
              <h3>Adresse</h3>
              <p>123 Avenue Santé, Lomé, Togo</p>
            </div>
          </div>
          <div className="contact-info-item wow fadeInUp" data-wow-delay="0.6s">
            <div className="icon-box">
              <img src="/images/icon-clock.svg" alt="Horaires" />
            </div>
            <div className="contact-item-content">
              <h3>Horaires</h3>
              <p>Lundi à Samedi</p>
              <p>08h00 à 20h00</p>
            </div>
          </div>
        </div>
        <div className="contact-social-links wow fadeInUp" data-wow-delay="0.8s">
          <h3>Suivez-nous :</h3>
          <ul>
            <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoSection;