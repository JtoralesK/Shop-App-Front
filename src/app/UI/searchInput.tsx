import { MdSearch } from "react-icons/md";
type Prop = {
  placeholder: string;
};
export function SearchInput(p: Prop) {
  return (
    <div className="flex items-center gap-4 bg-secondary px-2 py-1 rounded-lg w-full">
      <MdSearch />
      <input
        className="bg-secondary border-none outline-none w-full placeholder-text-third  text-sm"
        type="text"
        placeholder={p.placeholder}
      />
    </div>
  );
}
