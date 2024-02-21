import { filteredInvoicessByName, getAllInvoices } from "@/app/lib/data";
import { Invoice } from "@/app/utilities/invoices";
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
  const q = searchParams?.q || "";
  const page = Number(searchParams?.page) || 1;
  let result;

  if (q) {
    result = await filteredInvoicessByName(q, page);
  } else {
    result = await getAllInvoices(page);
  }
  const { totalPages, content } = result;
  const invoices = content as Invoice[];
  const total = totalPages;

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
