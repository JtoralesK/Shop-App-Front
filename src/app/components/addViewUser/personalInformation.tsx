import { LabelText } from "@/app/UI/labelText";
import { EditButton } from "@/app/UI/editButton";
import { Dropdown } from "@/app/UI/dropdown";
import { DefaultLabel } from "@/app/UI/labelText";
import { PropSection } from "./index";
export const PersonalInformation = (p: PropSection) => {
  const items = ["Male", "Female", "Non-Binary", "Other"];
  const { obj } = p;
  return (
    <div className="h-2/6 px-2">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-sm font-bold">Personal Information</h2>
      </div>
      <form className="w-full flex flex-col gap-3">
        <div className="flex flex-row gap-4">
          <LabelText
            text="First Name"
            placeholder={obj ? `${obj.name}` : "Undefined"}
          />
          <LabelText
            text="Last Name"
            placeholder={obj ? `${obj.lastName}` : "Undefined"}
          />
          <LabelText
            text="Email"
            placeholder={obj ? `${obj.email}` : "Undefined"}
            type="email"
          />
        </div>
        <div className=" flex flex-row gap-4 items-center">
          <LabelText
            text="Last Name"
            placeholder={obj ? `${obj.lastName}` : "Undefined"}
          />
          <LabelText
            text="Phone Number"
            placeholder={obj ? `${obj.phoneNumber}` : "Undefined"}
            type="text"
          />
          <DefaultLabel text="Choose Sex">
            <Dropdown items={items} placeholder="Genre" />
          </DefaultLabel>
        </div>
      </form>
    </div>
  );
};
