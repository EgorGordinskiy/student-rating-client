import { Button } from "antd";
import { useQuizStore } from "entities/quiz";
import { FC } from "react";

export const NextQuestionButton: FC = () => {
    const handleNextQuestion = useQuizStore((state) => state.goNextQuestion);

    return (
        <Button
            size="large"
            // disabled={isLastQuestion()}
            type="primary"
            onClick={handleNextQuestion}
        >
            Продолжить
        </Button>
    );
};
