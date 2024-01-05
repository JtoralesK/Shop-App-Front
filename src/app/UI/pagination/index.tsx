"use client";
import { useRouter } from "next/navigation";

export function Pagination({
  totalPages,
  currentPage,
}: {
  totalPages: number;
  currentPage: number;
}) {
  const Router = useRouter();
  const beforePage = () => {
    if (currentPage > 1) {
      Router.push(`?page=${currentPage - 1}`);
    }
  };
  const afterPage = () => {
    if (currentPage < totalPages) {
      Router.push(`?page=${currentPage + 1}`);
    }
  };
  const pages = totalPages;
  return (
    <>
      <div className="h-14  w-full flex justify-center  items-center text-lg">
        <div className="w-1/6 h-14 flex flex-row justify-center items-center gap-4 ">
          <button
            onClick={beforePage}
            className="rounded-lg bg-secondary py-1 px-2 text-firstWhite font-bold"
          >
            &lt;
          </button>
          <p className="text-primary font-bold">{currentPage}</p>
          <div>
            <p className="text-primary font-bold">/</p>
          </div>
          <p className="text-primary font-bold">{pages}</p>
          <button
            onClick={afterPage}
            className="rounded-lg bg-secondary py-1 px-2 text-firstWhite font-bold"
          >
            &gt;
          </button>
        </div>
      </div>
    </>
  );
}
