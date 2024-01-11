import { IoIosSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import { AvatarDropDown } from "../avatarDropdown";
export function Navbar() {
  return (
    <div className="py-2 w-full  flex flex-row justify-end ">
      <div>
        <AvatarDropDown />
      </div>
    </div>
  );
}
