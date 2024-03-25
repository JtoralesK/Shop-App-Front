import { useState } from "react";
import { DefaultLabel } from "./DefaultLabel";
type Prop = {
  label: string;
  errorMessage: string;
  onChange?: (e: any) => void;
  isValid: boolean;
  setIsValid: (e: boolean) => void;
  placeholder: string;
  name: string;
  pattern?: string;
};

export const FormInput = (props: Prop) => {
  const [focused, setFocused] = useState(false);
  const {
    label,
    errorMessage,
    pattern,
    isValid,
    setIsValid,
    name,
    placeholder,
  } = props;
  const handleBlur = () => {
    setFocused(!isValid ? true : false);
  };

  const handleInputChange = (e: any) => {
    const { value } = e.target;
    let isValidInput = false;
    const inputRegex = pattern ? new RegExp(pattern) : null;
    if (inputRegex) {
      isValidInput = inputRegex.test(value);
    }
    setIsValid(isValidInput);
  };
  return (
    <DefaultLabel text={label}>
      <div>
        <input
          onChange={handleInputChange}
          name={name}
          onBlur={handleBlur}
          placeholder={placeholder}
          onFocus={() => setFocused(false)}
          required
          className={`w-full h-9 border-2   bg-gray-100 rounded-md px-2 ${
            focused && "border-red-500"
          }`}
        />
        <span
          className="text-red-500 text-sm"
          style={{ display: focused ? "block" : "none" }}
        >
          {errorMessage}
        </span>
      </div>
    </DefaultLabel>
  );
};
