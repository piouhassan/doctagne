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
  category_id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

interface Category {
  id: number;
  name: string;
}

const ArticlesBlock: React.FC = () => {
  const { t } = useTranslation();
  const [allArticles, setAllArticles] = useState<Article[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const articlesPerPage = 12;

  const API_BASE = "https://api.doctagne.com/api/v1/public";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_BASE}/articles`);
        const data = res.data.articles || [];

        const sortedData = data.sort(
          (a: Article, b: Article) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );

        setAllArticles(sortedData);
        setFilteredArticles(sortedData);

        const uniqueCategories = Array.from(
          new Map(
            data.map((article: Article) => [
              article.category_id,
              { id: article.category_id, name: article.name },
            ])
          ).values()
        ) as Category[];

        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Erreur lors du chargement des articles :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let filtered = allArticles;

    if (searchTerm) {
      filtered = filtered.filter((article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== null) {
      filtered = filtered.filter(
        (article) => article.category_id === selectedCategory
      );
    }

    setFilteredArticles(filtered);
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, allArticles]);

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div
        className="text-center my-5"
        style={{ color: "black", fontSize: "18px", fontWeight: 500 }}
      >
        <p>{t("articles.loading")}</p>
      </div>
    );
  }

  return (
    <div className="page-blog container">
      <div className="section-title text-center">
        <h3 className="wow fadeInUp">{t("articles.title")}</h3>
      </div>

      <div className="articles-layout">
        {/* Bloc principal gauche */}
        <div className="articles-main">
          {/* Barre de recherche et filtre */}
          <div className="row mb-4">
            <div className="col-lg-8 col-md-6 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder={t("articles.searchPlaceholder")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  padding: "12px 20px",
                  fontSize: "16px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                }}
              />
            </div>

            <div className="col-lg-4 col-md-6 mb-3">
              <select
                className="form-control"
                value={selectedCategory || ""}
                onChange={(e) =>
                  setSelectedCategory(
                    e.target.value ? Number(e.target.value) : null
                  )
                }
                style={{
                  padding: "12px 20px",
                  fontSize: "16px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                }}
              >
                <option value="">{t("articles.allCategories")}</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Résultat */}
          <p style={{ color: "#000", fontSize: "14px" }}>
            {t("articles.found", { count: filteredArticles.length })}
          </p>

          {/* Liste des articles */}
          <div className="row">
            {currentArticles.length === 0 ? (
              <div className="col-12 text-center">
                <p style={{ fontSize: "16px", color: "#000", padding: "40px 0" }}>
                  {t("articles.noResult")}
                </p>
              </div>
            ) : (
              currentArticles.map((article, idx) => (
                <div className="col-lg-4 col-md-6" key={article.id}>
                  <div
                    className="post-item wow fadeInUp"
                    data-wow-delay={`${idx * 0.2}s`}
                  >
                    <div className="post-featured-image">
                      <a href={`/actualites/${article.slug}`}>
                        <figure className="image-anime">
                          <img
                            src={`https://api.doctagne.com/uploads/articles/${article.picture}`}
                            alt={article.title}
                          />
                        </figure>
                      </a>
                    </div>
                    <div className="post-item-body">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: "10px",
                          fontSize: "13px",
                          color: "#000",
                        }}
                      >
                        <span
                          style={{
                            backgroundColor: "#f897978c",
                            padding: "4px 12px",
                            borderRadius: "4px",
                            fontWeight: "500",
                          }}
                        >
                          {article.name}
                        </span>
                        <span>{formatDate(article.created_at)}</span>
                      </div>

                      <div className="post-item-content">
                        <h2>
                          <a href={`/actualites/${article.slug}`}>
                            {article.title}
                          </a>
                        </h2>
                      </div>

                      <div className="post-item-btn">
                        <a
                          href={`/actualites/${article.slug}`}
                          className="readmore-btn"
                        >
                          {t("articles.readMore")}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="page-pagination wow fadeInUp text-center mt-4">
              <ul className="pagination justify-content-center">
                <li>
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    <i className="fa-solid fa-angle-left"></i>
                  </button>
                </li>

                {Array.from({ length: totalPages }, (_, i) => (
                  <li
                    key={i + 1}
                    className={currentPage === i + 1 ? "active" : ""}
                  >
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(i + 1)}
                    >
                      {i + 1}
                    </button>
                  </li>
                ))}

                <li>
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    <i className="fa-solid fa-angle-right"></i>
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="articles-sidebar">
          <h4>{t("articles.categories")}</h4>
          <ul>
            <li
              className={selectedCategory === null ? "active" : ""}
              onClick={() => setSelectedCategory(null)}
            >
              {t("articles.allCategories")}
            </li>
            {categories.map((cat) => (
              <li
                key={cat.id}
                className={selectedCategory === cat.id ? "active" : ""}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.name}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default ArticlesBlock;
