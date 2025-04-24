"use client";
import React from "react";
import { motion } from "framer-motion";

const paragraphs = [
  `Arised was founded on a bold belief: AI should elevate people—not replace them. We saw talented teams trapped in outdated software, missed opportunities slipping through the cracks, and entire regions left behind by the digital revolution.`,
  `Determined to change that, we built a unified ecosystem: ArIA to automate legacy workflows with human-like reasoning; Arised Academy to train teams via hyper-realistic AI-driven dialogs; and Project Noor to bring modern education anywhere—because intelligence belongs everywhere.`,
  `Today, we’re more than a company; we’re a movement. We’re not chasing hype, we’re creating impact—with technology designed to understand, adapt, and support the people who rely on it.`,
];

export default function OurStory() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white to-blue-50 py-32">
      {/* Background pattern & blobs */}
      <div className="absolute inset-0 -z-10">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="smallGrid"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M20 0 L0 0 0 20"
                fill="none"
                stroke="rgba(203,213,225,0.3)"
                strokeWidth="1"
              />
            </pattern>
            <pattern
              id="grid"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <rect width="100" height="100" fill="url(#smallGrid)" />
              <path
                d="M100 0 L0 0 0 100"
                fill="none"
                stroke="rgba(203,213,225,0.6)"
                strokeWidth="2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-indigo-200 rounded-full opacity-20 filter blur-3xl"></div>
      <div className="absolute -bottom-32 -right-24 w-96 h-96 bg-pink-200 rounded-full opacity-20 filter blur-3xl"></div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
        {/* Content card */}
        <motion.div
          className="bg-white/80 backdrop-blur-md rounded-3xl p-12 shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <motion.h2
            className="text-4xl font-extrabold text-gray-900 text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Our Story
          </motion.h2>
          <motion.div
            className="mt-4 h-1 w-20 mx-auto bg-gradient-to-r from-blue-500 to-indigo-500 rounded"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          />

          {/* Paragraphs */}
          <div className="mt-8 space-y-6 text-gray-700 text-lg">
            {paragraphs.map((text, idx) => (
              <motion.p
                key={idx}
                className="first-letter:text-6xl first-letter:font-extrabold first-letter:text-blue-500 first-letter:mr-4 first-letter:float-left leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + idx * 0.2, duration: 0.6 }}
              >
                {text}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
