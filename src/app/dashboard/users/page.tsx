import { filteredUsersByName, getAllUsers } from "@/app/lib/data";
import { User } from "@/app/utilities/users";
import { TableUsers } from "@/app/UI/table/usersTable";
import { Suspense } from "react";
import { TableLayout } from "@/app/UI/tableLayout";
import { Links } from "@/app/utilities/names/dashboardLinksNames";
async function Users({
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
    <TableLayout addOne={Links.AddUsers}>
      <Suspense fallback={"loading"} key={q + page}>
        <TableUsers users={users} totalPages={total} currentPage={page} />
      </Suspense>
    </TableLayout>
  );
}
export default Users;
