"use client";
import Image from "next/image";
import { SearchInput } from "@/app/UI/searchInput";
import { useRouter } from "next/navigation";
import { productosArray } from "@/app/utilities/products";
import Link from "next/link";
export default function Products() {
  const router = useRouter();
  let cont = 0;
  const redirectAddOne = () => {
    router.push("/dashboard/products/addOne");
  };
  const redirect = (p: number) => {
    router.push("/dashboard/products/addOne");
  };
  return (
    <>
      <div className="w-full h-4/6 bg-firstWhite rounded-lg p-4">
        <div className="h-14  w-full flex flex-row justify-between  items-center ">
          <div className="w-2/12">
            <SearchInput placeholder="Search for a product" />
          </div>
          <button
            onClick={redirectAddOne}
            className="bg-primary p-1 rounded-md text-firstWhite"
          >
            Add New
          </button>
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
              {productosArray.map((item) => {
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
                            <button
                              onClick={() => {
                                redirect(item.productId);
                              }}
                              className="bg-green-400 p-2 h-10 rounded-lg"
                            >
                              View
                            </button>
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
        <div className="h-14  w-full flex flex-row justify-between  items-center ">
          <div>
            <button className="bg-orange-200 p-1 rounded-md text-firstWhite">
              Previous
            </button>
          </div>
          <button className="bg-orange-200 p-1 rounded-md text-firstWhite">
            Next
          </button>
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
