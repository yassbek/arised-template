// PlatformFeaturesSection.jsx
"use client";

import React from "react";
import {
  LayoutDashboard,
  FileStack,
  UserCheck,
  BarChart3,
  Sparkles,
  Layers,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: LayoutDashboard,
    title: "Admin Dashboard",
    description:
      "Assign scenarios, monitor usage, and manage training sessions across teams from one sleek interface.",
    accent: "indigo", // This will be overridden by the blue theme for card accents
  },
  {
    icon: FileStack,
    title: "Scenario Library",
    description:
      "Choose proven conversation templates or craft your own with custom tone and workflows.",
    accent: "emerald", // This will be overridden by the blue theme for card accents
  },
  {
    icon: UserCheck,
    title: "Learner Tracking",
    description:
      "Visualize individual progress, completion rates, and improvement trends in real time.",
    accent: "rose", // This will be overridden by the blue theme for card accents
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description:
      "Dive into metrics on conversation quality, confidence, and behavioral insights.",
    accent: "amber", // This will be overridden by the blue theme for card accents
  },
  {
    icon: Sparkles,
    title: "AI Feedback Engine",
    description:
      "Receive instant, intelligent feedback on clarity, empathy, tone, and intent.",
    accent: "blue", // This will align with the new blue theme
  },
  {
    icon: Layers,
    title: "Roles & Permissions",
    description:
      "Set granular author, assign, and report-view permissions for enterprise scale.",
    accent: "teal", // This will be overridden by the blue theme for card accents
  },
];

export default function PlatformFeaturesSection() {
  // All feature cards will now use blue accents
  const getFeatureAccentClasses = (/* accentName - no longer used to vary colors */) => {
    return {
      borderMain: 'border-blue-600',      // Top border is blue-600
      iconBg: 'bg-blue-100',             // Icon background is blue-100
      iconText: 'text-blue-600',           // Icon text is blue-600
      lineBg: 'bg-blue-600',              // Bottom line is blue-600
    };
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-24 md:py-28 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-24 -mt-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="#F9FAFB" // gray-50
            d="M0,32 C480,96 960,0 1440,32 L1440,0 L0,0 Z"
          />
        </svg>
      </div>

      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.2, ease: "circOut" }}
      />
      <motion.div
        className="absolute top-1/4 -right-10 w-80 h-80 bg-sky-100 rounded-full mix-blend-multiply filter blur-3xl opacity-15 -z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "circOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-lg h-80 bg-blue-50 rounded-t-full mix-blend-screen filter blur-3xl opacity-20 -z-10"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 0.20, y: 0, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.4, ease: "circOut" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-600">
            Platform Features That Power It All
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            Arised Academy isn’t just smart—it’s engineered to scale and delight
            every user.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {features.map(({ icon: Icon, title, description, accent }, idx) => {
            // The 'accent' prop from the features array is now effectively ignored for styling purposes here,
            // as getFeatureAccentClasses always returns blue theme classes.
            const accentClasses = getFeatureAccentClasses(accent);
            return (
              <motion.div
                key={title}
                className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl border-t-4 ${accentClasses.borderMain} transition-shadow duration-300 ease-in-out flex flex-col h-full`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  delay: idx * 0.15,
                  duration: 0.7,
                  type: "spring",
                  stiffness: 180,
                  damping: 20,
                }}
              >
                <div
                  className={`mb-5 inline-flex items-center justify-center w-12 h-12 rounded-lg ${accentClasses.iconBg} ${accentClasses.iconText}`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                  {title}
                </h3>
                <p className="text-base text-gray-500 flex-grow leading-relaxed mb-6">
                  {description}
                </p>
                <motion.div
                  className={`h-1.5 w-16 rounded-full ${accentClasses.lineBg} self-start mt-auto`}
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount:0.4 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    delay: idx * 0.15 + 0.3,
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}