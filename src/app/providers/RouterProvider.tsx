import { Navigate, useRoutes } from "react-router-dom";
import { lazy } from "react";
import { UiLoadable } from "shared/ui";
import { PATH_PAGE } from "shared/lib";
import { MainLayout } from "pages/layouts";

const StudentsPage = UiLoadable(lazy(() => import("pages/students")));
const AchievementsPage = UiLoadable(lazy(() => import("pages/achievements")));
const QuizzesPage = UiLoadable(lazy(() => import("pages/quizzes")));

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
      ],
    },
  ]);
}
