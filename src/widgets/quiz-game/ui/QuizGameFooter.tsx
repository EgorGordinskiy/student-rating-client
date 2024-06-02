import { Spin } from "antd";
import { useQuizByIdQuery, useQuizStore } from "entities/quiz";
import { EndQuizButton, NextQuestionButton } from "features/quiz";
import { FC } from "react";
import { useParams } from "react-router-dom";

export const QuizGameFooter: FC = () => {
    const { id } = useParams();
    const questionIndex = useQuizStore((state) => state.quistionIndex);
    const isShowResult = useQuizStore((state) => state.isShowResult);

    const { data, isFetching, isLoading, isPending } = useQuizByIdQuery(
        Number(id),
    );
    if (isFetching || isLoading || isPending) return <></>;

    return (
        <footer className="fixed bottom-0 left-0 right-0 bg-white px-5 py-2 shadow">
            <div className="m-auto flex max-w-[52.5rem] items-center justify-between">
                <p className="text-gray-400">
                    Вопрос {questionIndex + 1} / {data?.data.questions.length}
                </p>
                <div className="flex items-center gap-2">
                    {questionIndex + 1 === data?.data.questions.length ? (
                        <EndQuizButton />
                    ) : (
                        <NextQuestionButton />
                    )}
                </div>
            </div>
        </footer>
    );
};
