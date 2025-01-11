import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function useContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState<"success" | "error">("success");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setToastType("success");
      setShowToast(true);
      setFormData({ name: "", email: "", message: "" });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to submit form";
      console.error("Form submission error:", errorMessage);
      setError(errorMessage);
      setToastType("error");
      setShowToast(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    setFormData,
    isLoading,
    showToast,
    toastType,
    setShowToast,
    error,
    handleSubmit,
  };
}
