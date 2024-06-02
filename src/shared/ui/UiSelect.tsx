import { ReactNode } from "react";

interface Option {
    value: string;
    label: string;
    icon?: ReactNode;
}

interface UiSelectProps {
    options: Option[];
    name?: string;
    label?: string;
    onChange?: (value: string | string[]) => void;
    value?: string[] | string;
    multiple?: boolean;
    disabled?: boolean;
}

export function UiSelect(props: UiSelectProps) {
    const {
        options,
        multiple = false,
        disabled = false,
        value,
        onChange,
        name,
        label,
    } = props;

    const handleOptionToggle = (selectedValue: string) => {
        let updatedValue: string | string[] = selectedValue;

        if (multiple) {
            let selectedValues: string[] = Array.isArray(value) ? value : [];

            if (selectedValues.includes(selectedValue)) {
                selectedValues = selectedValues.filter(
                    (v) => v !== selectedValue,
                );
            } else {
                selectedValues.push(selectedValue);
            }

            updatedValue = selectedValues;
        }

        onChange && onChange(updatedValue);
    };

    return (
        <div>
            {label && <label className="mb-1 block">{label}</label>}
            <div className="grid grid-cols-2 gap-2">
                {options.map((option) => (
                    <div
                        key={option.value}
                        className={`${
                            disabled
                                ? "cursor-not-allowed opacity-50"
                                : "cursor-pointer"
                        } flex items-center justify-center gap-2 rounded p-4 text-center text-base font-medium transition-all ${
                            multiple
                                ? value &&
                                  Array.isArray(value) &&
                                  value.includes(option.value)
                                    ? "bg-indigo-500 text-white"
                                    : "bg-gray-100"
                                : value === option.value
                                  ? " bg-indigo-500 text-white"
                                  : "bg-gray-100"
                        }`}
                        onClick={() =>
                            !disabled && handleOptionToggle(option.value)
                        }
                    >
                        {option.icon}
                        {option.label}
                    </div>
                ))}
            </div>
            {multiple && (
                <input
                    type="hidden"
                    name={name}
                    value={Array.isArray(value) ? value.join(",") : ""}
                />
            )}
        </div>
    );
}
