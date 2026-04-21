"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, Award, Users, BookOpen } from "lucide-react";
import Image from "next/image";

const features = [
  { icon: Target, title: "Mission", text: "To provide quality education and character building to produce future leaders for Pakistan." },
  { icon: Eye, title: "Vision", text: "To be the premier educational institution in Balochistan, recognized for excellence." },
  { icon: Heart, title: "Values", text: "Integrity, discipline, excellence, and service to the nation." },
];

const stats = [
  { icon: Users, value: "500+", label: "Cadets Enrolled" },
  { icon: BookOpen, value: "50+", label: "Expert Faculty" },
  { icon: Award, value: "100%", label: "Success Rate" },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary heading-underline">About CCPN</h2>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Cadet College Pishin is a premier residential institution established in 2011 to provide quality education and character building to the youth of Balochistan.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/campus-22.jpg"
                alt="CCPN Campus"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-primary">Excellence in Education Since 2011</h3>
            <p className="text-gray-600 leading-relaxed">
              Cadet College Pishin (CCPN) was established with the vision of providing world-class education to the talented youth of Balochistan. The college follows the national curriculum while incorporating modern teaching methodologies and character-building programs.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our cadets receive comprehensive training in academics, physical fitness, leadership, and co-curricular activities. The college has produced outstanding results in board examinations and has earned recognition at national level competitions.
            </p>
            <a
              href="#history"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-light transition-colors"
            >
              Explore Our History
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg card-hover text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-primary rounded-2xl p-8 sm:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-10 h-10 text-secondary mx-auto mb-3" />
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
