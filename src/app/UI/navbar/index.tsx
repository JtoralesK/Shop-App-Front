import { IoIosSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
export function Navbar() {
  return (
    <div className="py-2 w-full  flex flex-row justify-end ">
      <div className="flex-end flex place-items-center text-3xl cursor-pointer text-forth">
        <Link className="pr-8" href={"/dashboard"}>
          <IoIosSettings />
        </Link>
        <Link href={"/dashboard/profile"}>
          <CgProfile />
        </Link>
      </div>
    </div>
  );
}
