"use client";
import { motion } from "framer-motion";
import { useAbout } from "@/hooks/useAbout";
import LoadingState from "../ui/LoadingState";
import ErrorState from "../ui/ErrorState";

export default function About() {
  const { data, isLoading, error } = useAbout();

  if (isLoading) return <LoadingState />;
  if (error) return <ErrorState message={error} />;
  if (!data) return <ErrorState message="No data available" />;

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 dark:text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {data?.description}
            </p>
          </motion.div>

          <motion.div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2 dark:text-white">Location</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {data?.location}
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 dark:text-white">Email</h3>
              <p className="text-gray-600 dark:text-gray-300">{data?.email}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 dark:text-white">Education</h3>
              {data?.education.map((edu, index) => (
                <p key={index} className="text-gray-600 dark:text-gray-300">
                  {edu}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
