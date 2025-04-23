import React from "react";
import Image from "next/image";
import PartnerLogo01 from "@/public/images/partner-logo-1.png";
import PartnerLogo02 from "@/public/images/partner-logo-2.png";
import PartnerLogo03 from "@/public/images/partner-logo-3.png";
import PartnerLogo04 from "@/public/images/partner-logo-4.jpg";
import PartnerLogo05 from "@/public/images/partner-logo-5.png";
import PartnerLogo06 from "@/public/images/partner-logo-6.png";
import PartnerLogo07 from "@/public/images/partner-logo-7.jpeg";
import PartnerLogo08 from "@/public/images/partner-logo-8.jpeg";
import PartnerLogo09 from "@/public/images/partner-logo-9.png";
import PartnerLogo10 from "@/public/images/partner-logo-10.jpg";

export default function PartnersCarousel() {
  return (
    <section className="relative overflow-hidden before:absolute before:inset-0 before:-z-10 before:h-[120%] before:bg-linear-to-b before:from-gray-100">
      <div className="pt-12 md:pt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Our Business Partners &amp; Collaborators
            </h2>
          </div>
        </div>
        <div className="relative mx-auto flex max-w-[94rem] justify-center">
          {/* Decorative circles */}
          <div className="absolute bottom-20 -z-10 -translate-x-36" aria-hidden="true">
            <div className="h-80 w-80 rounded-full bg-linear-to-tr from-blue-500 to-gray-900 opacity-30 blur-[160px] will-change-[filter]" />
          </div>
          <div className="absolute -bottom-10 -z-10" aria-hidden="true">
            <div className="h-80 w-80 rounded-full bg-blue-500 opacity-40 blur-[160px] will-change-[filter]" />
          </div>
          <div className="absolute bottom-0 -z-10" aria-hidden="true">
            <div className="h-56 w-56 rounded-full border-[20px] border-white blur-[20px] will-change-[filter]" />
          </div>

          {/* Carousel Row */}
          <div className="group inline-flex w-full flex-nowrap py-12 [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)] md:py-20">
            {/* Main carousel items */}
            <div className="flex animate-[infinite-scroll_60s_linear_infinite] items-start justify-center group-hover:[animation-play-state:paused] md:justify-start gap-x-4">
              {/* Partner 1 */}
              <div className="w-[22rem] transition-transform duration-300 group-hover:rotate-0 flex flex-col items-center">
                <div className="w-32 h-32 relative">
                  <Image src={PartnerLogo01} alt="Acme Corp" fill className="object-contain" />
                </div>
                <span className="mt-4 text-lg font-medium text-gray-900">Malteser</span>
              </div>
              {/* Partner 2 */}
              <div className="w-[22rem] transition-transform duration-300 group-hover:rotate-0 flex flex-col items-center">
                <div className="w-32 h-32 relative">
                  <Image src={PartnerLogo02} alt="Orbit Tech" fill className="object-contain" />
                </div>
                <span className="mt-4 text-lg font-medium text-gray-900">Ministry of Education Sierra Leone</span>
              </div>
              {/* Partner 3 */}
              <div className="w-[22rem] transition-transform duration-300 group-hover:rotate-0 flex flex-col items-center">
                <div className="w-32 h-32 relative">
                  <Image src={PartnerLogo03} alt="Solaris Solutions" fill className="object-contain" />
                </div>
                <span className="mt-4 text-lg font-medium text-gray-900">Toolkit Fundation</span>
              </div>
              {/* Partner 4 */}
              <div className="w-[22rem] transition-transform duration-300 group-hover:rotate-0 flex flex-col items-center">
                <div className="w-32 h-32 relative">
                  <Image src={PartnerLogo04} alt="Nexus Partners" fill className="object-contain" />
                </div>
                <span className="mt-4 text-lg font-medium text-gray-900">Moroccan Embassy in Addis Ababa</span>
              </div>
              {/* Partner 5 */}
              <div className="w-[22rem] transition-transform duration-300 group-hover:rotate-0 flex flex-col items-center">
                <div className="w-32 h-32 relative">
                  <Image src={PartnerLogo05} alt="Arised" fill className="object-contain" />
                </div>
                <span className="mt-4 text-lg font-medium text-gray-900">Red Cross</span>
              </div>
              {/* Partner 6 */}
              <div className="w-[22rem] transition-transform duration-300 group-hover:rotate-0 flex flex-col items-center">
                <div className="w-32 h-32 relative">
                  <Image src={PartnerLogo06} alt="Arised" fill className="object-contain" />
                </div>
                <span className="mt-4 text-lg font-medium text-gray-900">eutelsat</span>
              </div>
              {/* Partner 7 */}
              <div className="w-[22rem] transition-transform duration-300 group-hover:rotate-0 flex flex-col items-center">
                <div className="w-32 h-32 relative">
                  <Image src={PartnerLogo07} alt="Arised" fill className="object-contain" />
                </div>
                <span className="mt-4 text-lg font-medium text-gray-900">Inverto</span>
              </div>
              {/* Partner 8 */}
              <div className="w-[22rem] transition-transform duration-300 group-hover:rotate-0 flex flex-col items-center">
                <div className="w-32 h-32 relative">
                  <Image src={PartnerLogo08} alt="Arised" fill className="object-contain" />
                </div>
                <span className="mt-4 text-lg font-medium text-gray-900">Cedus</span>
              </div>
              {/* Partner 9 */}
              <div className="w-[22rem] transition-transform duration-300 group-hover:rotate-0 flex flex-col items-center">
                <div className="w-32 h-32 relative">
                  <Image src={PartnerLogo09} alt="Arised" fill className="object-contain" />
                </div>
                <span className="mt-4 text-lg font-medium text-gray-900">African Union</span>
              </div>
              {/* Partner 10 */}
              <div className="w-[22rem] transition-transform duration-300 group-hover:rotate-0 flex flex-col items-center">
                <div className="w-32 h-32 relative">
                  <Image src={PartnerLogo10} alt="Arised" fill className="object-contain" />
                </div>
                <span className="mt-4 text-lg font-medium text-gray-900">k67</span>
              </div>
            </div>

            {/* Duplicate for seamless infinite scroll */}
            <div
              className="flex animate-[infinite-scroll_60s_linear_infinite] items-start justify-center group-hover:[animation-play-state:paused] md:justify-start gap-x-4"
              aria-hidden="true"
            >
              {/* Partner 1 Duplicate */}
              <div className="w-[22rem] transition-transform duration-300 flex flex-col items-center">
                <div className="w-32 h-32 relative">
                  <Image src={PartnerLogo01} alt="Acme Corp" fill className="object-contain" />
                </div>
                <span className="mt-4 text-lg font-medium text-gray-900">Acme Corp</span>
              </div>
              {/* Partner 2 Duplicate */}
              <div className="w-[22rem] transition-transform duration-300 flex flex-col items-center">
                <div className="w-32 h-32 relative">
                  <Image src={PartnerLogo02} alt="Orbit Tech" fill className="object-contain" />
                </div>
                <span className="mt-4 text-lg font-medium text-gray-900">Orbit Tech</span>
              </div>
              {/* Partner 3 Duplicate */}
              <div className="w-[22rem] transition-transform duration-300 flex flex-col items-center">
                <div className="w-32 h-32 relative">
                  <Image src={PartnerLogo03} alt="Solaris Solutions" fill className="object-contain" />
                </div>
                <span className="mt-4 text-lg font-medium text-gray-900">Solaris Solutions</span>
              </div>
              {/* Partner 4 Duplicate */}
              <div className="w-[22rem] transition-transform duration-300 flex flex-col items-center">
                <div className="w-32 h-32 relative">
                  <Image src={PartnerLogo04} alt="Nexus Partners" fill className="object-contain" />
                </div>
                <span className="mt-4 text-lg font-medium text-gray-900">Nexus Partners</span>
              </div>
              {/* Partner 5 Duplicate */}
              <div className="w-[22rem] transition-transform duration-300 flex flex-col items-center">
                <div className="w-32 h-32 relative">
                  <Image src={PartnerLogo05} alt="Arised" fill className="object-contain" />
                </div>
                <span className="mt-4 text-lg font-medium text-gray-900">Arised</span>
              </div>
              {/* Partner 6 Duplicate */}
              <div className="w-[22rem] transition-transform duration-300 flex flex-col items-center">
                <div className="w-32 h-32 relative">
                  <Image src={PartnerLogo06} alt="Arised" fill className="object-contain" />
                </div>
                <span className="mt-4 text-lg font-medium text-gray-900">Arised</span>
              </div>
              {/* Partner 7 Duplicate */}
              <div className="w-[22rem] transition-transform duration-300 flex flex-col items-center">
                <div className="w-32 h-32 relative">
                  <Image src={PartnerLogo07} alt="Arised" fill className="object-contain" />
                </div>
                <span className="mt-4 text-lg font-medium text-gray-900">Arised</span>
              </div>
              {/* Partner 8 Duplicate */}
              <div className="w-[22rem] transition-transform duration-300 flex flex-col items-center">
                <div className="w-32 h-32 relative">
                  <Image src={PartnerLogo08} alt="Arised" fill className="object-contain" />
                </div>
                <span className="mt-4 text-lg font-medium text-gray-900">Arised</span>
              </div>
              {/* Partner 9 Duplicate */}
              <div className="w-[22rem] transition-transform duration-300 flex flex-col items-center">
                <div className="w-32 h-32 relative">
                  <Image src={PartnerLogo09} alt="Arised" fill className="object-contain" />
                </div>
                <span className="mt-4 text-lg font-medium text-gray-900">Arised</span>
              </div>
              {/* Partner 10 Duplicate */}
              <div className="w-[22rem] transition-transform duration-300 flex flex-col items-center">
                <div className="w-32 h-32 relative">
                  <Image src={PartnerLogo10} alt="Arised" fill className="object-contain" />
                </div>
                <span className="mt-4 text-lg font-medium text-gray-900">Arised</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}