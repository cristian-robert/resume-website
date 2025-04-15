"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSkills } from "@/hooks/useSkills";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import SectionLayout from "@/components/layout/SectionLayout";
import LoadingState from "../ui/LoadingState";

// Define skill proficiency levels
const getSkillLevel = (skill: string): string => {
  const advancedSkills = ["Java", "Selenium", "TestNG", "Cucumber", "RestAssured", "Git"];
  const intermediateSkills = ["Python", "JavaScript", "SpringBoot", "JUnit", "Jenkins", "Docker"];

  if (advancedSkills.includes(skill)) return "Advanced";
  if (intermediateSkills.includes(skill)) return "Intermediate";
  return "Proficient";
};

// Define skill descriptions for tooltips
const getSkillDescription = (skill: string): string => {
  const descriptions: Record<string, string> = {
    "Java": "Primary programming language for test automation frameworks",
    "Python": "Used for data processing and API testing",
    "JavaScript": "Frontend testing and web automation",
    "Selenium": "Web UI automation framework",
    "TestNG": "Test execution framework with parallel execution support",
    "Cucumber": "BDD framework for behavior-driven testing",
    "RestAssured": "Java library for REST API testing",
    "SpringBoot": "Framework for Java-based applications",
    "JUnit": "Unit testing framework for Java",
    "Jenkins": "CI/CD automation server",
    "Docker": "Containerization platform",
    "Git": "Version control system",
  };

  return descriptions[skill] || `Expertise in ${skill}`;
};

export default function Skills() {
  const { data: skills, isLoading } = useSkills();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  if (isLoading) return <LoadingState />;

  // Get all unique categories
  const categories = skills ? ["all", ...skills.map(skill => skill.category)] : [];

  // Filter skills based on active category
  const filteredSkills = activeCategory === "all"
    ? skills
    : skills?.filter(skill => skill.category === activeCategory);

  return (
    <SectionLayout id="skills">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="w-full"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Skills & Certifications
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Technical expertise and professional certifications acquired throughout my career
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveCategory}>
          <TabsList className="flex flex-wrap justify-center mb-8 bg-black/50 p-1 rounded-lg">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="capitalize px-4 py-2 text-gray-300 data-[state=active]:bg-primary/80 data-[state=active]:text-white"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeCategory} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {filteredSkills?.map((skillGroup, index) => (
                  <Card key={skillGroup.category} className="h-full overflow-hidden hover:shadow-md transition-shadow duration-300 card-background">
                    <CardHeader className="bg-black/50">
                      <CardTitle className="text-xl">{skillGroup.category}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill, idx) => (
                          <TooltipProvider key={idx}>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div
                                  className="space-y-1"
                                  onMouseEnter={() => setHoveredSkill(skill)}
                                  onMouseLeave={() => setHoveredSkill(null)}
                                >
                                  <Badge
                                    variant={hoveredSkill === skill ? "default" : "outline"}
                                    className="cursor-pointer transition-all duration-300 text-sm py-1 px-3 hover:shadow-sm"
                                  >
                                    {skill}
                                  </Badge>
                                </div>
                              </TooltipTrigger>
                              <TooltipContent side="top" className="max-w-xs">
                                <div className="space-y-1">
                                  <div className="font-medium">{skill} <span className="text-xs text-gray-300">({getSkillLevel(skill)})</span></div>
                                  <p className="text-xs">{getSkillDescription(skill)}</p>
                                </div>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </AnimatePresence>
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </SectionLayout>
  );
}