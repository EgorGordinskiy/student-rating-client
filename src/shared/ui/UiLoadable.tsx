/* eslint-disable @typescript-eslint/no-explicit-any */
import { Spin } from "antd";
import { ElementType, Suspense } from "react";

export function UiLoadable(Component: ElementType) {
    return function fn(props: any) {
        return (
            <Suspense
                fallback={
                    <Spin className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transform" />
                }
            >
                <Component {...props} />
            </Suspense>
        );
    };
}
