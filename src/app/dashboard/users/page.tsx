"use client";
import { SearchInput } from "@/app/UI/searchInput";
import { usersArray } from "@/app/utilities/users";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Users() {
  const router = useRouter();
  let cont = 0;
  const redirect = (userId: number) => {
    router.push("/dashboard/users/" + userId);
  };
  return (
    <>
      <div className="w-full h-4/6 bg-firstWhite rounded-lg p-4">
        <div className="h-14  w-full flex flex-row justify-between  items-center ">
          <div className="w-2/12">
            <SearchInput placeholder="Search for a user" />
          </div>
          <button className="bg-primary p-1 rounded-md text-firstWhite">
            Add New
          </button>
        </div>
        <div className="overflow-hidden rounded-lg ">
          <table className="w-full">
            <thead className="bg-primary">
              <tr className="text-left">
                <th className="w-3/12  text-center text-firstWhite">
                  Full name
                </th>
                <th className="w-3/12  text-center text-firstWhite ">Email</th>
                <th className="w-2/12  text-center text-firstWhite">
                  Created at
                </th>
                <th className="w-1/12  text-center text-firstWhite">Rol</th>
                <th className="w-1/12  text-center text-firstWhite">Status</th>
                <th className="w-2/12  text-center text-firstWhite">Action</th>
              </tr>
            </thead>
            <tbody className="bg-secondary">
              {usersArray.map((item) => {
                if (cont < 5) {
                  cont++;
                  return (
                    <tr className="h-14" key={item.userId}>
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
                            <button
                              onClick={() => {
                                redirect(item.userId);
                              }}
                              className="bg-green-400 p-2 h-10 rounded-lg"
                            >
                              View
                            </button>
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
        </div>

        <div className="h-14  w-full flex flex-row justify-between  items-center ">
          <div>
            <button className="bg-orange-200 p-1 rounded-md text-firstWhite">
              Previous
            </button>
          </div>
          <button className="bg-orange-200 p-1 rounded-md text-firstWhite">
            Next
          </button>
        </div>
      </div>
    </>
  );
}
