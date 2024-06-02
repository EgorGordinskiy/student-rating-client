import { FC, useState } from "react";

export interface IUiRadioOption {
    id: string;
    label: string;
    name: string;
    value: string;
}

export interface IUiRadioProps {
    options: IUiRadioOption[];
    value?: string;
    onChange?: (value: string) => void;
}

export const UiRadio: FC<IUiRadioProps> = ({ options, value, onChange }) => {
    const [selectedValue, setSelectedValue] = useState<string | undefined>(
        value,
    );

    const handleOptionChange = (newValue: string) => {
        setSelectedValue(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };

    return (
        <ul className="grid grid-cols-2 gap-2">
            {options.map((option) => (
                <li key={option.id}>
                    <input
                        id={option.id}
                        name={option.name}
                        type="radio"
                        value={option.value}
                        checked={option.value === selectedValue}
                        onChange={() => handleOptionChange(option.value)}
                        className="peer hidden"
                    />
                    <label
                        htmlFor={option.id}
                        className="block cursor-pointer rounded-md bg-indigo-50 p-6 transition-all hover:bg-indigo-400 hover:text-white peer-checked:bg-indigo-400 peer-checked:text-white"
                    >
                        {option.label}
                    </label>
                </li>
            ))}
        </ul>
    );
};
