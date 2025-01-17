"use client";
import { motion } from "framer-motion";
import { useSkills } from "@/hooks/useSkills";
import LoadingState from "../ui/LoadingState";
import ErrorState from "../ui/ErrorState";

export default function Skills() {
  const { data: skills, isLoading, error } = useSkills();

  if (isLoading) return <LoadingState />;
  if (error) return <ErrorState message={error} />;

  return (
    <section id="skills">
      <div className="container-custom">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Skills & Certifications
        </motion.h2>

        <div className="space-y-12">
          {skills?.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-xl font-medium text-white mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    className="bg-[#1A2537] text-blue-400 px-4 py-1.5 rounded-lg text-sm hover:bg-[#1F2B3D] transition-colors"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + idx * 0.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
