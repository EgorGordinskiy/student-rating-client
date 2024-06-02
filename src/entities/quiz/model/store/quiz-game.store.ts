import { create } from "zustand";
import { devtools } from "zustand/middleware";
import confetti from "canvas-confetti";
import { IAnswer } from "shared/api";

const count = 200;
const defaults = {
    origin: { y: 0.7 },
};

function fire(particleRatio: number, opts: object) {
    confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
    });
}

interface IQuizState {
    quistionIndex: number;
    goNextQuestion: () => void;

    isShowResult: boolean;
    showResult: () => void;

    selectedAnswers: IAnswer[];
    setSelectedAnswers: (answers: IAnswer[]) => void;

    reset: () => void;
}
export const useQuizStore = create<IQuizState>()(
    devtools((set, get) => ({
        quistionIndex: 0,
        goNextQuestion: () =>
            set((state) => ({ quistionIndex: state.quistionIndex + 1 })),

        isShowResult: false,
        showResult: () => {
            set(() => ({ isShowResult: true }));

            fire(0.25, {
                spread: 26,
                startVelocity: 55,
            });
            fire(0.2, {
                spread: 60,
            });
            fire(0.35, {
                spread: 100,
                decay: 0.91,
                scalar: 0.8,
            });
            fire(0.1, {
                spread: 120,
                startVelocity: 25,
                decay: 0.92,
                scalar: 1.2,
            });
            fire(0.1, {
                spread: 120,
                startVelocity: 45,
            });
        },

        selectedAnswers: [],
        setSelectedAnswers: (answers) => set({ selectedAnswers: answers }),

        reset: () =>
            set({ selectedAnswers: [], isShowResult: false, quistionIndex: 0 }),
    })),
);
