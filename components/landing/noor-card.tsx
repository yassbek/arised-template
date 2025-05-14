// components/WhyChooseNoor.jsx
'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  SunIcon,
  CloudOffIcon,
  PlugIcon,
  BarChart2Icon
} from 'lucide-react';

const cards = [
  {
    icon: SunIcon,
    title: ( <> Solar-Powered<br/> Tablets </> ),
    desc: 'Keep learning going anywhere—100% powered by sunlight.',
    glow: 'from-[#2563EB] to-[#60A5FA]', // Primary Blue to Light Primary Blue
  },
  {
    icon: CloudOffIcon,
    title: ( <> Fully<br/> Offline </> ),
    desc: 'Access interactive lessons with zero internet required.',
    glow: 'from-[#2563EB] to-[#60A5FA]',
  },
  {
    icon: PlugIcon,
    title: ( <> Plug & Play<br/> Setup </> ),
    desc: 'Instant start-up with no IT setup or infrastructure needed.',
    glow: 'from-[#2563EB] to-[#60A5FA]',
  },
  {
    icon: BarChart2Icon,
    title: ( <> Real-Time<br/> Analytics </> ),
    desc: 'Live dashboards to monitor usage, engagement, and outcomes.',
    glow: 'from-[#2563EB] to-[#60A5FA]',
  },
];

export default function WhyChooseNoor() {
  return (
    // Section Background: Starts Pale Blue (connects to Academy), fades to Neutral Light
    <section className="py-20 bg-gradient-to-b from-[#EFF6FF] to-[#F9FAFB]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section heading: Neutral Text */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-[#1F2937] text-center mb-16" // Increased bottom margin for spacing
        >
          Why Choose Noor
        </motion.h2>
        
        {/* 2×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map(({ icon: Icon, title, desc, glow }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              // Card Background: Neutral Background Light
              className="group relative bg-[#F9FAFB] rounded-2xl p-8 text-center overflow-hidden transition-transform hover:shadow-2xl"
            >
              {/* glowing blur on hover - uses standardized 'glow' from cards array */}
              <div
                className={`pointer-events-none absolute -inset-1 bg-gradient-to-tr ${glow} rounded-2xl opacity-0 group-hover:opacity-30 filter blur-2xl transition-opacity`}
              />

              {/* content */}
              <div className="relative z-10 flex flex-col items-center">
                {/* Icon container: White background */}
                <div className="p-4 bg-[#FFFFFF] rounded-full shadow-md mb-6"> {/* Increased bottom margin */}
                  {/* Icon color: Primary Blue */}
                  <Icon className="w-8 h-8 text-[#2563EB]" />
                </div>
                {/* Card title: Neutral Text */}
                <h3 className="text-xl font-semibold text-[#1F2937] mb-2 leading-snug">
                  {title}
                </h3>
                {/* Card description: Neutral Text Secondary */}
                <p className="text-[#6B7280] text-sm">
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button: Primary Blue */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center" // Increased top margin
        >
          <Link
            href="https://project-noor.eu"
            className="inline-block bg-[#2563EB] !text-[#FFFFFF] font-semibold px-8 py-3 rounded-full shadow-md hover:bg-[#1D4ED8] hover:shadow-lg transition-all duration-200"
          >
            Visit Project Noor
          </Link>
        </motion.div>
      </div>
    </section>
  );
}