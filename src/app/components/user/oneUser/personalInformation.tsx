"use client";
import { Dropdown } from "@/app/UI/dropdown";
import { Genders } from "@/app/utilities/users";
import { Roles } from "@/app/utilities/users";
import { FormInput } from "@/app/UI/formInput";
import { inputs } from "@/app/utilities/inputs/addUser";
import { User } from "@/app/utilities/users";
type Props = {
  obj: User;
  setValues: ({}: any) => void;
  values: { [key: string]: boolean };
};
export const PersonalInformation = (p: Props) => {
  const { values, setValues, obj } = p;
  return (
    <div className="h-2/6 px-2">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-sm font-bold">Personal Information</h2>
      </div>
      <div className="w-full flex flex-col gap-3">
        <div className="flex flex-wrap ">
          {inputs.map((input) => (
            <div className="w-1/3 px-2 justify-around">
              <FormInput
                key={input.id}
                label={input.label}
                placeholder={input.placeholder}
                errorMessage={input.errorMessage}
                name={input.name}
                isValid={values[input.name]}
                setIsValid={(e: boolean) => {
                  setValues({ ...values, [input.name]: e });
                }}
                pattern={input.pattern}
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
