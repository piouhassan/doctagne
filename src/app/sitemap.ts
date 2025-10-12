import { MetadataRoute } from 'next';
import axios from 'axios';
import { API_BASE } from '@/lib/utils';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://doctagne.com';

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/actualites`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pharmacie-de-garde`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ];

  // Récupérer les articles dynamiques
  let articles: MetadataRoute.Sitemap = [];
  try {
    const res = await axios.get(`${API_BASE}public/articles`);
    const articlesData = res.data.articles || res.data.data || [];

    articles = articlesData.map((article: any) => ({
      url: `${baseUrl}/actualites/${article.slug}`,
      lastModified: new Date(article.created_at || article.updated_at),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));
  } catch (error) {
    console.error('Erreur lors de la récupération des articles pour le sitemap:', error);
  }

  // const pharmacies: MetadataRoute.Sitemap = [
  //   {
  //     url: `${baseUrl}/pharmacie-de-garde/pharmacie-centrale`,
  //     lastModified: new Date(),
  //     changeFrequency: 'daily',
  //     priority: 0.8,
  //   },
  //   {
  //     url: `${baseUrl}/pharmacie-de-garde/pharmacie-du-marche`,
  //     lastModified: new Date(),
  //     changeFrequency: 'daily',
  //     priority: 0.8,
  //   },
  //   {
  //     url: `${baseUrl}/pharmacie-de-garde/pharmacie-de-la-paix`,
  //     lastModified: new Date(),
  //     changeFrequency: 'daily',
  //     priority: 0.8,
  //   },
  // ];

  return [...staticPages, ...articles];
}
