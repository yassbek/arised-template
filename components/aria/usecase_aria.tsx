"use client"
import React from "react";
import { motion } from "framer-motion";
import { Package, Brain, Rocket } from "lucide-react";

const useCasePoints = [
  {
    icon: Package,
    title: "Challenge",
    text: "Staff were manually entering medicine orders into a legacy Windows system—prone to errors and delays. No API existed, automation seemed impossible.",
    accent: "indigo",
  },
  {
    icon: Brain,
    title: "Solution",
    text: "ArIA observed workflows, mimicked user actions, and added reasoning to handle edge cases—fully automating order entry via visual UI.",
    accent: "violet",
  },
  {
    icon: Rocket,
    title: "Result",
    text: "Order processing is now 80% faster and nearly error-free. Staff focus on customer care instead of clicking through outdated forms.",
    accent: "emerald",
  },
];

export default function UseCaseSection() {
  return (
    <section className="relative bg-gradient-to-tr from-gray-50 to-gray-100 py-24 overflow-hidden">
      {/* Background SVG pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0 L0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
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
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            From Pharmacy to Factory — ArIA Adapts
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
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
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow flex items-start"
              >
                <div
                  className={`flex-shrink-0 mr-6 p-3 rounded-lg bg-${accent}-100 text-${accent}-600`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{text}</p>
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
              src="/images/pharmacy-workflow.png"
              alt="ArIA automating a pharmacy order system"
              className="w-full h-[450px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <motion.div
              className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md rounded-xl px-5 py-3 shadow-md flex items-center space-x-4"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <span className="text-xl font-bold text-gray-900">80% Faster</span>
              <span className="py-1 px-3 bg-indigo-100 text-indigo-600 text-sm rounded-full">
                Processing Time
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}