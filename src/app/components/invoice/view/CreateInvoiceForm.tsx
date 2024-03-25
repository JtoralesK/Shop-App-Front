import { Dropdown } from "@/app/UI/dropdown";
import { DatePickerLabel } from "@/app/UI/datespeaker";
import { LabelText } from "@/app/UI/labelText";
import { dropdownItems } from "@/app/utilities/invoices/index";
import { Invoice } from "@/app/utilities/invoices";
type Prop = {
  invoice: Invoice;
};

export const CreateInvoiceForm = ({ invoice }: Prop) => {
  return (
    <form className="w-7/12 h-2/3  bg-firstWhite p-4 flex flex-col gap-4">
      <p className="font-bold text-lg">Create Invoice</p>
      <div className="flex flex-row gap-3">
        <LabelText
          text="Customer*"
          placeholder={invoice.costumer}
          type="text"
          required={true}
          name="costumer"
          disabled={true}
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
            itemSelected={invoice.paymentMethod.paymentMethod}
          />
        </div>
        <div className=" w-1/2">
          <DatePickerLabel
            text="Start date:"
            disabled={true}
            value={invoice.createdAt}
          />
        </div>
      </div>
    </form>
  );
};
