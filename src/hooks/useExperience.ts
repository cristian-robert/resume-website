import { Experience } from "@/types/api";
import { useApi } from "./useApi";

export function useExperience() {
  const { data, error, isLoading } = useApi<Experience[]>("/api/experience");

  const sortedData = data?.sort((a, b) => {
    const dateA = new Date(a.period.split(" - ")[0]);
    const dateB = new Date(b.period.split(" - ")[0]);
    return dateB.getTime() - dateA.getTime();
  });

  return { data: sortedData, error, isLoading };
}
