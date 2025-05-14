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
// CONFIG (Updated)
// ────────────────────────────────────────────────────────────────────────────────

const steps = [
  {
    icon: <MessageSquareTextIcon className="w-14 h-14 text-[#FFFFFF]" />,
    title: 'Practice Conversations',
    desc: 'Engage with our AI to simulate realistic sales, support, and workplace scenarios.',
    accent: 'from-[#2563EB] to-[#60A5FA]', // Primary Blue gradient
    examples: ['Sales Calls', 'Customer Support', 'Team Meetings'],
  },
  {
    icon: <UserIcon className="w-14 h-14 text-[#FFFFFF]" />,
    title: 'Master Real Scenarios',
    desc: 'Receive feedback on your communication skills in realistic work interactions.',
    accent: 'from-[#14B8A6] to-[#99F6E4]', // Accent Teal gradient
    metrics: [
      { label: 'Conversation Fluency', value: 85, color: 'bg-[#14B8A6]' }, // Accent Teal
      { label: 'Problem Solving',    value: 70, color: 'bg-[#14B8A6]' }, // Accent Teal
    ],
  },
  {
    icon: <BrainCircuitIcon className="w-14 h-14 text-[#FFFFFF]" />,
    title: 'Apply & Improve',
    desc: 'Track progress, identify patterns, and continuously refine your professional communication.',
    accent: 'from-[#2563EB] to-[#60A5FA]', // Primary Blue gradient
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
      className="relative isolate overflow-hidden py-28 bg-gradient-to-b from-[#FFFFFF] to-[#EFF6FF] dark:from-[#0F172A] dark:to-[#1E293B]"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }} 
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        className="pointer-events-none absolute -top-32 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-gradient-radial from-[#60A5FA]/[.20] to-transparent dark:from-[#60A5FA]/[.10]"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#1F2937] dark:text-[#FFFFFF]">
            Arised Academy
          </h2>
          <p className="mt-4 text-lg text-[#6B7280] dark:text-[#D1D5DB] max-w-lg mx-auto">
            Train with our AI to elevate your professional interactions
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Header active={active} />
          <StepSelector active={active} setActive={setActive} />

          <div className="mt-10 text-center">
            <Link
              href="/academy"
              className="inline-block px-8 py-3 bg-[#2563EB] !text-[#FFFFFF] font-semibold rounded-full shadow-md hover:bg-[#1D4ED8] hover:shadow-lg transition-all duration-200"
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
  const currentAccent = step.accent; 

  const exampleItemClasses = active === 0 
    ? "bg-[#EFF6FF] dark:bg-[#1E293B] border-[#BEE3F8] dark:border-[#334155] text-[#2563EB] dark:text-[#60A5FA]"
    : ""; 

  const featureItemContainerClasses = active === 2 
    ? "bg-gradient-to-br from-[#EFF6FF] to-[#E0F2FE] dark:from-[#1E293B]/[.5] dark:to-[#2D3748]/[.5] border border-[#BEE3F8] dark:border-[#334155]/[.5]"
    : "";
  const featureItemIconBg = active === 2 ? "bg-[#2563EB]" : ""; 

  return (
    <motion.div
      key={step.title}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-16 flex flex-col items-center text-center gap-6"
    >
      <div
        className={`grid place-content-center rounded-full bg-gradient-to-br ${currentAccent} h-20 w-20 shadow-lg`}
      >
        {step.icon} 
      </div>

      <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#1F2937] dark:text-[#FFFFFF]">
        {step.title}
      </h3>
      <p className="max-w-lg text-lg text-[#6B7280] dark:text-[#D1D5DB]">
        {step.desc}
      </p>

      <div className="w-full mt-4 bg-[#FFFFFF] dark:bg-[#1E293B] rounded-xl p-6 shadow-md">
        {active === 0 && (
          <div className="grid grid-cols-3 gap-3">
            {(step as any).examples?.map((item: string, i: number) => (
              <div
                key={i}
                className={`text-center py-3 px-2 rounded-lg font-medium ${exampleItemClasses}`}
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
                  <span className="text-[#6B7280] dark:text-[#D1D5DB]">
                    {metric.label}
                  </span>
                  <span className="text-[#14B8A6] dark:text-[#99F6E4]">
                    {metric.value}%
                  </span>
                </div>
                <div className="h-2 w-full bg-[#E5E7EB] dark:bg-[#334155] rounded-full overflow-hidden">
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
                className={`flex items-center space-x-2 p-3 rounded-lg ${featureItemContainerClasses}`}
              >
                <div className={`w-8 h-8 rounded-full ${featureItemIconBg} flex items-center justify-center`}>
                  <svg className="w-4 h-4 text-[#FFFFFF]" viewBox="0 0 24 24" fill="none" >
                    <path d="M8 12L11 15L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="font-medium text-[#1F2937] dark:text-[#E5E7EB]">
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
        <div className="absolute inset-0 rounded-full bg-[#D1D5DB] dark:bg-[#334155]" />
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#2563EB] to-[#14B8A6] dark:from-[#2563EB] dark:to-[#14B8A6]"
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
              absolute top-1/2 h-6 w-6 rounded-full transition-colors
              focus:outline-none focus:ring-offset-2 dark:focus:ring-offset-[#0F172A]
              transform -translate-y-1/2 -translate-x-1/2 /* THIS LINE IS KEY FOR CENTERING */
              ${active === i
                ? 'bg-[#2563EB] ring-2 ring-[#2563EB] focus:ring-[#60A5FA]' 
                : 'bg-[#FFFFFF] ring-2 ring-[#D1D5DB] dark:bg-[#1E293B] dark:ring-[#334155] hover:ring-[#B0B0B0] dark:hover:ring-[#475569] focus:ring-[#B0B0B0]'
              }
            `}
            // The 'left' style positions the center of the button due to -translate-x-1/2
            style={{ left: `${(i / (steps.length - 1)) * 100}%` }} 
          >
            <span className="sr-only">{steps[i].title}</span>
          </button>
        ))}
      </div>

      {/* Labels */}
      <ul className="mx-auto flex max-w-3xl justify-between gap-2 text-sm font-medium text-[#6B7280] dark:text-[#D1D5DB]">
        {steps.map((s, i) => (
          <li key={s.title} className="w-full text-center">
            <button
              onClick={() => setActive(i)}
              className={`transition-colors rounded-md py-1 px-2 focus:outline-none focus:ring-2 focus:ring-[#60A5FA] dark:focus:ring-offset-[#0F172A] ${
                active === i
                  ? 'text-[#2563EB] dark:text-[#60A5FA]'
                  : 'hover:text-[#2563EB] dark:hover:text-[#60A5FA]'
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