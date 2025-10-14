"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const { t, i18n } = useTranslation();
  const pathname = usePathname();
  const [language, setLanguage] = useState(i18n.language || "fr");

  const navLinks = [
    { name: "menu.home", path: "/" },
    { name: "menu.news", path: "/actualites" },
    { name: "menu.services", path: "/services" },
    { name: "menu.pharmacy-garde", path: "/pharmacie-de-garde" },
    { name: "menu.contact", path: "/contact" },
  ];

  const isActiveLink = (path: string) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    document.documentElement.lang = lang;
    localStorage.setItem("i18nextLng", lang);
  };

  useEffect(() => {
    const stored = localStorage.getItem("i18nextLng");
    if (stored) {
      setLanguage(stored);
      i18n.changeLanguage(stored);
    }
  }, [i18n]);

    return (
        <div>
            <header
                className="main-header"
                style={{
                    position: "fixed",
                    marginBottom: "20px",
                    background: "white",
                    left: "0",
                    right: "0",
                    zIndex: 1000
                }}
            >
                <div className="header-sticky bg-section">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            {/* Logo Start */}
                            <div className="d-flex align-items-center gap-3">
                {/* Logo */}
                <Link className="navbar-brand" href="/">
                  <Image
                    src="/images/logo_docgne.png"
                    alt="Logo"
                    height={50}
                    width={130}
                  />
                </Link>

                {/* Sélecteur de langue à gauche */}
                <div className="language-switcher d-flex align-items-center gap-2">
                  <button
                    className={`lang-circle ${
                      language === "fr" ? "active" : ""
                    }`}
                    onClick={() => changeLanguage("fr")}
                    aria-label="Français"
                  >
                    <img
                      src="/images/flags/fr.jpg"
                      alt="Français"
                      width={22}
                      height={22}
                    />
                  </button>
                  <button
                    className={`lang-circle ${
                      language === "en" ? "active" : ""
                    }`}
                    onClick={() => changeLanguage("en")}
                    aria-label="English"
                  >
                    <img
                      src="/images/flags/en.jpg"
                      alt="English"
                      width={22}
                      height={22}
                    />
                  </button>
                </div>
              </div>

                            {/* Logo End */}

                            {/* Main Menu Start */}
                            <div>
                                <div className="collapse navbar-collapse main-menu">
                                    <div className="nav-menu-wrapper">
                                        <ul className="navbar-nav mr-auto" id="menu">
                                            {navLinks.map((link) => (
                                                <li
                                                    key={link.path}
                                                    className={`nav-item ${isActiveLink(link.path) ? 'active' : ''}`}
                                                >
                                                    <Link
                                                        className={`nav-link ${isActiveLink(link.path) ? 'active' : ''}`}
                                                        href={link.path}
                                                    >
                                                        {t(link.name)}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {/* Header Btn Start */}
                                    <div className="header-btn">
                                        <Link href="https://app.doctagne.com" className="btn-default">
                                            {t('menu.login')}
                                        </Link>
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
            <div style={{ height: "80px" }}></div>
        </div>
    );
}