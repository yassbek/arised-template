"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Banknote,
  FileText,
  HeartPulse,
  Settings,
  Layers,
} from "lucide-react";

const industries = [
  {
    title: "Pharmacies & Healthcare",
    description:
      "From order entry to document management – ArIA eliminates repetitive tasks in regulated environments.",
    icon: HeartPulse,
  },
  {
    title: "Finance & Insurance",
    description:
      "Automate claim processing, back-office operations, and compliance workflows without touching legacy code.",
    icon: Banknote,
  },
  {
    title: "Public Sector",
    description:
      "Modernize slow government systems with AI-driven assistance that respects process constraints.",
    icon: Building2,
  },
  {
    title: "Manufacturing & Industry",
    description:
      "Streamline ERP inputs, reporting tasks, and equipment interfaces across legacy environments.",
    icon: Settings,
  },
  {
    title: "Back Office & Admin",
    description:
      "Free your teams from screens by automating UI-heavy workflows like data entry and reconciliation.",
    icon: FileText,
  },
  {
    title: "Custom & Hybrid",
    description:
      "Tailored workflows, seamless integrations, and dedicated support to fit your exact process requirements.",
    icon: Layers,
  },
];

// Consistent blue theme colors (ensure these are consistent with other files or imported)
const themeBlue = {
  main: "#2563EB",    // Tailwind blue-600
  light: "#3B82F6",   // Tailwind blue-500
  lighter: "#60A5FA", // Tailwind blue-400
  dark: "#1D4ED8",    // Tailwind blue-700
  bgLight: "#DBEAFE", // Tailwind blue-100
  // Darker blues for dark mode accents if needed
  darker: "#1E3A8A", // Tailwind blue-900
  darkest: "#1E293B" //に近い slate-800 or a very dark blue
};


export default function WhoItsForSection() {
  return (
    // Seamless background: white for light, slate-900 for dark
    <section className="relative overflow-hidden bg-white dark:bg-slate-900 py-24 md:py-32">
      {/* Parallax background blobs - Themed Blue */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 bg-blue-100 dark:bg-blue-800 rounded-full opacity-30 dark:opacity-20 mix-blend-multiply dark:mix-blend-normal filter blur-3xl"
        initial={{ x: -150, y: -150, scale: 0.8 }}
        animate={{ x: 0, y: 0, scale: 1 }}
        transition={{ duration: 1.5, ease: "circOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -right-24 w-80 h-80 bg-blue-200 dark:bg-blue-700 rounded-full opacity-30 dark:opacity-10 mix-blend-multiply dark:mix-blend-normal filter blur-3xl"
        initial={{ x: 150, y: 150, scale: 0.8 }}
        animate={{ x: 0, y: 0, scale: 1 }}
        transition={{ duration: 1.5, ease: "circOut", delay: 0.2 }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-16 md:mb-20 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-slate-100 leading-tight">
          For Teams Stuck in Outdated Software Loops
          </h2>
          {/* Themed decorative line */}
          <div className="mt-6 h-1.5 w-28 mx-auto bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" />
          <p className="mt-8 text-lg text-gray-600 dark:text-slate-300">
          ArIA frees your workforce from clunky UIs and manual processes—turning complexity into effortless automation.
          </p>
        </motion.div>

        {/* Industry grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {industries.map(({ title, description, icon: Icon }, idx) => (
            <motion.div
              key={title}
              className="relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg rounded-2xl p-6 md:p-8 
                         border border-slate-200/50 dark:border-slate-700/50 
                         shadow-lg hover:shadow-xl transition-all duration-300 ease-out 
                         transform hover:-translate-y-1 flex flex-col" // Added flex flex-col for consistent layout if needed
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 18,
                delay: idx * 0.07,
              }}
            >
              <motion.div
                // Themed icon container
                className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white mb-6 mx-auto shadow-lg"
                whileHover={{ scale: 1.1, rotate: 8 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <Icon className="w-7 h-7 md:w-8 md:h-8" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-slate-100 text-center mb-3">
                {title}
              </h3>
              <p className="text-gray-600 dark:text-slate-400 text-center leading-relaxed text-sm flex-grow mb-6">
                {description}
              </p>
              {/* Themed decorative line in card */}
              <div className="mt-auto h-1 w-10 mx-auto bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative diagonal footer - Themed Blue */}
      {/* This SVG will create a colored shape at the bottom.
          If the NEXT section is also white/slate-900, this shape will seem to cut into this section.
          If the NEXT section is a different color, this will be a transition shape.
      */}
      <svg
        className="absolute bottom-0 left-0 w-full h-16 md:h-24 text-blue-100 dark:text-blue-900/30" // Adjusted dark mode for subtlety
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
        fill="currentColor"
      >
        <path d="M0,0 L1200,0 L0,120 Z" />
      </svg>
    </section>
  );
}