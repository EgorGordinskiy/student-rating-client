import { IUiMenuItemProps, UiMenuItem } from "./UiMenuItem";

interface UiMenuProps {
  items: IUiMenuItemProps[];
}

export function UiMenu(props: UiMenuProps) {
  const { items } = props;

  return (
    <nav className="h-7">
      <ul className="flex gap-6 items-center">
        {items.map((item) => (
          <UiMenuItem
            key={item.key}
            path={item.path}
            icon={item.icon}
            text={item.text}
          />
        ))}
      </ul>
    </nav>
  );
}
