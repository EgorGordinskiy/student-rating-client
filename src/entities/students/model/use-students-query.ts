import { useQuery } from "@tanstack/react-query";
import { createInstance } from "shared/api";
import { IFetchUsers } from "shared/api/types";
import { QUERY_KEYS } from "shared/lib";
export const fetchStudents = (signal: AbortSignal) => {
  return createInstance<IFetchUsers>({
    url: `/user`,
    method: "GET",
    signal,
  });
};

export function useStudentsQuery() {
  return useQuery({
    queryKey: QUERY_KEYS.USERS,
    queryFn: ({ signal }) => fetchStudents(signal),
  });
}
