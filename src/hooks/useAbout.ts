import { About } from "@/types/api";
import { useApi } from "./useApi";
export function useAbout() {
  return useApi<About>("/api/about");
}
