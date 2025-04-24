export const metadata = {
  title: "Customers - Simple",
  description: "Page description",
};

import Hero from "./hero";
import WallOfLove from "@/components/wall-of-love";
import Cta from "@/components/cta-alternative";
import Header from "@/components/ui/header";
import FeaturesAria from "@/components/features-aria";
import UseCaseSection from "@/components/usecase_aria";
import HowItWorksSection from "@/components/how-it-works-aria";
import WhoItsForSection from "@/components/who_its_for_aria";

export default function Customers() {
  return (
    <>
      <Header />
      <Hero />
      <FeaturesAria />
      <UseCaseSection />
      <HowItWorksSection />
      <WhoItsForSection />
      
      
      <Cta
        heading="Automize your workflows with ArIA"
        buttonText="Get a Quote"
        buttonLink="#0"
      />
    </>
  );
}
