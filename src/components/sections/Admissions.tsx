"use client";

import { motion } from "framer-motion";
import { CheckCircle, FileText, Calendar, ClipboardList, UserCheck, GraduationCap } from "lucide-react";

const requirements = [
  "Age between 12-14 years for 8th class admission",
  "Passed 7th class examination from a recognized school",
  "Pakistani nationality with valid CNIC/B-form",
  "Domicile of Balochistan province",
  "Medically fit as per college standards",
  "Good moral character and discipline record",
];

const process = [
  { icon: FileText, step: "1", title: "Application", text: "Fill out the online or offline application form with required documents." },
  { icon: ClipboardList, step: "2", title: "Entry Test", text: "Appear in the written entry test covering English, Math, and General Science." },
  { icon: UserCheck, step: "3", title: "Interview", text: "Shortlisted candidates are called for a personal interview." },
  { icon: Calendar, step: "4", title: "Medical", text: "Medical examination at the college dispensary." },
  { icon: GraduationCap, step: "5", title: "Enrollment", text: "Final selection and enrollment process." },
];

export default function Admissions() {
  return (
    <section id="admissions" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary heading-underline">Admissions</h2>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Join the ranks of future leaders. Admission opens once a year for 8th class.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-6">Eligibility Criteria</h3>
            <div className="bg-cream rounded-xl p-6 shadow-lg">
              <ul className="space-y-4">
                {requirements.map((req, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-gray-700">{req}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="mt-8 bg-primary rounded-xl p-6 text-white">
              <h4 className="font-bold text-secondary mb-2">Important Dates</h4>
              <div className="space-y-2 text-sm">
                <p><span className="text-secondary">Application Opens:</span> January 15, 2025</p>
                <p><span className="text-secondary">Last Date:</span> February 28, 2025</p>
                <p><span className="text-secondary">Entry Test:</span> March 15, 2025</p>
                <p><span className="text-secondary">Classes Begin:</span> April 1, 2025</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-6">Admission Process</h3>
            <div className="space-y-4">
              {process.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-cream rounded-xl p-5 shadow-md"
                >
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-secondary font-bold">Step {item.step}</span>
                      <h4 className="font-bold text-primary">{item.title}</h4>
                    </div>
                    <p className="text-gray-600 text-sm">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
