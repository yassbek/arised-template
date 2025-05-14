// LandingPage.jsx (or your specific filename)
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const LandingPage = () => {
  const [activePanel, setActivePanel] = useState<string | null>(null);
  const router = useRouter();

  const products = [
    {
      id: "aria",
      title: "Aria",
      subtitle: "Automate the Old",
      description: "Powerful automation tools to streamline your workflow and boost productivity.",
      image: "/images/aria-mock.png",
      route: "/aria",
      color: "from-[#60A5FA] to-[#2563EB]", // Light Primary Blue to Primary Blue
      accent: "bg-[#2563EB]",             // Solid Primary Blue
    },
    {
      id: "academy",
      title: "Arised Academy",
      subtitle: "Empower the Present",
      description: "tailor made role play training for your team using the latest in voice agents and simulation technology.",
      image: "/images/voice-simulation.png",
      route: "/academy",
      color: "from-[#99F6E4] to-[#14B8A6]", // Light Accent Teal to Accent Teal
      accent: "bg-[#14B8A6]",             // Solid Accent Teal
    },
    {
      id: "noor",
      title: "Project Noor",
      subtitle: "Education for Everyone",
      description: "Making quality education accessible to communities around the world.",
      image: "/images/noor-screenshot.png",
      route: "https://www.project-noor.eu",
      color: "from-[#60A5FA] to-[#2563EB]", // Primary Blue gradient
      accent: "bg-[#2563EB]",             // Solid Primary Blue
    },
  ];

  const handleClick = (route: string) => {
    if (route.startsWith("http")) {
      window.location.href = route;
    } else {
      router.push(route);
    }
  };

  return (
    // Main Background: Starts Neutral Background Light (#F9FAFB), fades to White (#FFFFFF)
    <div className="min-h-screen bg-gradient-to-b from-[#F9FAFB] to-[#FFFFFF]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Blob 1: Very Light Primary Blue */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#EFF6FF] rounded-full opacity-50 blur-3xl"></div>
        {/* Blob 2: Very Light Accent Teal */}
        <div className="absolute top-1/3 -left-24 w-80 h-80 bg-[#F0FDFA] rounded-full opacity-50 blur-3xl"></div>
        {/* Blob 3: Very Light Accent Teal (or Primary Blue for variety) */}
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#F0FDFA] rounded-full opacity-50 blur-3xl"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10">
        {/* Hero section */}
        <div className="px-4 py-16 md:py-24 text-center">
          {/* Heading: Neutral Text, with gradient for "Innovations" */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-[#1F2937]">
            Discover Our
            {/* Gradient for "Innovations": Primary Blue to Accent Teal */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#14B8A6] ml-3">
              Innovations
            </span>
          </h1>
          {/* Subheading: Neutral Text Secondary */}
          <p className="text-xl md:text-2xl text-[#6B7280] max-w-3xl mx-auto">
            Explore our suite of cutting-edge products designed to transform your experience
          </p>
        </div>

        {/* Products section */}
        <div className="max-w-7xl mx-auto px-4 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className={`
                  relative overflow-hidden rounded-2xl group cursor-pointer
                  transition-all duration-500 ease-out bg-[#FFFFFF] 
                  ${activePanel === product.id ? "scale-[1.03] z-10 shadow-xl" : "scale-100 z-0 shadow-md"}
                  ${activePanel && activePanel !== product.id ? "opacity-90 saturate-75" : "opacity-100 saturate-100"}
                  hover:shadow-2xl
                `}
                onMouseEnter={() => setActivePanel(product.id)}
                onMouseLeave={() => setActivePanel(null)}
                onClick={() => handleClick(product.route)}
              >
                {/* Top accent bar: Uses updated product.accent (Solid Primary Blue or Accent Teal) */}
                <div className={`h-1.5 w-full ${product.accent}`}></div>

                {/* Background image container */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"} // Ensure image paths are correct
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    priority={products.indexOf(product) < 3} // Prioritize loading for first few images
                  />
                  {/* Gradient overlay on hover: Uses updated product.color */}
                  <div
                    className={`
                      absolute inset-0 opacity-0 group-hover:opacity-90
                      bg-gradient-to-t ${product.color}
                      transition-opacity duration-500 ease-out
                    `}
                  />
                  {/* Hover title: White text */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h3 className="text-[#FFFFFF] text-2xl md:text-3xl font-bold tracking-tight">{product.title}</h3>
                  </div>
                </div>

                {/* Content below image */}
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    {/* Icon background circle: Uses updated product.accent, text-white for icon */}
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${product.accent} text-[#FFFFFF]`}
                    >
                      {product.id === "aria" ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      ) : product.id === "academy" ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                          {/* Original academy icon had duplicated paths, simplified to one set */}
                        </svg>
                      ) : ( // Noor icon
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      )}
                    </div>
                    <div className="ml-3">
                      {/* Product Title (in card content): Neutral Text */}
                      <h3 className="font-semibold text-lg text-[#1F2937]">{product.title}</h3>
                      {/* Product Subtitle: Neutral Text Secondary */}
                      <p className="text-sm text-[#6B7280]">{product.subtitle}</p>
                    </div>
                  </div>
                  {/* Product Description: Neutral Text Secondary */}
                  <p className="text-[#6B7280] mb-6 text-sm">{product.description}</p> {/* Made text-sm consistent */}

                  {/* Explore Link: Uses updated product.color for gradient text */}
                  <div
                    className={`
                      flex items-center text-sm font-medium
                      text-transparent bg-clip-text bg-gradient-to-r ${product.color}
                      group-hover:translate-x-1 transition-transform duration-300
                    `}
                  >
                    <span>Explore {product.title}</span>
                    <ArrowRight className="ml-2 h-4 w-4" /> {/* Arrow will inherit gradient text color */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;