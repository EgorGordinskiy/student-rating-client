import { Button, Progress, Spin } from "antd";
import Countdown from "antd/es/statistic/Countdown";
import { useQuizByIdQuery, useQuizStore } from "entities/quiz";
import { FC } from "react";
import { IoIosClose } from "react-icons/io";

import { Outlet, useNavigate, useParams } from "react-router-dom";
import { PATH_PAGE } from "shared/lib";
import { QuizGameFooter } from "widgets/quiz-game";

export const QuizGameLayout: FC = () => {
    const { id } = useParams();
    const questionIndex = useQuizStore((state) => state.quistionIndex);
    const isShowResult = useQuizStore((state) => state.isShowResult);
    const showResult = useQuizStore((state) => state.showResult);
    const handleNextQuestion = useQuizStore((state) => state.goNextQuestion);
    const reset = useQuizStore((state) => state.reset);
    const navigate = useNavigate();

    const { data, isSuccess } = useQuizByIdQuery(Number(id));

    const percent = Math.round(
        (Number(questionIndex + 1) / Number(data?.data.questions.length)) * 100,
    );
    const onFinish = () => {
        if (questionIndex + 1 === data?.data.questions.length) showResult();
        else handleNextQuestion();
    };
    return (
        <>
            <header className="fixed left-0 right-0 top-0 z-50  bg-white shadow">
                {isSuccess && (
                    <div className="flex flex-col justify-between">
                        <div className="flex items-center justify-between p-3">
                            <h3 className="flex-1 ">{data?.data.title}</h3>
                            {!isShowResult && (
                                <Countdown
                                    onFinish={onFinish}
                                    value={
                                        Date.now() +
                                        1000 *
                                            (data?.data.questions[questionIndex]
                                                .timer || 20)
                                    }
                                />
                            )}
                            <div className="flex flex-1 items-center justify-end gap-2">
                                <Button
                                    onClick={() => {
                                        navigate(PATH_PAGE.quizzes);
                                        reset();
                                    }}
                                    size="middle"
                                    icon={<IoIosClose size={45} />}
                                />
                            </div>
                        </div>
                        {!isShowResult && (
                            <Progress
                                size="small"
                                strokeLinecap="butt"
                                percent={percent}
                                showInfo={false}
                                type="line"
                            />
                        )}
                    </div>
                )}
            </header>
            <div className="p-5 pt-24">
                <Outlet />
            </div>
            {!isShowResult && <QuizGameFooter />}
        </>
    );
};
