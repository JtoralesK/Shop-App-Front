"use client";
import Image from "next/image";
import { User } from "@/app/utilities/users";
import Link from "next/link";
import { Pagination } from "@/app/UI/pagination";
import { Theah } from "../thead";
import { Modal } from "../../modal";
import { useState } from "react";
type Props = {
  users: User[];
  totalPages: number;
  currentPage: number;
};
export function TableUsers(p: Props) {
  const [isOpen, setOpen] = useState(false);
  const [id, setId] = useState(0);
  const deleteItem = (id: number) => {
    setOpen(!isOpen);
    setId(id);
  };
  return (
    <>
      <Modal category="user" isOpen={isOpen} setOpen={setOpen} itemId={id} />
      <div className="overflow-hidden rounded-lg ">
        <table className="w-full">
          <Theah
            files={[
              { title: "Full name", wP: 3, id: 1 },
              { title: "Email", wP: 3, id: 2 },
              { title: "Created At", wP: 2, id: 3 },
              { title: "Rol", wP: 1, id: 4 },
              { title: "Status", wP: 1, id: 5 },
              { title: "Action", wP: 2, id: 6 },
            ]}
          />

          <tbody className="bg-secondary">
            {p.users.map((item) => {
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
                        <button
                          onClick={() => {
                            deleteItem(item.userId);
                          }}
                          className="bg-red-400 p-2 h-10 rounded-lg"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="mt-6">
          <Pagination totalPages={p.totalPages} currentPage={p.currentPage} />
        </div>
      </div>
    </>
  );
}
