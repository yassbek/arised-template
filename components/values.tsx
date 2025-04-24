"use client";

import { HeartHandshake, Eye, Lightbulb, Users } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  {
    icon: HeartHandshake,
    title: "Human-First AI",
    description: (
      <>
        We build intelligent systems that <span className="text-blue-600 font-medium">amplify human potential</span> —
        not replace them. Every click, every conversation, every workflow is designed to support people first.
      </>
    ),
  },
  {
    icon: Eye,
    title: "Clarity Over Complexity",
    description: (
      <>
        Powerful doesn't have to mean complicated. We turn cutting-edge tech into <span className="text-blue-600 font-medium">intuitive tools</span> your team can use — no manuals required.
      </>
    ),
  },
  {
    icon: Lightbulb,
    title: "Bold Ideas, Grounded Impact",
    description: (
      <>
        We’re not afraid to dream big — but we always build for today. Our solutions are <span className="text-blue-600 font-medium">visionary and usable</span> from day one.
      </>
    ),
  },
  {
    icon: Users,
    title: "Access for All",
    description: (
      <>
        From Fortune 500s to remote schools, we believe <span className="text-blue-600 font-medium">intelligence belongs everywhere</span>. No gatekeeping. Just possibility.
      </>
    ),
  },
];

export default function ValuesSection() {
  return (
    <section id="our-values" className="relative py-32 bg-gradient-to-br from-sky-50 via-white to-indigo-50 overflow-hidden">
      {/* Optional decorative pattern background */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0 L0 0 0 40" fill="none" stroke="rgba(100,116,139,0.05)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
            What We Stand For
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            These values aren’t just posters on a wall — they guide how we build, partner, and grow.
          </p>
        </motion.div>

        <div className="space-y-20">
          {values.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              className={`flex flex-col sm:flex-row items-start sm:items-center ${
                index % 2 === 1 ? "sm:flex-row-reverse" : ""
              } gap-6 sm:gap-12`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 shadow-inner">
                <Icon className="w-6 h-6" />
              </div>

              <div className="max-w-2xl">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-600 text-base leading-relaxed">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
