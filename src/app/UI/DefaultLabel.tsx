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
