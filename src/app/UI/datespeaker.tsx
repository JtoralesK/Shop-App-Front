"use client";
import { DefaultLabel } from "./DefaultLabel";
type PickerProp = {
  text: string;
  value?: string;
  onchange?: (value: string) => void;
  disabled?: boolean;
};

export const DatePickerLabel = (p: PickerProp) => {
  return (
    <DefaultLabel text={p.text}>
      <input
        className={`w-full py-1 border-2 bg-gray-100 rounded-md p-2 ${
          p.disabled ? "cursor-not-allowed  outline-none" : ""
        }`}
        type="date"
        id="start"
        min="2023-01-01"
        max="2025-12-31"
        onChange={(e) => p.onchange && p.onchange(e.target.value)}
        value={p.value ? p.value : new Date().toISOString().slice(0, 10)}
        readOnly={p.disabled ? p.disabled : false}
      />
    </DefaultLabel>
  );
};
