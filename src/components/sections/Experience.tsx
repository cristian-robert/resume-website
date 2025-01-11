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
    <section id="experience">
      <div className="container-custom">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Professional Experience
        </motion.h2>

        <div className="space-y-6">
          {experiences?.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-[#151E2E] rounded-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-blue-400">{exp.company}</p>
                </div>
                <span className="text-gray-400 text-sm">{exp.period}</span>
              </div>

              <ul className="space-y-3">
                {exp.responsibilities.map((resp, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-gray-300"
                  >
                    <span className="text-blue-400 mt-1.5">•</span>
                    <span>{resp}</span>
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
