import { Button, Space, Table, TableProps } from "antd";
import { FC, ReactNode } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdEmojiEvents } from "react-icons/md";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: ReactNode;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "ФИО",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Баллы",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Достижения",
    dataIndex: "address",
    key: "address",
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

const data: DataType[] = [
  {
    key: "1",
    name: "Преловский Тимофей Игоревич",
    age: 32,
    address: <MdEmojiEvents size={30} />,
  },
  {
    key: "2",
    name: "Преловский Тимофей Игоревич",
    age: 42,
    address: <MdEmojiEvents size={30} />,
  },
  {
    key: "3",
    name: "Преловский Тимофей Игоревич",
    age: 32,
    address: <MdEmojiEvents size={30} />,
  },
];

export const StudentsTable: FC = () => {
  return <Table columns={columns} dataSource={data} pagination={false} />;
};
