"use client"
import React from "react";
import { CloudLightning as LightningBolt, Monitor, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Monitor,
    title: "Understands Complex Interfaces",
    description:
      "ArIA reads visual layouts and UI elements just like a human—no structured data or APIs needed.",
    accent: "indigo",
  },
  {
    icon: LightningBolt,
    title: "Executes Intelligent Workflows",
    description:
      "From form-filling to file handling, ArIA completes processes with logic, memory, and reasoning.",
    accent: "emerald",
  },
  {
    icon: ArrowUpRight,
    title: "Scales Without Chaos",
    description:
      "Deploy once and automate across teams and tools—ArIA adapts with minimal config and complete transparency.",
    accent: "rose",
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-gray-100 py-24 overflow-hidden">
      {/* Abstract SVG background shapes */}
      <motion.div
        className="absolute top-0 left-1/4 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute bottom-0 right-1/3 w-80 h-80 bg-violet-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            Let ArIA Do the Clicking, Typing,&nbsp;Waiting, and Thinking
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            ArIA intelligently automates legacy software workflows—no APIs, no limits.
            Here’s how it makes your life easier.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map(({ icon: Icon, title, description, accent }, idx) => (
            <motion.div
              key={title}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-t-4 border-${accent}-500 transition-shadow flex flex-col h-full`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.2, duration: 0.8, type: "spring", stiffness: 220, damping: 25 }}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-${accent}-100 text-${accent}-600 mb-4`}> 
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-700 flex-grow leading-relaxed mb-6">{description}</p>
              <motion.div
                className={`h-1 w-16 rounded-full bg-${accent}-500`}
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
