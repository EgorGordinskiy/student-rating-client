import { Spin } from "antd";
import {
    QuizQuestion,
    QuizResultGame,
    useQuizByIdQuery,
    useQuizStore,
} from "entities/quiz";

import { useParams } from "react-router-dom";
import { IAnswer, IQuestion } from "shared/api";

export function QuizGamePage() {
    const { id } = useParams();
    const questionIndex = useQuizStore((state) => state.quistionIndex);
    const isShowResult = useQuizStore((state) => state.isShowResult);

    const selectedAnswers = useQuizStore((state) => state.selectedAnswers);

    const { data, isError, isFetching, isLoading, isPending } =
        useQuizByIdQuery(Number(id));

    if (isError) return <>Ошибка</>;
    if (isFetching || isLoading || isPending) return <Spin fullscreen />;

    // Функция для определения, все ли верные ответы на данный вопрос выбраны пользователем
    const areAllCorrectAnswersSelected = (
        question: IQuestion,
        selectedAnswers: IAnswer[],
    ) => {
        const correctAnswers = question.answer.filter(
            (answer) => answer.true_answer,
        );
        const incorrectAnswersSelected = selectedAnswers.some(
            (selectedAnswer) =>
                question.answer.some(
                    (answer) =>
                        !answer.true_answer && answer.id === selectedAnswer.id,
                ),
        );

        return (
            correctAnswers.every((correctAnswer) =>
                selectedAnswers.some(
                    (selectedAnswer) => selectedAnswer.id === correctAnswer.id,
                ),
            ) && !incorrectAnswersSelected
        );
    };

    const countQuestionsWithAllCorrectAnswers = (
        questions: IQuestion[],
        selectedAnswers: IAnswer[],
    ) => {
        return questions.reduce((count, question) => {
            if (areAllCorrectAnswersSelected(question, selectedAnswers)) {
                return count + 1;
            }
            return count;
        }, 0);
    };

    const countCorrectAnswers = countQuestionsWithAllCorrectAnswers(
        data?.data.questions,
        selectedAnswers,
    );
    return (
        <>
            <section>
                <div className="m-auto max-w-[52.5rem]">
                    {isShowResult ? (
                        <QuizResultGame
                            countCorrectAnswers={countCorrectAnswers}
                            countIncorrectAnswers={
                                data.data.questions.length - countCorrectAnswers
                            }
                            totalQuestions={data.data.questions.length}
                        />
                    ) : (
                        <QuizQuestion
                            question={data.data.questions[questionIndex]}
                        />
                    )}
                </div>
            </section>
        </>
    );
}
