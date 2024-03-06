"use client";
import { Invoice } from "@/app/utilities/invoices";
import Link from "next/link";
import { Pagination } from "@/app/UI/pagination";
import { Theah } from "../thead";
type Props = {
  invoices: Invoice[];
  totalPages: number;
  currentPage: number;
};
export function TableInvoices(p: Props) {
  return (
    <>
      <div className="overflow-hidden rounded-lg ">
        <table className="w-full">
          <Theah
            files={[
              { title: "InvoiceID", wP: 1, id: 1 },
              { title: "Customer", wP: 2, id: 2 },
              { title: "biller", wP: 2, id: 3 },
              { title: "Created At", wP: 2, id: 4 },
              { title: "Amount", wP: 1, id: 5 },
              { title: "Payment", wP: 2, id: 6 },
              { title: "Action", wP: 1, id: 7 },
            ]}
          />

          <tbody className="bg-secondary">
            {p.invoices.map((item) => {
              return (
                <tr className="h-14" key={item && item.id}>
                  <td className="text-center ">{item.id}</td>
                  <td className="text-center">{item.costumer}</td>
                  <td className="text-center ">
                    {item.biller.name} {item.biller.lastName}
                  </td>
                  <td className="text-center ">{item.createdAt}</td>
                  <td className="text-center ">${item.total}</td>
                  <td className="text-center ">
                    {item.paymentMethod.paymentMethod}
                  </td>
                  <td className="h-full  ">
                    <div className="flex justify-center">
                      <div className="flex flex-row gap-2">
                        <Link href={"/dashboard/invoices/" + item.id}>
                          <button className="bg-green-400 p-2 h-10 rounded-lg">
                            View
                          </button>
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="mt-6">
          <Pagination totalPages={p.totalPages} currentPage={p.currentPage} />
        </div>
      </div>
    </>
  );
}
