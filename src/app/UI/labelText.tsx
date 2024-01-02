type Props = {
  label: string;
  placeholder: string;
  type?: string;
};

export function LabelText(p: Props) {
  return (
    <label>
      <p className="text-gray-700 text-sm">{p.label}</p>
      <input
        className="border rounded-lg w-full p-1 focus:border-primary focus:outline-none"
        placeholder={p.placeholder}
        type={p.type}
      ></input>
    </label>
  );
}
