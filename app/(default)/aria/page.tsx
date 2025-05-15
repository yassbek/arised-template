export const metadata = {
  title: "ArIA- Arised",
  description: "Page description",
};

import Hero from "./hero";
import WallOfLove from "@/components/wall-of-love";
import Cta from "@/components/cta-alternative";
import Header from "@/components/ui/header";
import FeaturesAria from "@/components/aria/features-aria";
import UseCaseSection from "@/components/aria/usecase_aria";
import HowItWorksSection from "@/components/aria/how-it-works-aria";
import WhoItsForSection from "@/components/aria/who_its_for_aria";

export default function Customers() {
  return (
    <>
      
      <Hero />
      <FeaturesAria />
      
      <HowItWorksSection />
      <UseCaseSection />
      <WhoItsForSection />
      
      
      <Cta
        heading="Automize your workflows with ArIA"
        buttonText="Get a Quote"
        buttonLink="/contact"
      />
    </>
  );
}
