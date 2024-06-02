import { FC } from "react";
import { IQuestion, IAnswer } from "shared/api";
import { useQuizStore } from "../model/store/quiz-game.store";
// Путь к вашему хранилищу Zustand

export interface IQuizQuestionProps {
    question: IQuestion;
}

export const QuizQuestion: FC<IQuizQuestionProps> = ({ question }) => {
    const { text_questions, answer } = question;
    const selectedAnswers = useQuizStore((state) => state.selectedAnswers);
    const setSelectedAnswers = useQuizStore(
        (state) => state.setSelectedAnswers,
    );

    const handleAnswerSelect = (selectedAnswer: IAnswer) => {
        setSelectedAnswers([...selectedAnswers, selectedAnswer]);
    };

    const handleAnswerDeselect = (answerId: number) => {
        setSelectedAnswers(
            selectedAnswers.filter((answer) => answer.id !== answerId),
        );
    };

    return (
        <div className="flex min-h-[24rem] max-w-[52.5rem] flex-col justify-between rounded-lg bg-white p-5 shadow-lg">
            <div className="flex flex-col gap-5">
                <p className="text-gray-500">Вопрос</p>
                <h3>{text_questions}</h3>
            </div>
            <div className="flex flex-col gap-5">
                <p className="text-gray-500">Выберите правильный ответ</p>
                <ul className="grid grid-cols-2 gap-2">
                    {answer.map((item) => (
                        <li key={item.id}>
                            <button
                                onClick={() =>
                                    selectedAnswers.some(
                                        (selected) => selected.id === item.id,
                                    )
                                        ? handleAnswerDeselect(item.id)
                                        : handleAnswerSelect(item)
                                }
                                className={`block w-full cursor-pointer rounded-md p-6 text-lg transition-all hover:bg-indigo-400 hover:text-white ${
                                    selectedAnswers.some(
                                        (selected) => selected.id === item.id,
                                    )
                                        ? "bg-indigo-400 text-white"
                                        : "bg-indigo-50"
                                }`}
                            >
                                {item.text_answer}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
