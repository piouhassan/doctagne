"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { API_BASE } from "@/lib/utils";
import { useTranslation } from "react-i18next";

interface Article {
  id: number;
  title: string;
  title_en?: string;
  title_fr?: string;
  picture: string;
  content: string;
  content_en?: string;
  content_fr?: string;
  slug: string;
  category_id: number;
  name: string;
  name_en?: string;
  name_fr?: string;
  created_at: string;
}

const SingleBlog: React.FC = () => {
  const { t, i18n } = useTranslation();
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;

  const [article, setArticle] = useState<Article | null>(null);
  const [nextArticle, setNextArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  // Fonction pour obtenir le champ traduit
  const getTranslatedField = (item: Article | null, field: keyof Article): string => {
    if (!item) return "";
    
    const lang = i18n.language;
    const translatedKey = `${field}_${lang}` as keyof Article;
    
    // Si le champ traduit existe, le retourner
    if (item[translatedKey]) {
      return item[translatedKey] as string;
    }
    
    // Sinon retourner le champ par défaut
    return item[field] as string;
  };

  // Charger les articles selon la langue courante
  useEffect(() => {
    if (!slug) return;

    const fetchArticle = async () => {
      setLoading(true);
      try {
        let res;
        
        // Essayer différentes méthodes pour récupérer les articles traduits
        try {
          // Méthode 1 : paramètre lang dans l'URL
          res = await axios.get(`${API_BASE}public/articles`, {
            params: { lang: i18n.language }
          });
        } catch (error) {
          try {
            // Méthode 2 : paramètre locale
            res = await axios.get(`${API_BASE}public/articles`, {
              params: { locale: i18n.language }
            });
          } catch (error2) {
            try {
              // Méthode 3 : header Accept-Language
              res = await axios.get(`${API_BASE}public/articles`, {
                headers: { 'Accept-Language': i18n.language }
              });
            } catch (error3) {
              // Méthode 4 : sans paramètre (utiliser les champs multilingues)
              res = await axios.get(`${API_BASE}public/articles`);
            }
          }
        }

        const articles = res.data.articles || res.data.data || [];

        const currentArticle = articles.find((a: Article) => a.slug === slug);
        setArticle(currentArticle || null);

        if (currentArticle) {
          const currentIndex = articles.findIndex((a: Article) => a.id === currentArticle.id);
          const next = articles[currentIndex + 1] || articles[0];
          setNextArticle(next);
        }
      } catch (error) {
        console.error("Erreur lors du chargement de l'article :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug, i18n.language]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const locale = i18n.language === "en" ? "en-US" : "fr-FR";
    return date.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const goToNextArticle = () => {
    if (nextArticle) {
      router.push(`/actualites/${nextArticle.slug}`);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-5" style={{ color: "black" }}>
        <p>{t("single-blog.loading")}</p>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="text-center my-5 py-5">
        <h2>{t("single-blog.notFound")}</h2>
        <a href="/actualites" className="btn btn-primary mt-3">
          {t("single-blog.backToArticles")}
        </a>
      </div>
    );
  }

  return (
    <>
      <div
        className="page-header bg-section parallaxie"
        style={{
          backgroundImage: `url('https://api.doctagne.com/uploads/articles/${article.picture}')`,
          padding: "230px",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="text-anime-style-3" data-cursor="-opaque">
                  {getTranslatedField(article, 'title')}
                </h1>
                <div className="post-single-meta wow fadeInUp">
                  <ol className="breadcrumb">
                    <li>
                      <i className="fa-regular fa-bookmark"></i> {getTranslatedField(article, 'name')}
                    </li>
                    <li>
                      <i className="fa-regular fa-clock"></i> {formatDate(article.created_at)}
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-single-post">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="post-content">
                <div
                  className="post-entry wow fadeInUp"
                  dangerouslySetInnerHTML={{ __html: getTranslatedField(article, 'content') }}
                />

                <div className="post-tag-links">
                  <div className="row align-items-center">
                    <div className="col-lg-8">
                      {nextArticle && (
                        <div className="next-article-btn wow fadeInUp" data-wow-delay="0.5s">
                          <a
                            onClick={goToNextArticle}
                            className="btn btn-primary"
                            style={{ cursor: "pointer" }}
                          >
                            {t("single-blog.nextArticle")}
                          </a>
                          <p className="mt-2">{getTranslatedField(nextArticle, 'title')}</p>
                        </div>
                      )}
                    </div>
                    <div className="col-lg-4">
                      <div className="post-social-sharing wow fadeInUp" data-wow-delay="0.5s">
                        <ul className="socialMediaList">
                          <li>
                            <a href="https://www.facebook.com/Doctagne/" target="_blank" rel="noopener noreferrer">
                              <i className="fa-brands fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.linkedin.com/doctagne" target="_blank" rel="noopener noreferrer">
                              <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://x.com/doctagne" target="_blank" rel="noopener noreferrer">
                              <i className="fa-brands fa-x-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://api.whatsapp.com/send?phone=14709540621" target="_blank" rel="noopener noreferrer">
                              <i className="fa-brands fa-whatsapp"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-4">
                  <a href="/actualites" className="btn btn-light">
                    <i className="fa-solid fa-arrow-left me-2"></i>{" "}
                    {t("single-blog.backToArticles")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;