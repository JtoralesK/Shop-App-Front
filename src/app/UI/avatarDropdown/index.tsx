"use client";
import Image from "next/image";
import { useState } from "react";
import { usersArray } from "@/app/utilities/users";
import { CiUser } from "react-icons/ci";
import { BiSolidLogOut } from "react-icons/bi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Links } from "@/app/utilities/names/dashboardLinksNames";
import Link from "next/link";
export function AvatarDropDown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="py-2 w-full">
      <div onClick={() => setOpen(!open)} className="relative ">
        <div className="flex w-60 justify-end items-center gap-2">
          <div className="w-6 h-6 rounded-full overflow-hidden  border-gray-900 cursor-pointer ">
            <Image
              src={usersArray[0].profileImg}
              alt=""
              width={40}
              height={40}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="cursor-pointer">
            {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
        </div>
        {open && (
          <div className="absolute w-60 px-3 py-3  bg-gray-300 rounded-lg mt-4 ">
            <ul className="">
              <li className="font-medium ">
                <AvatarLink
                  href={Links.Profile}
                  icon={<CiUser />}
                  name="Account"
                ></AvatarLink>
              </li>
              <li className="font-medium">
                <AvatarLink
                  href={Links.Login}
                  icon={<BiSolidLogOut />}
                  name="Logout"
                ></AvatarLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
type Props = {
  href: string;
  name: string;
  icon: React.ReactNode;
};

const AvatarLink = (p: Props) => {
  return (
    <Link
      className="mt-1 flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-primary"
      href={p.href}
    >
      <div className="mr-3 text-2xl">{p.icon}</div>
      {p.name}
    </Link>
  );
};
