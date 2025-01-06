import { Skill } from "@/types/api";
import { useApi } from "./useApi";

export function useSkills() {
  const { data, error, isLoading } = useApi<Skill[]>("/api/skills");

  if (error) {
    console.error("Failed to fetch skills:", error);
  }

  return { data, error, isLoading };
}
