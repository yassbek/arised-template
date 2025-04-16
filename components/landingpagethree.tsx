"use client";
import { useState } from "react";
import Image from "next/image";

// Import images from public folder.
import leftImage from "@/public/images/automation.png";
import middleImage from "@/public/images/IMG_7888.jpg";
import rightImage from "@/public/images/IMG_8039.jpg";

const LandingPage: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  const handleMouseEnter = (panel: string) => setHovered(panel);
  const handleMouseLeave = () => setHovered(null);

  // Base classes without any rounded corners.
  const baseClasses =
    "flex-1 relative flex items-center justify-center transition-all duration-300 cursor-pointer text-xl font-semibold";

  // Update getPanelClass:
  // - When no panel is hovered: show a gray border with white text.
  // - When the current panel is hovered, add rounded corners and overflow-hidden,
  //   along with a blue border, scaling, and shadow.
  // - Inactive panels (when one is hovered) get filters and remain square.
  const getPanelClass = (panel: string) => {
    if (hovered === null) {
      return `${baseClasses} border border-gray-300 text-white z-10`;
    }
    if (hovered === panel) {
      return `${baseClasses} border border-blue-500 transform scale-105 shadow-lg text-blue-700 z-20 rounded-lg overflow-hidden`;
    }
    return `${baseClasses} filter grayscale brightness-75 text-gray-600 z-10`;
  };

  return (
    <div className="flex h-screen">
      <div
        className={getPanelClass("left")}
        onMouseEnter={() => handleMouseEnter("left")}
        onMouseLeave={handleMouseLeave}
      >
        {/* Background image rendered with Next/Image */}
        <Image
          src={leftImage}
          alt="Left Background"
          fill
          className="absolute inset-0 object-cover"
        />
        {/* Content rendered over the background */}
        <div className="relative z-30">Automate the Old</div>
      </div>
      <div
        className={getPanelClass("middle")}
        onMouseEnter={() => handleMouseEnter("middle")}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={middleImage}
          alt="Middle Background"
          fill
          className="absolute inset-0 object-cover"
        />
        <div className="relative z-30">Empower the Present</div>
      </div>
      <div
        className={getPanelClass("right")}
        onMouseEnter={() => handleMouseEnter("right")}
        onMouseLeave={handleMouseLeave}
        onClick={() => (window.location.href = "https://www.project-noor.eu")}
      >
        <Image
          src={rightImage}
          alt="Right Background"
          fill
          className="absolute inset-0 object-cover"
        />
        <div className="relative z-30">Project Noor</div>
      </div>
    </div>
  );
};

export default LandingPage;
