'use client'
import React from 'react';
import { motion } from 'framer-motion';

export default function UseCaseSection() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            From Pharmacy to Factory – ArIA Adapts
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Here's how ArIA helped one pharmacy save time, reduce errors, and modernize operations – without changing their software.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-8 bg-white rounded-2xl p-8 shadow-lg">
              {[
                { emoji: '📦', title: 'Challenge', text: 'Staff were manually entering medicine orders into a legacy Windows-based system, prone to input errors and delays. No API existed, and automation seemed impossible.' },
                { emoji: '🧠', title: 'Solution', text: 'ArIA observed the workflow, mimicked user actions, and added reasoning to handle edge cases – fully automating the order entry process using only the visual UI.' },
                { emoji: '🚀', title: 'Result', text: 'Order processing is now 80% faster and nearly error-free. Staff can focus on customer care instead of clicking through outdated forms.' },
              ].map(({ emoji, title, text }) => (
                <div key={title} className="space-y-2">
                  <h3 className="flex items-center text-2xl font-semibold text-slate-900">
                    <span className="mr-2">{emoji}</span> {title}
                  </h3>
                  <p className="text-gray-700">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image with gradient overlay */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/pharmacy-use-case.jpg"
                alt="ArIA automating a pharmacy order system"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
