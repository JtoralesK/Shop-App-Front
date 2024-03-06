"use client";
import Image from "next/image";
import { User } from "@/app/utilities/users";
type PropSection = {
  obj: User;
};

export const FirstSection = ({ obj }: PropSection) => {
  return (
    <>
      <div className="h-1/6  flex flex-row w-full px-2 items-center">
        <div className="w-1/12 rounded-full  border ">
          <Image
            width={100}
            height={100}
            alt={obj.name}
            src={obj.profileImgUrl}
            className="rounded-full h-16 w-full bg-cover"
          />
        </div>
        <div>
          <div className="w-full flex flex-row justify-between items-center">
            <div className="px-3">
              <p>
                {obj.name} {obj.lastName}
              </p>
              <p className="text-xs text-gray-700">
                {obj.country} {obj.city}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
