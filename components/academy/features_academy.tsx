// PlatformFeaturesSection.jsx
"use client";

import React from "react";
import {
  LayoutDashboard,
  FileStack,
  UserCheck,
  BarChart3,
  Sparkle,
  Layers,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: LayoutDashboard,
    title: "Admin Dashboard",
    description:
      "Assign scenarios, monitor usage, and manage training sessions across teams from one sleek interface.",
    accent: "indigo",
  },
  {
    icon: FileStack,
    title: "Scenario Library",
    description:
      "Choose proven conversation templates or craft your own with custom tone and workflows.",
    accent: "emerald",
  },
  {
    icon: UserCheck,
    title: "Learner Tracking",
    description:
      "Visualize individual progress, completion rates, and improvement trends in real time.",
    accent: "rose",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description:
      "Dive into metrics on conversation quality, confidence, and behavioral insights.",
    accent: "amber",
  },
  {
    icon: Sparkle,
    title: "AI Feedback Engine",
    description:
      "Receive instant, intelligent feedback on clarity, empathy, tone, and intent.",
    accent: "blue",
  },
  {
    icon: Layers,
    title: "Roles & Permissions",
    description:
      "Set granular author, assign, and report-view permissions for enterprise scale.",
    accent: "teal",
  },
];

export default function PlatformFeaturesSection() {
  return (
    <section className="relative bg-gradient-to-b from-pink-50 to-indigo-50 py-28 overflow-hidden">
      {/* top wave to blend from BenefitsComparisonSection (which ends on pink-50) */}
      <svg
        className="absolute top-0 left-0 w-full h-24"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#FADADD"
          d="M0,160 C480,200 960,120 1440,160 L1440,0 L0,0 Z"
        />
      </svg>

      {/* background blurred shapes */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-25 -z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute top-1/4 right-0 w-80 h-80 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      />
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md h-96 bg-violet-100 rounded-t-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            Platform Features That Power It All
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Arised Academy isn’t just smart—it’s engineered to scale and delight
            every user.
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
              transition={{
                delay: idx * 0.2,
                duration: 0.8,
                type: "spring",
                stiffness: 220,
                damping: 20,
              }}
            >
              <div
                className={`mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-${accent}-100 text-${accent}-600`}
              >
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {title}
              </h3>
              <p className="text-gray-600 flex-grow leading-relaxed mb-6">
                {description}
              </p>
              <motion.div
                className={`h-1 w-16 rounded-full bg-${accent}-500 self-start`}
                whileHover={{ scaleX: 1.5 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: idx * 0.2 + 0.3,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
