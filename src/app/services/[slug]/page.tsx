import React from 'react';
import { generateSEO } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return generateSEO({
    title: `Service - ${slug.replace(/-/g, ' ')}`,
    description: `Découvrez notre service médical spécialisé. Doctagne vous propose des soins de qualité adaptés à vos besoins de santé.`,
    url: `/services/${slug}`,
    keywords: [
      "service médical",
      "soins spécialisés",
      slug.replace(/-/g, ' '),
      "consultation",
      "santé",
    ],
  });
}

const Page = () => {
    return (
        <div>
           Detail
        </div>
    );
};

export default Page;