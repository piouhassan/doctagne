import Layout from "@/components/layout/layout";
import PageHeader from '@/components/elements/PageHeader';
import ArticlesBlock from '@/components/elements/ArticlesBlock';
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Actualités Santé",
  description: "Restez informé avec les dernières actualités santé, conseils médicaux et informations importantes. Découvrez nos articles et publications pour mieux comprendre votre santé.",
  url: "/actualites",
  keywords: [
    "actualités santé",
    "news santé",
    "conseils médicaux",
    "blog santé",
    "informations santé",
    "articles médicaux",
    "actualités médicales",
  ],
});

export default function AboutPage() {
  return (
    <Layout>
      <PageHeader />
      <ArticlesBlock />
    </Layout>
  );
}