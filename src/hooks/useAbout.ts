import { useApi } from "./useApi";

export function useAbout() {
  return useApi("/api/about");
}
