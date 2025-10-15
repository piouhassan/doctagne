"use client";

import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Pharmacie, pharmaciesData } from "@/lib/data";
import { useTranslation } from "react-i18next";

interface UserLocation {
  lat: number;
  lng: number;
}

interface TypeGarde {
  value: string;
  label: string;
}

// Fonction pour générer un slug à partir d'un nom
function generateSlug(nom: string): string {
  return nom
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Enlever les accents
    .replace(/[^a-z0-9]+/g, '-') // Remplacer les caractères spéciaux par des tirets
    .replace(/^-+|-+$/g, ''); // Enlever les tirets au début et à la fin
}

const PharmacieCaseStudy = () => {
  const { t } = useTranslation();

  // États
  const [pharmacies, setPharmacies] = useState<Pharmacie[]>([]);
  const [filteredPharmacies, setFilteredPharmacies] = useState<Pharmacie[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedQuartier, setSelectedQuartier] = useState("");
  const [selectedTypeGarde, setSelectedTypeGarde] = useState("");
  const [useMyLocation, setUseMyLocation] = useState(false);
  const [userLocation, setUserLocation] = useState<UserLocation | null>(null);
  const [quartiers, setQuartiers] = useState<string[]>([]);

  // Constantes
  const typesGarde: TypeGarde[] = [
    { value: "", label: t("pharmacy.filters.allTypes") },
    { value: "nuit", label: t("pharmacy.filters.night") },
    { value: "jour", label: t("pharmacy.filters.day") },
    { value: "semaine", label: t("pharmacy.filters.week") },
    { value: "24h", label: t("pharmacy.filters.full") },
    { value: "dimanche", label: t("pharmacy.filters.sunday") },
    { value: "ferie", label: t("pharmacy.filters.holiday") },
  ];

  // Calcul de distance entre deux points géographiques
  const calculateDistance = useCallback(
    (lat1: number, lon1: number, lat2: string, lon2: string): number => {
      const R = 6371;
      const dLat = ((parseFloat(lat2) - lat1) * Math.PI) / 180;
      const dLon = ((parseFloat(lon2) - lon1) * Math.PI) / 180;
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) *
          Math.cos(parseFloat(lat2) * Math.PI / 180) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return R * c;
    },
    []
  );

  // Récupération de la position utilisateur
  const getMyLocation = useCallback(() => {
    if (!navigator.geolocation) {
      alert(t("pharmacy.alerts.noGeolocation"));
      return;
    }

    setUseMyLocation(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Erreur de géolocalisation:", error);
        alert(t("pharmacy.alerts.locationError"));
        setUseMyLocation(false);
      }
    );
  }, [t]);

  // Réinitialisation des filtres
  const resetFilters = useCallback(() => {
    setSearchTerm("");
    setSelectedQuartier("");
    setSelectedTypeGarde("");
    setUseMyLocation(false);
    setUserLocation(null);
  }, []);

  // Chargement local des données
  useEffect(() => {
    setLoading(true);
    try {
      setPharmacies(pharmaciesData);
      setFilteredPharmacies(pharmaciesData);
      setQuartiers([...new Set(pharmaciesData.map((p) => p.ville))]);
    } catch (err) {
      console.error("Erreur lors du chargement des données locales :", err);
      setPharmacies([]);
      setFilteredPharmacies([]);
      setQuartiers([]);
    } finally {
      setLoading(false);
    }
  }, []);


  // Filtrage
  useEffect(() => {
    let filtered = [...pharmacies];

    if (searchTerm) {
      filtered = filtered.filter(
        (p) =>
          p.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.adresse.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedQuartier) {
      filtered = filtered.filter((p) => p.ville === selectedQuartier);
    }

    if (selectedTypeGarde) {
      filtered = filtered.filter((p) => p.distance.includes(selectedTypeGarde));
    }

    if (useMyLocation && userLocation) {
      filtered = filtered
        .map((p) => ({
          ...p,
          distance:
            p.latitude && p.longitude
              ? calculateDistance(userLocation.lat, userLocation.lng, p.latitude, p.longitude).toFixed(1) + " km"
              : t("pharmacy.distance.unknown"),
        }))
        .sort((a, b) => {
          const distA = parseFloat(a.distance) || Infinity;
          const distB = parseFloat(b.distance) || Infinity;
          return distA - distB;
        });
    }

    setFilteredPharmacies(filtered);
  }, [searchTerm, selectedQuartier, selectedTypeGarde, pharmacies, useMyLocation, userLocation, calculateDistance, t]);

  return (
    <div className="page-case-study">
      <div className="container">
        {/* Barre de recherche et filtres */}
        <div className="row mb-5">
          <div className="col-lg-12">
            <div className="pharmacy-search-box">
              <h3>{t("pharmacy.title")}</h3>

              {/* Barre de recherche */}
              <div className="row mb-3">
                <div className="col-lg-12">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder={t("pharmacy.placeholders.search")}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Filtres */}
              <div className="row">
                <div className="col-lg-3 col-md-6 mb-3">
                  <select
                    className="form-select"
                    value={selectedQuartier}
                    onChange={(e) => setSelectedQuartier(e.target.value)}
                  >
                    <option value="">{t("pharmacy.filters.allAreas")}</option>
                    {quartiers.map((q, idx) => (
                      <option key={idx} value={q}>
                        {q}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-lg-3 col-md-6 mb-3">
                  <select
                    className="form-select"
                    value={selectedTypeGarde}
                    onChange={(e) => setSelectedTypeGarde(e.target.value)}
                  >
                    {typesGarde.map((type, idx) => (
                      <option key={idx} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-lg-3 col-md-6 mb-3">
                  <button className="btn btn-primary w-100" onClick={getMyLocation}>
                    <i className="fa-solid fa-location-dot"></i> {t("pharmacy.buttons.nearMe")}
                  </button>
                </div>

                <div className="col-lg-3 col-md-6 mb-3">
                  <button className="btn btn-secondary w-100" onClick={resetFilters}>
                    <i className="fa-solid fa-rotate-right"></i> {t("pharmacy.buttons.reset")}
                  </button>
                </div>
              </div>

              {/* Résultats */}
              <div className="row mt-3">
                <div className="col-lg-12">
                  <p className="pharmacy-results-count" style={{ color: "black" }}>
                    {filteredPharmacies.length} {t("pharmacy.results.found")}
                    {useMyLocation && userLocation && ` (${t("pharmacy.results.sortedByDistance")})`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Liste des pharmacies */}
        {loading ? (
          <div className="d-flex flex-column justify-content-center align-items-center position-fixed top-0 start-0 w-100 vh-100 bg-white" style={{ zIndex: 9999 }}>
            <div className="spinner-border text-danger" role="status" style={{ width: "2rem", height: "2rem" }}>
              <span className="visually-hidden">{t("pharmacy.loading")}</span>
            </div>
            <p className="mt-3 text-muted fw-medium">{t("pharmacy.loading")}</p>
          </div>
        ) : filteredPharmacies.length === 0 ? (
          <div className="pharmacy-empty-state text-center">
            <i className="fa-solid fa-hospital"></i>
            <p>{t("pharmacy.empty")}</p>
          </div>
        ) : (
          <div className="row">
            {filteredPharmacies.map((pharmacie, idx) => {
              const slug = generateSlug(pharmacie.nom);
              return (
                <div key={idx} className="col-lg-4 col-md-6 mb-4">
                  <div className="case-study-item wow fadeInUp" data-wow-delay={`${idx * 0.1}s`}>
                    <div className="case-study-image">
                      <figure className="image-anime">
                        <img
                          src="/images/case-study-10.jpg"
                          alt={pharmacie.nom}
                        />
                      </figure>
                      <div className="case-study-btn">
                        <a href={`/pharmacie-de-garde/${slug}`}>
                          <img src="/images/arrow-white.svg" alt="Voir" />
                        </a>
                      </div>
                      <div className="pharmacy-badge">{pharmacie.distance}</div>
                    </div>

                    <div className="case-study-content">
                      <h2>
                        <a href={`/pharmacie-de-garde/${slug}`}>{pharmacie.nom}</a>
                      </h2>
                      <div className="pharmacy-info">
                        <p>
                          <i className="fa-solid fa-location-dot"></i> {pharmacie.adresse}
                        </p>
                        <p>
                          <i className="fa-solid fa-phone"></i>{" "}
                          <a href={`tel:${pharmacie.contact_1}`}>{pharmacie.contact_1}</a>
                        </p>
                        <p>
                          <i className="fa-solid fa-map-pin"></i> {pharmacie.ville}
                        </p>
                        {useMyLocation && userLocation && pharmacie.latitude && pharmacie.longitude && (
                          <p className="pharmacy-distance">
                            <i className="fa-solid fa-route"></i>{" "}
                            {calculateDistance(userLocation.lat, userLocation.lng, pharmacie.latitude, pharmacie.longitude).toFixed(2)} km
                          </p>
                        )}
                      </div>
                      <div>
                        <a href={`/pharmacie-de-garde/${slug}`} className="pharmacy-details-btn">
                          {t("pharmacy.buttons.details")}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default PharmacieCaseStudy;