export default function Header() {
  return (
    <header className="main-header">
      <div className="header-sticky bg-section">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            {/* Logo Start */}
            <a className="navbar-brand" href="/">
              <img src="/images/logo_docgne.png" alt="Logo" style={{ height: '60px' }} />
            </a>
            {/* Logo End */}

            {/* Main Menu Start */}
            <div>
              <div className="collapse navbar-collapse main-menu">
                <div className="nav-menu-wrapper">
                  <ul className="navbar-nav mr-auto" id="menu">
                    <li className="nav-item ">
                      <a className="nav-link" href="/">Accueil</a>
                    </li>
                    <li className="nav-item"><a className="nav-link" href="/about">Actualités</a></li>
                    <li className="nav-item"><a className="nav-link" href="/services">Services</a></li>
                    <li className="nav-item"><a className="nav-link" href="/pharmacie-de-garde">Pharmacie De Garde</a></li>
                    <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
                    <li className="nav-item highlighted-menu"><a className="nav-link" href="/book-appointment.html">Contactez Nous</a></li>
                  </ul>
                </div>
                {/* Header Btn Start */}
                <div className="header-btn">
                  <a href="/book-appointment.html" className="btn-default">Connexion</a>
                </div>
                {/* Header Btn End */}
              </div>
            </div>
            {/* Main Menu End */}
            <div className="navbar-toggle"></div>
          </div>
        </nav>
        <div className="responsive-menu"></div>
      </div>
    </header>
  );
}
