import { EditButton } from "../../UI/editButton";
import { LabelText } from "@/app/UI/labelText";
import Image from "next/image";
import Link from "next/link";
import next from "next";
import { usersArray, User } from "@/app/utilities/users";
type Prop = {
  userId?: number;
};
export function ProfileUser(p: Prop) {
  let obj: User | undefined; // Declarar obj como potencialmente undefined

  const foundUser = usersArray.find((item) => item.userId === p.userId);

  if (foundUser) {
    obj = foundUser; // Asignar solo si se encuentra un usuario
  } else {
    // Manejar el caso en que no se encuentra ningún usuario con el userId
    // Puedes establecer un valor por defecto o tomar alguna otra acción aquí
  }
  return (
    <>
      <div className="h-1/5">
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
              <p>
                {obj &&
                  `
                    ${obj.name} ${obj.lastName}
                    `}
              </p>
              <p className="text-sm text-gray-700">{obj && `${obj.bio}`}</p>
              <p className="text-xs text-gray-700">
                {obj && `${obj.cityState}` + `,${obj.country}`}
              </p>
            </div>
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
            <LabelText
              label="First Name"
              placeholder={obj ? `${obj.name}` : "Undefined"}
            />
            <LabelText
              label="Email"
              placeholder={obj ? `${obj.email}` : "Undefined"}
              type="email"
            />
            <LabelText
              label="Bio"
              placeholder={obj ? `${obj.bio}` : "Undefined"}
            />
          </div>
          <div className="w-4/12 flex flex-col gap-3 ml-12">
            <LabelText
              label="Last Name"
              placeholder={obj ? `${obj.lastName}` : "Undefined"}
            />
            <LabelText
              label="Phone Number"
              placeholder={obj ? `${obj.phoneNumber}` : "Undefined"}
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
            <LabelText
              label="Country"
              placeholder={obj ? `${obj.country}` : "Undefined"}
            />

            <LabelText
              label="Pastal Code"
              placeholder={obj ? `${obj.postalCode}` : "Undefined"}
            />
          </div>
          <div className="w-4/12 flex flex-col gap-3 ml-12">
            <LabelText
              label="City/State"
              placeholder={obj ? `${obj.cityState}` : "Undefined"}
            />
            <LabelText label="Taxt ID" placeholder="AKDHW8798" type="text" />
          </div>
        </form>
      </div>
    </>
  );
}
