import Layout from '@/components/layout/layout';
import ContactPageHeader from '@/components/elements/ContactPageHeader';
import ContactInfoSection from '@/components/elements/ContactInfoSection';
import ContactFormSection from '@/components/elements/ContactFormSection';
import ContactMapSection from '@/components/elements/ContactMapSection';
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Contactez-nous",
  description: "Besoin d'aide ou de renseignements ? Contactez l'équipe Doctagne. Nous sommes à votre écoute pour répondre à toutes vos questions sur nos services médicaux et pharmacies de garde.",
  url: "/contact",
  keywords: [
    "contact doctagne",
    "nous contacter",
    "service client",
    "assistance médicale",
    "renseignements santé",
    "support client",
  ],
});

export default function ContactPage() {
	return (
		<Layout>
			<ContactPageHeader />
			<div className="page-contact-us">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<ContactInfoSection />
						</div>
						<div className="col-lg-6">
							<ContactFormSection />
						</div>
						<div className="col-lg-12">
							<ContactMapSection />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
