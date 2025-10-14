"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

interface Article {
  id: number;
  title: string;
  picture: string;
  content: string;
  slug: string;
  created_at: string; // Champ utilisé pour trier par date
}

const OurBlog = () => {
  const { t } = useTranslation();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.doctagne.com/api/v1/public/articles")
      .then((res) => {
        const allArticles = res.data.articles || [];

        // ✅ Tri des articles du plus récent au plus ancien
        const sortedArticles = allArticles.sort(
          (a: Article, b: Article) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );

        // ✅ On garde uniquement les 3 plus récents
        const latestArticles = sortedArticles.slice(0, 3);

        setArticles(latestArticles);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des articles:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  // Fonction utilitaire pour les images
  const getImageUrl = (picture: string) => {
    if (!picture) return "";
    if (picture.startsWith("http")) return picture;
    return `https://api.doctagne.com/uploads/articles/${picture}`;
  };

  return (
    <div className="our-blog">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            <div className="section-title section-title-center">
              <h3 className="wow fadeInUp">{t("blog.sectionTitle")}</h3>
              <h2 className="text-anime-style-3" data-cursor="-opaque">
                {t("blog.mainTitle")}
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          {loading ? (
            <div className="col-12 text-center">
              <p>{t("blog.loading")}</p>
            </div>
          ) : articles.length === 0 ? (
            <div className="col-12 text-center">
              <p>{t("blog.noArticles")}</p>
            </div>
          ) : (
            articles.map((article, idx) => (
              <div key={article.id} className="col-lg-4 col-md-6">
                <div
                  className="post-item wow fadeInUp"
                  data-wow-delay={`${idx * 0.2}s`}
                >
                  <div className="post-featured-image">
                    <a
                      href={`/actualites/${article.slug}`}
                      data-cursor-text="View"
                    >
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
                        <a href={`/actualites/${article.slug}`}>
                          {article.title}
                        </a>
                      </h2>
                      {/* 🗓️ Optionnel : afficher la date de publication */}
                      <p className="text-muted small mt-2">
                        {new Date(article.created_at).toLocaleDateString("fr-FR", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                    <div className="post-item-btn">
                      <a
                        href={`/actualites/${article.slug}`}
                        className="readmore-btn"
                      >
                        {t("blog.readMore")}
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
