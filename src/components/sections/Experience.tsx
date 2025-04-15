"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useExperience } from "@/hooks/useExperience";
import SectionLayout from "@/components/layout/SectionLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CompanyLogo } from "@/components/ui/company-logos";
import { ChevronDown, ChevronUp, Calendar, Briefcase } from "lucide-react";
import { CustomTimeline, CustomTimelineItem, CustomTimelineContent, CustomTimelineTitle } from "@/components/ui/custom-timeline";
import LoadingState from "../ui/LoadingState";
import ErrorState from "../ui/ErrorState";

export default function Experience() {
  const { data: experiences, isLoading, error } = useExperience();
  const [expandedId, setExpandedId] = useState<number | null>(null);

  if (isLoading) return <LoadingState />;
  if (error) return <ErrorState message={error} />;
  if (!experiences?.length)
    return <ErrorState message="No experience data available" />;

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <SectionLayout id="experience">
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
            Experience
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My professional journey and career highlights
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <CustomTimeline>
            {experiences?.map((exp, index) => {
              const isExpanded = expandedId === exp.id;

              return (
                <div
                  key={exp.id}
                  className="opacity-0"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.2}s forwards`
                  }}
                >
                  <CustomTimelineItem
                    icon={<CompanyLogo company={exp.company} size={29} />}
                  >
                    <CustomTimelineContent>
                      <div className="flex-1">
                        <CustomTimelineTitle>
                          {exp.title}
                        </CustomTimelineTitle>

                        <div className="flex items-center gap-1 text-primary font-medium mb-1">
                          <Briefcase className="h-4 w-4" />
                          {exp.company}
                        </div>

                        <div className="flex items-center gap-1 text-gray-300 text-sm mb-4">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>

                        <Card className="card-background overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 mt-3">
                          <CardContent className="pt-6">
                            <AnimatePresence>
                              {(isExpanded || exp.responsibilities.length <= 3) ? (
                                <motion.ul
                                  className="space-y-2 text-white"
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  {exp.responsibilities.map((resp, idx) => (
                                    <li
                                      key={idx}
                                      className="flex items-start gap-2"
                                    >
                                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                      <span>{resp}</span>
                                    </li>
                                  ))}
                                </motion.ul>
                              ) : (
                                <motion.ul
                                  className="space-y-2 text-white"
                                  initial={{ height: "auto", opacity: 1 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  {exp.responsibilities.slice(0, 3).map((resp, idx) => (
                                    <li
                                      key={idx}
                                      className="flex items-start gap-2"
                                    >
                                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                      <span>{resp}</span>
                                    </li>
                                  ))}
                                </motion.ul>
                              )}
                            </AnimatePresence>

                            {exp.responsibilities.length > 3 && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => toggleExpand(exp.id)}
                                className="mt-2 w-full flex items-center justify-center gap-1 text-primary"
                              >
                                {isExpanded ? (
                                  <>
                                    <ChevronUp className="h-4 w-4" />
                                    Show Less
                                  </>
                                ) : (
                                  <>
                                    <ChevronDown className="h-4 w-4" />
                                    Show More
                                  </>
                                )}
                              </Button>
                            )}
                          </CardContent>
                        </Card>
                      </div>
                    </CustomTimelineContent>
                  </CustomTimelineItem>
                </div>
              );
            })}
          </CustomTimeline>
        </div>
      </motion.div>
    </SectionLayout>
  );
}