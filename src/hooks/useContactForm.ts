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
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("idle");
    setError(null);
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to submit form";
      console.error("Form submission error:", errorMessage);
      setError(errorMessage);
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return { formData, setFormData, isLoading, status, error, handleSubmit };
}
