"use client";
import { User } from "@/app/utilities/users";
import { FirstSection } from "./firstSection";
import { PersonalInformation } from "./personalInformation";
import { Adress } from "./adress";
import { useState } from "react";
import { action } from "./validationForm";
type Prop = {
  user: User;
};
import { SubmitButton } from "@/app/UI/submitButton";
export function AddUserComponent({ user }: Prop) {
  const [state, setState] = useState(false);
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
