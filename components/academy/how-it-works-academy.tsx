// ./components/academy/how-it-works-academy.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Design Realistic Scenarios",
    text: "Work with us to create impactful dialog challenges—built from your real data or designed fresh for your goals.",
    accent: "indigo", // Kept for data structure consistency if needed elsewhere
  },
  {
    title: "Practice Through Live AI Simulations",
    text: "Step into immersive, AI-powered role plays. Adapt in real time and build confidence until it feels second nature.",
    accent: "gray-900",
  },
  {
    title: "Get Actionable Feedback",
    text: "Access instant insights on communication style, clarity, and empathy—so your team knows exactly where to improve.",
    accent: "rose",
  },
  {
    title: "Scale with Confidence",
    text: "Deploy across teams effortlessly. Track skill development with intuitive dashboards and continuously optimize results.",
    accent: "amber",
  },
];

export default function HowItWorksAcademySection() {
  return (
    <section className="relative py-24 md:py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <svg className="w-full h-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="roadmapGradFinal" x1="0%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#EFF6FF" /> {/* Tailwind blue-50 */}
              <stop offset="100%" stopColor="#FFFFFF" /> {/* White */}
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#roadmapGradFinal)" />
          <circle cx="20%" cy="30%" r="250" fill="#2563EB" opacity="0.03" /> {/* blue-600 */}
          <circle cx="85%" cy="65%" r="350" fill="#2563EB" opacity="0.04" /> {/* blue-600 */}
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-blue-600 text-center mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          How Arised Academy Elevates Your Team
        </motion.h2>
        <motion.p
          className="mb-12 sm:mb-16 text-center text-lg text-gray-500 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Transform learning into real-world performance with interactive simulations and measurable growth.
        </motion.p>

        <div className="relative pt-8">
          {/* Timeline spine: Adjusted top/bottom and added gradient */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2
                       top-20 bottom-20  /* Starts 5rem from top, ends 5rem from bottom */
                       w-1.5 bg-gradient-to-b from-blue-200 to-blue-400 /* Gradient */
                       rounded-full z-0"
          />

          {steps.map((step, idx) => {
            const isLeft = idx % 2 === 0;
            const cardAccentBorderClass = 'border-blue-600';
            return (
              <motion.div
                key={step.title}
                className="relative mb-16 flex justify-between items-center w-full"
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: idx * 0.25, duration: 0.6, type: "spring", stiffness: 120, damping: 18 }}
              >
                <div className={`w-full sm:w-5/12 ${isLeft ? "sm:mr-auto" : "sm:ml-auto"}`}>
                  <div
                    className={`bg-white p-6 sm:p-8 rounded-3xl shadow-xl hover:shadow-2xl
                                transition-shadow duration-300 ease-in-out border-l-4 ${cardAccentBorderClass}`}
                  >
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">{step.title}</h3>
                    <p className="text-base text-gray-500 leading-relaxed">{step.text}</p>
                  </div>
                </div>

                <div
                  className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
                              bg-white w-12 h-12 sm:w-14 sm:h-14 rounded-full
                              flex items-center justify-center shadow-lg
                              border-2 sm:border-3 border-blue-600 z-20`}
                >
                  <span className={`text-lg sm:text-xl font-bold text-blue-600`}>
                    {idx + 1}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}