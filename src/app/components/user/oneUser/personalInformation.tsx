"use client";
import { LabelText } from "@/app/UI/labelText";
import { Dropdown } from "@/app/UI/dropdown";
import { PropSection } from "./types";
import { Genders } from "@/app/utilities/users";
import { Roles } from "@/app/utilities/users";
export const PersonalInformation = ({ obj }: PropSection) => {
  return (
    <div className="h-2/6 px-2">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-sm font-bold">Personal Information</h2>
      </div>
      <div className="w-full flex flex-col gap-3">
        <div className="flex flex-row gap-4">
          <LabelText
            text="First Name"
            placeholder={obj.name}
            name="firstName"
            required
          />
          <LabelText
            text="Last Name"
            placeholder={obj.lastName}
            name="lastName"
            required
          />
          <LabelText
            text="Email"
            placeholder={obj.email}
            type="email"
            name="email"
            required
          />
        </div>
        <div className=" flex flex-row gap-4 items-center">
          <LabelText
            text="Phone Number"
            placeholder={obj.phoneNumber}
            type="text"
            name="phoneNumber"
            required
          />
          <div className="w-full min-h-6 ">
            <p className="my-1 text-gray-500 font-medium">Choose Sex</p>
            <Dropdown
              items={Genders}
              placeholder="Genre"
              itemSelected={obj.gender.genderType}
              name="genderType"
            />
          </div>
          <div className="w-full min-h-6 ">
            <p className="my-1 text-gray-500 font-medium">Choose Role</p>
            <Dropdown
              items={Roles}
              placeholder="Role"
              itemSelected={obj.role.roleType}
              name="roleType"
              h="24"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
