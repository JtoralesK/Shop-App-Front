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
        <table className="w-full ">
          <thead>
            <tr className="text-left">
              <th>Name</th>
              <th>Email</th>
              <th>Created at</th>
              <th>Rol</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {usersArray.map((item) => {
              if (cont < 5) {
                cont++;
                return (
                  <tr key={item.userId}>
                    <td>
                      <div className="p-2 flex flex-row">
                        <Image width={40} height={40} src={""} alt="" />
                        {item.name}
                      </div>
                    </td>
                    <td>{item.email}</td>
                    <td>{item.createdAt}</td>
                    <td>Admin</td>
                    <td>{item.active ? "Active" : "Inactive"}</td>
                    <td className=" flex flex-row gap-2">
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
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
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
