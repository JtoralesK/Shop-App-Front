"use client";
import { MenuLink } from "../menuLink";
import { usePathname } from "next/navigation";
import { linksNames } from "@/app/utilities/names/dashboardLinksNames";
export function Sidebar() {
  const pathname = usePathname();
  const active = pathname === "/dashboard";
  return (
    <>
      <aside className="w-3/12 h-full bg-primary rounded-r-3xl ">
        <div className="h-full flex flex-col place-items-center gap-2 pt-10 ">
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
      </aside>
    </>
  );
}
