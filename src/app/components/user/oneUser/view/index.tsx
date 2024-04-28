"use client";
import { User } from "@/app/utilities/users";
import { FirstSection } from "./firstSection";
import { PersonalInformation } from "./personalInformation";
import { Adress } from "./adress";
import { FaArrowLeft } from "react-icons/fa";
type Prop = {
  user: User;
};
export function ViewUserComponent(p: Prop) {
  const user: User = p.user;

  return (
    <>
      <div className="flex justify-center">
        <div
          className="w-10/12 min-h-[450px]  gap-7
           bg-firstWhite flex flex-col rounded-2xl  py-3 px-2"
        >
          <FirstSection obj={user} />
          <PersonalInformation obj={user} />
          <Adress obj={user} />
          <div className="w-4 px-2">
            <button
              onClick={() => {
                window.history.back();
              }}
              className="bg-primary p-1 rounded-md text-firstWhite"
            >
              <FaArrowLeft />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
