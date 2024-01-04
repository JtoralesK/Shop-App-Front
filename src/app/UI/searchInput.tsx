"use client";
import { MdSearch } from "react-icons/md";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Prop = {
  placeholder: string;
};
export function SearchInput(p: Prop) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const handleSearch = (e: any) => {
    const params = new URLSearchParams(searchParams);
    params.set("q", e.target.value);
    replace(`${pathname}?${params}`);
  };
  return (
    <div className="flex items-center gap-4 bg-secondary px-2 py-1 rounded-lg w-full">
      <MdSearch />
      <input
        className="bg-secondary border-none outline-none w-full placeholder-text-third  text-sm"
        type="text"
        placeholder={p.placeholder}
        onChange={handleSearch}
      />
    </div>
  );
}
