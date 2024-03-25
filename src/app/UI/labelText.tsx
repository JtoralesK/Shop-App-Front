"use client";
import { DefaultLabel } from "./DefaultLabel";
export const LabelText = (props: any) => {
  const {
    text,
    placeholder,
    type,
    value,
    onChange,
    disabled,
    required,
    name,
    ...inputProps
  } = props;
  return (
    <DefaultLabel text={text}>
      <input
        className={`w-full h-9 border-2   bg-gray-100 rounded-md px-2 ${
          disabled ? "cursor-not-allowed  outline-none" : ""
        }`}
        type={type}
        placeholder={placeholder}
        {...inputProps}
        onChange={(e) => onChange && onChange(e.target.value)}
        readOnly={disabled ? disabled : false}
        {...(required && { required: true })}
      />
    </DefaultLabel>
  );
};
