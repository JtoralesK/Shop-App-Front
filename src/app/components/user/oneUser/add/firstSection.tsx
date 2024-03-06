"use client";
import { LuUpload } from "react-icons/lu";
import { CldUploadButton } from "next-cloudinary";
import { useState } from "react";
import { CldImage } from "next-cloudinary";

export const FirstSection = () => {
  const [publicId, setPublicId] = useState<string>("");
  const [image, setImage] = useState<string>("");

  return (
    <>
      <div className="h-1/6  flex flex-row w-full px-2 items-center">
        <div className="w-1/12 rounded-full  border ">
          <div>
            {publicId ? (
              <CldImage
                className="rounded-full h-16 w-full bg-cover"
                width="560"
                height="300"
                src={publicId}
                alt="Description of my image"
              />
            ) : (
              <div className="rounded-full h-16 w-full bg-cover" />
            )}
          </div>
        </div>
        <div>
          <input name="image" type="hidden" value={image} />
          <CldUploadButton
            uploadPreset="srfvnlm1"
            className=" ml-2"
            onUpload={(result: any) => {
              setPublicId(result.info.public_id);
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
        </div>
      </div>
    </>
  );
};
