// Hero.jsx (for Aria product page)
"use client";

import PageIllustration from "@/components/page-illustration"; // Assuming this is a general decorative component

export default function Hero() {
  return (
    // Section Background: Is transparent.
    // PageIllustration is inside and will be clipped by overflow-hidden.
    <section className="relative overflow-hidden">
      <PageIllustration /> {/* Its styling might affect the overall background look */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Main content */}
        <div className="mx-auto max-w-3xl pb-12 pt-32 text-center md:pb-20 md:pt-40"> {/* Added text-center here for overall alignment */}
          {/* Section header */}
          <div className="pb-10">
            {/* Headline: Main part Neutral Text, "with ArIA" span Primary Blue */}
            <h1 className="mb-6 text-5xl font-bold leading-tight text-[#1F2937] dark:text-slate-100 md:text-6xl">
              Automate the Unthinkable <br />
              <span className="text-[#2563EB]">with ArIA</span> {/* Explicit Primary Blue */}
            </h1>
            {/* Subtext: Neutral Text Secondary */}
            <p className="mx-auto mb-8 max-w-2xl text-lg text-[#6B7280] dark:text-slate-400">
              ArIA by Arised transforms manual workflows into intelligent, AI-powered operations — without needing to rewrite your legacy systems.
            </p>
            <div className="mx-auto flex max-w-sm flex-col gap-4 sm:flex-row sm:justify-center">
              {/* Primary CTA Button: "Request a Demo" */}
              <a
                className="btn w-full bg-[#2563EB] !text-[#FFFFFF] font-semibold px-6 py-3 rounded-full shadow-md transition-colors duration-150 ease-in-out hover:bg-[#1D4ED8] sm:w-auto"
                href="#demo" // Ensure this href is appropriate
              >
                Request a Demo
              </a>
              {/* Secondary CTA Button: "Learn How It Works" */}
              <a
                className="btn w-full border border-[#D1D5DB] bg-[#FFFFFF] dark:bg-slate-700 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-600 px-6 py-3 font-semibold text-[#2563EB] shadow-sm transition-colors duration-150 ease-in-out hover:bg-[#F9FAFB] sm:w-auto"
                href="#how-it-works" // Ensure this href is appropriate
              >
                Learn How It Works
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}