import { Table, TableProps } from "antd";
import { FC, ReactNode } from "react";
import { MdEmojiEvents } from "react-icons/md";

interface DataType {
  key: string;
  name: string;
  age: ReactNode;
  address: ReactNode;
  comment: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Название",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Баллы",
    dataIndex: "address",
    key: "address",
  },

  {
    title: "Комментарий",
    key: "comment",
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "Крутой",
    age: <MdEmojiEvents size={30} />,
    address: 10,
    comment: "Крутяк!!!",
  },
  {
    key: "2",
    name: "Крутой",
    age: <MdEmojiEvents size={30} />,
    address: 10,
    comment: "Крутяк!!!",
  },
  {
    key: "3",
    name: "Крутой",
    age: <MdEmojiEvents size={30} />,
    address: 10,
    comment: "Крутяк!!!",
  },
  {
    key: "4",
    name: "Крутой",
    age: <MdEmojiEvents size={30} />,
    address: 10,
    comment: "Крутяк!!!",
  },
  {
    key: "5",
    name: "Крутой",
    age: <MdEmojiEvents size={30} />,
    address: 10,
    comment: "Крутяк!!!",
  },
  {
    key: "6",
    name: "Крутой",
    age: <MdEmojiEvents size={30} />,
    address: 10,
    comment: "Крутяк!!!",
  },
  {
    key: "7",
    name: "Крутой",
    age: <MdEmojiEvents size={30} />,
    address: 10,
    comment: "Крутяк!!!",
  },
  {
    key: "8",
    name: "Крутой",
    age: <MdEmojiEvents size={30} />,
    address: 10,
    comment: "Крутяк!!!",
  },
  {
    key: "9",
    name: "Крутой",
    age: <MdEmojiEvents size={30} />,
    address: 10,
    comment: "Крутяк!!!",
  },
  {
    key: "10",
    name: "Крутой",
    age: <MdEmojiEvents size={30} />,
    address: 10,
    comment: "Крутяк!!!",
  },
  {
    key: "11",
    name: "Крутой",
    age: <MdEmojiEvents size={30} />,
    address: 10,
    comment: "Крутяк!!!",
  },
  {
    key: "12",
    name: "Крутой",
    age: <MdEmojiEvents size={30} />,
    address: 10,
    comment: "Крутяк!!!",
  },
];

export const AchievementsTable: FC = () => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      scroll={{ y: "calc(100vh - 160px)" }}
    />
  );
};
