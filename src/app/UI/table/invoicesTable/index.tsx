"use client";
import { Invoices, PaymentStatus } from "@/app/utilities/invoices";
import Link from "next/link";
import { Pagination } from "@/app/UI/pagination";
import { Theah } from "../thead";
import { useState } from "react";
type Props = {
  invoices: Invoices[];
  totalPages: number;
  currentPage: number;
};
export function TableInvoices(p: Props) {
  const [isOpen, setOpen] = useState(false);
  const [id, setId] = useState(0);
  const deleteItem = (id: number) => {
    setOpen(!isOpen);
    setId(id);
  };
  const styleTypePaymentButton = (type: PaymentStatus) => {
    switch (type) {
      case "Paid":
        return "text-green-400 border border-green-400";
      case "Pending":
        return "text-yellow-400 border border-yellow-400";
      case "Unpaid":
        return "text-red-400 border border-red-400";
      default:
        return "bg-green-400";
    }
  };
  return (
    <>
      <div className="overflow-hidden rounded-lg ">
        <table className="w-full">
          <Theah
            files={[
              { title: "Customer", wP: 2, id: 1 },
              { title: "InvoiceID", wP: 2, id: 2 },
              { title: "Products ", wP: 1, id: 3 },
              { title: "Created At", wP: 2, id: 4 },
              { title: "Amount", wP: 1, id: 5 },
              { title: "Payment", wP: 2, id: 5 },
              { title: "Status", wP: 1, id: 6 },
              { title: "Action", wP: 1, id: 7 },
            ]}
          />

          <tbody className="bg-secondary">
            {p.invoices.map((item) => {
              return (
                <tr className="h-14" key={item && item.invoiceId}>
                  <td className="text-center">{item.customer}</td>
                  <td className="text-center ">{item.invoiceId}</td>
                  <td className="text-center ">{item.totalProducts}</td>
                  <td className="text-center ">{item.date}</td>
                  <td className="text-center ">${item.total}</td>
                  <td className="text-center ">{item.paymentMethod}</td>
                  <td className="text-center">
                    <span
                      className={`rounded-lg p-2 ${styleTypePaymentButton(
                        item.paymentStatus
                      )}`}
                    >
                      {" "}
                      {item.paymentStatus}
                    </span>
                  </td>
                  <td className="h-full  ">
                    <div className="flex justify-center">
                      <div className="flex flex-row gap-2">
                        <Link href={"/dashboard/users/" + item.invoiceId}>
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
