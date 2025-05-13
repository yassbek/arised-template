import PageIllustration from "@/components/page-illustration";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Main content */}
        <div className="mx-auto max-w-3xl pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-10 text-center">
            <h1 className="mb-6 text-5xl font-bold text-slate-900 md:text-6xl leading-tight">
              Automate the Unthinkable <br />
              <span className="text-blue-600">with ArIA</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
              ArIA by Arised transforms manual workflows into intelligent, AI-powered operations — without needing to rewrite your legacy systems.
            </p>
            <div className="mx-auto flex max-w-sm flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                className="btn w-full bg-blue-600 px-6 py-3 text-white shadow-md transition hover:bg-blue-700 sm:w-auto"
                href="#demo"
              >
                Request a Demo
              </a>
              <a
                className="btn w-full border border-gray-300 px-6 py-3 text-blue-600 transition hover:bg-gray-50 sm:w-auto"
                href="#how-it-works"
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
