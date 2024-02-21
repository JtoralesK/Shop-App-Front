import { filteredUsersByName, getAllUsers } from "@/app/lib/data";
import { User } from "@/app/utilities/users";
import { TableUsers } from "@/app/UI/table/usersTable";
import { Suspense } from "react";
import { TableLayout } from "@/app/UI/tableLayout";
import { Links } from "@/app/utilities/names/dashboardLinksNames";
import { auth } from "@/app/auth";
async function Users({
  searchParams,
}: {
  searchParams: {
    q?: string;
    page?: string;
  };
}) {
  const q = searchParams?.q || "";
  const page = Number(searchParams?.page) || 1;
  const seccion: any = await auth();
  const token = seccion.user.user.token;
  let result;
  if (q) {
    result = await filteredUsersByName(q, page);
  } else {
    result = await getAllUsers(page);
  }
  const { totalPages, content } = result;

  const users = content as User[];
  const total = totalPages;

  return (
    <TableLayout addOne={Links.AddUsers}>
      <Suspense fallback={"loading"} key={q + page}>
        <TableUsers
          users={users}
          totalPages={total}
          currentPage={page}
          token={token}
        />
      </Suspense>
    </TableLayout>
  );
}
export default Users;
