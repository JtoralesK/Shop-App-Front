type Props = {
  label: string;
  placeholder: string;
  type?: string;
};

export function LabelText(p: Props) {
  return (
    <label className="w-full">
      <p className="text-gray-700 text-sm">{p.label}</p>
      <input
        className="border w-full p-1 border-primary rounded-lg focus:border-primary focus:outline-none"
        placeholder={p.placeholder}
        type={p.type}
      ></input>
    </label>
  );
}
