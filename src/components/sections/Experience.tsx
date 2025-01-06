"use client";
import { motion } from "framer-motion";
import { useExperience } from "@/hooks/useExperience";
import LoadingState from "../ui/LoadingState";
import ErrorState from "../ui/ErrorState";

export default function Experience() {
  const { data: experiences, isLoading, error } = useExperience();

  if (isLoading) return <LoadingState />;
  if (error) return <ErrorState message={error} />;
  if (!experiences?.length)
    return <ErrorState message="No experience data available" />;

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center dark:text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Professional Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences?.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-700 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold dark:text-white">
                    {exp.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 text-lg">
                    {exp.company}
                  </p>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base mt-2 md:mt-0">
                  {exp.period}
                </p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-base leading-relaxed">
                    {resp}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
