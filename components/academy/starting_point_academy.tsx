// StartingPointSection.jsx
"use client";
import React from "react";
import { FolderCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

type StartingPointSectionProps = {
  onScrollToHowItWorks: () => void;
};

export default function StartingPointSection({ onScrollToHowItWorks }: StartingPointSectionProps) {
  const options = [
    {
      title: "Choose from Predefined Scenarios",
      description:
        "Access our curated library of proven training dialogs—sales, support, HR, and more—ready to deploy in minutes.",
      icon: FolderCheck,
      accent: "indigo",
      link: {
        text: "Browse Scenario Library →",
        action: undefined,
      },
    },
    {
      title: "Tailor to Your Company",
      description:
        "Design custom dialogs aligned to your tone, processes, and goals—perfect for policies, onboarding, or niche training.",
      icon: Sparkles,
      accent: "pink",
      link: {
        text: "See How It Works →",
        action: onScrollToHowItWorks,
      },
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-blue-200 to-blue-50 py-28">
      {/* content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            Get Started — Your Way
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Arised Academy gives you the flexibility to train teams rapidly—pick
            ready-made content or customize everything to your exact needs.
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2">
          {options.map(({ title, description, icon: Icon, accent, link }, idx) => (
            <motion.div
              key={title}
              className={`relative bg-white rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-2xl transition-shadow border-l-4 border-${accent}-500`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.3, duration: 0.8, type: "spring", stiffness: 210 }}
            >
              <div className={`flex items-center justify-center w-12 h-12 rounded-full bg-${accent}-100 mb-4`}>
                <Icon className={`w-6 h-6 text-${accent}-600`} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
              <a
                onClick={e => {
                  e.preventDefault();
                  link.action?.();
                }}
                className={`inline-block text-${accent}-600 font-medium hover:underline cursor-pointer`}
              >
                {link.text}
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* bottom wave to blend into Roadmap */}
      <svg
        className="absolute bottom-0 left-0 w-full h-32"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#EFF6FF"
          fillOpacity="1"
          d="M0,160 C320,200 1120,120 1440,160 L1440,320 L0,320 Z"
        />
      </svg>
    </section>
);
}
