"use client";
import Image from "next/image";
import { MenuLink } from "../menuLink";
import { usePathname } from "next/navigation";
import { linksNames } from "@/app/utilities/names/dashboardLinksNames";
export function Sidebar() {
  const pathname = usePathname();
  const active = pathname === "/dashboard";
  return (
    <>
      <aside className="w-3/12 h-full bg-primary rounded-r-3xl ">
        <div className="h-3/6 flex flex-col place-items-center gap-2 pt-10 ">
          {linksNames.map((linkName) => {
            return (
              <MenuLink
                name={linkName.name}
                icon={linkName.icon}
                href={linkName.href}
                key={linkName.key}
                active={pathname === linkName.href}
              />
            );
          })}
        </div>
        <div className="h-3/6 ">
          <Image
            src="/manPicture.png"
            width={200}
            height={200}
            alt="Picture of the author"
            className=" w-full h-full object-cover"
          />
        </div>
      </aside>
    </>
  );
}
