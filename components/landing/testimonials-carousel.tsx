// components/PartnersCarousel.jsx
import React from "react";
import Image, { StaticImageData } from "next/image"; // Import StaticImageData

// Assuming these paths are correct and images are available
import PartnerLogo01 from "@/public/images/partner-logo-1.png";
import PartnerLogo02 from "@/public/images/partner-logo-2.png";
import PartnerLogo03 from "@/public/images/partner-logo-3.png";
import PartnerLogo04 from "@/public/images/partner-logo-4.jpg";
import PartnerLogo05 from "@/public/images/partner-logo-5.png";
import PartnerLogo06 from "@/public/images/partner-logo-6.png";
import PartnerLogo07 from "@/public/images/partner-logo-7.jpeg";
import PartnerLogo08 from "@/public/images/partner-logo-8.jpeg";
import PartnerLogo09 from "@/public/images/partner-logo-9.png";
import PartnerLogo10 from "@/public/images/partner-logo-10.jpg";

// Define an interface for the partner object
interface Partner {
  src: StaticImageData;
  alt: string;
  name: string;
}

export default function PartnersCarousel() {
  const partners: Partner[] = [ // Typed the array
    { src: PartnerLogo01, alt: "Malteser International", name: "Malteser" },
    { src: PartnerLogo02, alt: "Ministry of Education Sierra Leone", name: "Ministry of Education Sierra Leone" },
    { src: PartnerLogo03, alt: "Toolkit Fundation", name: "Toolkit Fundation" },
    { src: PartnerLogo04, alt: "Moroccan Embassy in Addis Ababa", name: "Moroccan Embassy in Addis Ababa" },
    { src: PartnerLogo05, alt: "Red Cross", name: "Red Cross" },
    { src: PartnerLogo06, alt: "Eutelsat", name: "eutelsat" },
    { src: PartnerLogo07, alt: "Inverto", name: "Inverto" },
    { src: PartnerLogo08, alt: "Cedus", name: "Cedus" },
    { src: PartnerLogo09, alt: "African Union", name: "African Union" },
    { src: PartnerLogo10, alt: "k67", name: "k67" },
  ];

  // Typed the parameters for renderPartnerDiv
  const renderPartnerDiv = (partner: Partner, keySuffix: string = "") => (
    <div key={partner.name + keySuffix} className="w-[22rem] transition-transform duration-300 group-hover:rotate-0 flex flex-col items-center">
      <div className="w-32 h-32 relative">
        <Image src={partner.src} alt={partner.alt} fill className="object-contain" />
      </div>
      <span className="mt-4 text-lg font-medium text-[#1F2937] text-center">{partner.name}</span>
    </div>
  );

  return (
    <section className="relative overflow-hidden bg-[#F9FAFB]">
      <div className="pt-12 md:pt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl text-[#1F2937]">
              Our Business Partners &amp; Collaborators
            </h2>
          </div>
        </div>
        <div className="relative mx-auto flex max-w-[94rem] justify-center">
          <div className="absolute bottom-20 -z-10 -translate-x-36" aria-hidden="true">
            <div className="h-80 w-80 rounded-full bg-gradient-to-tr from-[#EFF6FF]/[.15] to-[#F9FAFB]/[.15] opacity-80 blur-[140px] will-change-[filter]" />
          </div>
          <div className="absolute -bottom-10 -z-10" aria-hidden="true">
            <div className="h-80 w-80 rounded-full bg-[#EFF6FF]/[.15] opacity-80 blur-[140px] will-change-[filter]" />
          </div>
          <div className="absolute bottom-0 -z-10" aria-hidden="true">
            <div className="h-56 w-56 rounded-full border-[20px] border-[#FFFFFF]/[.50] blur-[20px] will-change-[filter]" />
          </div>

          <div className="group inline-flex w-full flex-nowrap py-12 [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)] md:py-20">
            <div className="flex animate-[infinite-scroll_60s_linear_infinite] items-start justify-center group-hover:[animation-play-state:paused] md:justify-start gap-x-4">
              {partners.map((partner) => renderPartnerDiv(partner, "-main"))}
            </div>

            <div
              className="flex animate-[infinite-scroll_60s_linear_infinite] items-start justify-center group-hover:[animation-play-state:paused] md:justify-start gap-x-4"
              aria-hidden="true"
            >
              {partners.map((partner) => renderPartnerDiv(partner, "-duplicate"))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}