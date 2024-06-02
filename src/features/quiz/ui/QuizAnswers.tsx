import { FC } from "react";
import { IAnswer } from "shared/api";
import { UiRadio } from "shared/ui";

export interface IQuizAnswers {
    answers: IAnswer[];
}
export const QuizAnswers: FC<IQuizAnswers> = ({ answers }) => {
    return (
        <UiRadio
            options={answers.map((answer) => {
                return {
                    id: answer.text_answer,
                    name: "answer",
                    label: answer.text_answer,
                    value: answer.text_answer,
                };
            })}
        />
    );
};
