"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "menu.home", path: "/" },
    { name: "menu.news", path: "/actualites" },
    { name: "menu.services", path: "/services" },
    { name: "menu.pharmacy-garde", path: "/pharmacie-de-garde" },
    { name: "menu.contact", path: "/contact" },
  ];

  const isActiveLink = (path: string) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);




  const handleLinkClick = () => setIsMenuOpen(false);

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
          zIndex: 1000,
        }}
      >
        <div className="header-sticky bg-section">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-3">
                <Link className="navbar-brand" href="/">
                  <Image
                    src="/images/logo_docgne.png"
                    alt="Logo"
                    height={50}
                    width={130}
                  />
                </Link>
              </div>

              <button
                className="navbar-toggler d-lg-none"
                type="button"
                aria-label="Menu"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="navbar-toggler-icon"></span>
              </button>


              <div
                className={`collapse navbar-collapse main-menu justify-content-end ${
                  isMenuOpen ? "show responsive-menu" : ""
                }`}
              >
                <div className={`d-flex  w-100 ${
                    isMenuOpen ? "text-left" : "align-items-center justify-content-end"
                }`}>
                  <ul className={`d-flex navbar-nav w-100 ${
                      isMenuOpen ? "text-left menu-open" : "align-items-center justify-content-end"
                  }`} id="menu"
                  >
                    {navLinks.map((link) => (
                      <li
                        key={link.path}
                        className={`nav-item ${
                          isActiveLink(link.path) ? "active" : ""
                        }`}
                      >
                        <Link
                          className={`nav-link ${
                            isActiveLink(link.path) ? "active" : ""
                          }`}
                          href={link.path}
                          onClick={handleLinkClick}
                        >
                          {t(link.name)}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <div className="header-btn ms-3">
                    <Link
                      href="https://app.doctagne.com"
                      className="btn-default"
                      onClick={handleLinkClick}
                    >
                      {t("menu.login")}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <div style={{ height: "80px" }}></div>
    </div>
  );
}
