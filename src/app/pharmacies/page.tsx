import Layout from '@/components/layout/layout';
import PharmaciePageHeader from '@/components/elements/PharmaciePageHeader';
import PharmacieCaseStudy from '@/components/elements/PharmacieCaseStudy';
import SocialMedia from '@/components/elements/SocialMedia';
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Pharmacies de Garde",
  description: "Trouvez rapidement la pharmacie de garde la plus proche de chez vous. Liste complète des pharmacies ouvertes la nuit, le dimanche et les jours fériés avec horaires et coordonnées.",
  url: "/pharmacie-de-garde",
  keywords: [
    "pharmacie de garde",
    "pharmacie ouverte",
    "pharmacie nuit",
    "pharmacie dimanche",
    "pharmacie urgence",
    "garde pharmaceutique",
    "pharmacie 24h",
    "pharmacie weekend",
  ],
});

export default function PharmacieDeGardePage() {
	return (
		<Layout>
			<PharmaciePageHeader />
			<PharmacieCaseStudy />
			<SocialMedia />
		</Layout>
	);
}
