import { ConfigProvider } from "antd";
import { ReactNode } from "react";

type AntdProviderProps = {
    children?: ReactNode;
};
export function AntdProvider(props: AntdProviderProps) {
    const { children } = props;
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "rgb(99 102 241)",
                },
                components: {
                    Menu: {
                        itemMarginInline: 93,
                        iconSize: 18,
                        fontSize: 14,
                    },
                    Radio: {
                        borderRadiusLG: 0,
                    },
                    Progress: {
                        lineHeight: 0,
                        defaultColor: "rgb(99 102 241)",
                    },
                },
            }}
        >
            {children}
        </ConfigProvider>
    );
}
