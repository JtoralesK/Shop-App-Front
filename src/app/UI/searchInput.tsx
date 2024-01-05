"use client";
import { MdSearch } from "react-icons/md";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
type Prop = {
  placeholder: string;
};
export function SearchInput(p: Prop) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const handleSearch = useDebouncedCallback((e: any) => {
    const params = new URLSearchParams(searchParams);
    if (e.target.value) {
      e.target.value.length > 2 && params.set("q", e.target.value);
    } else {
      params.delete("q");
    }
    params.set("page", "1");
    replace(`${pathname}?${params}`);
  }, 300);
  return (
    <div className="flex items-center gap-4 bg-secondary px-2 py-1 rounded-lg w-full">
      <MdSearch />
      <input
        className="bg-secondary border-none outline-none w-full placeholder-text-third  text-sm"
        type="text"
        placeholder={p.placeholder}
        onChange={handleSearch}
        defaultValue={searchParams.get("q") || ""}
      />
    </div>
  );
}
