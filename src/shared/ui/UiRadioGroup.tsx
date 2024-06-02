import { ChangeEvent, FC } from "react";
import { OptionType, UiRadioOption } from "./UiRadioOption";

type RadioGroupProps = {
    name: string;
    options: OptionType[];
    selected: OptionType["value"];
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const UiRadioGroup: FC<RadioGroupProps> = (props) => {
    const { name, options, selected, onChange } = props;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
        onChange?.(e.target.value);
    return (
        <ul className="grid grid-cols-2 gap-2">
            {options.map(({ value, label }) => (
                <UiRadioOption
                    key={value}
                    groupName={name}
                    value={value}
                    label={label}
                    selected={selected}
                    onChange={handleChange}
                />
            ))}
        </ul>
    );
};
