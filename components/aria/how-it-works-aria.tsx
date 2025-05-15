// components/HowItWorksSection.jsx
"use client";
import React from "react";
import { Search, Settings, Zap } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Search,
    title: "Observe",
    text: "We analyze your workflows and applications, uncovering repetitive tasks. Collaborative workshops ensure even the most complex cases are covered.",
  },
  {
    icon: Settings,
    title: "Build",
    text: "Our experts configure ArIA with your business logic, training it to interact visually and think through each process.",
  },
  {
    icon: Zap,
    title: "Deploy",
    text: "Launch your agent in autonomous or co-pilot mode, with real-time monitoring, versioning, and rollback support.",
  },
];

// Consistent blue theme colors
const themeBlue = {
  main: "#2563EB",    // Tailwind blue-600
  light: "#3B82F6",   // Tailwind blue-500
  lighter: "#60A5FA", // Tailwind blue-400
  dark: "#1D4ED8",    // Tailwind blue-700
  bgLight: "#DBEAFE", // Tailwind blue-100
  // For dark mode gradient end, let's use a standard Tailwind dark blue
  // blue900: "#1E3A8A", // (actual Tailwind blue-900)
};

export default function HowItWorksSection() {
  return (
    <section className={`
      relative overflow-hidden py-24 md:py-32
      bg-[linear-gradient(to_bottom,theme(colors.slate.50)_0%,theme(colors.slate.50)_50%,theme(colors.blue.100)_100%)]
      dark:bg-[linear-gradient(to_bottom,theme(colors.slate.900)_0%,theme(colors.slate.900)_50%,theme(colors.blue.900)_100%)]
    `}>
      {/* Subtle geometric background pattern */}
      <div className="absolute inset-0 -z-10">
        <svg
          className="w-full h-full text-slate-300/70 dark:text-slate-700/50"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="howItWorksGrid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M30 0 L0 0 0 30" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#howItWorksGrid)" />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-slate-100 mb-10"> {/* Keep original structural text colors or remove them */}
            <span className="text-blue-600 dark:text-blue-400">How ArIA Works</span>
          </h2>
          {/* MODIFIED: Wrapped p tag in a styled div to create a box */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 dark:text-slate-300 leading-relaxed text-left md:text-justify"> {/* MODIFIED: Adjusted classes on p tag */}
              ArIA transforms your workflow by identifying manual, repetitive tasks and replacing them with intelligent automation.
              It starts by analyzing how your teams interact with existing software to uncover inefficiencies. Then, using advanced
              AI, ArIA learns to navigate and operate these systems just like a human—clicking through interfaces, entering data,
              and executing tasks automatically. There’s no need to replace or modify your current software. Once deployed, ArIA
              works reliably in the background, reducing errors, saving time, and allowing your teams to focus on higher-value
              work.
            </p>
          </div>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-1.5 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 transform -translate-x-1/2 rounded-full" />
          <div className="space-y-16 lg:space-y-0">
            {steps.map((step, idx) => {
              const isLeftAlignedOnDesktop = idx % 2 === 0;
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  className={`w-full lg:relative lg:flex items-center ${isLeftAlignedOnDesktop ? 'lg:justify-start' : 'lg:justify-end'} lg:mb-24 last:lg:mb-0`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <motion.div
                    className="relative lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 mx-auto lg:mx-0 mb-6 lg:mb-0 z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ type: "spring", stiffness: 220, damping: 18, delay: 0.2 + idx * 0.15 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 6 }}
                      className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-full flex items-center justify-center shadow-xl ring-4 ring-slate-50 dark:ring-slate-800"
                    >
                      <Icon className="w-8 h-8 md:w-10 md:h-10" />
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className={`
                      w-full max-w-md lg:max-w-none lg:w-[calc(50%-4rem)]
                      bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-xl 
                      hover:shadow-2xl transition-shadow duration-300
                    `}
                    initial={{ opacity: 0, x: isLeftAlignedOnDesktop ? -40 : 40, y: 10 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.1 + idx * 0.15, ease: "easeOut" }}
                  >
                    <div className={`text-center ${isLeftAlignedOnDesktop ? 'lg:text-left' : 'lg:text-right'}`}>
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-slate-100 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                        {step.text}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}