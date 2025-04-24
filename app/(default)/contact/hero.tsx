"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-white to-blue-50 py-32 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Background blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-blue-300 to-indigo-300 opacity-20 rounded-full filter blur-3xl mix-blend-multiply" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-br from-pink-300 to-purple-300 opacity-20 rounded-full filter blur-3xl mix-blend-multiply" />

      <div className="relative max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Form */}
        <motion.div
          className="bg-white rounded-3xl p-10 shadow-2xl"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 text-center"
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Let’s Talk
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Whether you're curious about ArIA, Academy, or Project Noor—we’re here to help.
          </motion.p>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your full name"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="How can we help today?"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-block bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:opacity-90 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>

        {/* Contact Details */}
        <motion.div
          className="bg-white rounded-3xl p-10 shadow-2xl flex flex-col justify-between"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Get in Touch
          </h3>
          <ul className="space-y-6">
            <li className="flex items-start">
              <MapPin className="w-6 h-6 text-blue-600 mr-4 mt-1" />
              <div>
                <p className="font-medium text-gray-800">Address</p>
                <p className="text-gray-600">Kasernenstraße 67, 40213 Düsseldorf, Germany</p>
              </div>
            </li>
            <li className="flex items-start">
              <Mail className="w-6 h-6 text-blue-600 mr-4 mt-1" />
              <div>
                <p className="font-medium text-gray-800">Email</p>
                <a
                  href="mailto:contact@arised.ai"
                  className="text-blue-600 hover:underline"
                >
                  contact@arised.ai
                </a>
              </div>
            </li>
            <li className="flex items-start">
              <Phone className="w-6 h-6 text-blue-600 mr-4 mt-1" />
              <div>
                <p className="font-medium text-gray-800">Phone</p>
                <p className="text-gray-600">+49 151 4317 6341</p>
              </div>
            </li>
            <li className="flex items-start">
              <Clock className="w-6 h-6 text-blue-600 mr-4 mt-1" />
              <div>
                <p className="font-medium text-gray-800">Hours</p>
                <p className="text-gray-600">Mon–Fri: 9:00 AM — 6:00 PM CET</p>
              </div>
            </li>
          </ul>
          <div className="mt-8 text-center">
            <a
              href="mailto:contact@arised.ai"
              className="inline-block bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:opacity-90 transition"
            >
              Email Us Directly
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
