"use client";
import { User } from "@/app/utilities/users";
import { FirstSection } from "./firstSection";
import { PersonalInformation } from "../personalInformation";
import { Adress } from "../adress";
import { SaveUserAction } from "@/app/lib/actions/user";
import { useState } from "react";
import { useFormState } from "react-dom";
type Prop = {
  user: User;
};
import { SubmitButton } from "@/app/UI/submitButton";
export function AddUserComponent({ user }: Prop) {
  const [state, setState] = useState(false);
  const [stateAction, formAction] = useFormState(SaveUserAction, null);
  const [values, setValues] = useState<{ [key: string]: boolean }>({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    confirmedPassword: false,
    address: false,
    postalCode: false,
    city: false,
  });
  const action = async (e: any) => {
    if (
      values.firstName &&
      values.lastName &&
      values.email &&
      values.password &&
      values.confirmedPassword &&
      values.address &&
      values.postalCode &&
      values.city
    ) {
      formAction(e);
    } else {
      console.error("Incomplete form");
    }
  };
  return (
    <>
      <div className="flex justify-center">
        <form
          action={action}
          className="w-10/12 h-[85vh] gap-1 bg-firstWhite flex flex-col rounded-2xl  p-2"
        >
          <FirstSection />
          <PersonalInformation obj={user} />
          <Adress obj={user} />
          <div>
            {stateAction && (
              <p className="text-red-500 p-2">Error:{stateAction}</p>
            )}
          </div>
          <div className="flex justify-end mt-2">
            <div className="w-1/4">
              <SubmitButton
                itemState={state}
                loadingSubmit={(s: boolean) => setState(s)}
                name="add"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
