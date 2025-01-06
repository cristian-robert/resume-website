import { About } from "@/types/api";
import { useApi } from "./useApi";

export function useAbout() {
  const { data, error, isLoading } = useApi<About>("/api/about");

  if (error) {
    console.error("Failed to fetch about:", error);
  }

  return { data, error, isLoading };
}
