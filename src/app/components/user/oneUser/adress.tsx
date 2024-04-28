import { addressInputs, passwordInputs } from "@/app/utilities/inputs/addUser";
import { FormInputValidate } from "@/app/UI/formInput";
import { LabelText } from "@/app/UI/labelText";
import { User } from "@/app/utilities/users";
type Props = {
  obj: User;
};
export const Adress = (p: Props) => {
  const { obj } = p;
  return (
    <div className="h-2/6 px-2">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-sm font-bold">Address</h2>
      </div>
      <div className="w-full flex flex-col gap-2">
        <div className="w-full flex flex-wrap ">
          {addressInputs.map((input) => (
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
          {passwordInputs.map((input) => (
            <div className="w-1/3 px-2 justify-around">
              <LabelText
                key={input.id}
                text={input.label}
                placeholder={input.placeholder}
                type={input.type}
                name={input.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
