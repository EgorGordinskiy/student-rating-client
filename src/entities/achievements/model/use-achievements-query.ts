import { useQuery } from "@tanstack/react-query";
import { createInstance } from "shared/api";
import { IFetchAchievements } from "shared/api/types";
import { QUERY_KEYS } from "shared/lib";

export const fetchAchievements = (signal: AbortSignal) => {
  return createInstance<IFetchAchievements>({
    url: `/achievements`,
    method: "GET",
    signal,
  });
};

export function useAchievementsQuery() {
  return useQuery({
    queryKey: QUERY_KEYS.ACHIEVEMENTS,
    queryFn: ({ signal }) => fetchAchievements(signal),
  });
}
