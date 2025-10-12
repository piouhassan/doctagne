
import Layout from '@/components/layout/layout';
import ServicesPageHeader from '@/components/elements/ServicesPageHeader';
import PageServices from '@/components/elements/PageServices';
import OurApproach from '@/components/elements/OurApproach';
import OurCare from '@/components/elements/OurCare';
import OurFeature from '@/components/elements/OurFeature';
import OurResults from '@/components/elements/OurResults';
import SocialMedia from '@/components/elements/SocialMedia';

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
