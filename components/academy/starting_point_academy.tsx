// StartingPointSection.jsx
"use client";
import React from "react";
import { FolderCheck, Sparkles } from "lucide-react"; // Assuming lucide-react is installed
import { motion } from "framer-motion"; // Assuming framer-motion is installed

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
      accent: "indigo", // Standard Tailwind accent
      link: {
        text: "Browse Scenario Library →",
        action: undefined, // Or a placeholder function: () => console.log("Browse Library")
      },
    },
    {
      title: "Tailor to Your Company",
      description:
        "Design custom dialogs aligned to your tone, processes, and goals—perfect for policies, onboarding, or niche training.",
      icon: Sparkles,
      accent: "pink", // Standard Tailwind accent
      link: {
        text: "See How It Works →",
        action: onScrollToHowItWorks,
      },
    },
  ];

  const getOptionAccentClasses = (accentName) => {
    return {
      cardBg: `bg-${accentName}-50`,
      borderMain: `border-${accentName}-500`,
      iconBg: `bg-${accentName}-100`,
      textMain: `text-${accentName}-600`,
    };
  };

  return (
    <section className="relative bg-gradient-to-b from-arised-neutral-bg-light to-arised-neutral-bg-white py-28">
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-arised-primary-blue">
            Get Started — Your Way
          </h2>
          <p className="mt-4 text-lg text-arised-neutral-text-secondary max-w-2xl mx-auto">
            Arised Academy gives you the flexibility to train teams rapidly—pick
            ready-made content or customize everything to your exact needs.
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2">
          {options.map(({ title, description, icon: Icon, accent, link }, idx) => {
            const accentClasses = getOptionAccentClasses(accent);
            return (
              <motion.div
                key={title}
                className={`relative ${accentClasses.cardBg} rounded-2xl border border-arised-neutral-border p-8 
                            shadow-lg hover:shadow-2xl hover:-translate-y-2 transform 
                            transition-all duration-300 ease-in-out 
                            border-l-4 ${accentClasses.borderMain}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: idx * 0.2, duration: 0.8, type: "spring", stiffness: 210 }}
              >
                <div className={`flex items-center justify-center w-12 h-12 rounded-full ${accentClasses.iconBg} mb-4`}>
                  <Icon className={`w-6 h-6 ${accentClasses.textMain}`} />
                </div>
                <h3 className="text-2xl font-semibold text-arised-neutral-text mb-2">{title}</h3>
                <p className="text-arised-neutral-text-secondary leading-relaxed mb-6">{description}</p>
                <a
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    if (link.action) {
                        link.action();
                    } else {
                        console.log(`Link clicked: ${link.text}`);
                    }
                  }}
                  className={`inline-block ${accentClasses.textMain} font-medium hover:underline cursor-pointer group`}
                >
                  {link.text}
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom wave to blend into the next section (e.g., Roadmap) */}
      <svg
        className="absolute bottom-0 left-0 w-full h-32 -mb-px"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="#EFF6FF" // Tailwind blue-50. Consider making this a CSS variable.
          d="M0,64 C320,96 1120,32 1440,64 L1440,120 L0,120 Z"
        />
      </svg>
    </section>
  );
}