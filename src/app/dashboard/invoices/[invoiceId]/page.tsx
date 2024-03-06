import { getOneInvoice } from "@/app/lib/data";
import { AddInvoice } from "@/app/components/addInvoice";
import { User } from "@/app/utilities/users";
import { InvoiceArrayItem } from "@/app/components/addInvoice/types";
import { Invoice } from "@/app/utilities/invoices";
export default async function Page(obj: {
  params: { invoiceId: string };
  searchParams: {};
}) {
  const { params } = obj;
  const { invoiceId } = params;
  let InvoiceArrayItem: InvoiceArrayItem[] = [];
  let invoiceResponse: Invoice = {} as Invoice;
  if (invoiceId) {
    const { data } = await getOneInvoice(Number(invoiceId));
    const { errorResponse, invoiceItems, invoice } = data;
    InvoiceArrayItem = invoiceItems;
    invoiceResponse = invoice;
  }

  invoiceResponse.invoiceItems = InvoiceArrayItem;
  return (
    <>
      <AddInvoice typeComponent="view" invoice={invoiceResponse} />
    </>
  );
}
