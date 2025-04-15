"use client";
import { motion } from "framer-motion";
import { useAbout } from "@/hooks/useAbout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Mail, GraduationCap, User } from "lucide-react";
import SectionLayout from "@/components/layout/SectionLayout";
import LoadingState from "../ui/LoadingState";
import ErrorState from "../ui/ErrorState";

export default function About() {
  const { data, isLoading, error } = useAbout();

  if (isLoading) return <LoadingState />;
  if (error) return <ErrorState message={error} />;
  if (!data) return <ErrorState message="No data available" />;

  return (
    <SectionLayout id="about">
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
            About Me
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Get to know more about my background and qualifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <Card className="h-full overflow-hidden shadow-md card-background">
            <CardHeader className="pb-2 flex flex-row items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              <CardTitle>Professional Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className="text-white space-y-4 prose prose-sm dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: data?.description.replace(/\n/g, '<br>') }}
              />
            </CardContent>
          </Card>

          <Card className="h-full overflow-hidden shadow-md card-background">
            <CardHeader className="pb-2 flex flex-row items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              <CardTitle>Personal Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Location</h4>
                    <p className="text-gray-300">{data?.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Email</h4>
                    <p className="text-gray-300">{data?.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Education</h4>
                    <div className="space-y-2">
                      {data?.education.map((edu, index) => (
                        <p key={index} className="text-gray-300">
                          {edu}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </SectionLayout>
  );
}