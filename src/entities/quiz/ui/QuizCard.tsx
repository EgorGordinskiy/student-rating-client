import { FC } from "react";

export const QuizCard: FC = () => {
  return (
    <div
      className="p-3 bg-white transition-all rounded  
    h-32 cursor-pointer shadow w-full
    border-solid border-y-0 border-x-0 border-b-4 border-transparent
    hover:border-indigo-500"
    >
      <div className="flex justify-between items-start h-full">
        <div className="flex flex-col items-start justify-between h-full">
          <div>
            <h4>Квиз на знание информатики</h4>
            <p className="mt-2 text-gray-700">
              Текст — зафиксированная на каком-либо материальном носителе
              человеческая мысль; в общем плане связная и полная
              последовательность символов.
            </p>
          </div>

          <p className="mt-2 text-indigo-600">Количество баллов: 2</p>
        </div>
        <div className="pl-1 flex flex-col justify-between h-full font-medium">
          <span className="py-1 px-2 bg-indigo-50 font-medium rounded-full text-sm">
            17.04.2024
          </span>
        </div>
      </div>
    </div>
  );
};
