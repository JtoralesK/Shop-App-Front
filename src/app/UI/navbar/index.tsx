import { AvatarDropDown } from "../avatarDropdown";
import { auth } from "../../auth";
export async function Navbar() {
  const session: any = await auth();
  const user = session.user.user;
  return (
    <div className="py-3 w-full  flex flex-row justify-end">
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
