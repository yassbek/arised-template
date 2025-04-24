"use client"
import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Define Scenarios",
    text: "Collaborate to craft dynamic dialog challenges—leverage your data or create from scratch.",
    accent: "indigo",
  },
  {
    title: "Train in Simulation",
    text: "Dive into AI-powered role play—adapt to live responses until it feels real.",
    accent: "gray-900",
  },
  {
    title: "Receive Insights",
    text: "Unlock instant analytics on tone, clarity, and empathy for targeted coaching.",
    accent: "rose",
  },
  {
    title: "Scale & Measure",
    text: "Roll out across teams, monitor progress with dashboards, and optimize continuously.",
    accent: "amber",
  },
];

export default function RoadmapSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Cool SVG background */}
      <div className="absolute inset-0 -z-10">
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E0E7FF" />
              <stop offset="100%" stopColor="#FADADD" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grad1)" />
          <circle cx="20%" cy="30%" r="200" fill="#D8B4FE" opacity="0.3" />
          <circle cx="80%" cy="70%" r="300" fill="#FED7AA" opacity="0.3" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-5xl font-extrabold text-gray-900 text-center mb-6 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Your Training Roadmap
        </motion.h2>
        <motion.p
          className="mb-16 text-center text-lg text-gray-700 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Choose our plug-and-play scenario library or opt for a fully personalized design service—either way, your roadmap aligns perfectly with your objectives.
        </motion.p>

        <div className="relative">
          {/* Central timeline spine */}
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-2 bg-gradient-to-b from-indigo-400 via-purple-400 to-pink-400 rounded-full opacity-80" />

          {steps.map((step, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <motion.div
                key={step.title}
                className="relative mb-24 flex justify-between items-center"
                initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.3, duration: 0.7 }}
              >
                {/* Content Card */}
                <div
                  className={
                    `w-full sm:w-5/12 bg-white p-8 rounded-3xl shadow-2xl border-l-4 border-${step.accent}-500 ` +
                    (isLeft ? 'mr-auto text-left' : 'ml-auto text-left')
                  }
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {step.text}
                  </p>
                </div>

                {/* Marker */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg border-4 border-gray-100">
                  <span className={`text-xl font-bold text-${step.accent}-500`}>{idx + 1}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
