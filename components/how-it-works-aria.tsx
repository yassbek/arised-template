"use client"
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

export default function HowItWorksSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white to-blue-50 py-32">
      {/* Subtle geometric background */}
      <div className="absolute inset-0 -z-10">
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M20 0 L0 0 0 20" fill="none" stroke="rgba(203,213,225,0.3)" strokeWidth="1"/>
            </pattern>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <rect width="100" height="100" fill="url(#smallGrid)"/>
              <path d="M100 0 L0 0 0 100" fill="none" stroke="rgba(203,213,225,0.6)" strokeWidth="2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-extrabold text-gray-900">
            How ArIA Works
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            From insight to automation—here’s how we transform your workflow.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central gradient spine */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-300 to-indigo-300 transform -translate-x-1/2" />

          {/* Steps */}
          <div className="space-y-24">
            {steps.map((step, idx) => {
              const isLeft = idx % 2 === 0;
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  className={`
                    relative flex items-center
                    ${isLeft ? "justify-start pl-32 text-left" : "justify-end pr-32 text-right"}
                  `}
                  initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                >
                  {/* Icon badge */}
                  <motion.div
                    className="absolute left-1/2 top-4 transform -translate-x-1/2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.3 + idx * 0.2 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center shadow-2xl ring-4 ring-white"
                    >
                      <Icon className="w-10 h-10" />
                    </motion.div>
                  </motion.div>

                  {/* Content block with expanded spacing */}
                  <div className={`
                    w-1/3
                    ${isLeft ? "sm:mr-48" : "sm:ml-48"}
                  `}> 
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
