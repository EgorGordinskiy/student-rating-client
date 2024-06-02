import { FloatButton, Spin } from "antd";
import { QuizCard, useQuizzesQuery } from "entities/quiz";
import { FaPlus } from "react-icons/fa";

export function QuizzesPage() {
    const { data, isError, isFetching, isLoading, isPending } =
        useQuizzesQuery();

    // if (isError) return <>Ошибка</>;
    if (isFetching || isLoading || isPending) return <Spin fullscreen />;

    return (
        <>
            <section>
                <FloatButton type="primary" icon={<FaPlus />} />
                <ul className="flex max-w-4xl flex-col gap-4">
                    {data?.data.map((quiz) => (
                        <QuizCard key={quiz.id} quiz={quiz} />
                    ))}
                </ul>
            </section>
        </>
    );
}
