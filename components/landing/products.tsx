// components/ProductsSection.jsx
'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  CloudCogIcon,
  MessageSquareTextIcon,
  TrendingUpIcon,
  ChevronRightIcon
} from 'lucide-react';

export default function ProductsSection() {
  const products = [
    {
      title: 'ArIA',
      desc: 'Automize your legacy systems to do the work that really matters.',
      icon: CloudCogIcon,
      gradient: 'from-blue-500 to-blue-400',
      href: '/aria',
    },
    {
      title: 'Arised Academy',
      desc: 'Train with our AI to elevate your professional interactions.',
      icon: MessageSquareTextIcon,
      gradient: 'from-indigo-500 to-indigo-400',
      href: '/academy',
    },
    {
      title: 'Project Noor',
      desc: 'Project Noor brings offline, solar-powered education to underserved communities.',
      icon: TrendingUpIcon,
      gradient: 'from-green-500 to-emerald-400',
      href: 'https://project-noor.eu',
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="w-full py-20 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
        >
          Three Products. One Mission: Smarter Automation.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 text-lg max-w-3xl mx-auto mb-16"
        >
          From legacy automation to hands-on education and scalable orchestration –
          Arised gives you the tools to rethink what’s possible.
        </motion.p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {products.map(({ title, desc, icon: Icon, gradient, href }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-3xl bg-white/20 backdrop-blur-md border border-white/30 shadow-xl hover:shadow-2xl transition-all"
            >
              {/* Animated gradient blob */}
              <div
                className={`pointer-events-none absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${gradient} rounded-full filter blur-3xl opacity-30 transition-opacity duration-500 group-hover:opacity-50`}
              />

              <div className="relative z-10 p-8 flex flex-col h-full">
                <div
                  className={`w-14 h-14 mb-6 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {title}
                </h3>
                <p className="text-gray-700 flex-1 mb-6">
                  {desc}
                </p>
                <Link
                  href={href}
                  className="mt-auto inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition"
                >
                  Learn More
                  <ChevronRightIcon className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
