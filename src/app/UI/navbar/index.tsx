import { AvatarDropDown } from "../avatarDropdown";
import { auth } from "../../auth";
export async function Navbar() {
  const session: any = await auth();
  return (
    <div className="py-2 w-full  flex flex-row justify-end ">
      <div>
        <AvatarDropDown
          imgUrl={session?.user.user.profileImgUrl}
          name=""
          email=""
        />
      </div>
    </div>
  );
}
