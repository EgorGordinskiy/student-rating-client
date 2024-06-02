import { Button } from "antd";
import { useQuizStore } from "entities/quiz";
import { FC } from "react";

export const EndQuizButton: FC = () => {
    // const currentQuiz = useQuizStore((state) => state.currentQuiz);

    // const areAllQuestionsAnswered = currentQuiz?.questions.every(
    //   (question) => question.user_answer !== undefined
    // );

    const showResult = useQuizStore((state) => state.showResult);
    return (
        <Button
            size="large"
            type="primary"
            // disabled={!areAllQuestionsAnswered}
            onClick={showResult}
        >
            Завершить
        </Button>
    );
};
