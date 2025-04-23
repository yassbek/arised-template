"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import leftImage from "@/public/images/automation.png";
import middleImage from "@/public/images/IMG_7888.jpg";
import rightImage from "@/public/images/IMG_8039.jpg";

const LandingPage: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const router = useRouter();

  // animate transform, shadow, filter, and overlay opacity
  const base =
    "flex-1 relative flex items-center justify-center cursor-pointer text-xl font-semibold " +
    "transform transition-transform transition-shadow transition-filter transition-opacity ease-in-out duration-500";

  const getTransform = (panel: string) => {
    if (hovered === panel) {
      const rotateY =
        panel === "left" ? "-5deg" : panel === "right" ? "5deg" : "0deg";
      return `rotateY(${rotateY}) scale(1.1)`;
    }
    return "rotateY(0deg) scale(1)";
  };

  const getShadow = (panel: string) =>
    hovered === panel ? "shadow-2xl" : "shadow-none";

  const getFilter = (panel: string) =>
    hovered && hovered !== panel ? "filter grayscale brightness-75" : "filter-none";

  return (
    <div
      className="flex h-screen overflow-visible"
      style={{ perspective: "800px" }}
    >
      {["left", "middle", "right"].map((panel, i) => (
        <div
          key={panel}
          className={`
            ${base}
            ${getShadow(panel)}
            ${getFilter(panel)}
            relative ${hovered === panel ? "z-30" : "z-10"}
          `}
          style={{ transform: getTransform(panel) }}
          onMouseEnter={() => setHovered(panel)}
          onMouseLeave={() => setHovered(null)}
          onClick={() => {
            if (panel === "left") {
              router.push("/aria");
            } else if (panel === "right") {
              window.location.href = "https://www.project-noor.eu";
            }
          }}
        >
          {/* gradient overlay */}
          <div
            className={`
              absolute inset-0 pointer-events-none
              bg-gradient-to-tr from-blue-500/0 to-purple-500/0
              ${hovered === panel ? "from-blue-500/20 to-purple-500/20" : ""}
              transition-opacity ease-in-out duration-500
            `}
          />

          <Image
            src={[leftImage, middleImage, rightImage][i]}
            alt={`${panel} bg`}
            fill
            className="absolute inset-0 object-cover"
          />

          <div className="relative z-10 text-white text-center">
            {panel === "left" ? (
              <>Aria:<br />Automate the Old</>
            ) : panel === "middle" ? (
              <>Arised Academy:<br />Empower the Present</>
            ) : (
              <>Project Noor:<br />Education for Everyone</>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LandingPage;
