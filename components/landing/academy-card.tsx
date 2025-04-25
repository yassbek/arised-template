// components/AcademyVerticalRoadmap.jsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  MessageSquareTextIcon,
  UserIcon,
  BrainCircuitIcon
} from 'lucide-react';

// ────────────────────────────────────────────────────────────────────────────────
// CONFIG
// ────────────────────────────────────────────────────────────────────────────────

const steps = [
  {
    icon: <MessageSquareTextIcon className="w-14 h-14 text-indigo-600" />,
    title: 'Practice Conversations',
    desc: 'Engage with our AI to simulate realistic sales, support, and workplace scenarios.',
    accent: 'from-indigo-500 to-indigo-400',
    examples: ['Sales Calls', 'Customer Support', 'Team Meetings'],
  },
  {
    icon: <UserIcon className="w-14 h-14 text-blue-600" />,
    title: 'Master Real Scenarios',
    desc: 'Receive feedback on your communication skills in realistic work interactions.',
    accent: 'from-blue-500 to-sky-400',
    metrics: [
      { label: 'Conversation Fluency', value: 85, color: 'bg-blue-500' },
      { label: 'Problem Solving',     value: 70, color: 'bg-indigo-500' },
    ],
  },
  {
    icon: <BrainCircuitIcon className="w-14 h-14 text-emerald-600" />,
    title: 'Apply & Improve',
    desc: 'Track progress, identify patterns, and continuously refine your professional communication.',
    accent: 'from-emerald-500 to-teal-400',
    features: ['Real-time feedback', 'Performance metrics'],
  },
];

// ────────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ────────────────────────────────────────────────────────────────────────────────

export default function AcademyVerticalRoadmap() {
  const [active, setActive] = useState(0);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="relative isolate overflow-hidden py-28 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800"
    >
      {/* Radial blur blob */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        className="pointer-events-none absolute -top-32 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-gradient-radial from-indigo-400/20 to-transparent"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight dark:text-white">
            Arised Academy
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
            Train with our AI to elevate your professional interactions
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Step Content */}
          <Header active={active} />

          {/* Step Selector */}
          <StepSelector active={active} setActive={setActive} />

          {/* CTA Button */}
          <div className="mt-10 text-center">
            <Link
              href="/academy"
              className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition"
            >
              Start Training
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

// ────────────────────────────────────────────────────────────────────────────────
// HEADER SUBCOMPONENT
// ────────────────────────────────────────────────────────────────────────────────

function Header({ active }: { active: number }) {
  const step = steps[active];
  return (
    <motion.div
      key={step.title}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-16 flex flex-col items-center gap-6"
    >
      {/* Icon badge */}
      <div
        className={`grid place-content-center rounded-full bg-gradient-to-br ${step.accent} h-20 w-20 shadow-lg shadow-black/10`}
      >
        {step.icon}
      </div>

      <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight dark:text-white">
        {step.title}
      </h3>
      <p className="max-w-lg text-lg text-gray-600 dark:text-gray-300">
        {step.desc}
      </p>

      <div className="w-full mt-4 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md">
        {active === 0 && (
          <div className="grid grid-cols-3 gap-3">
            {(step as any).examples?.map((item: string, i: number) => (
              <div
                key={i}
                className="text-center py-3 px-2 bg-indigo-50 dark:bg-slate-700 rounded-lg border border-indigo-100 dark:border-slate-600 text-indigo-700 dark:text-indigo-300 font-medium"
              >
                {item}
              </div>
            ))}
          </div>
        )}
        {active === 1 && (
          <div className="space-y-4">
            {(step as any).metrics?.map((metric: any, i: number) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="text-gray-700 dark:text-gray-300">
                    {metric.label}
                  </span>
                  <span className="text-blue-600 dark:text-blue-400">
                    {metric.value}%
                  </span>
                </div>
                <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${metric.value}%` }}
                    transition={{ duration: 1, delay: i * 0.2 }}
                    className={`h-full ${metric.color} rounded-full`}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
        {active === 2 && (
          <div className="grid grid-cols-2 gap-4">
            {(step as any).features?.map((feature: string, i: number) => (
              <div
                key={i}
                className="flex items-center space-x-2 p-3 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800/30"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M8 12L11 15L16 10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="font-medium text-gray-800 dark:text-gray-200">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

// ────────────────────────────────────────────────────────────────────────────────
// STEP SELECTOR SUBCOMPONENT
// ────────────────────────────────────────────────────────────────────────────────

function StepSelector({
  active,
  setActive,
}: {
  active: number;
  setActive: (i: number) => void;
}) {
  return (
    <div className="space-y-6">
      {/* Track */}
      <div className="relative mx-auto h-2 w-full max-w-3xl">
        {/* Base line */}
        <div className="absolute inset-0 rounded-full bg-gray-300 dark:bg-gray-700" />

        {/* Progress fill */}
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 dark:from-indigo-600 dark:to-blue-600"
          style={{ width: `${(active / (steps.length - 1)) * 100}%` }}
          animate={{ width: `${(active / (steps.length - 1)) * 100}%` }}
          transition={{ type: 'spring', stiffness: 250, damping: 40 }}
        />

        {/* Stops */}
        {steps.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Go to step ${i + 1}`}
            className={`
              absolute top-1/2 -translate-y-1/2 h-6 w-6 rounded-full transition-colors
              ${active === i
                ? 'bg-indigo-500 ring-2 ring-indigo-500'
                : 'bg-white ring-2 ring-gray-300 dark:bg-slate-800 dark:ring-slate-600'}
            `}
            style={{ left: `${(i / (steps.length - 1)) * 100}%` }}
          >
            <span className="sr-only">{steps[i].title}</span>
          </button>
        ))}
      </div>

      {/* Labels */}
      <ul className="mx-auto flex max-w-3xl justify-between gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
        {steps.map((s, i) => (
          <li key={s.title} className="w-full text-center">
            <button
              onClick={() => setActive(i)}
              className={`transition-colors ${
                active === i
                  ? 'text-blue-600 dark:text-sky-400'
                  : 'hover:text-blue-500 dark:hover:text-sky-300'
              }`}
            >
              {s.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
