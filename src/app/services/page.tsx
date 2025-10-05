
import Layout from '@/components/layout/layout';
import ServicesPageHeader from '@/components/elements/ServicesPageHeader';
import PageServices from '@/components/elements/PageServices';
import CtaBox from '@/components/elements/CtaBox';
import WhatWeDo from '@/components/elements/WhatWeDo';
import OurTestimonials from '@/components/elements/OurTestimonials';
import OurFaqs from '@/components/elements/OurFaqs';

export default function ServicesPage() {
	return (
		<Layout>
			<ServicesPageHeader />
			<PageServices />
			<CtaBox />
			<WhatWeDo />
			<OurTestimonials />
			<OurFaqs />
		</Layout>
	);
}
