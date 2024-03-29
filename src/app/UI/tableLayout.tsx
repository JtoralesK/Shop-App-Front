import { SearchInput } from "./searchInput";
import Link from "next/link";
import { ReactNode } from "react";
type MiComponenteProps = {
  children: ReactNode;
  addOne: string;
  searchName: string;
};
export function TableLayout(props: MiComponenteProps) {
  return (
    <>
      <div className="w-full h-4/6 bg-firstWhite rounded-lg p-4">
        <div className="h-14  w-full flex flex-row justify-between  items-center ">
          <div className="w-2/12">
            <SearchInput placeholder={`Search for a ${props.searchName}`} />
          </div>
          <Link href={props.addOne}>
            <button className="bg-primary p-1 rounded-md text-firstWhite">
              Add New
            </button>
          </Link>
        </div>
        {props.children}
      </div>
    </>
  );
}
