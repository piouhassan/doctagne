
const MainFooter = () => {
  return (
    <footer className="main-footer bg-section dark-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-footer">
              <div className="footer-logo">
                <img src="/images/logo_docgne.png" alt="Footer Logo" />
              </div>
              <div className="about-footer-content">
                <p>Trouvez un professionnel de santé en quelques clics, proche de chez vous, au cabinet en ligne ou à domicile. Se soigner n'a jamais été aussi facile.</p>
              </div>

                <div className="footer-contact-details mt-5">
                    <div className="footer-contact-item">
                        <div className="icon-box">
                            <img src="/images/icon-mail.svg" alt="Mail" />
                        </div>
                        <div className="footer-contact-item-content">
                            <p className='pt-2'><a href="mailto:contact@doctagne.com">contact@doctagne.com</a></p>
                        </div>
                    </div>
                    <div className="footer-contact-item">
                        <div className="icon-box">
                            <img src="/images/icon-phone.svg" alt="Phone" />
                        </div>
                        <div className="footer-contact-item-content">
                            <p className="pt-2"><a href="tel:+123456789">+(228) 90 01 50 29</a></p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="footer-newsletter-box">
              <div className="section-title">
                <h4 className="text-white" data-cursor="-opaque">Accédez rapidement à un professionnel de santé</h4>
              </div>
              <div className="footer-newsletter-form">
                <form id="newslettersForm" action="#" method="POST">
                  <div className="form-group">
                    <input type="email" name="mail" className="form-control"  id="mail" placeholder="Entrez votre email" required />
                    <button type="submit" className="newsletter-btn"><i className="fa-regular fa-paper-plane"></i></button>
                  </div>
                </form>
              </div>

            </div>
          </div>
          <div className="col-lg-12">
            <div className="footer-copyright">
              <div className="footer-copyright-text">
                <p>Copyright © 2025 Doctagné</p>
              </div>
              <div className="footer-links">
                <ul>
                  <li><a href="/app">Accueil</a></li>
                  <li><a href="/actualites">Actualités</a></li>
                  <li><a href="/services">Services</a></li>
                  <li><a href="/pharmacie-de-garde">Pharmacie De Garde</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;

