import { Product } from "@/app/utilities/products";
import { filteredProductsByName, getAllProducts } from "@/app/lib/data";
import { TableProducts } from "@/app/UI/table/productsTable";
import { Suspense } from "react";
import { TableLayout } from "@/app/UI/tableLayout";
import { Links } from "@/app/utilities/names/dashboardLinksNames";

export default async function Products({
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
    result = await filteredProductsByName(q, page);
  } else {
    result = await getAllProducts(page);
  }
  const { totalPages, content } = result.data;
  const products = content as Product[];
  const total = totalPages;
  return (
    <TableLayout addOne={Links.AddProducts} searchName="product">
      <Suspense fallback={"loading"} key={q + page}>
        <TableProducts
          products={products}
          totalPages={total}
          currentPage={page}
        />
      </Suspense>
    </TableLayout>
  );
}
