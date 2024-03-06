"use client";
import { User } from "@/app/utilities/users";
import { FirstSection } from "./firstSection";
import { PersonalInformation } from "../personalInformation";
import { Adress } from "../adress";

type Prop = {
  user: User;
};
export function ViewUserComponent(p: Prop) {
  const user: User = p.user;

  return (
    <>
      <div className="flex justify-center">
        <div
          className="w-10/12 h-[65vh] gap-6
           bg-firstWhite flex flex-col rounded-2xl  p-2"
        >
          <FirstSection obj={user} />
          <PersonalInformation obj={user} />
          <Adress obj={user} />
        </div>
      </div>
    </>
  );
}
