import { filteredInvoicessByName, getAllInvoices } from "@/app/lib/data";
import { Invoices } from "@/app/utilities/invoices";
import { Suspense } from "react";
import { TableInvoices } from "@/app/UI/table/invoicesTable";
import { TableLayout } from "@/app/UI/tableLayout";
import { Links } from "@/app/utilities/names/dashboardLinksNames";
export default async function Invoices({
  searchParams,
}: {
  searchParams: {
    q?: string;
    page?: string;
  };
}) {
  let invoices = [] as Invoices[];
  const q = searchParams?.q || "";
  const page = Number(searchParams?.page) || 1;
  let total = 1;
  try {
    if (q) {
      let { invoicesArray, totalPages } = await filteredInvoicessByName(
        q,
        page
      );
      invoices = invoicesArray;
      total = totalPages;
    } else {
      let { invoicesArray, totalPages } = await getAllInvoices(page);
      invoices = invoicesArray;
      total = totalPages;
    }
  } catch (e) {
    console.log(e);
  }

  return (
    <TableLayout addOne={Links.AddInovices}>
      <Suspense fallback={"loading"} key={q + page}>
        <TableInvoices
          invoices={invoices}
          totalPages={total}
          currentPage={page}
        />
      </Suspense>
    </TableLayout>
  );
}
