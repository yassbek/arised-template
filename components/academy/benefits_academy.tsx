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
    <section className="relative bg-gradient-to-b from-[#FADADD] to-pink-50 pt-24 pb-32 overflow-hidden">
      {/* top wave to blend from RoadmapSection */}
      <svg
        className="absolute top-0 left-0 w-full h-24"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#FADADD"
          d="M0,96 C360,160 1080,32 1440,96 L1440,0 L0,0 Z"
        />
      </svg>

      {/* abstract watercolor blobs */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 -z-10" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-extrabold text-gray-900">
            Why Companies Switch to Arised Academy
          </h2>
          <p className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto">
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
              className="relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow flex flex-col items-center text-center"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <div className="mb-4">
                <span className="text-lg font-medium text-gray-800">{label}</span>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex flex-col items-center">
                  <div className="p-3 rounded-full bg-gray-100 mb-2 flex items-center justify-center">
                    {traditional ? (
                      <CheckCircle2 className="w-6 h-6 text-gray-400" />
                    ) : (
                      <XCircle className="w-6 h-6 text-gray-300 opacity-50" />
                    )}
                  </div>
                  <span className="text-sm text-gray-500">Traditional</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="p-3 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mb-2 flex items-center justify-center">
                    {arised ? (
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    ) : (
                      <XCircle className="w-6 h-6 text-gray-300 opacity-50" />
                    )}
                  </div>
                  <span className="text-sm font-semibold text-gray-800">Arised</span>
                </div>
              </div>

              <motion.div
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
