import { User } from "@/app/utilities/users";
import { FirstSection } from "./firstSection";
import { ChangePassword } from "./changePassword";
import { PersonalInformation } from "./personalInformation";
import { Adress } from "./adress";
type Prop = {
  user: User;
};

export function UserComponent(p: Prop) {
  const user: User = p.user;

  return (
    <>
      <div className="flex justify-center">
        <div className="w-10/12 h-[90vh] bg-firstWhite flex flex-col gap-1 rounded-2xl  p-2">
          <FirstSection obj={user} />
          <PersonalInformation obj={user} />
          <Adress obj={user} />
          <ChangePassword obj={user} />
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
  obj: User;
};
