import { Select } from "antd";
import { useQuizStore } from "entities/quiz";
import { FC, useEffect } from "react";
import { MdAccessTimeFilled, MdExpandCircleDown } from "react-icons/md";
import { useParams } from "react-router-dom";

export const QuestionChangeSelect: FC = () => {
    const { id } = useParams();

    const fetchQuizById = useQuizStore((state) => state.fetchQuizById);
    const currentQuiz = useQuizStore((state) => state.currentQuiz);
    useEffect(() => {
        fetchQuizById(Number(id));
    }, [fetchQuizById, id]);

    console.log(currentQuiz);
    const options = currentQuiz?.questions.map((question, index) => {
        return {
            label: (
                <h3 className="flex items-center gap-2 text-[#2e3856]">
                    <span>Вопрос №{index + 1}</span>
                    {question.user_answer ? (
                        <MdExpandCircleDown
                            size={20}
                            className="text-green-400"
                        />
                    ) : (
                        <MdAccessTimeFilled size={20} />
                    )}
                </h3>
            ),
            value: index,
        };
    });
    const currentQuestionIndex = useQuizStore(
        (state) => state.currentQuestionIndex,
    );
    const setCurrentQuestionIndex = useQuizStore(
        (state) => state.setCurrentQuestionIndex,
    );
    return (
        <Select
            defaultValue={0}
            value={currentQuestionIndex}
            size="large"
            onChange={(value) => setCurrentQuestionIndex(value)}
            variant="borderless"
            options={options}
        />
    );
};
