import { addressInputs } from "@/app/utilities/inputs/addUser";
import { FormInput } from "@/app/UI/formInput";
type Props = {
  setValues: ({}: any) => void;
  values: { [key: string]: boolean };
};
export const Adress = (p: Props) => {
  const { values, setValues } = p;
  return (
    <div className="h-2/6 px-2">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-sm font-bold">Address</h2>
      </div>
      <div className="w-full flex flex-col gap-3">
        <div className="w-full flex flex-wrap ">
          {addressInputs.map((input) => (
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
        </div>
      </div>
    </div>
  );
};
