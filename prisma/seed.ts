import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.about.create({
    data: {
      title: "About Me",
      description:
        "Senior QA Automation Engineer with extensive experience in creating and maintaining test automation frameworks. Specialized in Java, Python, and JavaScript testing environments.",
      email: "roby248@live.com",
      location: "Bucharest, Romania",
      education: [
        "Master's degree in Leadership and Human Resources Management (2017-2019)",
        "Bachelor's in Management - Universitatea Hyperion (2014-2017)",
      ],
    },
  });

  await prisma.experience.createMany({
    data: [
      {
        title: "Senior Quality Assurance Automation Engineer",
        company: "Deutsche Bank",
        period: "Oct 2019 - Present",
        responsibilities: [
          "Writing and executing manual test cases",
          "Check results of automated tests - reporting bugs and repairing tests",
          "Defining automation frameworks using Java, Selenium and other tools",
          "Active participation in continuous improvement of automation strategy",
          "Performing code reviews on automated tests",
          "Frontend automation using Java, Selenium, SpringBoot, TestNG, Maven, OracleSQL",
          "Backend automation with Java, Cucumber, SpringBoot, TestNG, Maven, RestAssured",
          "Participate in Daily scrum, Groomings and Plannings",
        ],
      },
      {
        title: "QA Automation Engineer",
        company: "Twispay",
        period: "Jan 2019 - Oct 2019",
        responsibilities: [
          "Creating test plans and test cases for Back Office, Payment, API",
          "Designing and implementing automated functional suites in Yii-Codeception",
          "Performing tests against builds and procedures",
          "Debugging and error identification in server logs",
          "Working with PHP-PHP Storm, Gitlab, Git, MySQL, Postman",
          "Security vulnerabilities scanning with OWASP top 10 focus",
        ],
      },
      {
        title: "Quality Assurance Automation Engineer",
        company: "2Checkout (now Verifone)",
        period: "Jun 2018 - Dec 2018",
        responsibilities: [
          "Manual and automated testing at all levels",
          "Security and compliance testing",
          "Automated testing with PHPUnit and Behat",
          "Working in Agile environment with Kanban automation project",
          "Following ISTQB best practices",
          "Using PHP, Jenkins, Git, MySQL, REST/SOAP APIs",
        ],
      },
      {
        title: "QA Engineer",
        company: "eMAG",
        period: "Aug 2017 - Jun 2018",
        responsibilities: [
          "Creating test plans and automated test suites",
          "Using Codeception with Selenium Webdriver",
          "Analyzing and documenting automation results",
          "Maintaining automation tests",
          "Participating in daily meetings and planning",
        ],
      },
      {
        title: "Game Tester",
        company: "Ubisoft",
        period: "Sep 2015 - Aug 2017",
        responsibilities: [
          "QC testing on XBOX One, PS4 and PC",
          "Building test cases on Excel and Testrail",
          "JIRA Advanced Reports and bug management",
          "Task Leader for a mini-team of 8 people",
          "Weekly feature reports and version follow-ups",
        ],
      },
    ],
  });

  await prisma.skills.createMany({
    data: [
      {
        category: "Programming Languages",
        items: ["Java", "Python", "JavaScript", "PHP"],
      },
      {
        category: "Testing Frameworks",
        items: [
          "SpringBoot",
          "TestNG",
          "JUnit",
          "Cucumber",
          "Selenium",
          "RestAssured",
          "PyTest",
          "WebdriverIO",
          "Cypress",
          "Behat",
        ],
      },
      {
        category: "Databases",
        items: ["MySQL", "OracleSQL", "PostgreSQL", "HeidiSQL"],
      },
      {
        category: "CI/CD & Tools",
        items: [
          "Jenkins",
          "TeamCity",
          "GitlabCI",
          "Docker",
          "Git",
          "BitBucket",
          "Jira",
          "Confluence",
          "HPALM",
          "TestRail",
          "JMeter",
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
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
