"use client";
import { Dropdown } from "@/app/UI/dropdown";
import { Genders } from "@/app/utilities/users";
import { Roles } from "@/app/utilities/users";
import { inputs } from "@/app/utilities/inputs/addUser";
import { User } from "@/app/utilities/users";
import { LabelText } from "@/app/UI/labelText";
type Props = {
  obj: User;
};
export const PersonalInformation = (p: Props) => {
  const { obj } = p;
  return (
    <div className="h-2/6 px-2">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-sm font-bold">Personal Information</h2>
      </div>
      <div className="w-full flex flex-col gap-3">
        <div className="flex flex-wrap ">
          {inputs.map((input) => (
            <div className="w-1/3 px-2 justify-around">
              <LabelText
                key={input.id}
                text={input.label}
                placeholder={obj[input.name]}
                type={input.type}
                name={input.name}
              />
            </div>
          ))}

          <div className="w-1/3 min-h-6 px-2">
            <p className="my-1 text-gray-500 font-medium">Choose Sex</p>
            <Dropdown
              items={Genders}
              placeholder="Genre"
              itemSelected={obj.gender.genderType}
              name="genderType"
            />
          </div>
          <div className="w-1/3 min-h-6 px-2">
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
