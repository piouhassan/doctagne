import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
   <div>
       <header className="main-header"  style={{position: "fixed", marginBottom : "20px", background : "white", left : "0", right : "0",}}>
           <div className="header-sticky bg-section">
               <nav className="navbar navbar-expand-lg">
                   <div className="container-fluid" >
                       {/* Logo Start */}
                       <Link className="navbar-brand" href="/">
                           <Image src="/images/logo_docgne.png" alt="Logo" height={50} width={130} />
                       </Link>
                       {/* Logo End */}

                       {/* Main Menu Start */}
                       <div>
                           <div className="collapse navbar-collapse main-menu">
                               <div className="nav-menu-wrapper">
                                   <ul className="navbar-nav mr-auto" id="menu">
                                       <li className="nav-item ">
                                           <Link className="nav-link" href="/">Accueil</Link>
                                       </li>
                                       <li className="nav-item"><Link className="nav-link" href="/actualites">Actualités</Link></li>
                                       <li className="nav-item"><Link className="nav-link" href="/services">Services</Link></li>
                                       <li className="nav-item"><Link className="nav-link" href="/pharmacie-de-garde">Pharmacie De Garde</Link></li>
                                       <li className="nav-item"><Link className="nav-link" href="/contact">Contact</Link></li>
                                       <li className="nav-item highlighted-menu"><Link className="nav-link" href="/about">À Propos</Link></li>
                                   </ul>
                               </div>
                               {/* Header Btn Start */}
                               <div className="header-btn">
                                   <Link href="/login" className="btn-default">Se connecter</Link>
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
