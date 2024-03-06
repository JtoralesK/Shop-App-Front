"use client";
import { User } from "@/app/utilities/users";
import { FirstSection } from "./firstSection";
import { ChangePassword } from "./changePassword";
import { PersonalInformation } from "./personalInformation";
import { Adress } from "./adress";
import { SaveUserAction } from "../../lib/actions/user";
import { useState } from "react";
type Prop = {
  user: User;
  typeComponent: "add" | "view";
};
import { SubmitButton } from "../../components/product/form";
export function UserComponent(p: Prop) {
  const [state, setState] = useState(false);

  const user: User = p.user;

  return (
    <>
      <div className="flex justify-center">
        <form
          action={SaveUserAction}
          className={`w-10/12 ${
            p.typeComponent === "add" ? "h-[85vh] gap-1" : "h-[70vh] gap-6"
          } bg-firstWhite flex flex-col rounded-2xl  p-2`}
        >
          <FirstSection obj={user} typeComponent={p.typeComponent} />
          <PersonalInformation obj={user} />
          <Adress obj={user} />
          {p.typeComponent === "add" && (
            <ChangePassword typeComponent={p.typeComponent} />
          )}
          <div className="flex justify-end">
            <div className="w-1/4">
              <SubmitButton
                itemState={state}
                loadingSubmit={(s: boolean) => setState(s)}
                typeComponent="add"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export type PropSection = {
  obj: User;
};
