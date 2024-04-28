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
  type: string;
};

export const FormInputValidate = (props: Prop) => {
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
          type={props.type}
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

type Prop1 = {
  label: string;
  placeholder: string;
  name: string;
};

export const FormInput = (props: Prop1) => {
  const { label, placeholder, name } = props;
  return (
    <DefaultLabel text={label}>
      <div>
        <input
          name={name}
          placeholder={placeholder}
          className={`w-full h-9 border-2   bg-gray-100 rounded-md px-2`}
        />
        <span className="text-red-500 text-sm"></span>
      </div>
    </DefaultLabel>
  );
};
