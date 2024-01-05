import Image from "next/image";
import { User } from "@/app/utilities/users";
import { Th } from "@/app/UI/thComp";
import Link from "next/link";
type Thprops = {
  title: string;
  wP: number;
  id: number;
};
type Props = {
  users: User[];
  redirect: (userId: number) => void;
  files: Thprops[];
  q: string;
};
export function TableUsers(p: Props) {
  let cont = 0;
  return (
    <>
      <table className="w-full">
        <thead className="bg-primary">
          <tr className="text-left">
            {p.files.map((item) => {
              return (
                <>
                  <Th key={item.id} width={item.wP} title={item.title} />
                </>
              );
            })}
          </tr>
        </thead>
        <tbody className="bg-secondary">
          {p.users.map((item) => {
            if (cont < 5) {
              cont++;
              return (
                <tr className="h-14" key={item && item.userId}>
                  <td className="h-full ">
                    <div className="flex justify-center  items-center px-4">
                      <div className="w-11/12 flex flex-row items-center justify-start gap-2 h-full ">
                        <Image
                          className="w-8 rounded-3xl"
                          width={40}
                          height={40}
                          src={item.profileImg}
                          alt="Avatar"
                        />
                        {item.name} {item.lastName}
                      </div>
                    </div>
                  </td>
                  <td className="text-center ">{item.email}</td>
                  <td className="text-center ">{item.createdAt}</td>
                  <td className="text-center ">Admin</td>
                  <td className="text-center ">
                    {item.active ? "Active" : "Inactive"}
                  </td>
                  <td className="h-full  ">
                    <div className="flex justify-center">
                      <div className="flex flex-row gap-2">
                        <Link href={"/dashboard/users/" + item.userId}>
                          <button className="bg-green-400 p-2 h-10 rounded-lg">
                            View
                          </button>
                        </Link>

                        <button className="bg-red-400 p-2 h-10 rounded-lg">
                          Delete
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </>
  );
}
