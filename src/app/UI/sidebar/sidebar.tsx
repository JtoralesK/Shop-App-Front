"use client";
import { MenuLink } from "../menuLink";
import { usePathname } from "next/navigation";
import { linksNames } from "@/app/utilities/names/dashboardLinksNames";
import { AvatarSidebar } from "../avatarSidebar";
export function Sidebar() {
  const pathname = usePathname();
  const linksExceptLogout = linksNames.filter(
    (linkName) => linkName.href !== "/login"
  );
  const logoutLink: any = linksNames.find(
    (linkName) => linkName.href === "/login"
  );
  return (
    <>
      <aside className="w-3/12 h-full bg-primary rounded-r-3xl ">
        <div className="h-full flex flex-col justify-between  py-6 ">
          <div className="flex flex-col place-items-center gap-2">
            {linksExceptLogout.map((linkName) => {
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
          <div className="flex flex-col place-items-center">
            <MenuLink
              name={logoutLink.name}
              icon={logoutLink.icon}
              href={logoutLink.href}
              key={logoutLink.key}
              active={pathname === logoutLink.href}
              top="mt-28"
            />
          </div>
        </div>
      </aside>
    </>
  );
}
