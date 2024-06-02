import { FC } from "react";

import { Progress } from "antd";
import { IoIosArrowForward } from "react-icons/io";

export interface IQuizResultGameProps {
    countCorrectAnswers: number;
    countIncorrectAnswers: number;
    totalQuestions: number;
}

export const QuizResultGame: FC<IQuizResultGameProps> = (props) => {
    const { totalQuestions, countCorrectAnswers, countIncorrectAnswers } =
        props;

    const percentageCorrect = Math.round(
        (Number(countCorrectAnswers) / Number(totalQuestions)) * 100,
    );

    return (
        <div className="mt-10 flex flex-col items-start justify-center gap-5">
            <h3 className="flex items-center gap-1 text-3xl">
                Поздравялем! Вы прошли тест!
            </h3>
            <p className="text-2xl">
                Если результат вас огорчил, будьте добры к себе и продолжайте
                заниматься!
            </p>
            <p className="text-lg font-bold">Ваш результат</p>
            <div className="flex items-center gap-5">
                <Progress
                    type="dashboard"
                    steps={totalQuestions}
                    percent={percentageCorrect}
                    strokeColor="rgb(74 222 128)"
                    trailColor="rgb(248 113 113)"
                    strokeWidth={20}
                />
                <div className="flex flex-col gap-4 text-xl font-bold">
                    <p className=" flex items-center gap-4 text-green-400">
                        Верно:
                        <span className="rounded-full bg-green-400 px-4 text-white">
                            {countCorrectAnswers}
                        </span>
                    </p>
                    <p className="flex items-center gap-4 text-red-400">
                        Неверно:
                        <span className="rounded-full bg-red-400 px-4 text-white">
                            {countIncorrectAnswers}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};
