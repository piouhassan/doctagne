import Layout from '@/components/layout/layout';
import ServicesPageHeader from '@/components/elements/ServicesPageHeader';
import PageServices from '@/components/elements/PageServices';
import OurApproach from '@/components/elements/OurApproach';
import OurCare from '@/components/elements/OurCare';
import OurFeature from '@/components/elements/OurFeature';
import OurResults from '@/components/elements/OurResults';
import SocialMedia from '@/components/elements/SocialMedia';
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Nos Services Médicaux",
  description: "Découvrez notre gamme complète de services médicaux : consultations, soins spécialisés, programmes de santé personnalisés et accompagnement médical. Des soins de qualité adaptés à vos besoins.",
  url: "/services",
  keywords: [
    "services médicaux",
    "consultations médicales",
    "soins de santé",
    "programmes santé",
    "accompagnement médical",
    "soins spécialisés",
    "services santé",
  ],
});

export default function ServicesPage() {
	return (
		<Layout>
			<ServicesPageHeader />
			<PageServices />
			<OurApproach />
      		<OurCare />
      		<OurResults />
			<SocialMedia />
		</Layout>
	);
}
