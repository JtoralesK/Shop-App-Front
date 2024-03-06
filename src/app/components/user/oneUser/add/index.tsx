"use client";
import { User } from "@/app/utilities/users";
import { FirstSection } from "./firstSection";
import { ChangePassword } from "./changePassword";
import { PersonalInformation } from "../personalInformation";
import { Adress } from "../adress";
import { SaveUserAction } from "@/app/lib/actions/user";
import { useState } from "react";
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
          action={SaveUserAction}
          className="w-10/12 h-[85vh] gap-1 bg-firstWhite flex flex-col rounded-2xl  p-2"
        >
          <FirstSection />
          <PersonalInformation obj={user} />
          <Adress obj={user} />
          <ChangePassword typeComponent="add" />
          <div className="flex justify-end">
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
