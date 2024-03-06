"use client";
import { LuUpload } from "react-icons/lu";
import { CldUploadButton } from "next-cloudinary";
import { CldImage } from "next-cloudinary";
import { useState } from "react";
type UploadImageProp = {
  setImage: (imageUrl: string) => void;
};

export const UploadImage = (p: UploadImageProp) => {
  const [publicId, setPublicId] = useState<string>("");
  const notImageYet = publicId === "";
  return (
    <div className=" w-full h-full">
      {notImageYet ? (
        <CldUploadButton
          uploadPreset="srfvnlm1"
          className="w-full h-full flex justify-center items-center gap-2  p-4 bg-gray-100 "
          onUpload={(result: any) => {
            setPublicId(result.info.public_id);
            p.setImage(result.info.secure_url);
          }}
        >
          <div className="flex flex-col items-center">
            <span className="text-3xl">
              <LuUpload />
            </span>
            <p className="text-2xl font-medium">Upload Image</p>
          </div>
        </CldUploadButton>
      ) : (
        <CldImage
          className="w-full h-full  "
          width="960"
          height="600"
          src={publicId}
          alt="Description of my image"
        />
      )}
    </div>
  );
};
