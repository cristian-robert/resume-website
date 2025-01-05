"use client";
import { motion } from "framer-motion";

type Experience = {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
};

const experiences: Experience[] = [
  {
    title: "Senior Quality Assurance Automation Engineer",
    company: "Deutsche Bank",
    period: "Oct 2019 - Present",
    responsibilities: [
      "Writing and executing manual test cases",
      "Defining automation frameworks using Java, Selenium and other relevant tools",
      "Responsible for continuous improvement of automation strategy and framework",
      "Performing code reviews on automated tests",
      "Frontend automation using Java, Selenium, SpringBoot, TestNG, Maven, OracleSQL",
      "Backend automation with Java, Cucumber, SpringBoot, TestNG, Maven, RestAssured",
    ],
  },
  {
    title: "QA Automation Engineer",
    company: "Twispay",
    period: "Jan 2019 - Oct 2019",
    responsibilities: [
      "Created test plans and test cases for Back Office, Payment, and API",
      "Designed and implemented automated functional suites in Yii-Codeception",
      "Performed tests against builds and analyzed results",
      "Worked with PHP-PHP Storm, Gitlab, Git, MySQL, Postman for REST APIs",
      "Security vulnerabilities scanning with OWASP top 10 focus",
    ],
  },
  {
    title: "Quality Assurance Automation Engineer",
    company: "2Checkout (now Verifone)",
    period: "Jun 2018 - Dec 2018",
    responsibilities: [
      "Handled manual and automated testing at all levels",
      "Developed automation in PHPUnit and Behat",
      "Focused on security and compliance testing",
      "Worked in well-defined Agile environment with Kanban automation project",
      "Used ISTQB best practices and techniques",
      "Worked with PHP, Jenkins, Git, MySQL, REST/SOAP/JSON APIs",
    ],
  },
  {
    title: "QA Engineer",
    company: "eMAG",
    period: "Aug 2017 - Jun 2018",
    responsibilities: [
      "Created test plans and automated test suites using Codeception with Selenium Webdriver",
      "Performed tests against builds and procedures",
      "Identified, analyzed, and documented automation test results",
      "Participated in daily meetings and planning",
      "Worked with Jira, Bitbucket, Stash, GIT, PHP, SQL/HeidiSQL",
    ],
  },
  {
    title: "Game Tester",
    company: "Ubisoft",
    period: "Sep 2015 - Aug 2017",
    responsibilities: [
      "QC testing on XBOX One, PS4 and PC",
      "Building test cases on Excel and Testrail",
      "Advanced JIRA reporting and bug management",
      "Task Leader for a mini-team of 8 people",
      "Weekly feature reports and version follow-ups",
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
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
