import Image from "next/image";
import { SearchInput } from "@/app/UI/searchInput";
import { Product } from "@/app/utilities/products";
import { filteredProductsByName, getAllProducts } from "@/app/lib/data";
import { Pagination } from "@/app/UI/pagination";
import Link from "next/link";
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
  let cont = 0;
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
    <>
      <div className="w-full h-4/6 bg-firstWhite rounded-lg p-4">
        <div className="h-14  w-full flex flex-row justify-between  items-center ">
          <div className="w-2/12">
            <SearchInput placeholder="Search for a product" />
          </div>
          <Link href={"/dashboard/products/addOne"}>
            <button className="bg-primary p-1 rounded-md text-firstWhite">
              Add New
            </button>
          </Link>
        </div>
        <div className="overflow-hidden rounded-lg">
          <table className="w-full">
            <thead className="bg-primary">
              <tr className="text-left">
                <Th width={3} title="Title" />
                <Th width={4} title="Description" />
                <Th width={1} title="Price" />
                <Th width={1} title="Created At" />
                <Th width={1} title="Stock" />
                <Th width={2} title="Action" />
              </tr>
            </thead>
            <tbody className="bg-secondary">
              {products.map((item) => {
                if (cont < 5) {
                  cont++;
                  return (
                    <tr className="h-14" key={item.productId}>
                      <td className="h-full ">
                        <div className="flex justify-center  items-center px-4">
                          <div className="w-11/12 flex flex-row items-center justify-start gap-2 h-full ">
                            <Image
                              className="w-8 rounded-3xl"
                              width={40}
                              height={40}
                              src={""}
                              alt=""
                            />
                            {item.name}
                          </div>
                        </div>
                      </td>
                      <td className="text-center ">{item.description}</td>
                      <td className="text-center ">{item.price}</td>
                      <td className="text-center ">{item.createdAt}</td>
                      <td className="text-center ">{item.stock}</td>

                      <td className="h-full  ">
                        <div className="flex justify-center">
                          <div className="flex flex-row gap-2">
                            <Link
                              href={"/dashboard/products/" + item.productId}
                            >
                              <button className="bg-green-400 p-2 h-10 rounded-lg">
                                View
                              </button>
                            </Link>
                            <button className="bg-red-400 p-2 h-10 rounded-lg">
                              Delete
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
        <div className="h-14  w-full flex justify-center  items-center ">
          <div className="mt-6">
            <Pagination totalPages={total} currentPage={page} />
          </div>
        </div>
      </div>
    </>
  );
}
type Props = {
  title: string;
  width: number; // number-12
};
const Th = (p: Props) => {
  return (
    <th className={`w-${p.width}/12  text-center text-firstWhite`}>
      {p.title}
    </th>
  );
};
