import { useApi } from "./useApi";

export function useExperience() {
  return useApi("/api/experience");
}
