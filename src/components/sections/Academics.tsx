"use client";

import { motion } from "framer-motion";
import { departments } from "@/data/siteData";
import { FlaskConical, Calculator, Monitor, BookOpen, PenTool, Moon, Map, Dumbbell } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  FlaskConical,
  Calculator,
  Monitor,
  BookOpen,
  PenTool,
  Moon,
  Map,
  Dumbbell,
};

export default function Academics() {
  return (
    <section id="academics" className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary heading-underline">Academics</h2>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive curriculum designed to develop intellectual capabilities and practical skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept, index) => {
            const Icon = iconMap[dept.icon] || BookOpen;
            return (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg card-hover"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{dept.name}</h3>
                <p className="text-gray-600 text-sm">{dept.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">Academic Structure</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">6th - 8th</div>
              <h4 className="font-bold text-primary mb-2">Middle School</h4>
              <p className="text-gray-600 text-sm">Foundation building with core subjects and character development.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">9th - 10th</div>
              <h4 className="font-bold text-primary mb-2">Matriculation</h4>
              <p className="text-gray-600 text-sm">Preparation for SSC examinations with science and arts groups.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">11th - 12th</div>
              <h4 className="font-bold text-primary mb-2">Intermediate</h4>
              <p className="text-gray-600 text-sm">FSc Pre-Medical, Pre-Engineering, and ICS programs.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
