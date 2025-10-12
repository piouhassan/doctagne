"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

interface Article {
  id: number;
  title: string;
  picture: string;
  content: string;
  slug: string;
}

const OurBlog = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.doctagne.com/api/v1/public/articles")
      .then((res) => {
        console.log("Résultat API :", res.data);
        const allArticles = res.data.articles || [];
        const topThree = allArticles.slice(0, 3);
        setArticles(topThree);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des articles:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  // Fonction pour construire l'URL de l'image
  const getImageUrl = (picture: string) => {
    if (!picture) return '';
    
    // Si l'image contient déjà le chemin complet
    if (picture.startsWith('http')) {
      return picture;
    }
    
    // Sinon, construire l'URL avec le chemin de l'API
    return `https://api.doctagne.com/uploads/articles/${picture}`;
  };

  return (
    <div className="our-blog">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            <div className="section-title section-title-center">
              <h3 className="wow fadeInUp">Actualités</h3>
              <h2 className="text-anime-style-3" data-cursor="-opaque">
                Nos derniers articles
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          {loading ? (
            <div className="col-12 text-center">
              <p>Chargement des articles...</p>
            </div>
          ) : articles.length === 0 ? (
            <div className="col-12 text-center">
              <p>Aucun article disponible</p>
            </div>
          ) : (
            articles.map((article, idx) => (
              <div key={article.id} className="col-lg-4 col-md-6">
                <div
                  className="post-item wow fadeInUp"
                  data-wow-delay={`${idx * 0.2}s`}
                >
                  <div className="post-featured-image">
                    <a href={`/actualites/${article.slug}`} data-cursor-text="View">
                      <figure className="image-anime">
                        <img
                          src={getImageUrl(article.picture)}
                          alt={article.title}
                        />
                      </figure>
                    </a>
                  </div>
                  <div className="post-item-body">
                    <div className="post-item-content">
                      <h2>
                        <a href={`/actualites/${article.slug}`}>{article.title}</a>
                      </h2>
                    </div>
                    <div className="post-item-btn">
                      <a
                        href={`/actualites/${article.slug}`}
                        className="readmore-btn"
                      >
                        Lire plus
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

export default OurBlog;