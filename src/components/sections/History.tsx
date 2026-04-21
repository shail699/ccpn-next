"use client";

import { motion } from "framer-motion";
import { timelineEvents } from "@/data/siteData";
import { Calendar } from "lucide-react";

export default function History() {
  return (
    <section id="history" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary heading-underline">Our History</h2>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            A journey of excellence and dedication since our establishment in 2011.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-secondary/30 md:-translate-x-px" />

          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-start gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className={`hidden md:block w-1/2 ${index % 2 === 0 ? "text-right pr-12" : "text-left pl-12"}`}>
                <div className="bg-cream rounded-xl p-6 shadow-lg inline-block text-left">
                  <h3 className="text-xl font-bold text-primary mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>

              <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-secondary rounded-full border-4 border-white shadow-md flex items-center justify-center md:-translate-x-1/2 z-10">
                <Calendar className="w-4 h-4 text-primary" />
              </div>

              <div className="pl-12 md:pl-0 md:w-1/2 md:hidden">
                <div className="bg-cream rounded-xl p-6 shadow-lg">
                  <span className="text-secondary font-bold text-lg">{event.year}</span>
                  <h3 className="text-xl font-bold text-primary mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>

              <div className={`hidden md:block w-1/2 ${index % 2 === 0 ? "text-left pl-12" : "text-right pr-12"}`}>
                <span className="text-secondary font-bold text-2xl">{event.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
