import React from 'react';
import { CloudLightning as LightningBolt } from 'lucide-react';

export default function FeaturesSection() {
  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-gray-100 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Let ArIA Do the Clicking, Typing, Waiting, and Thinking
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            ArIA intelligently automates legacy software workflows – no APIs, no limits.
            Here’s how it makes your life easier.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Feature 1 */}
          <div className="rounded-2xl bg-white p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="mb-4 text-blue-600">
              {/* Monitor Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-8 w-8">
                <rect x="3" y="4" width="18" height="12" rx="2" ry="2" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 20h8" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              Understands Complex Interfaces
            </h3>
            <p className="text-gray-600">
              ArIA reads visual layouts and UI elements just like a human – no need for structured data or APIs.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="rounded-2xl bg-white p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="mb-4 text-blue-600">
              {/* Lightning Bolt Icon from lucide-react */}
              <LightningBolt className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              Executes Intelligent Workflows
            </h3>
            <p className="text-gray-600">
              From form-filling to file handling, ArIA completes entire processes with logic, memory, and reasoning.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="rounded-2xl bg-white p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="mb-4 text-blue-600">
              {/* Up-Right Arrow Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-8 w-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 20L20 4" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 4h5v5" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              Scales Without the Chaos
            </h3>
            <p className="text-gray-600">
              Deploy once, automate across teams or tools. ArIA adapts with minimal configuration and full transparency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
