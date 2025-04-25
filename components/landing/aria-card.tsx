"use client";

import React from 'react';
import Link from 'next/link';
import { EyeIcon, ZapIcon, CloudUploadIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AriaCard() {
  const steps = [
    {
      icon: <EyeIcon className="w-5 h-5" />,
      title: 'Step 1: Monitor Processes',
      desc: 'ArIA begins by observing and analyzing your workflows to identify optimization opportunities.',
      color: 'from-blue-500 to-blue-400',
    },
    {
      icon: <ZapIcon className="w-5 h-5" />,
      title: 'Step 2: Build Automation',
      desc: 'Based on the insights gathered, ArIA designs intelligent automation tailored to your operations.',
      color: 'from-yellow-500 to-amber-400',
    },
    {
      icon: <CloudUploadIcon className="w-5 h-5" />,
      title: 'Step 3: Deploy at Scale',
      desc: 'With one click, ArIA deploys your automations and enables you to scale effortlessly.',
      color: 'from-green-500 to-emerald-400',
    },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-50 to-green-50 py-24">
  <div className="max-w-xl mx-auto px-6 relative bg-white p-8 rounded-3xl shadow-lg text-center overflow-hidden">
    {/* Soft blurred accent */}
    <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-200 to-green-200 rounded-full filter blur-3xl opacity-30 pointer-events-none" />

    {/* Gradient headline */}
    <h2 className="relative text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-500 mb-2">
      Introducing ArIA
    </h2>

    {/* Underline */}
    <div className="mx-auto mb-6 h-1 w-24 bg-gradient-to-r from-blue-600 to-green-500" />

    {/* Subheading */}
    <p className="text-gray-600 text-lg mb-8">
      Build and deploy AI workflows across your organization
    </p>

  


        <div className="relative">
          {/* Line centered under circles (44px from left) */}
          <div className="absolute left-9 top-0 w-px h-full bg-gradient-to-b from-blue-300 via-yellow-400 to-green-400" />

          <div className="space-y-16">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="flex items-start bg-white p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="relative z-10">
                  <div className={`w-10 h-10 rounded-full bg-white border-2 ${
                    idx === 0 ? 'border-blue-400' : idx === 1 ? 'border-yellow-400' : 'border-green-400'
                  } flex items-center justify-center ${
                    idx === 0 ? 'text-blue-500' : idx === 1 ? 'text-yellow-500' : 'text-green-500'
                  } font-semibold`}>{idx + 1}</div>
                </div>

                <div className="ml-8 flex-1">
                  <div className="flex items-center mb-2">
                    <div className={`p-2 ${
                      idx === 0 ? 'bg-blue-50 text-blue-500' : idx === 1 ? 'bg-yellow-50 text-yellow-500' : 'bg-green-50 text-green-500'
                    } rounded-lg mr-2`}>{step.icon}</div>
                    <h3 className={`text-lg font-semibold ${
                      idx === 0 ? 'text-blue-500' : idx === 1 ? 'text-yellow-500' : 'text-green-500'
                    }`}>{step.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-3">{step.desc}</p>

                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                    {idx === 0 && (
                      <div className="grid grid-cols-3 gap-2">
                        {['Uptime', 'Logs', 'Alerts'].map((item, i) => (
                          <div key={i} className="text-xs text-center p-1.5 bg-white rounded border border-gray-100 text-gray-600">
                            {item}
                          </div>
                        ))}
                      </div>
                    )}
                    {idx === 1 && (
                      <div className="flex items-center gap-2">
                        <div className="flex-1">
                          <div className="text-xs text-gray-500 mb-1">Workflow Designer</div>
                          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-yellow-400 rounded-full" style={{ width: '85%' }} />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="text-xs text-gray-500 mb-1">Logic Engine</div>
                          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-yellow-500 rounded-full" style={{ width: '70%' }} />
                          </div>
                        </div>
                      </div>
                    )}
                    {idx === 2 && (
                      <div className="flex justify-between text-xs">
                        <div className="flex items-center text-green-500">
                          <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 17L10 11L16 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10 11V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span>One-click deploy</span>
                        </div>
                        <div className="flex items-center text-blue-500">
                          <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 6V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span>Performance metrics</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* End segment centered under circles */}
          
        </div>

        <div className="text-center mt-10">
          <Link href="/aria" className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500 to-green-500 text-white font-medium rounded-full shadow hover:shadow-lg transition-shadow duration-200">
            Explore Aria
          </Link>
        </div>
      </div>
    </section>
  );
}
