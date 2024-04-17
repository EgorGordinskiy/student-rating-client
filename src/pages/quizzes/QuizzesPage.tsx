import { FloatButton } from "antd";
import { QuizCard } from "entities/quiz";
import { FaPlus } from "react-icons/fa";

export function QuizzesPage() {
  return (
    <>
      <section className="p-5">
        <FloatButton type="primary" icon={<FaPlus />} />
        <ul className=" flex flex-col gap-4 max-w-4xl">
          <QuizCard />
          <QuizCard />
          <QuizCard />
          <QuizCard />
          <QuizCard />
        </ul>
      </section>
    </>
  );
}
