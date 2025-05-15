// components/AriaCard.jsx
"use client";

import React from 'react';
import Link from 'next/link';
import { EyeIcon, ZapIcon, CloudUploadIcon } from 'lucide-react'; // Assuming these are correctly imported
import { motion } from 'framer-motion';

export default function AriaCard() {
  const steps = [
    {
      icon: <EyeIcon className="w-5 h-5" />,
      title: 'Step 1: Monitor Processes',
      desc: 'ArIA begins by observing and analyzing your workflows to identify optimization opportunities.',
    },
    {
      icon: <ZapIcon className="w-5 h-5" />,
      title: 'Step 2: Build Automation',
      desc: 'Based on the insights gathered, ArIA designs intelligent automation tailored to your operations.',
    },
    {
      icon: <CloudUploadIcon className="w-5 h-5" />,
      title: 'Step 3: Deploy at Scale',
      desc: 'With one click, ArIA deploys your automations and enables you to scale effortlessly.',
    },
  ];

  // Changed stepThemes to be an array
  const stepThemes = [
    { // Index 0: Primary Blue theme for Step 1
      border: 'border-[#2563EB]',
      text: 'text-[#2563EB]',
      iconBg: 'bg-[#EFF6FF]',
      progressBarFill: 'bg-[#2563EB]',
    },
    { // Index 1: Accent Teal theme for Step 2
      border: 'border-[#14B8A6]',
      text: 'text-[#14B8A6]',
      iconBg: 'bg-[#F0FDFA]',
      progressBarFill: 'bg-[#14B8A6]',
    },
    { // Index 2: Primary Blue theme for Step 3
      border: 'border-[#2563EB]',
      text: 'text-[#2563EB]',
      iconBg: 'bg-[#EFF6FF]',
      progressBarFill: 'bg-[#2563EB]',
    }
  ];

  return (
    <section className="bg-gradient-to-b from-[#F9FAFB] to-[#FFFFFF] py-24">
      <div className="max-w-xl mx-auto px-6 relative bg-[#FFFFFF] p-8 rounded-3xl shadow-lg text-center overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#60A5FA] to-[#99F6E4] rounded-full filter blur-3xl opacity-30 pointer-events-none" />

        <h2 className="relative text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#2563EB] to-[#14B8A6] mb-2">
          Introducing ArIA
        </h2>

        <div className="mx-auto mb-6 h-1 w-24 bg-gradient-to-r from-[#2563EB] to-[#14B8A6]" />

        <p className="text-[#6B7280] text-lg mb-8">
          Build and deploy AI workflows across your organization
        </p>

        <div className="relative">
          <div className="space-y-16">
            {steps.map((step, idx) => {
              const theme = stepThemes[idx]; // This will now work correctly
              // Ensure theme is not undefined if steps and stepThemes can have different lengths
              if (!theme) {
                // Handle case where theme might be undefined, e.g., return null or a default theme
                console.warn(`No theme found for step index: ${idx}`);
                return null; 
              }
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  viewport={{ once: true }}
                  className="flex items-start bg-[#FFFFFF] p-4 rounded-lg hover:bg-[#F9FAFB] transition-colors duration-200 text-left"
                >
                  <div className="relative z-10">
                    <div className={`w-10 h-10 rounded-full bg-[#FFFFFF] border-2 ${theme.border} ${theme.text} flex items-center justify-center font-semibold`}>
                      {idx + 1}
                    </div>
                  </div>

                  <div className="ml-4 flex-1">
                    <div className="flex items-center mb-2">
                      <div className={`p-2 ${theme.iconBg} ${theme.text} rounded-lg mr-2`}>{step.icon}</div>
                      <h3 className={`text-lg font-semibold ${theme.text}`}>{step.title}</h3>
                    </div>
                    <p className="text-[#6B7280] mb-3">{step.desc}</p>

                    <div className="bg-[#F9FAFB] p-3 rounded-lg border border-[#E5E7EB]">
                      {idx === 0 && (
                        <div className="grid grid-cols-3 gap-2">
                          {['Uptime', 'Logs', 'Alerts'].map((item, i) => (
                            <div key={i} className="text-xs text-center p-1.5 bg-[#FFFFFF] rounded border border-[#E5E7EB] text-[#6B7280]">
                              {item}
                            </div>
                          ))}
                        </div>
                      )}
                      {idx === 1 && (
                        <div className="flex items-center gap-2">
                          <div className="flex-1">
                            <div className="text-xs text-[#6B7280] mb-1">Workflow Designer</div>
                            <div className="h-2 w-full bg-[#E5E7EB] rounded-full overflow-hidden">
                              <div className={`h-full ${theme.progressBarFill} rounded-full`} style={{ width: '85%' }} />
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="text-xs text-[#6B7280] mb-1">Logic Engine</div>
                            <div className="h-2 w-full bg-[#E5E7EB] rounded-full overflow-hidden">
                              <div className={`h-full ${theme.progressBarFill} rounded-full`} style={{ width: '70%' }} />
                            </div>
                          </div>
                        </div>
                      )}
                      {idx === 2 && ( // For step 3, use its own theme for consistency if needed, or stepThemes[0] / [1] as originally
                        <div className="flex justify-between text-xs">
                           {/* Original code used stepThemes[0] and stepThemes[1] here. 
                               Let's assume you might want to use the current step's theme (theme) 
                               or specific themes as before. I'll use the current `theme` for the first item
                               and stepThemes[1] for the second as an example of mixed usage, 
                               adjust as per your design.
                           */}
                          <div className={`flex items-center ${theme.text}`}> {/* Using current step's theme text color */}
                            <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M4 17L10 11L16 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M10 11V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>One-click deploy</span>
                          </div>
                          <div className={`flex items-center ${stepThemes[1].text}`}> {/* Example: Using Step 2's theme text color */}
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
              );
            })}
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/aria" // Make sure this path is correct
            className="inline-block px-8 py-3 bg-[#2563EB] !text-[#FFFFFF] font-medium rounded-full shadow-md hover:bg-[#1D4ED8] hover:shadow-lg transition-all duration-200"
          >
            Explore Aria
          </Link>
        </div>
      </div>
    </section>
  );
}