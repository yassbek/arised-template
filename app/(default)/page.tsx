export const metadata = {
  title: "Home - Arised",
  description: "Page description",
};

import Hero from "@/components/landing/hero-home";
import TestimonialsCarousel from "@/components/landing/testimonials-carousel";
import LandingPage from "@/components/landing/landingpagethree";
import Cta from "@/components/cta";
import AriaCard from "@/components/landing/aria-card";
import ProductsSection from "@/components/landing/products";
import AcademyCard from "@/components/landing/academy-card";
import NoorCard from "@/components/landing/noor-card";
import CTA2 from "@/components/cta-alternative";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductsSection />
      <AriaCard />
      <AcademyCard />
      <NoorCard />
      <TestimonialsCarousel />
      <LandingPage /> 
      <CTA2
            heading="Let's build something human together!"
            buttonText="Get a Quote"
            buttonLink="/contact"
        />      

      
    
      
    </>
  );
}
