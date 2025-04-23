export const metadata = {
  title: "Customers - Simple",
  description: "Page description",
};

import Hero from "./hero";
import WallOfLove from "@/components/wall-of-love";
import Cta from "@/components/cta-alternative";
import Header from "@/components/ui/header";
import FeaturesAria from "@/components/features-aria";
import UseCaseSection from "@/components/usecase";
import HowItWorksSection from "@/components/howitworks";
import WhoItsForSection from "@/components/whoitsfor";

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
