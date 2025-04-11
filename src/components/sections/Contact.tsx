"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useContactForm } from "@/hooks/useContactForm";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Linkedin, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import SectionLayout from "@/components/layout/SectionLayout";

export default function Contact() {
  const { form, isLoading, status, onSubmit } = useContactForm();

  return (
    <SectionLayout id="contact">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Contact
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let's connect and discuss how we can work together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full shadow-md overflow-hidden card-background">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Get in touch</h3>
                <p className="text-muted-foreground mb-8">
                  Feel free to reach out for opportunities or collaborations. I'm always open to discussing new projects and ideas.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Email</h4>
                      <a
                        href="mailto:roby248@live.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        roby248@live.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Location</h4>
                      <p className="text-muted-foreground">Bucharest, Romania</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Linkedin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">LinkedIn</h4>
                      <a
                        href="https://linkedin.com/in/cristian-robert-iosef"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        Connect with me
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border/50">
                  <h4 className="font-medium text-foreground mb-4">Follow me</h4>
                  <div className="flex gap-4">
                    <a
                      href="https://linkedin.com/in/cristian-robert-iosef"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-background p-2 rounded-full hover:bg-primary/10 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5 text-primary" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="overflow-hidden shadow-md card-background">
              <CardContent className="p-8">
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      {...form.register("name")}
                      className={form.formState.errors.name ? "border-destructive" : ""}
                    />
                    {form.formState.errors.name && (
                      <p className="text-sm text-destructive">{form.formState.errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email address"
                      {...form.register("email")}
                      className={form.formState.errors.email ? "border-destructive" : ""}
                    />
                    {form.formState.errors.email && (
                      <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      rows={5}
                      {...form.register("message")}
                      className={form.formState.errors.message ? "border-destructive" : ""}
                    />
                    {form.formState.errors.message && (
                      <p className="text-sm text-destructive">{form.formState.errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <AnimatePresence>
                    {status === "success" && (
                      <motion.div
                        className="flex items-center gap-2 text-green-600 dark:text-green-500 bg-green-50 dark:bg-green-950/30 p-3 rounded-md mt-4"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <CheckCircle className="h-5 w-5" />
                        <p>Message sent successfully! I'll get back to you soon.</p>
                      </motion.div>
                    )}

                    {status === "error" && (
                      <motion.div
                        className="flex items-center gap-2 text-red-600 dark:text-red-500 bg-red-50 dark:bg-red-950/30 p-3 rounded-md mt-4"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <AlertCircle className="h-5 w-5" />
                        <p>Failed to send message. Please try again later.</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
    </SectionLayout>
  );
}
