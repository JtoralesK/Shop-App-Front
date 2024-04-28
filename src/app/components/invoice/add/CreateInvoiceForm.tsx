import { Dropdown } from "@/app/UI/dropdown";
import { DatePickerLabel } from "@/app/UI/datespeaker";
import { LabelText } from "@/app/UI/labelText";
import { FaArrowRight } from "react-icons/fa";
import { dropdownItems } from "@/app/utilities/invoices/index";
import { Invoice } from "@/app/utilities/invoices";
import { showToastError } from "@/app/utilities/toastMessages";
type Prop = {
  changeSection: () => void;
  costumerOnChange?: (e: string) => void;
  setInvoice?: (e: Invoice) => void;
  invoice: Invoice;
};

export const CreateInvoiceForm = (p: Prop) => {
  const { invoice } = p;
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const { payment, costumer, biller, paymentString } = event.target;
    if (payment.value === "0") {
      showToastError('You must select a payment method"');
    }
    if (payment.value && biller.value && costumer.value) {
      if (payment.value !== "0") {
        p.changeSection();
        if (p.setInvoice) {
          p.setInvoice({
            ...invoice,
            costumer: costumer.value,
            biller: invoice.biller,
            paymentMethod: {
              id: payment.value,
              paymentMethod: paymentString.value,
            },
          });
        }
      }
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-7/12 h-2/3  bg-firstWhite p-4 flex flex-col gap-4"
    >
      <p className="font-bold text-lg">Create Invoice</p>
      <div className="flex flex-row gap-3">
        <LabelText
          text="Customer*"
          placeholder={p.invoice.costumer}
          type="text"
          required={true}
          name="costumer"
          onChange={(e: string) => {
            if (p.costumerOnChange) {
              p.costumerOnChange(e);
            }
          }}
        />
        <LabelText
          text="Biller*"
          value={`${invoice.biller.name} ${invoice.biller.lastName}`}
          type="text"
          disabled={true}
          name="biller"
        />
      </div>

      <div className="flex flex-row gap-3">
        <div className=" w-1/2">
          <p className="my-1 text-gray-500 font-medium">Payment Condition</p>
          <Dropdown
            items={dropdownItems}
            placeholder="Select Condition"
            name="payment"
          />
        </div>
        <div className=" w-1/2">
          <DatePickerLabel
            text="Start date:"
            disabled={true}
            value={p.invoice?.createdAt}
          />
        </div>
      </div>
      <div className="w-full pr-2 flex justify-end ">
        <button
          type="submit"
          className="bg-primary p-1 rounded-md text-firstWhite"
        >
          <FaArrowRight />
        </button>
      </div>
    </form>
  );
};
