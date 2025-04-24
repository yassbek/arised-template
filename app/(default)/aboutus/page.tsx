export const metadata = {
    title: "Home - Simple",
    description: "Page description",
  };
  
  import Hero from "./hero";
  import Cta from "@/components/cta-alternative";
  import EcosystemSection from "@/components/arised_ecosystem";
  import ValuesSection from "@/components/values";
  import AppList from "@/components/app-list";
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
            buttonLink="#0"
        />
  
        
      
        
      </>
    );
  }
  