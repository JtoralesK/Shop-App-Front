"use client";
import { Pagination } from "@/app/UI/pagination";
import { Modal } from "../../modal";
import { useState } from "react";
import { TableHeader } from "./tableHeader";
import { TrBody } from "./trBody";
import { UserTableI } from "./types";
import { deleteUserAction } from "@/app/lib/actions/user";

export function TableUsers(p: UserTableI) {
  const [isOpen, setOpen] = useState(false);
  const [id, setId] = useState(0);
  const [state, setState] = useState(false);

  const changeUserState = (id: number, state: boolean) => {
    setOpen(!isOpen);
    setId(id);
    setState(state);
  };
  return (
    <>
      <Modal
        category="user"
        isOpen={isOpen}
        closeModal={setOpen}
        itemId={id}
        itemState={state}
        action={deleteUserAction}
      />
      <div className="overflow-hidden rounded-lg ">
        <table className="w-full">
          <TableHeader />
          <tbody className="bg-secondary">
            {p.users
              ? p.users.map((item) => {
                  return (
                    <TrBody
                      key={item.id}
                      item={item}
                      deleteItem={changeUserState}
                    />
                  );
                })
              : ""}
          </tbody>
        </table>
        <div className="mt-6">
          <Pagination totalPages={p.totalPages} currentPage={p.currentPage} />
        </div>
      </div>
    </>
  );
}
