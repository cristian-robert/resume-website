"use client";
import { motion, AnimatePresence } from "framer-motion";

interface ToastProps {
  message: string;
  type: "success" | "error";
  isVisible: boolean;
  onClose: () => void;
}

export default function Toast({
  message,
  type,
  isVisible,
  onClose,
}: ToastProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 right-4 z-50"
        >
          <div
            className={`rounded-lg shadow-lg p-4 ${
              type === "success"
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
            }`}
          >
            <div className="flex items-center gap-2">
              {type === "success" ? "✅" : "❌"}
              <p>{message}</p>
              <button onClick={onClose} className="ml-4 hover:opacity-80">
                ✕
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
