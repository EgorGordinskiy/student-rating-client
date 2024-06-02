import { Avatar, Button, Spin } from "antd";
import { useQuizByIdQuery } from "entities/quiz";
import { FC } from "react";
import { LiaRocketSolid } from "react-icons/lia";
import { useNavigate, useParams } from "react-router-dom";

export const QuizPage: FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { data, isError, isFetching, isLoading, isPending } =
        useQuizByIdQuery(Number(id));

    if (isError) return <>Ошибка</>;
    if (isFetching || isLoading || isPending) return <Spin fullscreen />;

    return (
        <>
            <section>
                <div className="m-auto flex min-h-96 max-w-3xl flex-col justify-between rounded-lg bg-white p-4 shadow-lg">
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                            <h1>{data.data.title}</h1>
                            <LiaRocketSolid size={50} />
                        </div>

                        <div className="flex items-center gap-2">
                            <Avatar
                                style={{
                                    backgroundColor: "#fde3cf",
                                    color: "#f56a00",
                                }}
                                src="https://api.dicebear.com/7.x/miniavs/svg?seed=2"
                            />
                            <span className="text-sm">
                                Иванов Иван Иванович
                            </span>
                        </div>
                        <p>Баллы: {data.data.score}</p>
                        <p>Описание: {data.data.description}</p>
                        <p>Количество вопросов: {data.data.questions.length}</p>
                    </div>

                    <div>
                        <Button
                            onClick={() => navigate(`game`)}
                            type="primary"
                            size="large"
                            block
                        >
                            Поехали!
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
};
