export type PaymentMethod = "Cash" | "Credit Card" | "Debit Card" | "Paypal";
export type PaymentStatus = "Paid" | "Unpaid" | "Pending";

import { User } from "../users";
import { usersArray } from "../users";
export type Invoices = {
  invoiceId: number;
  date: string;
  total: number;
  customer: string;
  generatedBy: User;
  totalProducts: number;
  status: boolean;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  invoiceItems: number[];
};
export const invoicesArray: Invoices[] = [
  {
    invoiceId: 1,
    date: "2023-01-15",
    customer: "John Doe",
    total: 150,
    generatedBy: usersArray[0],
    totalProducts: 3,
    status: true,
    paymentMethod: "Cash",
    paymentStatus: "Pending",
    invoiceItems: [101, 102, 103],
  },
  {
    invoiceId: 2,
    date: "2023-02-20",
    customer: "John Doe",
    total: 280,
    generatedBy: usersArray[1],
    totalProducts: 4,
    status: false,
    paymentMethod: "Credit Card",
    paymentStatus: "Unpaid",
    invoiceItems: [104, 105, 106, 107],
  },
  {
    invoiceId: 3,
    date: "2023-03-10",
    customer: "John Doe",
    total: 200,
    generatedBy: usersArray[4],
    totalProducts: 2,
    status: true,
    paymentMethod: "Debit Card",
    paymentStatus: "Paid",
    invoiceItems: [108, 109],
  },
  {
    invoiceId: 4,
    date: "2023-04-05",
    customer: "John Doe",
    total: 90,
    generatedBy: usersArray[5],
    totalProducts: 1,
    status: true,
    paymentMethod: "Paypal",
    paymentStatus: "Paid",
    invoiceItems: [110],
  },
  {
    invoiceId: 5,
    date: "2023-05-22",
    total: 320,
    customer: "John Doe",
    generatedBy: usersArray[6],
    totalProducts: 3,
    status: true,
    paymentMethod: "Cash",
    paymentStatus: "Paid",
    invoiceItems: [111, 112, 113],
  },
  {
    invoiceId: 6,
    date: "2023-06-18",
    customer: "John Doe",
    total: 180,
    generatedBy: usersArray[8],
    totalProducts: 2,
    status: false,
    paymentMethod: "Credit Card",
    paymentStatus: "Paid",
    invoiceItems: [114, 115],
  },
  {
    invoiceId: 7,
    date: "2023-07-30",
    total: 420,
    customer: "John Doe",
    generatedBy: usersArray[9],
    totalProducts: 5,
    status: true,
    paymentMethod: "Debit Card",
    paymentStatus: "Paid",
    invoiceItems: [116, 117, 118, 119, 120],
  },
  {
    invoiceId: 8,
    date: "2023-08-12",
    total: 150,
    customer: "John Doe",
    generatedBy: usersArray[5],
    totalProducts: 3,
    status: true,
    paymentMethod: "Paypal",
    paymentStatus: "Pending",
    invoiceItems: [121, 122, 123],
  },
  {
    invoiceId: 9,
    date: "2023-09-28",
    total: 270,
    customer: "John Doe",
    generatedBy: usersArray[3],
    totalProducts: 4,
    status: false,
    paymentMethod: "Cash",
    paymentStatus: "Paid",
    invoiceItems: [124, 125, 126, 127],
  },
  {
    invoiceId: 10,
    date: "2023-10-15",
    total: 400,
    customer: "John Doe",
    generatedBy: usersArray[1],
    totalProducts: 6,
    status: true,
    paymentMethod: "Credit Card",
    paymentStatus: "Paid",
    invoiceItems: [128, 129, 130, 131, 132, 133],
  },
];
