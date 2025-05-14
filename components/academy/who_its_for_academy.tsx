// WhoItsForSection.jsx
"use client"

import React from "react";
import { motion } from "framer-motion";

const personas = [
  {
    role: "Sales Teams",
    text: "Practice objection handling, elevator pitches or customer discovery through realistic AI-driven dialogs.",
    accent: "indigo",
  },
  {
    role: "Customer Support",
    text: "Develop empathy, tone modulation and escalation management to resolve complex customer issues efficiently.",
    accent: "emerald",
  },
  {
    role: "HR & People Ops",
    text: "Simulate hiring interviews, policy discussions, and onboarding sessions with your tailored guidelines.",
    accent: "rose",
  },
  {
    role: "Trainers & Coaches",
    text: "Create, assign, and review customized scenarios—focus on impact, not setup.",
    accent: "amber",
  },
  {
    role: "Whatever you need",
    text: "Whatever situation you can think of, we can make it happen!",
    accent: "teal",
  },
];

export default function WhoItsForSection() {
  const getAccentClasses = (accentName) => {
    if (accentName === 'teal') {
      return {
        textLight: 'text-arised-accent-teal-light', // Mapped to --arised-accent-teal-light
        bgMain: 'bg-arised-accent-teal',          // Mapped to --arised-accent-teal
        cardBg: 'bg-teal-50', // Standard Tailwind light shade for card BG
                                // Could be a CSS var like --arised-accent-teal-50 if defined
      };
    }
    // For other accents, use standard Tailwind classes.
    // These can be mapped to CSS variables if your Arised palette expands.
    return {
      textLight: `text-${accentName}-200`,
      bgMain: `bg-${accentName}-500`,
      cardBg: `bg-${accentName}-50`, // e.g., bg-indigo-50
    };
  };

  return (
    <section className="relative bg-gradient-to-b from-arised-neutral-bg-white to-arised-neutral-bg-light py-24 overflow-hidden">
      {/* Decorative shapes with slightly increased opacity on view */}
      <motion.div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-[600px] h-[600px] bg-indigo-100 rounded-full -z-0"
        // Standard Tailwind bg-indigo-100. Can be variabalized to --arised-decorative-indigo-100.
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.15 }} // Opacity increased from 0.1 to 0.15
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-pink-100 rounded-full -z-0"
        // Standard Tailwind bg-pink-100. Can be variabalized to --arised-decorative-pink-100.
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.15 }} // Opacity increased from 0.1 to 0.15
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section heading now uses primary brand color */}
          <h2 className="text-4xl font-extrabold text-arised-primary-blue sm:text-5xl">Who We’re For</h2>
          <p className="mt-4 text-base text-arised-neutral-text-secondary max-w-2xl mx-auto">
            Arised Academy tailors hyper-real conversational training to every function—no fluff, just focus.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"> {/* Adjusted gap slightly */}
          {personas.map((item, idx) => {
            const accentClasses = getAccentClasses(item.accent);
            return (
              <motion.div
                key={item.role}
                className={`relative flex flex-col p-6 ${accentClasses.cardBg} rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.2, duration: 0.7, type: "spring", stiffness: 200, damping: 25 }}
              >
                <span
                  className={`absolute -top-3 -right-3 text-5xl font-bold ${accentClasses.textLight} opacity-30 select-none`}
                  // Adjusted size and position of the number, and opacity
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-semibold text-arised-neutral-text mb-2">{item.role}</h3>
                <p className="text-base text-arised-neutral-text-secondary leading-snug mb-4">{item.text}</p>
                <motion.div
                  className={`mt-auto h-1.5 w-16 origin-left rounded-full ${accentClasses.bgMain}`}
                  // Slightly thicker accent line
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: idx * 0.2 + 0.3, duration: 0.6 }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}