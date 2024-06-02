import { Avatar } from "antd";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { IQuiz } from "shared/api";

export interface IQuizCardProps {
    quiz: IQuiz;
}

export const QuizCard: FC<IQuizCardProps> = ({ quiz }) => {
    const navigate = useNavigate();
    return (
        <div
            onClick={() => navigate(`/quizzes/${quiz.id}`)}
            className="h-32 cursor-pointer rounded border-x-0  
    border-y-0 border-b-4 border-solid 
    border-transparent bg-white p-3 shadow transition-all
    hover:border-indigo-500"
        >
            <div className="flex h-full items-start justify-between">
                <div className="flex h-full flex-col items-start justify-between">
                    <div>
                        <h4>{quiz.title}</h4>
                        {/* <p className="mt-2 text-gray-700">{quiz.description}</p> */}
                    </div>
                    <div className="flex items-center gap-2">
                        <Avatar
                            style={{
                                backgroundColor: "#fde3cf",
                                color: "#f56a00",
                            }}
                            src="https://api.dicebear.com/7.x/miniavs/svg?seed=2"
                        />
                        <span className="text-sm">Иванов Иван Иванович</span>
                    </div>
                    <p className="mt-2 text-indigo-600">
                        Количество баллов: {quiz.score}
                    </p>
                </div>
                <div className="flex h-full flex-col justify-between pl-1 font-medium">
                    <span className="rounded-full bg-indigo-50 px-2 py-1 text-sm font-medium">
                        17.04.2024
                    </span>
                </div>
            </div>
        </div>
    );
};
