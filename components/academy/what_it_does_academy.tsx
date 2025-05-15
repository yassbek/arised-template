// WhatItDoesSection.jsx
"use client"

import React from "react";
import { Brain, MessageCircle, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Simulates Real Conversations",
    description:
      "Train employees with AI-powered dialogs that feel human. Every conversation is dynamic, contextual, and immersive.",
    icon: MessageCircle,
  },
  {
    title: "Builds Real Skills",
    description:
      "Instant feedback, smart scoring, and performance-based coaching help employees grow with every session.",
    icon: Brain,
  },
  {
    title: "Custom to Your Company",
    description:
      "From sales to HR – we tailor scenarios to match your real-life needs, tone, and business workflows.",
    icon: Wrench,
  },
];

export default function WhatItDoesSection() {
  return (
    <section className="relative py-24">
      {/* background gradient behind everything */}
      {/* This gradient starts from gray-50, which matches the end of the previous section */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white -z-10" />

      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl sm:text-5xl font-extrabold text-slate-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Unlock Real-World Communication Skills with AI-Powered Training
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            From sales calls to crisis management—equip your teams to handle any conversation with confidence and clarity.
          </motion.p>
        </div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, description, icon: Icon }) => (
            <motion.div
              key={title}
              className="group relative flex flex-col items-start rounded-2xl bg-white/80 backdrop-blur-md p-8 ring-1 ring-transparent transition-all"
              whileHover={{ y: -8, boxShadow: "0 10px 15px rgba(0,0,0,0.1)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                className="flex h-14 w-14 items-center justify-center rounded-lg bg-blue-50 text-blue-600 mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon className="h-7 w-7" />
              </motion.div>
              <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
              <span className="block w-12 h-0.5 bg-blue-500 my-4" aria-hidden="true" />
              <p className="text-slate-600 leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}