// components/FeaturesSection.jsx
"use client";
import React from "react";
import { CloudLightning as LightningBolt, Monitor, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Monitor,
    title: "Understands Complex Interfaces",
    description:
      "ArIA reads visual layouts and UI elements just like a human—no structured data or APIs needed.",
    themeColors: { // Primary Blue Theme
      main: "#2563EB",    // For borders, lines, icon text
      bgLight: "#EFF6FF", // For icon background
    },
  },
  {
    icon: LightningBolt,
    title: "Executes Intelligent Workflows",
    description:
      "From form-filling to file handling, ArIA completes processes with logic, memory, and reasoning.",
    themeColors: { // Accent Teal Theme
      main: "#14B8A6",
      bgLight: "#F0FDFA",
    },
  },
  {
    icon: ArrowUpRight,
    title: "Scales Without Chaos",
    description:
      "Deploy once and automate across teams and tools—ArIA adapts with minimal config and complete transparency.",
    themeColors: { // Primary Blue Theme (for consistency)
      main: "#2563EB",
      bgLight: "#EFF6FF",
    },
  },
];

export default function FeaturesSection() {
  return (
    // SECTION BACKGROUND: Gradient from transparent over 150px, then solid slate-100
    <section
      className="relative py-24 overflow-hidden
                 bg-[linear-gradient(to_bottom,transparent_0px,theme(colors.slate.100)_150px,theme(colors.slate.100)_100%)]
                 dark:bg-[linear-gradient(to_bottom,transparent_0px,theme(colors.slate.800)_150px,theme(colors.slate.800)_100%)]"
    >
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1F2937] dark:text-slate-100">
            Let ArIA Do the Clicking, Typing,&nbsp;Waiting, and Thinking
          </h2>
          <p className="mt-6 text-lg text-[#6B7280] dark:text-slate-400 max-w-2xl mx-auto">
            ArIA intelligently automates legacy software workflows—no APIs, no limits.
            Here’s how it makes your life easier.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map(({ icon: Icon, title, description, themeColors }, idx) => (
            <motion.div
              key={title}
              className={`relative bg-white dark:bg-slate-850 rounded-2xl p-8 shadow-lg hover:shadow-2xl border-t-4 dark:border-[${themeColors.main}] transition-shadow flex flex-col h-full`}
              style={{ borderColor: themeColors.main }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.2, duration: 0.8, type: "spring", stiffness: 220, damping: 25 }}
            >
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-6"
                style={{ backgroundColor: themeColors.bgLight, color: themeColors.main }}
              >
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#1F2937] dark:text-slate-100 mb-3">{title}</h3>
              <p className="text-[#6B7280] dark:text-slate-400 flex-grow leading-relaxed mb-6">{description}</p>
              <motion.div
                className="h-1 w-16 rounded-full"
                style={{ backgroundColor: themeColors.main }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                whileHover={{ scaleX: 1.5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: idx * 0.2 + 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}