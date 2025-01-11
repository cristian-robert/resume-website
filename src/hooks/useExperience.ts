import { Experience } from "@/types/api";
import { useApi } from "./useApi";

export function useExperience() {
  const { data, error, isLoading } = useApi<Experience[]>("/api/experience");

  const sortedData = data?.sort((a, b) => {
    // Convert "Month Year" to "Month 1, Year" for reliable parsing
    const parseDate = (dateStr: string) => {
      const [startDate] = dateStr.split(" - ");
      const [month, year] = startDate.split(" ");
      return new Date(`${month} 1, ${year}`);
    };

    return parseDate(b.period).getTime() - parseDate(a.period).getTime();
  });

  return { data: sortedData, error, isLoading };
}
