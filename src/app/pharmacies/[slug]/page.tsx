import { notFound } from 'next/navigation';
import { generateSEO, generatePharmacySchema } from '@/lib/seo';
import { pharmaciesData } from '@/lib/data';
import PharmacyClientPage from "@/components/elements/PharmacyClientPage";

// Fonction pour générer un slug à partir d'un nom
function generateSlug(nom: string): string {
  return nom
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Fonction pour récupérer les données de la pharmacie
async function getPharmacieData(slug: string) {
  const pharmacie = pharmaciesData.find(p => generateSlug(p.nom) === slug);
  return pharmacie || null;
}

// Génération des métadonnées statiques
export async function generateStaticParams() {
  return pharmaciesData.map((pharmacie) => ({
    slug: generateSlug(pharmacie.nom),
  }));
}

// Fonction pour générer les métadonnées (pour le SEO)
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pharmacie = await getPharmacieData(slug);
  
  if (!pharmacie) {
    return { 
      title: 'Pharmacie non trouvée',
    };
  }

  return generateSEO({
    title: `${pharmacie.nom} - Pharmacie`,
    description: `${pharmacie.nom} située à ${pharmacie.adresse}, ${pharmacie.ville}, ${pharmacie.pays}. Contact: ${pharmacie.contact_1}. Services pharmaceutiques disponibles.`,
    url: `/pharmacie-de-garde/${slug}`,
    image: '/images/case-study-10.jpg',
    keywords: [
      "pharmacie",
      pharmacie.nom,
      pharmacie.ville,
      pharmacie.pays,
      "médicaments",
      "pharmacie ouverte",
    ],
  });
}

export default async function PharmacieDeGardeSinglePage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const pharmacie = await getPharmacieData(slug);
  
  if (!pharmacie) {
    return notFound();
  }

  // Générer le schéma JSON-LD pour la pharmacie
  const pharmacySchema = generatePharmacySchema({
    name: pharmacie.nom,
    description: `Pharmacie située à ${pharmacie.ville}, ${pharmacie.pays}`,
    image: '/images/case-study-10.jpg',
    address: `${pharmacie.adresse}, ${pharmacie.ville}, ${pharmacie.pays}`,
    phone: pharmacie.contact_1,
    openingHours: pharmacie.pays,
    url: `/pharmacie-de-garde/${slug}`,
  });

  return <PharmacyClientPage pharmacie={pharmacie} slug={slug} pharmacySchema={pharmacySchema} />;
}