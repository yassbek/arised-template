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
    themeColors: { // Blue Theme
      main: "#2563EB",     // Tailwind blue-600 (example)
      bgLight: "#DBEAFE",  // Tailwind blue-100 (example)
    },
  },
  {
    icon: LightningBolt,
    title: "Executes Intelligent Workflows",
    description:
      "From form-filling to file handling, ArIA completes processes with logic, memory, and reasoning.",
    themeColors: { // Changed to Blue Theme
      main: "#2563EB",     // Tailwind blue-600 (example)
      bgLight: "#DBEAFE",  // Tailwind blue-100 (example)
    },
  },
  {
    icon: ArrowUpRight,
    title: "Scales Without Chaos",
    description:
      "Deploy once and automate across teams and tools—ArIA adapts with minimal config and complete transparency.",
    themeColors: { // Changed to Blue Theme
      main: "#2563EB",     // Tailwind blue-600 (example)
      bgLight: "#DBEAFE",  // Tailwind blue-100 (example)
    },
  },
];

export default function FeaturesSection() {
  return (
    <section
      className="relative py-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900 -z-10" />

      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-slate-50">
            Let ArIA Do the Clicking, Typing,&nbsp;Waiting, and Thinking
          </h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-slate-300 max-w-3xl mx-auto">
            ArIA intelligently automates legacy software workflows—no APIs, no limits.
            Here’s how it makes your life easier.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(({ icon: Icon, title, description, themeColors }, idx) => (
            <motion.div
              key={title}
              className={`
                group bg-white dark:bg-slate-800
                rounded-2xl
                p-8
                shadow-lg
                transition-all duration-300 ease-out
                flex flex-col h-full
                hover:shadow-xl
              `}
              style={{
                '--card-main-color': themeColors.main,
                '--card-bg-light': themeColors.bgLight,
              }}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: idx * 0.1,
                duration: 0.5,
                type: "spring",
                stiffness: 120,
                damping: 15
              }}
            >
              <div className="flex flex-col h-full">
                <div
                  className="
                    inline-flex items-center justify-center w-12 h-12 rounded-full mb-6
                    bg-[var(--card-bg-light)] text-[var(--card-main-color)]
                    transition-transform duration-300 ease-out
                    group-hover:scale-110
                    flex-shrink-0
                  "
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-slate-100 mb-3 flex-shrink-0">
                  {title}
                </h3>
                <p className="text-gray-600 dark:text-slate-300 flex-grow leading-relaxed text-base mb-6">
                  {description}
                </p>
                <div className="mt-auto pt-2 flex-shrink-0">
                  <motion.div
                    className="h-1.5 w-12 rounded-full bg-[var(--card-main-color)]"
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1, originX: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 180,
                      damping: 15,
                      delay: idx * 0.1 + 0.3,
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}