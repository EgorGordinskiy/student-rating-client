import { useQuery } from "@tanstack/react-query";
import { createInstance } from "shared/api";
import { type IFetchQuizzes } from "shared/api/types";
import { QUERY_KEYS } from "shared/lib";

export const fetchQuizzes = (signal: AbortSignal) => {
    return createInstance<IFetchQuizzes>({
        url: `/quizzes`,
        method: "GET",
        signal,
    });
};

export function useQuizzesQuery() {
    return useQuery({
        queryKey: QUERY_KEYS.QUIZZES,
        queryFn: ({ signal }) => fetchQuizzes(signal),
        staleTime: Infinity,
        gcTime: Infinity,
        retry: 0,
    });
}
