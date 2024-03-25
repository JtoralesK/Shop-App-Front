import { CreateInvoiceForm } from "./CreateInvoiceForm";
import { InvoiceArrayItem } from "../types";
import { AddProducts } from "./addProducts";
import { Invoice } from "@/app/utilities/invoices";
import { Product } from "@/app/utilities/products";
type Prop2 = {
  changeSection: () => void;
  setInvoice: (e: Invoice) => void;
  showAddProducts: boolean;
  setInvoiceItems: (e: InvoiceArrayItem[]) => void;
  invoice: Invoice;
  addTypeObj: { totalPages: number; currentPage: number; products: Product[] };
};
export const SectionToAddComponent = (p: Prop2) => {
  const {
    setInvoice,
    changeSection,
    showAddProducts,
    setInvoiceItems,
    invoice,
    addTypeObj,
  } = p;
  const { totalPages, currentPage, products } = addTypeObj;
  if (showAddProducts) {
    return (
      <CreateInvoiceForm
        changeSection={changeSection}
        costumerOnChange={(e) => {
          setInvoice({ ...invoice, costumer: e });
        }}
        setInvoice={(e) => setInvoice(e)}
        typeComponent="add"
        invoice={invoice}
      />
    );
  }
  return (
    <AddProducts
      products={products}
      invoice={invoice}
      onClick={changeSection}
      totalPages={totalPages}
      currentPage={currentPage}
      addProduct={(e) => {
        setInvoiceItems(e);
      }}
    />
  );
};
