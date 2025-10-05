

import Layout from '@/components/layout/layout';
import ContactPageHeader from '@/components/elements/ContactPageHeader';
import ContactInfoSection from '@/components/elements/ContactInfoSection';
import ContactFormSection from '@/components/elements/ContactFormSection';
import ContactMapSection from '@/components/elements/ContactMapSection';

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
