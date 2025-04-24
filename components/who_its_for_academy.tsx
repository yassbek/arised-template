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
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-24">
      {/* Abstract background shapes */}
      <motion.div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-[600px] h-[600px] bg-indigo-100 rounded-full opacity-10"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-pink-100 rounded-full opacity-10"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      />

      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-extrabold text-gray-900">
            Who We’re For
          </h2>
          <p className="mt-4 text-base text-gray-600 max-w-2xl mx-auto">
            Arised Academy tailors hyper-real conversational training to every
            function—no fluff, just focus.
          </p>
        </motion.div>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {personas.map((item, idx) => (
            <motion.div
              key={item.role}
              className="relative p-6 bg-white rounded-3xl transition-shadow hover:shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.2, duration: 0.7, type: 'spring', stiffness: 200, damping: 25 }}
            >
              {/* Decorative numeral watermark */}
              <span
                className={`absolute -top-4 -right-4 text-6xl font-bold text-${item.accent}-200 opacity-20 select-none`}  
              >
                {String(idx + 1).padStart(2, '0')}
              </span>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.role}
              </h3>
              <p className="text-gray-600 leading-snug">
                {item.text}
              </p>

              {/* Animated accent bar */}
              <motion.div
                className={`mt-4 h-1 w-16 origin-left rounded-full bg-${item.accent}-500`}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.2 + 0.3, duration: 0.6 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
