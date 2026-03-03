"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { useTranslation } from "react-i18next";
import Layout from "@/components/layout/layout";
import { Stethoscope, MapPin, Star, Clock, Lock, ArrowRight, Phone, Mail, Award } from "lucide-react";
import { API_BASE, SERVER_BASE } from "@/lib/utils";
import { APP_URL } from "@/helpers/env";

interface Doctor {
  id: string;
  first_name: string;
  last_name: string;
  profile_image?: string;
  city: string;
  speciality: string;
  department?: string;
  bio?: string;
  consultation_fee?: number;
  rating: number;
  expertise?: string[];
  languages?: string[];
}

const DoctorDetailPage = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const router = useRouter();
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await axios.get(`${API_BASE}doctors/public/${id}`, {
          headers: { 'x-api-key': 'A/=h6eucodZfZVqgC3G`=>L=M]/$j}8*0o[lZ!ER@Y' }
        });
        setDoctor(response.data.data);
      } catch (err: any) {
        setError(err.response?.data?.message || "Erreur lors du chargement");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchDoctor();
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Chargement...</span>
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !doctor) {
    return (
      <Layout>
        <div className="container text-center py-5">
          <h3>{error || "Médecin non trouvé"}</h3>
          <button onClick={() => router.back()} className="btn btn-primary mt-3">Retour</button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="doctor-detail-page bg-light py-5">
        <div className="container">
          <div className="row">
            {/* Sidebar with Image and Basic Info */}
            <div className="col-lg-4 mb-4">
              <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
                <div className="doctor-image-wrapper position-relative" style={{ height: "400px" }}>
                  <img 
                    src={SERVER_BASE+doctor.profile_image || "/images/default-doctor.jpg"} 
                    alt={`Dr. ${doctor.first_name}`}
                    className="w-100 h-100 object-fit-cover"
                  />
                  <div className="position-absolute bottom-0 start-0 w-100 p-3 bg-gradient-dark text-white">
                    <h2 className="h4 mb-0">Dr. {doctor.first_name} {doctor.last_name}</h2>
                    <p className="small mb-0 opacity-75">{doctor.speciality}</p>
                  </div>
                </div>
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <Star className="text-warning me-2" size={20} fill="currentColor" />
                    <span className="fw-bold">{doctor.rating || 5.0}</span>
                    <span className="text-muted ms-2">(Expert vérifié)</span>
                  </div>
                  <div className="d-flex align-items-center text-muted mb-2">
                    <MapPin className="me-2" size={18} />
                    <span>{doctor.city}</span>
                  </div>
                  <div className="d-flex align-items-center text-muted">
                    <Stethoscope className="me-2" size={18} />
                    <span>{doctor.department || "Consultation Générale"}</span>
                  </div>
                </div>
              </div>
              
              <div className="card border-0 shadow-sm rounded-4 mt-4 p-4 text-center">
                <h5 className="mb-3">Prendre rendez-vous</h5>
                <p className="text-muted small mb-4">
                  Connectez-vous pour choisir un créneau et consulter ce praticien en ligne ou au cabinet.
                </p>
                <a href={`${APP_URL}/login`} className="btn btn-danger w-100 py-2 rounded-pill fw-bold shadow-sm">
                  Se connecter <ArrowRight className="ms-2" size={18} />
              </a>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="col-lg-8">
              {/* Bio Section - Blurred if not logged in */}
              <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
                <h3 className="h5 mb-3 d-flex align-items-center">
                  <Award className="text-danger me-2" /> Biographie & Expertise
                </h3>
                <div className="position-relative">
                    <div className="doctor-bio text-muted" style={{ filter: "blur(4px)", pointerEvents: "none", userSelect: "none" }}>
                    <p>
                        Le Dr. {doctor.last_name} est un expert reconnu en {doctor.speciality} avec plus de 10 ans d'expérience. 
                        Il a travaillé dans les plus grands hôpitaux de {doctor.city} et s'est spécialisé dans le traitement des pathologies complexes.
                        Diplômé de la faculté de médecine, il utilise les dernières technologies pour assurer un suivi optimal à ses patients.
                        Il accorde une importance primordiale à l'écoute et au confort de chaque personne qu'il consulte.
                    </p>
                    <p>
                        Spécialités complémentaires : {doctor.expertise?.join(', ') || "Traitement des urgences, Suivi chronique, Téléconsultation"}.
                    </p>
                    </div>
                    <div className="position-absolute top-50 start-50 translate-middle text-center w-100 px-4">
                        <div className="bg-white p-3 rounded-4 shadow-lg border">
                            <Lock className="text-danger mb-2" size={32} />
                            <p className="fw-bold mb-0">Contenu réservé</p>
                            <p className="small text-muted mb-3">Inscrivez-vous pour lire le profil complet</p>
                            <a href={`${APP_URL}/register`} className="btn btn-outline-danger btn-sm px-4">S'inscrire gratuitement</a>
                        </div>
                    </div>
                </div>
              </div>

              {/* Languages & Services */}
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="card border-0 shadow-sm rounded-4 p-4 h-100">
                    <h5 className="h6 mb-3">Langues parlées</h5>
                    <div className="d-flex flex-wrap gap-2">
                        {doctor.languages?.map((lang, idx) => (
                            <span key={idx} className="badge bg-danger-subtle text-danger px-3 py-2 rounded-pill">{lang}</span>
                        )) || (
                            <>
                                <span className="badge bg-danger-subtle text-danger px-3 py-2 rounded-pill">Français</span>
                                <span className="badge bg-danger-subtle text-danger px-3 py-2 rounded-pill">Anglais</span>
                            </>
                        )}
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="card border-0 shadow-sm rounded-4 p-4 h-100">
                    <h5 className="h6 mb-3">Disponibilités</h5>
                    <div className="d-flex align-items-center text-success fw-medium">
                        <Clock className="me-2" size={18} />
                        <span>Disponible sous 24h</span>
                    </div>
                    <p className="small text-muted mt-2">Ce praticien propose des consultations en vidéo.</p>
                  </div>
                </div>
              </div>

              {/* Contact Info - Blurred */}
              <div className="card border-0 shadow-sm rounded-4 p-4">
                <h5 className="h6 mb-3">Coordonnées de contact</h5>
                <div className="position-relative">
                   <div className="row" style={{ filter: "blur(5px)", opacity: 0.5 }}>
                        <div className="col-md-6 mb-3">
                            <div className="d-flex align-items-center">
                                <Phone className="text-danger me-2" size={18} />
                                <span>+228 90 XX XX XX</span>
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="d-flex align-items-center">
                                <Mail className="text-danger me-2" size={18} />
                                <span>dr.{doctor.last_name.toLowerCase()}@doctagne.com</span>
                            </div>
                        </div>
                   </div>
                   <div className="position-absolute top-50 start-50 translate-middle py-2 px-4 bg-white border rounded-pill shadow-sm">
                        <span className="small fw-bold text-danger">Masqué pour votre confidentialité</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-gradient-dark {
          background: linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);
        }
        .rounded-4 { border-radius: 1.25rem !important; }
        .bg-danger-subtle { background-color: rgba(251, 9, 26, 0.1) !important; }
        .object-fit-cover { object-fit: cover; }
      `}</style>
    </Layout>
  );
};

export default DoctorDetailPage;
