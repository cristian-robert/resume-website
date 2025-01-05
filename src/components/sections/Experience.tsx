"use client";
import { motion } from "framer-motion";
type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
};

const experiences: ExperienceItem[] = [
  {
    title: "Frontend Developer",
    company: "Company Name",
    period: "2022 - Present",
    responsibilities: [
      "Developed responsive web applications using React and Next.js",
      "Implemented UI components following design system guidelines",
      "Collaborated with backend team for API integration",
    ],
  },
  {
    title: "Junior Developer",
    company: "Previous Company",
    period: "2020 - 2022",
    responsibilities: [
      "Built and maintained client websites",
      "Optimized website performance and SEO",
      "Worked with WordPress and PHP",
    ],
  },
];
export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 dark:text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold dark:text-white">
                {exp.title}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 mb-2">
                {exp.company}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                {exp.period}
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                {exp.responsibilities.map((resp, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + idx * 0.1 }}
                  >
                    {resp}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
