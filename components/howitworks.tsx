'use client';
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    emoji: '🔍', title: 'Observe', text: 'We analyze your workflows and apps, uncovering repetitive tasks. Collaborative workshops ensure even the most complex cases are covered.',
  },
  {
    emoji: '⚙️', title: 'Build', text: 'Our experts configure ArIA with your business logic, training it to interact visually and think through each process.',
  },
  {
    emoji: '🚀', title: 'Deploy', text: 'Launch your agent: fully autonomous or co-pilot mode, with real-time monitoring, versioning, and rollback support.',
  },
];

const stepVariants = {
  hidden: direction => ({ opacity: 0, x: direction * 40 }),
  visible: { opacity: 1, x: 0 },
};

export default function HowItWorksSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white py-32">
      {/* Decorative blob */}
      <div className="absolute -top-16 -left-16 w-96 h-96 bg-indigo-100 rounded-full opacity-50 mix-blend-multiply filter blur-3xl"></div>

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-24"
        >
          <h2 className="text-5xl font-extrabold text-slate-900">How ArIA Works</h2>
          <p className="mt-4 text-lg text-gray-600">From insight to automation—here’s how we transform your workflow.</p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-12">
          {steps.map((step, idx) => {
            const direction = idx % 2 === 0 ? -1 : 1;
            return (
              <motion.div
                key={step.title}
                custom={direction}
                variants={stepVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className={`flex flex-col md:flex-row items-center ${direction > 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Icon Container */}
                <div className="relative flex-shrink-0">
                  {/* Subtle background pulse */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-300 to-indigo-300 rounded-full opacity-30 transform scale-125 filter blur-xl"></div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="relative bg-gradient-to-tr from-blue-600 to-indigo-600 text-white p-8 rounded-full shadow-2xl text-5xl ring-4 ring-white"
                  >
                    {step.emoji}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="mt-6 md:mt-0 md:w-1/2 md:px-8 text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-gray-700">{step.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
