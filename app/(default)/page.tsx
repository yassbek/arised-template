export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Hero from "@/components/landing/hero-home";
import BusinessCategories from "@/components/business-categories";
import LargeTestimonial from "@/components/large-testimonial";
import FeaturesPlanet from "@/components/features-planet";
import Features from "@/components/features-home";
import TestimonialsCarousel from "@/components/landing/testimonials-carousel";
import LandingPage from "@/components/landing/landingpagethree";
import Cta from "@/components/cta";
import HeroSection from "@/components/herosection";

export default function Home() {
  return (
    <>
      <Hero />
      <LandingPage />
      <TestimonialsCarousel />
      <Cta />

      
    
      
    </>
  );
}
