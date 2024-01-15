"use client";
import { UserComponent } from "@/app/components/user";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { linksNamesProfile } from "@/app/utilities/names/dashboardLinksNames";
export default function Add() {
  const pathname = usePathname();
  return (
    <div className="h-full w-full ">
      <div className="flex flex-row items-center gap-1">
        <div className="w-2/12 h-[85vh] bg-firstWhite border rounded-l-2xl p-4 ">
          <div className="flex flex-col gap-5">
            {linksNamesProfile.map((link) => {
              return (
                <div key={link.key}>
                  <Link
                    href={link.href}
                    className={`text-sm text-gray-700  p-3 ${
                      pathname === link.href && "bg-secondary rounded-2xl "
                    }}`}
                  >
                    {link.name}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-10/12 h-[85vh] bg-firstWhite flex flex-col gap-3 rounded-r-2xl  p-4">
          <UserComponent userId={2} />
        </div>
      </div>
    </div>
  );
}
