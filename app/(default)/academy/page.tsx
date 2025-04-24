"use client";


import { useRef } from "react";
import Hero from "./hero";
import Cta from "@/components/cta-alternative";
import WhatItDoesSection from "@/components/what_it_does_academy";
import WhoItsForSection from "@/components/who_its_for_academy";
import HowItWorksSection from "@/components/how-it-works-academy";
import StartingPointSection from "@/components/starting_point_academy";
import BenefitsComparisonSection from "@/components/benefits_academy";
import FeaturesSection from "@/components/features_academy";

export default function Apps() {
  const howItWorksRef = useRef<HTMLDivElement | null>(null);

  const scrollToHowItWorks = () => {
    howItWorksRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      
      <Hero />
      <WhatItDoesSection />
      <WhoItsForSection />
      <StartingPointSection onScrollToHowItWorks={scrollToHowItWorks} />
      <div ref={howItWorksRef}>
        <HowItWorksSection />
      </div>
      <BenefitsComparisonSection />
      <FeaturesSection />
      <Cta
        heading="Create your next project with Arised"
        buttonText="Get a Quote"
        buttonLink="/contact"
      />
    </>
  );
}
