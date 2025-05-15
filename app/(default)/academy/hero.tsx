import PageIllustration from "@/components/page-illustration";

export default function AcademyHeroSection() {
  return (
    // MODIFIED: Added min-h-screen and flex utilities for vertical centering
    <section className="relative bg-gradient-to-b from-white to-gray-50 min-h-screen flex flex-col justify-center">
      <PageIllustration /> {/* Assuming this is an absolutely positioned background element */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 w-full">
        {/* Main content */}
        {/* MODIFIED: Adjusted vertical padding (py-*) and moved text-center for cleaner structure */}
        <div className="mx-auto max-w-3xl py-16 md:py-20 text-center">
          {/* Section header - original text-center div around h1 and p can be removed if parent has text-center */}
          <h1 className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl">
            Real Conversations. Real Skills.
          </h1>
          {/* This inner max-w-2xl is good for controlling paragraph and CTA width if desired to be narrower than h1 */}
          <div className="mx-auto max-w-2xl">
            <p className="text-lg text-gray-700 mb-6">
              Arised Academy is the AI-powered training solution for every team that talks. From customer service to sales, HR, and beyond — simulate real conversations and level up your people.
            </p>

            {/* CTAs */}
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center gap-4">
              <a
                href="#demo"
                className="btn mb-4 w-full bg-blue-600 text-white shadow-sm hover:bg-blue-700 transition sm:mb-0 sm:w-auto"
              >
                <span className="relative inline-flex items-center text-white">
                  Try a Demo Scenario
                  <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5"> {/* Corrected potential text color for arrow, adjust if needed */}
                    →
                  </span>
                </span>
              </a>
              <a
                href="/contact"
                className="btn w-full border border-blue-600 text-blue-600 hover:bg-blue-50 transition sm:w-auto"
              >
                Talk to a Training Expert
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}