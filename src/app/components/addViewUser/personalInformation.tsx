"use client";
import { LabelText } from "@/app/UI/labelText";
import { Dropdown } from "@/app/UI/dropdown";
import { DefaultLabel } from "@/app/UI/labelText";
import { PropSection } from "./index";
import { Genders } from "@/app/utilities/users";
import { Roles } from "@/app/utilities/users";
export const PersonalInformation = (p: PropSection) => {
  const { obj } = p;
  return (
    <div className="h-2/6 px-2">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-sm font-bold">Personal Information</h2>
      </div>
      <form className="w-full flex flex-col gap-3">
        <div className="flex flex-row gap-4">
          <LabelText text="First Name" placeholder={obj.name} />
          <LabelText text="Last Name" placeholder={obj.lastName} />
          <LabelText text="Email" placeholder={obj.email} type="email" />
        </div>
        <div className=" flex flex-row gap-4 items-center">
          <LabelText
            text="Phone Number"
            placeholder={obj.phoneNumber}
            type="text"
          />
          <DefaultLabel text="Choose Sex">
            <Dropdown
              items={Genders}
              placeholder="Genre"
              itemSelected={obj.gender.genderType}
            />
          </DefaultLabel>
          <DefaultLabel text="Choose Role">
            <Dropdown
              items={Roles}
              placeholder="Role"
              itemSelected={obj.role.roleType}
            />
          </DefaultLabel>
        </div>
      </form>
    </div>
  );
};
