import { Skill } from "@/types/api";
import { useApi } from "./useApi";

export function useSkills() {
  return useApi<Skill[]>("/api/skills");
}
