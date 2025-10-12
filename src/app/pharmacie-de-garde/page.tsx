
import Layout from '@/components/layout/layout';
import PharmaciePageHeader from '@/components/elements/PharmaciePageHeader';
import PharmacieCaseStudy from '@/components/elements/PharmacieCaseStudy';
import SocialMedia from '@/components/elements/SocialMedia';

export default function PharmacieDeGardePage() {
	return (
		<Layout>
			<PharmaciePageHeader />
			<PharmacieCaseStudy />
			<SocialMedia />
		</Layout>
	);
}
