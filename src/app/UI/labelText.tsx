"use client";
type Prop = {
  text: string;
  placeholder?: string;
  type?: string | "text";
  value?: string;
  onChange?: (value: string) => void;
};
export const LabelText = (p: Prop) => {
  return (
    <DefaultLabel text={p.text}>
      <input
        className="w-full h-9 border-2 bg-gray-100 rounded-md px-2 "
        type={p.type}
        placeholder={p.placeholder}
        value={p.value}
        onChange={(e) => p.onChange && p.onChange(e.target.value)}
      />
    </DefaultLabel>
  );
};
type Prop2 = {
  text: string;
  children: React.ReactNode;
};
export const DefaultLabel = (p: Prop2) => {
  return (
    <div className="w-full min-h-6 ">
      <label>
        <p className="my-1 text-gray-500 font-medium">{p.text}</p>
        {p.children}
      </label>
    </div>
  );
};
