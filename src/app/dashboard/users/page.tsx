import { SearchInput } from "@/app/UI/searchInput";
import Image from "next/image";
import { filteredUsersByName, getAllUsers } from "@/app/lib/data";
import { User } from "@/app/utilities/users";
import { TableUsers } from "@/app/UI/table";
import { Suspense } from "react";
import { Pagination } from "@/app/UI/pagination";
export default async function Users({
  searchParams,
}: {
  searchParams: {
    q?: string;
    page?: string;
  };
}) {
  let users = [] as User[];
  const q = searchParams?.q || "";
  const page = Number(searchParams?.page) || 1;
  let total = 1;
  try {
    if (q) {
      let { userArray, totalPages } = await filteredUsersByName(q, page);
      users = userArray;
      total = totalPages;
    } else {
      let { userArray, totalPages } = await getAllUsers(page);
      users = userArray;
      total = totalPages;
    }
  } catch (e) {
    console.log(e);
  }

  return (
    <>
      <div className="w-full h-4/6 bg-firstWhite rounded-lg p-4">
        <div className="h-14  w-full flex flex-row justify-between  items-center ">
          <div className="w-2/12">
            <SearchInput placeholder="Search for a user" />
          </div>
          <button className="bg-primary p-1 rounded-md text-firstWhite">
            Add New
          </button>
        </div>
        <div className="overflow-hidden rounded-lg ">
          <Suspense fallback={"loading"} key={q + page}>
            <TableUsers
              users={users}
              q={q}
              redirect={() => {}}
              files={[
                { title: "Full name", wP: 3, id: 1 },
                { title: "Email", wP: 3, id: 2 },
                { title: "Created At", wP: 2, id: 3 },
                { title: "Rol", wP: 1, id: 4 },
                { title: "Status", wP: 1, id: 5 },
                { title: "Action", wP: 2, id: 6 },
              ]}
            />
          </Suspense>
          <div className="mt-6">
            <Pagination totalPages={total} currentPage={page} />
          </div>
        </div>
      </div>
    </>
  );
}
