import { Navigate, useRoutes } from "react-router-dom";
import { lazy } from "react";
import { UiLoadable } from "shared/ui";
import { PATH_PAGE } from "shared/lib";
import { MainLayout, QuizGameLayout } from "pages/layouts";

const StudentsPage = UiLoadable(lazy(() => import("pages/students")));
const AchievementsPage = UiLoadable(lazy(() => import("pages/achievements")));
const QuizzesPage = UiLoadable(lazy(() => import("pages/quizzes")));
const QuizPage = UiLoadable(lazy(() => import("pages/quiz")));
const CreateQuizPage = UiLoadable(lazy(() => import("pages/create-quiz")));
const QuizGamePage = UiLoadable(lazy(() => import("pages/quiz-game")));

export function Router() {
    return useRoutes([
        { path: "*", element: <Navigate to={PATH_PAGE.home} replace /> },
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    path: PATH_PAGE.home,
                    element: <StudentsPage />,
                },
                {
                    path: PATH_PAGE.achievement,
                    element: <AchievementsPage />,
                },
                {
                    path: PATH_PAGE.quizzes,
                    element: <QuizzesPage />,
                },
                {
                    path: PATH_PAGE.quiz,
                    element: <QuizPage />,
                },
                {
                    path: PATH_PAGE.createQuiz,
                    element: <CreateQuizPage />,
                },
            ],
        },
        {
            path: "/quizzes/:id/game",
            element: <QuizGameLayout />,
            children: [
                { path: "/quizzes/:id/game", element: <QuizGamePage /> },
            ],
        },
    ]);
}
