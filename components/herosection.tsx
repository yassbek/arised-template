import React from "react";
import Image from "next/image";
import heroImage from "@/public/images/IMG_7888.jpg";

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(at_top_left,_rgba(129,140,248,0.3),_rgba(255,255,255,0),_rgba(251,207,232,0.3))] py-16 -mt-24">
      {/* Abstract background circles for a modern vibe */}
      <div className="absolute -top-32 -left-32 w-64 h-64 bg-purple-200 opacity-30 rounded-full"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-200 opacity-20 rounded-full"></div>

      <div className="relative z-40 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center gap-16">
        {/* Text column */}
        <div className="w-full lg:w-1/2 flex flex-col items-center text-center space-y-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900">
            Take Control of Your Workflow
          </h2>
          <p className="text-lg text-gray-600 max-w-xl">
            Seamlessly integrate AI-driven automation into every facet of your business.
            From legacy systems to cutting-edge platforms, Project Noor empowers you
            to move faster, smarter, and with complete confidence.
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            <a
              href="#get-started"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-md shadow hover:bg-blue-700 transition"
            >
              Get Started
            </a>
            <a
              href="#learn-more"
              className="inline-block px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-md hover:bg-blue-50 transition"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Image column */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={heroImage}
              alt="Illustration of workflow automation"
              fill
              className="object-cover"
            />
            {/* Hero image */}
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,--theme(--color-slate-300/.8),transparent)1]">
              <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,var(--color-gray-600)_4.5px,transparent_0)] after:w-[41px]">
                <span className="text-[13px] font-medium text-white">
                  cruip.com
                </span>
              </div>
              <div className="font-mono text-sm text-gray-500 [&_span]:opacity-0">
                <span className="animate-[code-1_10s_infinite] text-gray-200">
                  npm login
                </span>{" "}
                <span className="animate-[code-2_10s_infinite]">
                  --registry=https://npm.pkg.github.com
                </span>
                <br />
                <span className="animate-[code-3_10s_infinite]">
                  --scope=@phanatic
                </span>{" "}
                <span className="animate-[code-4_10s_infinite]">
                  Successfully logged-in.
                </span>
                <br />
                <br />
                <span className="animate-[code-5_10s_infinite] text-gray-200">
                  npm publish
                </span>
                <br />
                <span className="animate-[code-6_10s_infinite]">
                  Package published.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
