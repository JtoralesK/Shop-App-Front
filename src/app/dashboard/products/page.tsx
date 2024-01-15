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
  let products = [] as Product[];
  const q = searchParams?.q || "";
  const page = Number(searchParams?.page) || 1;
  let total = 1;
  try {
    if (q) {
      let { productsArray, totalPages } = await filteredProductsByName(q, page);
      products = productsArray;
      total = totalPages;
    } else {
      let { productsArray, totalPages } = await getAllProducts(page);
      products = productsArray;
      total = totalPages;
    }
  } catch (e) {
    console.log(e);
  }

  return (
    <TableLayout addOne={Links.AddProducts}>
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
