"use client";
import Image from "next/image";
import { User } from "@/app/utilities/users";
import { LuUpload } from "react-icons/lu";
import { CldUploadButton } from "next-cloudinary";
import { useState } from "react";
import { CldImage } from "next-cloudinary";
type PropSection = {
  obj: User;
  typeComponent: "add" | "view";
};

export const FirstSection = (p: PropSection) => {
  const { obj } = p;
  const [publicId, setPublicId] = useState<string>("");
  return (
    <>
      <div className="h-1/6  flex flex-row w-full px-2 items-center">
        <div className="w-1/12 rounded-full  border ">
          {p.typeComponent === "view" ? (
            <Image
              width={100}
              height={100}
              alt={obj.name}
              src={obj.profileImgUrl}
              className="rounded-full h-16 w-full bg-cover"
            />
          ) : (
            <ImageUserBeforeUpload publicId={publicId} />
          )}
        </div>
        <UploadImageOrUserBio
          obj={obj}
          typeComponent={p.typeComponent}
          setPublicId={(e) => {
            setPublicId(e);
          }}
        />
      </div>
    </>
  );
};
type Prop = {
  typeComponent: "add" | "view";
  setPublicId: (p: string) => void;
  obj: User;
};
const UploadImageOrUserBio = (p: Prop) => {
  const [image, setImage] = useState<string>("");

  return (
    <div>
      <input name="image" type="hidden" value={image} />
      {p.typeComponent === "add" ? (
        <CldUploadButton
          uploadPreset="srfvnlm1"
          className=" ml-2"
          onUpload={(result: any) => {
            p.setPublicId(result.info.public_id);
            setImage(result.info.secure_url);
          }}
        >
          <div className="flex flex-row items-center bg-secondary rounded-2xl p-2">
            <span>
              <LuUpload />
            </span>
            <p className=" font-medium">Upload Image</p>
          </div>
        </CldUploadButton>
      ) : (
        <div className="w-full flex flex-row justify-between items-center">
          <div className="px-3">
            <p>
              {p.obj.name} {p.obj.lastName}
            </p>
            <p className="text-xs text-gray-700">
              {p.obj.country} {p.obj.city}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
type Prop3 = {
  publicId: string;
};

const ImageUserBeforeUpload = (p: Prop3) => {
  return (
    <div>
      {p.publicId ? (
        <CldImage
          className="rounded-full h-16 w-full bg-cover"
          width="560"
          height="300"
          src={p.publicId}
          alt="Description of my image"
        />
      ) : (
        <div className="rounded-full h-16 w-full bg-cover" />
      )}
    </div>
  );
};
