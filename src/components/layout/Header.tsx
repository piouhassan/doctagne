"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";

export default function Header() {
    const { t } = useTranslation();
    const pathname = usePathname();

    const navLinks = [
        { name: 'menu.home', path: "/" },
        { name: "menu.news", path: "/actualites" },
        { name: "menu.services", path: "/services" },
        { name: "menu.pharmacy-garde", path: "/pharmacie-de-garde" },
        { name: "menu.contact", path: "/contact" },
    ];

    const isActiveLink = (path: string) => {
        if (path === "/") {
            return pathname === "/";
        }
        return pathname.startsWith(path);
    };

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
                            <Link className="navbar-brand" href="/">
                                <Image
                                    src="/images/logo_docgne.png"
                                    alt="Logo"
                                    height={50}
                                    width={130}
                                />
                            </Link>
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