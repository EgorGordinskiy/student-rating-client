import {
  Button,
  Drawer,
  FloatButton,
  Form,
  InputNumber,
  Radio,
  Select,
} from "antd";
import { AchievementsTable } from "entities/achievements";
import { useState } from "react";
import { FaMicroblog, FaPlus } from "react-icons/fa";

export function AchievementsPage() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <section className="p-5">
        <Drawer
          title="Создание нового достижения"
          width="450px"
          onClose={onClose}
          open={open}
        >
          <Form
            name="basic"
            initialValues={{ remember: true }}
            autoComplete="off"
            layout="vertical"
          >
            <Form.Item
              label="Категория"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Radio.Group
                size="large"
                options={[
                  {
                    label: "Успеваемость",
                    value: "mark",
                  },
                  {
                    label: "Посещаемость",
                    value: "ev",
                  },
                  {
                    label: "Другое",
                    value: "etc",
                  },
                ]}
                optionType="button"
                buttonStyle="solid"
              />
            </Form.Item>
            <Form.Item
              label="Количество допустимых пропусков"
              name="count"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <InputNumber size="large" />
            </Form.Item>

            <Form.Item label="Тип" name="yyyy">
              <Select
                className="max-w-56"
                mode="multiple"
                size="large"
                options={[
                  {
                    label: "Лекции",
                    value: "iiimarkr",
                  },
                  {
                    label: "Практики",
                    value: "pppdgdgfdgss",
                  },
                ]}
              />
            </Form.Item>
            <div className="flex gap-2">
              <Form.Item
                label="Балл"
                name="mark"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <InputNumber size="large" />
              </Form.Item>
              <Form.Item label="Иконка" name="img">
                <Select
                  className="max-w-16"
                  size="large"
                  options={[
                    {
                      label: <FaPlus />,
                      value: "iiimarkr",
                    },
                    {
                      label: <FaMicroblog />,
                      value: "pppdgdgfdgss",
                    },
                  ]}
                />
              </Form.Item>
            </div>

            <Form.Item
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Button type="primary" size="large" block>
                Создать
              </Button>
            </Form.Item>
          </Form>
        </Drawer>

        <FloatButton onClick={showDrawer} type="primary" icon={<FaPlus />} />
        <div>
          {/* <div className="mb-3 flex justify-end">
            <Button type="primary" size="middle">
              Добавить достижение
            </Button>
          </div> */}
          <AchievementsTable />
        </div>
      </section>
    </>
  );
}
