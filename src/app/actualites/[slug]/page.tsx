import Layout from "@/components/layout/layout";
import SingleBlog from "@/components/elements/SingleBlog";
import { generateSEO } from "@/lib/seo";
import axios from "axios";
import { API_BASE } from "@/lib/utils";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  try {
    // Tenter de récupérer les données de l'article pour un SEO optimal
    const res = await axios.get(`${API_BASE}public/articles`);
    const articles = res.data.articles || res.data.data || [];
    const article = articles.find((a: any) => a.slug === slug);

    if (article) {
      return generateSEO({
        title: article.title,
        description: article.content.replace(/<[^>]*>/g, '').substring(0, 160),
        url: `/actualites/${slug}`,
        image: `https://api.doctagne.com/uploads/articles/${article.picture}`,
        keywords: [
          "actualité santé",
          article.name,
          article.title,
          "news santé",
          "article médical",
        ],
        type: 'article',
        publishedTime: article.created_at,
      });
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des métadonnées de l\'article:', error);
  }

  // Métadonnées par défaut si l'article n'est pas trouvé
  return generateSEO({
    title: `Article - ${slug.replace(/-/g, ' ')}`,
    description: "Découvrez cet article sur la santé et le bien-être. Restez informé avec Doctagne.",
    url: `/actualites/${slug}`,
    keywords: ["actualité santé", "article santé", slug.replace(/-/g, ' ')],
    type: 'article',
  });
}

export default function AboutPage() {
  return (
    <Layout>
        <SingleBlog />
    </Layout>
  );
}