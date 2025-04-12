"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useExperience } from "@/hooks/useExperience";
import SectionLayout from "@/components/layout/SectionLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CompanyLogo } from "@/components/ui/company-logos";
import { ChevronDown, ChevronUp, Calendar, Briefcase } from "lucide-react";
import { Timeline, TimelineItem, TimelineDot, TimelineContent, TimelineHeading, TimelineLine } from "@/components/ui/timeline";
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
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Experience
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          My professional journey and career highlights
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <Timeline positions="left">
          {experiences?.map((exp, index) => {
            const isExpanded = expandedId === exp.id;
            const isLast = index === experiences.length - 1;

            return (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <TimelineItem key={exp.id} className="mb-12">
                  <TimelineDot
                    status="custom"
                    className="shadow-md border-primary/20 z-10"
                    customIcon={
                      <div className="rounded-full overflow-hidden w-full h-full flex items-center justify-center bg-background dark:bg-gray-900">
                        <CompanyLogo company={exp.company} size={24} />
                      </div>
                    }
                  />

                  {!isLast && <TimelineLine className="bg-primary/20" />}

                  <TimelineContent side="right">
                    <motion.div
                      className="flex-1"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                    >
                    <TimelineHeading side="right" variant="primary" className="text-xl font-bold mb-1">
                      {exp.title}
                    </TimelineHeading>

                    <div className="flex items-center gap-1 text-primary font-medium mb-1">
                      <Briefcase className="h-4 w-4" />
                      {exp.company}
                    </div>

                    <div className="flex items-center gap-1 text-muted-foreground text-sm mb-4">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>

                    <Card className="card-background overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 mt-3">
                      <CardContent className="pt-6">
                        <AnimatePresence>
                          {(isExpanded || exp.responsibilities.length <= 3) ? (
                            <motion.ul
                              className="space-y-2 text-muted-foreground"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              {exp.responsibilities.map((resp, idx) => (
                                <motion.li
                                  key={idx}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.1 }}
                                  className="flex items-start gap-2"
                                >
                                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                  <span>{resp}</span>
                                </motion.li>
                              ))}
                            </motion.ul>
                          ) : (
                            <motion.ul
                              className="space-y-2 text-muted-foreground"
                              initial={{ height: "auto", opacity: 1 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              {exp.responsibilities.slice(0, 3).map((resp, idx) => (
                                <motion.li
                                  key={idx}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.1 }}
                                  className="flex items-start gap-2"
                                >
                                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                  <span>{resp}</span>
                                </motion.li>
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
                  </motion.div>
                </TimelineContent>
              </TimelineItem>
              </motion.div>
            );
          })}
        </Timeline>
      </div>
    </SectionLayout>
  );
}
