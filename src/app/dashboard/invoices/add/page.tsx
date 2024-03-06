import { AddInvoice } from "@/app/components/addInvoice";
import { auth } from "@/app/auth";
import { User } from "@/app/utilities/users";
import { filteredProductsByName, getAllProducts } from "@/app/lib/data";
import { Product } from "@/app/utilities/products";
import { DefaultInvoice } from "@/app/utilities/invoices";
export default async function Page({
  searchParams,
}: {
  searchParams: {
    q?: string;
    page?: string;
  };
}) {
  const session: any = await auth();
  let user: User = session.user.user;
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
  const obj = { totalPages, currentPage: page, products: products };
  DefaultInvoice.biller = user;
  return (
    <>
      <AddInvoice
        addTypeObj={obj}
        typeComponent="add"
        invoice={DefaultInvoice}
      />
    </>
  );
}
