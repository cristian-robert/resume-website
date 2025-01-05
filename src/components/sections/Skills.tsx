"use client";
import { motion } from "framer-motion";

type SkillCategory = {
  category: string;
  items: string[];
};

const skills: SkillCategory[] = [
  {
    category: "Languages & Frameworks",
    items: [
      "Java",
      "Python",
      "JavaScript",
      "SpringBoot",
      "TestNG",
      "JUnit",
      "Cucumber",
      "Selenium",
      "RestAssured",
      "PyTest",
      "WebdriverIO",
      "Cypress",
      "PHP",
    ],
  },
  {
    category: "Databases & Tools",
    items: [
      "MySQL",
      "OracleSQL",
      "PostgreSQL",
      "Jenkins",
      "TeamCity",
      "GitlabCI",
      "Docker",
      "Git",
      "BitBucket",
      "HPALM",
      "TestRail",
      "JMeter",
    ],
  },
  {
    category: "Testing Skills",
    items: [
      "Test Automation",
      "API Testing",
      "Microservices Testing",
      "CI/CD",
      "Agile Testing",
      "Performance Testing",
      "Security Testing",
      "OWASP Top 10",
    ],
  },
  {
    category: "Certifications",
    items: [
      "Java: Automated API Testing with REST Assured",
      "Java Object-Oriented Programming",
      "Advanced Selenium: Support Classes",
      "Learning Spring with Spring Boot",
      "Advanced Java Development",
      "Java: Lambdas and Streams",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 dark:text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Skills & Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold dark:text-white">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + idx * 0.1 }}
                    className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm"
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
