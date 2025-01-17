"use client";
import { motion } from "framer-motion";
import { useContactForm } from "@/hooks/useContactForm";
import Modal from "../ui/Modal";
import { useState } from "react";
import { Mail, MapPin, Linkedin } from "lucide-react";

export default function Contact() {
  const { formData, setFormData, isLoading, handleSubmit } = useContactForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    message: "",
    type: "success" as "success" | "error",
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await handleSubmit(e);
      setModalContent({
        title: "Success!",
        message: "Your message has been sent successfully.",
        type: "success",
      });
    } catch {
      setModalContent({
        title: "Error",
        message: "Failed to send message. Please try again.",
        type: "error",
      });
    } finally {
      setIsModalOpen(true);
    }
  };

  return (
    <section id="contact">
      <div className="container-custom">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl text-white">Get in touch</h3>
            <p className="text-gray-300">
              Feel free to reach out for opportunities or collaborations.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-blue-400" />
                <a
                  href="mailto:cristian-robert.iosef@outlook.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  cristian-robert.iosef@outlook.com
                </a>
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Bucharest, Romania</span>
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <Linkedin className="w-5 h-5 text-blue-400" />
                <a
                  href="https://linkedin.com/in/cristian-robert-iosef"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-500 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={onSubmit}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className="w-full p-3 rounded-lg bg-[#151E2E] border border-gray-700 text-white placeholder-gray-400
                focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="w-full p-3 rounded-lg bg-[#151E2E] border border-gray-700 text-white placeholder-gray-400
                focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              rows={6}
              className="w-full p-3 rounded-lg bg-[#151E2E] border border-gray-700 text-white placeholder-gray-400
                focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg
                transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          {...modalContent}
        />
      </div>
    </section>
  );
}
