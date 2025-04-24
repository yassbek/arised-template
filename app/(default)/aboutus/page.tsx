export const metadata = {
    title: "About Us - Arised",
    description: "Page description",
  };
  
  import Hero from "./hero";
  import Cta from "@/components/cta-alternative";
  import EcosystemSection from "@/components/arised_ecosystem";
  import ValuesSection from "@/components/values";
  import OurStory from "@/components/our_story";
  
  export default function Home() {
    return (
      <>
        <Hero />
        <EcosystemSection />
        <ValuesSection />
        <OurStory />
        <Cta
            heading="Let's build something human together!"
            buttonText="Get a Quote"
            buttonLink="/contact"
        />      
      </>
    );
  }
  