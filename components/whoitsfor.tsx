'use client';
import React from 'react';
import { Building2, Banknote, FileText, HeartPulse, Settings, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const industries = [
  {
    title: 'Pharmacies & Healthcare',
    description: 'From order entry to document management – ArIA eliminates repetitive tasks in regulated environments.',
    icon: HeartPulse,
  },
  {
    title: 'Finance & Insurance',
    description: 'Automate claim processing, back-office operations, and compliance workflows without touching legacy code.',
    icon: Banknote,
  },
  {
    title: 'Public Sector',
    description: 'Modernize slow government systems with AI-driven assistance that respects process constraints.',
    icon: Building2,
  },
  {
    title: 'Manufacturing & Industry',
    description: 'Streamline ERP inputs, reporting tasks, and equipment interfaces across legacy environments.',
    icon: Settings,
  },
  {
    title: 'Back Office & Admin Teams',
    description: 'Free your teams from screens by automating UI-heavy workflows like data entry and reconciliation.',
    icon: FileText,
  },
  {
    title: 'Custom & Hybrid Solutions',
    description: 'Everything you need—tailored workflows, seamless integrations, and dedicated support to fit your exact process requirements.',
    icon: Layers,
  },
];

export default function WhoItsForSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 py-32">
      {/* Decorative blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200 rounded-full opacity-30 filter blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-200 rounded-full opacity-30 filter blur-3xl"></div>

      <div className="relative container mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-20"
        >
          <h2 className="text-5xl font-extrabold tracking-tight text-gray-900">
            Who ArIA Is Built For
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            ArIA empowers teams working with outdated, UI-based software – across industries.
          </p>
        </motion.div>

        {/* Industry Grid - centered layout */}
        <div className="flex justify-center">
          <div className="inline-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {industries.map(({ title, description, icon: Icon }, idx) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group relative flex flex-col items-center bg-white rounded-3xl p-8 border border-transparent hover:border-blue-300 transition-all shadow-sm hover:shadow-lg transform hover:-translate-y-1 max-w-xs"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4 group-hover:bg-blue-200 transition-colors">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {title}
                </h3>
                <p className="text-base leading-relaxed text-gray-700 text-center">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
