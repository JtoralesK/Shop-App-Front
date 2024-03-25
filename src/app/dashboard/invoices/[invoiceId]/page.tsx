import { getOneInvoice } from "@/app/lib/data";
import { InvoiceArrayItem } from "@/app/components/invoice/types";
import { Invoice } from "@/app/utilities/invoices";
import { ViewInvoiceComponent } from "@/app/components/invoice/view";
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
      <ViewInvoiceComponent invoice={invoiceResponse} />
    </>
  );
}
