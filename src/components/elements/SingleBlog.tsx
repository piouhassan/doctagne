"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import {API_BASE} from "@/lib/utils";

interface Article {
  id: number;
  title: string;
  picture: string;
  content: string;
  slug: string;
  category_id: number;
  name: string;
  created_at: string;
}

const SingleBlog: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;

  const [article, setArticle] = useState<Article | null>(null);
  const [nextArticle, setNextArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    if (!slug) return;

    const fetchArticle = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${API_BASE}public/articles`);
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
  }, [slug]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
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
        <p>Chargement de l&#39;article...</p>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="text-center my-5 py-5">
        <h2>Article introuvable</h2>
        <a href="/actualites" className="btn btn-primary mt-3">
          Retour aux articles
        </a>
      </div>
    );
  }

  return (
    <>
      <div className="page-header bg-section parallaxie" style={{backgroundImage:`url('https://api.doctagne.com/uploads/articles/${article.picture}')`, padding : "230px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="text-anime-style-3" data-cursor="-opaque">
                  {article.title}
                </h1>
                <div className="post-single-meta wow fadeInUp">
                  <ol className="breadcrumb">
                    <li>
                      <i className="fa-regular fa-bookmark"></i> {article.name}
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
              <div className="post-image">
                <figure>
                  {/* <img
                    src={`https://api.doctagne.com/uploads/articles/${article.picture}`}
                    alt={article.title}
                  /> */}
                </figure>
              </div>

              <div className="post-content">
                <div
                  className="post-entry wow fadeInUp"
                  dangerouslySetInnerHTML={{ __html: article.content }}
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
                            Article suivant 
                          </a>
                          <p className="mt-2">{nextArticle.title}</p>
                        </div>
                      )}
                    </div>
                    <div className="col-lg-4">
                      <div className="post-social-sharing wow fadeInUp" data-wow-delay="0.5s">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-x-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
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
                    <i className="fa-solid fa-arrow-left me-2"></i> Retour aux articles
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
