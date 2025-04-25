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

export default function WhyChooseNoor() {
  const cards = [
    {
      icon: SunIcon,
      title: (
        <>
          Solar-Powered<br/>
          Tablets
        </>
      ),
      desc: 'Keep learning going anywhere—100% powered by sunlight.',
      glow: 'from-yellow-400 to-yellow-200',
    },
    {
      icon: CloudOffIcon,
      title: (
        <>
          Fully<br/>
          Offline
        </>
      ),
      desc: 'Access interactive lessons with zero internet required.',
      glow: 'from-blue-400 to-blue-200',
    },
    {
      icon: PlugIcon,
      title: (
        <>
          Plug & Play<br/>
          Setup
        </>
      ),
      desc: 'Instant start-up with no IT setup or infrastructure needed.',
      glow: 'from-green-400 to-green-200',
    },
    {
      icon: BarChart2Icon,
      title: (
        <>
          Real-Time<br/>
          Analytics
        </>
      ),
      desc: 'Live dashboards to monitor usage, engagement, and outcomes.',
      glow: 'from-indigo-400 to-indigo-200',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-gray-900 text-center mb-12"
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
              className="group relative bg-gray-50 rounded-2xl p-8 text-center overflow-hidden transition-transform hover:shadow-2xl"
            >
              {/* glowing blur on hover */}
              <div
                className={`pointer-events-none absolute -inset-1 bg-gradient-to-tr ${glow} rounded-2xl opacity-0 group-hover:opacity-30 filter blur-2xl transition-opacity`}
              />

              {/* content */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="p-4 bg-white rounded-full shadow-md mb-4">
                  <Icon className="w-8 h-8 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 leading-snug">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <Link
            href="https://project-noor.eu"
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-semibold px-8 py-3 rounded-full shadow hover:opacity-90 transition"
          >
            Visit Project Noor
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
