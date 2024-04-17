import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button } from "antd";
import { Outlet } from "react-router-dom";
import { PiStudentBold } from "react-icons/pi";
import { MdOutlineQuiz } from "react-icons/md";
import { VscSymbolEvent } from "react-icons/vsc";
import { UiMenu } from "shared/ui";
import { PATH_PAGE } from "shared/lib";
import { GrAchievement } from "react-icons/gr";

export function MainLayout() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className=" px-4 flex items-center justify-between">
          <div className="flex flex-col items-center gap-1 py-2">
            <div>Рейтинг студентов</div>
            <div className="font-bold">ИРКУТСКИЙ ПОЛИТЕХ</div>
          </div>
          <UiMenu
            items={[
              {
                text: "Студенты",
                icon: <PiStudentBold />,
                path: PATH_PAGE.home,
                key: "students",
              },
              {
                text: "Достижения",
                icon: <GrAchievement />,
                key: "achievement",
                path: PATH_PAGE.achievement,
              },
              {
                text: "Квизы",
                icon: <MdOutlineQuiz />,
                key: "quizzes",
                path: PATH_PAGE.quizzes,
              },
              {
                text: "Шкала рейтинга",
                key: "rating",
                icon: <VscSymbolEvent />,
              },
            ]}
          />

          <div className="flex items-center gap-4">
            <Avatar
              size="large"
              style={{ backgroundColor: "#ffcd1f", color: "#282e3e" }}
              icon={<UserOutlined />}
            />
            <Button size="large" type="primary">
              <span className="font-medium">Журнал успеваемости</span>
            </Button>
          </div>
        </div>
      </header>
      <div className="pt-16">
        <Outlet />
      </div>
    </>
  );
}
