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
        className={`transition-all px-1 text-base  flex gap-2 items-center h-11 border-solid border-y-0 border-x-0 border-b-4 rounded
    ${
      active
        ? " border-indigo-500 text-indigo-700"
        : "border-transparent hover:text-indigo-700 hover:border-indigo-500"
    }
`}
      >
        <span className="pt-1 text-lg">{icon}</span>
        <span>{text}</span>
      </Link>
    </>
  );
}
