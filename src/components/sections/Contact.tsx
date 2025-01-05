"use client";
import { motion } from "framer-motion";
import { useContactForm } from "@/hooks/useContactForm";

export default function Contact() {
  const { formData, setFormData, isLoading, status, handleSubmit } =
    useContactForm();

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 dark:text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl mb-4 dark:text-white">Get in touch</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Feel free to reach out for opportunities or collaborations.
            </p>
            <div className="space-y-2 dark:text-gray-300">
              <p>📧 roby248@live.com</p>
              <p>📍 Bucharest, Romania</p>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://linkedin.com/in/cristian-robert-iosef"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className="w-full p-2 border dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="w-full p-2 border dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              rows={4}
              className="w-full p-2 border dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors ${
                isLoading
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-blue-700"
              }`}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-500 dark:text-green-400">
                Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-500 dark:text-red-400">
                Failed to send message. Please try again.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
