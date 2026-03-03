"use client"
import Link from 'next/link';
import Image from 'next/image';
import { Home, Phone, Calendar, ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="not-found-wrapper">
            <div className="container">
                <div className="row align-items-center min-vh-100 py-5">
                    <div className="col-lg-6 text-center text-lg-start">
                        <div className="error-content">
                            <span className="error-badge">Oups ! Erreur 404</span>
                            <h1 className="error-title">Cette page a pris <br/><span>un jour de repos</span></h1>
                            <p className="error-description">
                                Désolé, la page que vous recherchez semble introuvable ou a été déplacée. 
                                Ne vous inquiétez pas, nos médecins sont toujours disponibles pour vous !
                            </p>
                            
                            <div className="error-actions">
                                <Link href="/" className="btn-main">
                                    <Home size={18} />
                                    Retour à l'accueil
                                </Link>
                                <div className="secondary-actions">
                                    <Link href="/pharmacies" className="action-link">
                                        <Calendar size={16} />
                                        Pharmacies de garde
                                    </Link>
                                    <Link href="/contact" className="action-link">
                                        <Phone size={16} />
                                        Nous contacter
                                    </Link>
                                </div>
                            </div>

                            <button onClick={() => window.history.back()} className="btn-back">
                                <ArrowLeft size={16} />
                                Revenir à la page précédente
                            </button>
                        </div>
                    </div>
                    
                    <div className="col-lg-6 mt-5 mt-lg-0">
                        <div className="error-image-container">
                            <div className="floating-circle"></div>
                            <img 
                                src="/images/404-error-img.png" 
                                alt="404 Error" 
                                className="img-fluid main-404-img"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .not-found-wrapper {
                    background-color: #fcfcfc;
                    overflow: hidden;
                    font-family: 'Poppins', sans-serif;
                }

                .error-badge {
                    background: rgba(251, 9, 26, 0.1);
                    color: #FB091A;
                    padding: 8px 20px;
                    border-radius: 50px;
                    font-size: 14px;
                    font-weight: 600;
                    display: inline-block;
                    margin-bottom: 20px;
                }

                .error-title {
                    font-size: 56px;
                    font-weight: 800;
                    color: #212529;
                    line-height: 1.1;
                    margin-bottom: 25px;
                }

                .error-title span {
                    color: #FB091A;
                }

                .error-description {
                    font-size: 18px;
                    color: #666;
                    margin-bottom: 40px;
                    line-height: 1.6;
                    max-width: 500px;
                }

                .error-actions {
                    display: flex;
                    flex-direction: column;
                    gap: 25px;
                    margin-bottom: 30px;
                }

                .btn-main {
                    background: #FB091A;
                    color: white;
                    padding: 16px 35px;
                    border-radius: 12px;
                    font-weight: 600;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    transition: all 0.3s ease;
                    box-shadow: 0 10px 20px rgba(251, 9, 26, 0.2);
                    width: fit-content;
                }

                .btn-main:hover {
                    background: #212529;
                    transform: translateY(-3px);
                    box-shadow: 0 15px 25px rgba(33, 37, 41, 0.2);
                    color: white;
                }

                .secondary-actions {
                    display: flex;
                    gap: 20px;
                    flex-wrap: wrap;
                }

                .action-link {
                    color: #212529;
                    text-decoration: none;
                    font-weight: 500;
                    font-size: 14px;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    transition: color 0.2s;
                }

                .action-link:hover {
                    color: #FB091A;
                }

                .btn-back {
                    background: none;
                    border: none;
                    color: #999;
                    font-size: 14px;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    cursor: pointer;
                    padding: 0;
                    transition: color 0.2s;
                }

                .btn-back:hover {
                    color: #212529;
                }

                .error-image-container {
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .main-404-img {
                    position: relative;
                    z-index: 2;
                    animation: float 6s ease-in-out infinite;
                }

                .floating-circle {
                    position: absolute;
                    width: 400px;
                    height: 400px;
                    background: radial-gradient(circle, rgba(251, 9, 26, 0.05) 0%, rgba(251, 9, 26, 0) 70%);
                    border-radius: 50%;
                    z-index: 1;
                }

                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                    100% { transform: translateY(0px); }
                }

                @media (max-width: 991px) {
                    .error-title { font-size: 42px; }
                    .btn-main { width: 100%; }
                    .error-description { margin-left: auto; margin-right: auto; }
                    .secondary-actions { justify-content: center; }
                    .btn-back { margin: 0 auto; }
                    .floating-circle { width: 300px; height: 300px; }
                }
            `}</style>
        </div>
    );
}
