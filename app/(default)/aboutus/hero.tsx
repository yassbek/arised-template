import PageIllustration from "@/components/page-illustration";

export default function AboutUsHeroSection() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Main content */}
        <div className="mx-auto max-w-3xl pb-10 pt-32 md:pt-40">
          {/* Section header */}
          <div className="text-center">
            <h1 className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl">
              Purpose-Driven AI.<br />
              People at the Center.
            </h1>
            <div className="mx-auto max-w-2xl">
              <p className="text-lg text-gray-700 mb-6">
                Arised is not just building products — we're building a future where intelligent automation, meaningful communication, and global access come together to elevate people everywhere.
              </p>

              {/* CTAs */}
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center gap-4">
                <a
                  href="#our-values"
                  className="btn mb-4 w-full bg-blue-600 text-white shadow-sm hover:bg-blue-700 transition sm:mb-0 sm:w-auto"
                >
                  Explore Our Values
                </a>
                <a
                  href="#contact"
                  className="btn w-full border border-blue-600 text-blue-600 hover:bg-blue-50 transition sm:w-auto"
                >
                  Partner With Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
