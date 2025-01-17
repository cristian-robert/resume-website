"use client";
import { motion } from "framer-motion";
import { useApi } from "@/hooks/useApi";
import { Github } from "lucide-react";
import LoadingState from "../ui/LoadingState";
import ErrorState from "../ui/ErrorState";

interface Project {
  id: number;
  name: string;
  description: string;
  url: string;
  language: string;
}

export default function Projects() {
  const {
    data: projects,
    isLoading,
    error,
  } = useApi<Project[]>("/api/projects");

  if (isLoading) return <LoadingState />;
  if (error) return <ErrorState message={error} />;

  return (
    <section id="projects">
      <div className="container-custom">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects?.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#151E2E] rounded-lg p-6 group hover:bg-[#1A2537] transition-all duration-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h3>
                <Github className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </div>

              {project.description && (
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
              )}

              {project.language && (
                <span className="text-sm text-gray-400">
                  {project.language}
                </span>
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
