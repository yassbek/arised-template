// BenefitsComparisonSection.jsx
"use client";

import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { motion } from "framer-motion";

const comparisons = [
  { label: "Scalable to every employee", arised: true, traditional: false },
  { label: "Consistent quality across sessions", arised: true, traditional: false },
  { label: "Instant feedback and scoring", arised: true, traditional: false },
  { label: "Customizable to your company", arised: true, traditional: true },
  { label: "Engaging and interactive", arised: true, traditional: false },
  { label: "Trackable learning data", arised: true, traditional: false },
];

export default function BenefitsComparisonSection() {
  return (
    // Section background: Conforms to style guide, white to gray-50
    <section className="relative bg-gradient-to-b from-white to-gray-50 pt-24 pb-32 overflow-hidden">
      {/* Top wave to blend from previous white section */}
      <div className="absolute top-0 left-0 w-full h-24 -mt-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="#FFFFFF" // White wave, blending into the 'from-white' of the section gradient
            d="M0,32 C360,96 1080,0 1440,32 L1440,0 L0,0 Z"
          />
        </svg>
      </div>

      {/* Abstract watercolor blobs - Blue themed and subtle */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20 -z-10" />
      <div className="absolute bottom-0 -right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -z-10" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section heading uses primary brand blue */}
          <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-600">
            Why Companies Switch to Arised Academy
          </h2>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            Break free from one-size-fits-all training and embrace a smarter,
            scalable solution.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {comparisons.map(({ label, arised, traditional }, idx) => (
            <motion.div
              key={label}
              className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col items-center text-center"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <div className="mb-4 min-h-[3.5em] flex items-center justify-center">
                <span className="text-lg font-medium text-gray-800">{label}</span>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex flex-col items-center">
                  <div className="p-3 rounded-full bg-gray-100 mb-2 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12">
                    {traditional ? (
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                    ) : (
                      <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300 opacity-60" />
                    )}
                  </div>
                  <span className="text-sm text-gray-500">Traditional</span>
                </div>
                <div className="flex flex-col items-center">
                  {/* "Arised" icon circle now uses primary brand blue */}
                  <div className="p-3 rounded-full bg-blue-600 mb-2 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12">
                    {arised ? (
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    ) : (
                      <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-200 opacity-60" /> // Adjusted X color for blue bg
                    )}
                  </div>
                  <span className="text-sm font-semibold text-gray-800">Arised</span>
                </div>
              </div>

              <div className="mt-auto pt-6 w-full">
                 {/* Bottom accent line now uses primary brand blue */}
                <motion.div
                  className="w-16 h-1 bg-blue-600 rounded-full mx-auto"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}