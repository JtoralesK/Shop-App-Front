import { EditButton } from "../../UI/editButton";
import { LabelText } from "@/app/UI/labelText";
import Image from "next/image";
import Link from "next/link";
import next from "next";
export default function Profile() {
  return (
    <>
      <div className="h-1/5">
        <div className="h-2/6">
          <h1>My profile</h1>
        </div>
        <div className="h-4/6  flex flex-row w-full px-2">
          <div className="w-1/12 rounded-full ">
            <Image
              width={100}
              height={100}
              alt=""
              src={"/fotoPerfil1.png"}
              className="rounded-full h-full w-full bg-cover px-1"
            />
          </div>
          <div className="w-11/12 flex flex-row justify-between items-center">
            <div className="px-3">
              <p>Jeremias Speeker</p>
              <p className="text-sm text-gray-700">Team Manager</p>
              <p className="text-xs text-gray-700">Leeds, United Kingdom</p>
            </div>
            <EditButton />
          </div>
        </div>
      </div>
      <div className="h-2/5 p-2">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-sm font-bold">Personal Information</h2>
          <EditButton />
        </div>
        <form className="mt-2 w-full flex flex-row">
          <div className="w-4/12 flex flex-col gap-3">
            <LabelText label="First Name" placeholder="Joselo " />
            <LabelText
              label="Email"
              placeholder="name@gmail.com"
              type="email"
            />
            <LabelText label="Bio" placeholder="Team Manager" />
          </div>
          <div className="w-4/12 flex flex-col gap-3 ml-12">
            <LabelText label="Last Name" placeholder="Rahjamn" />
            <LabelText
              label="Phone Number"
              placeholder="+1 234 567 890"
              type="text"
            />
          </div>
        </form>
      </div>
      <div className="h-2/5 px-2">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-sm font-bold">Address</h2>
          <EditButton />
        </div>
        <form className="mt-3 w-full flex flex-row">
          <div className="w-4/12 flex flex-col gap-3">
            <LabelText label="Country" placeholder="United Kingdom" />

            <LabelText label="Pastal Code" placeholder="Ert 245" />
          </div>
          <div className="w-4/12 flex flex-col gap-3 ml-12">
            <LabelText label="City/State" placeholder="Leeds,East London" />
            <LabelText label="Taxt ID" placeholder="AKDHW8798" type="text" />
          </div>
        </form>
      </div>
    </>
  );
}
