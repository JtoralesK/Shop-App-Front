import Link from "next/link";
import { User } from "@/app/utilities/users";
import Image from "next/image";
import { userViewStore } from "@/app/store/ViewUserContext";
import { ChangeStateUserButton } from "./changeStateUserButton";
type PropTr = {
  item: User;
  deleteItem: (id: number, state: boolean) => void;
};
export function TrBody(p: PropTr) {
  const { item, deleteItem } = p;
  const { setUser } = userViewStore();
  return (
    <tr className="h-14">
      <td className="h-full ">
        <div className="flex justify-center  items-center px-4">
          <div className="w-11/12 flex flex-row items-center justify-start gap-2 h-full ">
            <Image
              className="w-8 rounded-3xl"
              width={40}
              height={40}
              src={item.profileImgUrl}
              alt="Avatar"
            />
            {item.name} {item.lastName}
          </div>
        </div>
      </td>
      <td className="text-center ">{item.email}</td>
      <td className="text-center ">{item.createdAt}</td>
      <td className="text-center ">{item.role.roleType}</td>
      <td className="text-center ">{item.active ? "Active" : "Inactive"}</td>
      <td className="h-full  ">
        <div className="flex justify-center">
          <div className="flex flex-row gap-2">
            <Link href={"/dashboard/users/" + item.id}>
              <button
                onClick={() => {
                  setUser(item);
                }}
                className="bg-orange-200 p-2 h-10 rounded-lg"
              >
                View
              </button>
            </Link>
            <ChangeStateUserButton
              deleteItem={(id) => {
                deleteItem(id, item.active);
              }}
              item={item}
            />
          </div>
        </div>
      </td>
    </tr>
  );
}
