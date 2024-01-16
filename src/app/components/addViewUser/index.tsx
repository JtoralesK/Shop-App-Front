"use client";
import { useRouter } from "next/navigation";
import { usersArray, User } from "@/app/utilities/users";
import { FirstSection } from "./firstSection";
import { ChangePassword } from "./changePassword";
import { PersonalInformation } from "./personalInformation";
import { Adress } from "./adress";
type Prop = {
  userId: number;
};
export function UserComponent(p: Prop) {
  let obj: User | undefined;
  const router = useRouter();
  const foundUser = usersArray.find((item) => item.userId === p.userId);

  if (foundUser) {
    obj = foundUser;
  } else {
    router.push("/dashboard/users");
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="w-10/12 h-[90vh] bg-firstWhite flex flex-col gap-1 rounded-2xl  p-2">
          <FirstSection obj={obj} />
          <PersonalInformation obj={obj} />
          <Adress obj={obj} />
          <ChangePassword obj={obj} />
          <div className="flex justify-end">
            <button className="bg-primary text-white py-3 px-8 rounded-2xl">
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export type PropSection = {
  obj: User | undefined;
};
