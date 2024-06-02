import { useQuery } from "@tanstack/react-query";
import { createInstance } from "shared/api";
import { type IFetchQuiz } from "shared/api/types";
import { QUERY_KEYS } from "shared/lib";

export const fetchQuizById = (signal: AbortSignal, id: number) => {
    return createInstance<IFetchQuiz>({
        url: `/quizzes/${id}`,
        method: "GET",
        signal,
    });
};

export function useQuizByIdQuery(id: number) {
    return useQuery({
        queryKey: QUERY_KEYS.QUIZ.concat([id]),
        queryFn: ({ signal }) => fetchQuizById(signal, id),
        retry: 0,
    });
}
