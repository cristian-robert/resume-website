import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define schema for form validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

// Infer the type from the schema
type FormData = z.infer<typeof formSchema>;

export const useContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  // Initialize react-hook-form with zod validation
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    setError(null);
    setStatus("idle");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", data);
      setStatus("success");
      form.reset();
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

  return { form, isLoading, status, error, onSubmit };
};
