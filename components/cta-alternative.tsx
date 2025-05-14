// components/CtaAlternative.jsx
import Link from "next/link"; // Assuming this is for internal links, an <a> tag might be used for external.

export default function CtaAlternative({
  heading,
  buttonText,
  buttonLink,
  className, // Allows additional classes to be passed
}: {
  heading: string;
  buttonText: string;
  buttonLink: string;
  className?: string;
}) {
  return (
    // Section background: Solid White. Additional classes can be passed via props.
    <section className={`relative bg-[#FFFFFF] ${className || ""}`}>
      {/* Decorative Blur Blob: Primary Blue to Accent Teal gradient */}
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 -translate-y-full"
        aria-hidden="true"
      >
        <div className="h-80 w-80 rounded-full bg-gradient-to-tr from-[#2563EB] to-[#14B8A6] opacity-30 blur-[160px] will-change-[filter]"></div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Decorative Top Border: Uses Primary Blue with 25% opacity */}
        <div className="border-t text-center [border-image:linear-gradient(to_right,transparent,rgba(37,99,235,0.25),transparent)1]">
          <div className="py-12 md:py-20">
            {/* Heading: Neutral Text */}
            <h2 className="mb-6 text-3xl font-bold text-[#1F2937] md:mb-12 md:text-4xl">
              {heading}
            </h2>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              {/* CTA Button: Primary Blue solid fill */}
              <a // Using <a> tag as per original, Link could also be used if internal
                className="btn group mb-4 w-full bg-[#2563EB] !text-[#FFFFFF] font-semibold px-8 py-3 rounded-full shadow-md hover:bg-[#1D4ED8] transition-colors duration-150 ease-in-out sm:mb-0 sm:w-auto"
                href={buttonLink}
              >
                <span className="relative inline-flex items-center">
                  {buttonText}
                  {/* Arrow: White text */}
                  <span className="ml-2 tracking-normal text-[#FFFFFF] transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
                    &rarr; {/* Using HTML entity for right arrow */}
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}