import { CloseOutlined } from "@ant-design/icons";
import {
    Button,
    Card,
    Checkbox,
    Form,
    FormProps,
    Input,
    InputNumber,
    Space,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { FC } from "react";

export const CreateQuizPage: FC = () => {
    const onFinish: FormProps["onFinish"] = (values) => {
        const j = JSON.stringify(values);
        console.log("Success:", j);
    };

    return (
        <section>
            <div className="m-auto flex max-w-3xl flex-col justify-center gap-7">
                <h1>Создание квиза</h1>
                <Form layout="vertical" onFinish={onFinish}>
                    <Form.Item name="title" label="Название квиза">
                        <Input size="large" />
                    </Form.Item>
                    <Form.Item name="description" label="Описание квиза">
                        <TextArea size="large" />
                    </Form.Item>
                    <Form.Item name="score" label="Балл">
                        <InputNumber size="large" />
                    </Form.Item>

                    <Form.List name="questions">
                        {(fields, { add, remove }) => (
                            <div
                                style={{
                                    display: "flex",
                                    rowGap: 16,
                                    flexDirection: "column",
                                }}
                            >
                                {fields.map((field) => (
                                    <Card
                                        size="default"
                                        title={`Вопрос №${field.name + 1}`}
                                        key={field.key}
                                        extra={
                                            <CloseOutlined
                                                onClick={() => {
                                                    remove(field.name);
                                                }}
                                            />
                                        }
                                    >
                                        <Form.Item
                                            label="Вопрос"
                                            name={[
                                                field.name,
                                                "text_questions",
                                            ]}
                                        >
                                            <Input size="large" />
                                        </Form.Item>

                                        <Form.Item
                                            name={[field.name, "timer"]}
                                            label="Время на ответ (в секундах)"
                                        >
                                            <InputNumber size="large" />
                                        </Form.Item>

                                        <Form.Item label="Ответы">
                                            <Form.List
                                                name={[field.name, "answer"]}
                                            >
                                                {(subFields, subOpt) => (
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection:
                                                                "column",
                                                            rowGap: 16,
                                                        }}
                                                    >
                                                        {subFields.map(
                                                            (subField) => (
                                                                <Space
                                                                    direction="horizontal"
                                                                    align="center"
                                                                    key={
                                                                        subField.key
                                                                    }
                                                                >
                                                                    <Form.Item
                                                                        name={[
                                                                            subField.name,
                                                                            "true_answer",
                                                                        ]}
                                                                        valuePropName="checked"
                                                                    >
                                                                        <Checkbox>
                                                                            Верно
                                                                        </Checkbox>
                                                                    </Form.Item>
                                                                    <Form.Item
                                                                        noStyle
                                                                        name={[
                                                                            subField.name,
                                                                            "text_answer",
                                                                        ]}
                                                                    >
                                                                        <Input placeholder="ответ" />
                                                                    </Form.Item>
                                                                    <Button
                                                                        type="text"
                                                                        onClick={() => {
                                                                            subOpt.remove(
                                                                                subField.name,
                                                                            );
                                                                        }}
                                                                        icon={
                                                                            <CloseOutlined />
                                                                        }
                                                                    />
                                                                </Space>
                                                            ),
                                                        )}
                                                        <Button
                                                            onClick={() =>
                                                                subOpt.add()
                                                            }
                                                            block
                                                            size="large"
                                                        >
                                                            + Добавить ответ
                                                        </Button>
                                                    </div>
                                                )}
                                            </Form.List>
                                        </Form.Item>
                                    </Card>
                                ))}

                                <Button
                                    // type="primary"
                                    onClick={() => add()}
                                    block
                                    size="large"
                                >
                                    + Добавить вопрос
                                </Button>
                            </div>
                        )}
                    </Form.List>
                    <Form.Item className="mt-4">
                        <Button
                            size="large"
                            type="primary"
                            block
                            htmlType="submit"
                        >
                            Создать
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </section>
    );
};
