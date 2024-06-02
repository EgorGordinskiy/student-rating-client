import { Table, TableProps } from "antd";
import { FC } from "react";
import { useAchievementsQuery } from "../model/use-achievements-query";
import { IAchievement } from "shared/api";
import { FaCrown } from "react-icons/fa";

interface DataType extends IAchievement {
    key: string;
}

const columns: TableProps<DataType>["columns"] = [
    {
        title: "Название",
        dataIndex: "title",
        key: "title",
    },
    {
        title: "Балл",
        dataIndex: "score",
        key: "score",
    },
    {
        title: "Иконка",
        dataIndex: "image",
        key: "image",
        render: () => <FaCrown size={25} />,
    },
];

export const AchievementsTable: FC = () => {
    const { data, isLoading, isFetching, isPending } = useAchievementsQuery();

    const dataSource: DataType[] =
        data?.data.map((achievement) => ({
            ...achievement,
            key: achievement.id.toString(),
        })) || [];

    return (
        <Table
            loading={isFetching || isLoading || isPending}
            columns={columns}
            dataSource={dataSource}
            pagination={false}
            scroll={{ y: "calc(100vh - 160px)" }}
        />
    );
};
