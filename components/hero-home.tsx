"use client";

import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";
import Avatar05 from "@/public/images/avatar-05.jpg";
import Avatar06 from "@/public/images/avatar-06.jpg";

export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            {/* Avatars */}
            <div
              className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]"
              data-aos="zoom-y-out"
            >
              <div className="-mx-0.5 flex justify-center -space-x-3">
                {[Avatar01, Avatar02, Avatar03, Avatar04, Avatar05, Avatar06].map((src, i) => (
                  <Image
                    key={i}
                    className="box-content rounded-full border-2 border-gray-50"
                    src={src}
                    width={32}
                    height={32}
                    alt={`Avatar 0${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Headline */}
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              One Vision, Three Pillars: <br className="max-lg:hidden" />
              Welcome to Arised
            </h1>

            {/* Subtext */}
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Arised is building an intelligent, equitable future — with AI that empowers humans everywhere.  
                From automating outdated workflows, to simulating real conversations, to bringing modern education to underserved communities.
              </p>

              {/* CTA */}
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
                <div
                  className="relative mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-blue-600 text-white shadow-sm hover:bg-blue-700 sm:mb-0 sm:w-auto"
                    href="#how-it-works"
                  >
                    <span className="relative inline-flex items-center">
                      See Our Vision{" "}
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        →
                      </span>
                    </span>
                  </a>
                  <a
                    className="btn w-full bg-white text-gray-800 shadow-sm hover:bg-gray-50 sm:ml-4 sm:w-auto"
                    href="#contact"
                  >
                    Talk to Our Team
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
