import { FC, InputHTMLAttributes } from "react";

export interface IUiRadioOptionProps
    extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export const UiRadioOption: FC<IUiRadioOptionProps> = (props) => {
    const { label, id, ...rest } = props;

    return (
        <li>
            <input id={id} className="peer hidden" type="radio" {...rest} />
            <label
                htmlFor={id}
                className="block cursor-pointer rounded-md bg-indigo-50 p-6 transition-all hover:bg-indigo-400 hover:text-white peer-checked:bg-indigo-400 peer-checked:text-white"
            >
                <div>{label}</div>
            </label>
        </li>
    );
};
