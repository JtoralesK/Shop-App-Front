import { Dropdown } from "@/app/UI/dropdown";
import { DatePickerLabel } from "@/app/UI/datespeaker";
import { DefaultLabel } from "@/app/UI/labelText";
import { LabelText } from "@/app/UI/labelText";
import { FaArrowRight } from "react-icons/fa";
import { dropdownItems } from "@/app/utilities/invoices/index";
import { User } from "@/app/utilities/users";
type Prop = {
  changeSection: () => void;
  costumerOnChange: (e: string) => void;
  user: User;
};

export const CreateInvoiceForm = (p: Prop) => {
  return (
    <form className="w-7/12 h-2/3  bg-firstWhite p-4 flex flex-col gap-4">
      <p className="font-bold text-lg">Create Invoice</p>
      <div className="flex flex-row gap-3">
        <LabelText
          text="Invoice Number"
          value="F-03950285"
          type="text"
          disabled={true}
        />
        <DatePickerLabel text="Start date:" disabled={true} />
      </div>
      <div className="flex flex-row gap-3">
        <LabelText
          text="Customer*"
          placeholder="Josef Martinez"
          type="text"
          required={true}
          onChange={(e) => {
            p.costumerOnChange(e);
          }}
        />
        <LabelText
          text="Biller*"
          value={`${p.user.name} ${p.user.lastName}`}
          type="text"
          disabled={true}
        />
      </div>
      <div className="pr-2 w-1/2">
        <DefaultLabel text="Payment Condition">
          <Dropdown items={dropdownItems} placeholder="Select Condition" />
        </DefaultLabel>
      </div>
      <div className="w-full pr-2 flex justify-end ">
        <button
          onClick={p.changeSection}
          className="bg-primary p-1 rounded-md text-firstWhite"
        >
          <FaArrowRight />
        </button>
      </div>
    </form>
  );
};
