import { Button, Space, Table, TableProps } from "antd";
import { FC } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IUser } from "shared/api/types";
import { useStudentsQuery } from "../model/use-students-query";

interface DataType extends IUser {
    key: string;
}

const columns: TableProps<DataType>["columns"] = [
    {
        title: "ФИО",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "Баллы",
        dataIndex: "score",
        key: "score",
        render: (_, record) => {
            const totalScore =
                (record.achivements_users || []).reduce(
                    (acc, achievement) => acc + achievement.score,
                    0,
                ) +
                (record.rating_users || []).reduce(
                    (acc, rating) => acc + rating.score,
                    0,
                );

            return totalScore || 0;
        },
    },
    {
        title: "",
        key: "action",
        render: () => (
            <Space size="middle">
                <Button icon={<FaPlus />} type="primary" />
                <Button icon={<FaMinus />} />
            </Space>
        ),
    },
];

export const StudentsTable: FC = () => {
    const { data, isLoading } = useStudentsQuery();

    const dataSource: DataType[] =
        data?.data.map((user) => ({
            ...user,
            key: user.id.toString(),
        })) || [];

    return (
        <Table
            columns={columns}
            loading={isLoading}
            dataSource={dataSource}
            pagination={false}
            scroll={{ y: "calc(100vh - 160px)" }}
        />
    );
};
