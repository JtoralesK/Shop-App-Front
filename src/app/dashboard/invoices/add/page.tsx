import { AddInvoice } from "./addinvoice";
import { auth } from "@/app/auth";
import { User } from "@/app/utilities/users";
import { filteredProductsByName, getAllProducts } from "@/app/lib/data";
import { Product } from "@/app/utilities/products";
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
  const { totalPages, content } = result;
  const products = content as Product[];
  const total = totalPages;
  return (
    <>
      <AddInvoice user={user} products={products} />
    </>
  );
}
