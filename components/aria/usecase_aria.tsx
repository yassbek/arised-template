"use client";
import React from "react";
import { motion } from "framer-motion";
import { Package, Brain, Rocket } from "lucide-react";

const useCasePoints = [
  {
    icon: Package,
    title: "Challenge",
    text: "Staff were manually entering medicine orders into a legacy Windows system—prone to errors and delays. No API existed, automation seemed impossible.",
    accent: "blue", // Ensuring accents are blue as previously established
  },
  {
    icon: Brain,
    title: "Solution",
    text: "ArIA observed workflows, mimicked user actions, and added reasoning to handle edge cases—fully automating order entry via visual UI.",
    accent: "blue", // Ensuring accents are blue
  },
  {
    icon: Rocket,
    title: "Result",
    text: "Order processing is now 80% faster and nearly error-free. Staff focus on customer care instead of clicking through outdated forms.",
    accent: "blue", // Ensuring accents are blue
  },
];

export default function UseCaseSection() {
  return (
    <section className={`
      relative overflow-hidden py-24
      bg-[linear-gradient(to_bottom,theme(colors.blue.100)_0%,theme(colors.blue.100)_40%,theme(colors.white)_100%)]
      dark:bg-[linear-gradient(to_bottom,theme(colors.blue.900)_0%,theme(colors.blue.900)_40%,theme(colors.slate.900)_100%)]
    `}>
      <svg
        className="absolute inset-0 w-full h-full opacity-10 text-gray-400 dark:text-slate-700" // Pattern color should still work
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="grid-usecase" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0 L0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-usecase)" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-slate-100 tracking-tight">
            From Pharmacy to Factory — ArIA Adapts
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-slate-300 max-w-3xl mx-auto">
            Discover how ArIA helped one pharmacy save time, reduce errors, and modernize operations—without changing their software.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Cards */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {useCasePoints.map(({ icon: Icon, title, text, accent }) => (
              <div
                key={title}
                // Card styling (dark:bg-slate-800) provides contrast against section's dark gradient
                className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow flex items-start"
              >
                <div
                  // Using the "blue" accent for icon container colors
                  className={`flex-shrink-0 mr-6 p-3 rounded-lg bg-${accent}-100 text-${accent}-600`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-slate-100 mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-700 dark:text-slate-300 leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Image with caption card */}
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img
              src="/images/pharmacy-workflow.png" // Ensure this path is correct
              alt="ArIA automating a pharmacy order system"
              className="w-full h-[450px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <motion.div
              className="absolute bottom-6 left-6 right-6 sm:left-6 sm:right-auto bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-xl px-5 py-3 shadow-md flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <span className="text-xl font-bold text-gray-800 dark:text-slate-100">80% Faster</span>
              <span className={`py-1 px-3 bg-blue-100 text-blue-600 text-sm rounded-full`}>
                Processing Time
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}