import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

export interface IUiMenuItemProps {
    key?: string;
    icon?: ReactNode;
    text?: string;
    path?: string;
}

export function UiMenuItem(props: IUiMenuItemProps) {
    const { icon, text, path } = props;

    const location = useLocation();
    const active = location.pathname === path;

    return (
        <>
            <Link
                to={path || "/"}
                className={`flex h-11 items-center  gap-2 rounded border-x-0 border-y-0 border-b-4 border-solid px-1 text-base transition-all
    ${
        active
            ? " border-indigo-500 text-indigo-700"
            : "border-transparent hover:border-indigo-500 hover:text-indigo-700"
    }
`}
            >
                <span className="pt-1 text-lg">{icon}</span>
                <span>{text}</span>
            </Link>
        </>
    );
}
