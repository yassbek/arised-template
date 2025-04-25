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

export default function WhoItsForSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 to-white py-32">
      {/* Parallax background blobs */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-200 rounded-full opacity-20 mix-blend-multiply filter blur-3xl"
        initial={{ x: -200, y: -200 }}
        animate={{ x: 0, y: 0 }}
        transition={{ duration: 1.2 }}
      />
      <motion.div
        className="absolute -bottom-32 -right-24 w-80 h-80 bg-blue-200 rounded-full opacity-20 mix-blend-multiply filter blur-3xl"
        initial={{ x: 200, y: 200 }}
        animate={{ x: 0, y: 0 }}
        transition={{ duration: 1.2 }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-20 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Who ArIA Empowers
          </h2>
          <div className="mt-4 h-1 w-32 mx-auto bg-gradient-to-r from-blue-500 to-indigo-500 rounded" />
          <p className="mt-6 text-lg text-gray-700">
            ArIA transforms cumbersome UI-based software into modern, efficient
            experiences for any team.
          </p>
        </motion.div>

        {/* Industry grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {industries.map(({ title, description, icon: Icon }, idx) => (
            <motion.div
              key={title}
              className="relative bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
              initial={{ opacity: 0, scale: 0.9, rotate: idx % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              whileHover={{ scale: 1.05, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: idx * 0.1 + 0.2,
              }}
            >
              <motion.div
                className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white mb-6 mx-auto"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Icon className="w-8 h-8" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                {title}
              </h3>
              <p className="text-gray-700 text-center leading-relaxed">
                {description}
              </p>
              <div className="mt-6 h-1 w-12 mx-auto bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative diagonal footer */}
      <svg
        className="absolute bottom-0 left-0 w-full h-16 text-indigo-100"
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
        fill="currentColor"
      >
        <path d="M0,0 L1200,0 L0,120 Z" />
      </svg>
    </section>
  );
}
