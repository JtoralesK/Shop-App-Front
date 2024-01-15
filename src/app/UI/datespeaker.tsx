import { DefaultLabel } from "./labelText";
type PickerProp = {
  text: string;
  value?: string;
};

export const DatePickerLabel = (p: PickerProp) => {
  return (
    <DefaultLabel text={p.text}>
      <input
        className="w-full py-1 border-2 bg-gray-100 rounded-md p-2"
        type="date"
        id="start"
        min="2023-01-01"
        max="2025-12-31"
        value={p.value ? p.value : new Date().toISOString().slice(0, 10)}
      />
    </DefaultLabel>
  );
};
