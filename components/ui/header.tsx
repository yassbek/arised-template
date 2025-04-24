import Link from "next/link";
import Logo from "./logo";
import Dropdown from "@/components/dropdown";
import MobileMenu from "./mobile-menu";

export default function Header() {
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          
          {/* Left: Logo */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Center: Navigation */}
          <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex">
            <ul className="flex flex-wrap items-center gap-4 text-sm lg:gap-8">
              <li>
                <Link
                  href="/"
                  className="flex items-center text-gray-700 transition hover:text-gray-900 font-semibold"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/aria"
                  className="flex items-center text-gray-700 transition hover:text-gray-900 font-semibold"
                >
                  ArIA
                </Link>
              </li>
              <li>
                <Link
                  href="/academy"
                  className="flex items-center text-gray-700 transition hover:text-gray-900 font-semibold"
                >
                  Arised Academy
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.project-noor.eu"
                  className="flex items-center text-gray-700 transition hover:text-gray-900 font-semibold"
                >
                  Project Noor
                </Link>
              </li>
              <Dropdown title="Arised">
                <li>
                  <Link
                    href="/aboutus"
                    className="flex rounded-lg px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="flex rounded-lg px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support"
                    className="flex rounded-lg px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Support
                  </Link>
                </li>
              </Dropdown>
            </ul>
          </nav>

          {/* Right: Mobile menu only */}
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
