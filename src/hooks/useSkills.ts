import { useApi } from "./useApi";

export function useSkills() {
  return useApi("/api/skills");
}
