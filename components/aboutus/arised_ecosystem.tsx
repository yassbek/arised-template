"use client";

import React from "react";
import { Bot, GraduationCap, Globe } from "lucide-react";
import { motion } from "framer-motion";

const initiatives = [
  {
    icon: Bot,
    title: "ArIA",
    description:
      "Our intelligent automation agent transforms legacy software into smart systems — without rewriting a single line of code.",
  },
  {
    icon: GraduationCap,
    title: "Arised Academy",
    description:
      "Train your team with AI-powered dialogs—Sales, Support, HR—fast, safe, and fully measurable.",
  },
  {
    icon: Globe,
    title: "Project Noor",
    description:
      "A global mission to bring AI-driven education to underserved regions. Because intelligence belongs everywhere.",
  },
];

export default function EcosystemSection() {
  return (
    <section
      id="ecosystem"
      className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50 py-32"
    >
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full opacity-30 filter blur-3xl transform -translate-x-1/2 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 rounded-full opacity-30 filter blur-3xl transform translate-x-1/3 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
            The{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Arised Ecosystem
            </span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded" />
          <p className="mt-6 text-lg text-gray-700">
            We unite automation, education, and global impact—powered by AI,
            guided by people.
          </p>
        </motion.div>

        {/* Initiative Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {initiatives.map(({ icon: Icon, title, description }, idx) => (
            <motion.div
              key={title}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white mb-4 mx-auto group-hover:scale-110 transition-transform">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-2 relative">
                {title}
                <span className="absolute left-1/2 bottom-0 block h-1 w-12 bg-gradient-to-r from-blue-400 to-indigo-400 rounded -translate-x-1/2" />
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
