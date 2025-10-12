import Image from "next/image";
import Preloader from '@/components/contents/Preloader';
import Header from '@/components/layout/Header';
import Hero from '@/components/elements/Hero';
import AboutUs from '@/components/elements/AboutUs';
import WhatWeDo from '@/components/elements/WhatWeDo';
import Features from '@/components/elements/Features';
import WhyChooseUs from '@/components/elements/WhyChooseUs';
import Layout from "@/components/layout/layout";
import OurServices from "@/components/elements/OurServices";
import HowItWork from "@/components/elements/HowItWork";
import OurPrograms from "@/components/elements/OurPrograms";
import CtaBox from "@/components/elements/CtaBox";
import OurFaqs from "@/components/elements/OurFaqs";
import OurTestimonials from "@/components/elements/OurTestimonials";
import OurBlog from "@/components/elements/OurBlog";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Accueil - Plateforme de santé et services médicaux",
  description: "Doctagne - Votre plateforme complète de santé. Trouvez rapidement des pharmacies de garde, consultez nos services médicaux de qualité et restez informé des dernières actualités santé.",
  url: "/",
  keywords: [
    "pharmacie de garde",
    "services médicaux",
    "santé",
    "urgences médicales",
    "actualités santé",
    "plateforme santé",
    "soins médicaux",
    "consultations médicales",
  ],
});

export default function HomePage() {
  return (
    <Layout>
      {/* <Preloader /> */}
      <Hero />
      <AboutUs />
      <OurServices />
      <WhyChooseUs />
      <Features />
      <WhatWeDo />
      <HowItWork />
      <OurPrograms />
      <CtaBox />
      <OurFaqs />
      <OurTestimonials />
      <OurBlog />
    </Layout>
  );
};
