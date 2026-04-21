"use client";

import { motion } from "framer-motion";
import { achievements } from "@/data/siteData";
import { Trophy, Star } from "lucide-react";

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white heading-underline">
            <span className="after:bg-secondary">Achievements</span>
          </h2>
          <p className="mt-6 text-lg text-white/70 max-w-3xl mx-auto">
            Recognitions and milestones that reflect our commitment to excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <span className="text-secondary text-sm font-medium">{achievement.year}</span>
                  <h3 className="text-white font-bold">{achievement.title}</h3>
                </div>
              </div>
              <p className="text-white/70 text-sm">{achievement.description}</p>
              <div className="mt-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-secondary fill-secondary" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
