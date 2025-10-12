"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

interface Pharmacie {
  id: number;
  name: string;
  image: string;
  address: string;
  phone: string;
  quartier: string;
  type_garde: string;
  latitude?: number;
  longitude?: number;
}

const PharmacieCaseStudy = () => {
  const [pharmacies, setPharmacies] = useState<Pharmacie[]>([]);
  const [filteredPharmacies, setFilteredPharmacies] = useState<Pharmacie[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedQuartier, setSelectedQuartier] = useState("");
  const [selectedTypeGarde, setSelectedTypeGarde] = useState("");
  const [useMyLocation, setUseMyLocation] = useState(false);
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);
  const [quartiers, setQuartiers] = useState<string[]>([]);

  const typesGarde = [
    { value: "", label: "Tous les types" },
    { value: "nuit", label: "Garde de nuit" },
    { value: "jour", label: "Garde de jour" },
    { value: "semaine", label: "Garde semaine" },
    { value: "24h", label: "Garde 24h/24" },
    { value: "dimanche", label: "Garde dimanche" },
    { value: "ferie", label: "Garde jour férié" }
  ];

  useEffect(() => {
    axios
      .get("https://api.doctagne.com/api/v1/public/pharmacies")
      .then((res) => {
        const data = res.data.data || res.data || [];
        setPharmacies(data);
        setFilteredPharmacies(data);
        const uniqueQuartiers = [...new Set(data.map((p: Pharmacie) => p.quartier))];
        setQuartiers(uniqueQuartiers as string[]);
      })
      .catch((err) => {
        console.error("Erreur lors du chargement des pharmacies:", err);
        const demoData: Pharmacie[] = [
          {
            id: 1,
            name: "Pharmacie Centrale",
            image: "/images/case-study-1.jpg",
            address: "123 Avenue de la Liberté, Lomé",
            phone: "+228 22 21 00 00",
            quartier: "Centre-ville",
            type_garde: "24h",
            latitude: 6.1256,
            longitude: 1.2325
          },
          {
            id: 2,
            name: "Pharmacie du Marché",
            image: "/images/case-study-2.jpg",
            address: "45 Rue du Commerce, Lomé",
            phone: "+228 22 22 11 11",
            quartier: "Adawlato",
            type_garde: "dimanche",
            latitude: 6.1356,
            longitude: 1.2425
          },
          {
            id: 3,
            name: "Pharmacie de la Paix",
            image: "/images/case-study-3.jpg",
            address: "78 Boulevard du 13 Janvier, Lomé",
            phone: "+228 22 23 22 22",
            quartier: "Tokoin",
            type_garde: "nuit",
            latitude: 6.1456,
            longitude: 1.2525
          }
        ];
        setPharmacies(demoData);
        setFilteredPharmacies(demoData);
        setQuartiers(["Centre-ville", "Adawlato", "Tokoin"]);
      })
      .finally(() => setLoading(false));
  }, []);

  const getMyLocation = () => {
    if (navigator.geolocation) {
      setUseMyLocation(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.error("Erreur de géolocalisation:", error);
          alert("Impossible d'obtenir votre position");
          setUseMyLocation(false);
        }
      );
    } else {
      alert("La géolocalisation n'est pas supportée par votre navigateur");
    }
  };

  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  useEffect(() => {
    let filtered = [...pharmacies];

    if (searchTerm) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.address.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedQuartier) {
      filtered = filtered.filter(p => p.quartier === selectedQuartier);
    }

    if (selectedTypeGarde) {
      filtered = filtered.filter(p => p.type_garde === selectedTypeGarde);
    }

    if (useMyLocation && userLocation) {
      filtered = filtered
        .map(p => ({
          ...p,
          distance: p.latitude && p.longitude 
            ? calculateDistance(userLocation.lat, userLocation.lng, p.latitude, p.longitude)
            : Infinity
        }))
        .sort((a, b) => (a.distance || 0) - (b.distance || 0));
    }

    setFilteredPharmacies(filtered);
  }, [searchTerm, selectedQuartier, selectedTypeGarde, pharmacies, useMyLocation, userLocation]);

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedQuartier("");
    setSelectedTypeGarde("");
    setUseMyLocation(false);
    setUserLocation(null);
  };

  if (loading) {
    return (
      <div className="text-center py-5" style={{ color: "black" }}>
        <p>Chargement ...</p>
      </div>
    );
  }

  return (
    <div className="page-case-study">
      <div className="container">
        {/* Barre de recherche et filtres */}
        <div className="row mb-5">
          <div className="col-lg-12">
            <div className="pharmacy-search-box">
              <h3>Rechercher une pharmacie de garde</h3>
              
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
                      placeholder="Rechercher par nom ou adresse..."
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
                    <option value="">Tous les quartiers</option>
                    {quartiers.map((q, idx) => (
                      <option key={idx} value={q}>{q}</option>
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
                      <option key={idx} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                </div>

                <div className="col-lg-3 col-md-6 mb-3">
                  <button
                    className="btn btn-primary w-100"
                    onClick={getMyLocation}
                  >
                    <i className="fa-solid fa-location-dot"></i> Près de moi
                  </button>
                </div>

                <div className="col-lg-3 col-md-6 mb-3">
                  <button
                    className="btn btn-secondary w-100"
                    onClick={resetFilters}
                  >
                    <i className="fa-solid fa-rotate-right"></i> Réinitialiser
                  </button>
                </div>
              </div>

              {/* Résultats */}
              <div className="row mt-3">
                <div className="col-lg-12">
                  <p className="pharmacy-results-count" style={{ color: "black" }}>
                    {filteredPharmacies.length} pharmacie(s) trouvée(s)
                    {useMyLocation && userLocation && " (triées par distance)"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Liste des pharmacies */}
        <div className="row">
          {filteredPharmacies.length === 0 ? (
            <div className="col-lg-12">
              <div className="pharmacy-empty-state">
                <i className="fa-solid fa-hospital"></i>
                <p >Aucune pharmacie trouvée avec ces critères</p>
              </div>
            </div>
          ) : (
            filteredPharmacies.map((pharmacie, idx) => (
              <div key={pharmacie.id} className="col-lg-4 col-md-6">
                <div className="case-study-item wow fadeInUp" data-wow-delay={`${idx * 0.1}s`}>
                  <div className="case-study-image">
                    <figure className="image-anime">
                      <img 
                        src={pharmacie.image} 
                        alt={pharmacie.name}
                        onError={(e) => {
                          e.currentTarget.src = '/images/placeholder-pharmacy.jpg';
                        }}
                      />
                    </figure>
                    <div className="case-study-btn">
                      <a href={`/pharmacie-de-garde/${pharmacie.id}`}>
                        <img src="/images/arrow-white.svg" alt="Voir" />
                      </a>
                    </div>
                    
                    {/* Badge type de garde */}
                    <div className="pharmacy-badge">
                      {pharmacie.type_garde}
                    </div>
                  </div>
                  
                  <div className="case-study-content">
                    <h2>
                      <a href={`/pharmacie-de-garde/${pharmacie.id}`}>{pharmacie.name}</a>
                    </h2>
                    
                    {/* Informations de la pharmacie */}
                    <div className="pharmacy-info">
                      <p>
                        <i className="fa-solid fa-location-dot"></i>
                        {pharmacie.address}
                      </p>
                      <p>
                        <i className="fa-solid fa-phone"></i>
                        <a href={`tel:${pharmacie.phone}`}>{pharmacie.phone}</a>
                      </p>
                      <p>
                        <i className="fa-solid fa-map-pin"></i>
                        {pharmacie.quartier}
                      </p>
                      
                      {useMyLocation && userLocation && pharmacie.latitude && pharmacie.longitude && (
                        <p className="pharmacy-distance">
                          <i className="fa-solid fa-route"></i>
                          {calculateDistance(
                            userLocation.lat, 
                            userLocation.lng, 
                            pharmacie.latitude, 
                            pharmacie.longitude
                          ).toFixed(2)} km
                        </p>
                      )}
                    </div>
                    
                    {/* Bouton voir détails */}
                    <div>
                      <a 
                        href={`/pharmacie-de-garde/${pharmacie.id}`} 
                        className="pharmacy-details-btn"
                      >
                        Voir les détails
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default PharmacieCaseStudy;