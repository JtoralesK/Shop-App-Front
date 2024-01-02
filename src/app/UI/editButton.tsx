import { CiEdit } from "react-icons/ci";

export function EditButton() {
  return (
    <button className="flex flex-row items-center border rounded-2xl gap-2 h-8 p-2 hover:bg-secondary">
      <p className="text-xs ">Edit</p>
      <CiEdit />
    </button>
  );
}
