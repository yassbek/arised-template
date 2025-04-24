import Link from "next/link";
import Logo from "./logo";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div
          className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12 ${
            border
              ? "border-t [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1]"
              : ""
          }`}
        >
          {/* 1st block */}
          <div className="space-y-2 sm:col-span-12 lg:col-span-4">
            <div>
              <Logo />
            </div>
            <div className="text-sm text-gray-600">
              &copy; Arised.com - All rights reserved.
            </div>
          </div>

          {/* 2nd block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://www.project-noor.eu"
                  className="text-gray-600 transition hover:text-gray-900"
                >
                  Project Noor
                </Link>
              </li>
              <li>
                <Link
                  href="/aria"
                  className="text-gray-600 transition hover:text-gray-900"
                >
                  ArIA
                </Link>
              </li>
              <li>
                <Link
                  href="/academy"
                  className="text-gray-600 transition hover:text-gray-900"
                >
                  Arised Academy
                </Link>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/aboutus"
                  className="text-gray-600 transition hover:text-gray-900"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="#0"
                  className="text-gray-600 transition hover:text-gray-900"
                >
                  Diversity &amp; Inclusion
                </Link>
              </li>
              <li>
                <Link
                  href="#0"
                  className="text-gray-600 transition hover:text-gray-900"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#0"
                  className="text-gray-600 transition hover:text-gray-900"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#0"
                  className="text-gray-600 transition hover:text-gray-900"
                >
                  Financial statements
                </Link>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#0"
                  className="text-gray-600 transition hover:text-gray-900"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="#0"
                  className="text-gray-600 transition hover:text-gray-900"
                >
                  Terms of service
                </Link>
              </li>
              <li>
                <Link
                  href="#0"
                  className="text-gray-600 transition hover:text-gray-900"
                >
                  Report a vulnerability
                </Link>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Social</h3>
            <ul className="flex gap-2">
              {/* Twitter */}
              <li>
                <Link
                  href="https://twitter.com/ProjNoor"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="flex items-center justify-center text-blue-500 transition hover:text-blue-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-8 w-8 fill-current"
                  >
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0 1.88-2.36 8.56 8.56 0 0 1-2.71 1.03 4.26 4.26 0 0 0-7.4 3.89A12.06 12.06 0 0 1 3.15 4.6a4.26 4.26 0 0 0 1.32 5.68A4.2 4.2 0 0 1 2.8 9v.05a4.26 4.26 0 0 0 3.42 4.17 4.3 4.3 0 0 1-1.93.07 4.27 4.27 0 0 0 3.98 2.96 8.54 8.54 0 0 1-5.3 1.83c-.34 0-.67-.02-1-.06a12.07 12.07 0 0 0 6.52 1.91c7.83 0 12.11-6.49 12.11-12.11 0-.18-.01-.36-.02-.54A8.6 8.6 0 0 0 24 4.59a8.52 8.52 0 0 1-2.54.7Z" />
                  </svg>
                </Link>
              </li>

              {/* LinkedIn */}
              <li>
                <Link
                  href="https://linkedin.com/company/project-noor-eu"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex items-center justify-center text-blue-500 transition hover:text-blue-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-8 w-8 fill-current"
                  >
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 7h4V24h-4V7zm7 0h3.857v2.233h.057c.537-1.017 1.848-2.233 3.803-2.233C20.246 7 21 9.15 21 13.298V24h-4v-9.62c0-2.294-.82-3.86-2.875-3.86-1.568 0-2.505 1.055-2.915 2.075-.15.365-.188.876-.188 1.389V24h-4V7z" />
                  </svg>
                </Link>
              </li>

              {/* YouTube */}
              <li>
                <Link
                  href="https://www.youtube.com/@ProjectNoor-eu"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="flex items-center justify-center text-blue-500 transition hover:text-blue-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-8 w-8 fill-current"
                  >
                    <path d="M23.5 6.2s-.2-1.6-.8-2.3c-.8-.9-1.7-.9-2.1-1C17.8 2.5 12 2.5 12 2.5s-5.8 0-8.6.4c-.4.1-1.3.1-2.1 1-.6.7-.8 2.3-.8 2.3S0 8.1 0 10v4c0 1.9.2 3.8.2 3.8s.2 1.6.8 2.3c.8.9 1.8.9 2.3 1C6.2 21.5 12 21.5 12 21.5s5.8 0 8.6-.4c.4-.1 1.3-.1 2.1-1 .6-.7.8-2.3.8-2.3S24 15.9 24 14v-4c0-1.9-.5-3.8-.5-3.8zM9.5 15.5v-7l6.5 3.5-6.5 3.5z" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Big text */}
      <div className="relative -mt-16 h-60 w-full -z-10" aria-hidden="true">
        <div
          className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[348px] font-bold leading-none before:bg-linear-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['Arised'] after:absolute after:inset-0 after:bg-gray-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['Arised'] after:[text-shadow:0_1px_0_white]"
        ></div>
        {/* Glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3"
          aria-hidden="true"
        >
          <div className="h-56 w-56 rounded-full border-[20px] border-blue-700 blur-[80px] will-change-[filter]"></div>
        </div>
      </div>
    </footer>
  );
}
