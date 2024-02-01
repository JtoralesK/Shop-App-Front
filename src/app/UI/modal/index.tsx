import { deleteUserAction } from "@/app/lib/actions";
import { IoMdClose } from "react-icons/io";
type Props = {
  category: string;
  isOpen: boolean;
  itemId: number;
  closeModal: (open: false) => void;
  itemState: boolean;
};
export function Modal(p: Props) {
  const change = () => {
    p.closeModal(false);
  };
  return (
    <>
      <div
        className={
          p.isOpen
            ? `fixed top-0 left-0 w-full h-full  bg-black bg-opacity-50 z-50 flex `
            : ""
        }
      >
        <dialog className="rounded-lg mt-40" open={p.isOpen}>
          <form
            action={deleteUserAction}
            className="border p-3 p-3 bg-secondary rounded-lg "
          >
            <div className="flex flex-row justify-end">
              <button type="button" onClick={() => p.closeModal(false)}>
                <IoMdClose />
              </button>
            </div>
            <div className="flex justify-center pl-2 pr-2 pb-2">
              <div className="text-center ">
                <p className="font-bold mt-2">
                  You are about to {p.itemState ? "delete " : "active "}
                  {p.category}
                </p>
                <p className="text-xs text-gray-700 font-medium mt-1">
                  This will {p.itemState ? "delete " : "active "} your{" "}
                  {p.category} with id {p.itemId}
                </p>
                <p className="text-gray-700">Are you sure?</p>
              </div>
            </div>
            <div className="flex flex-row justify-end gap-3">
              <button type="button" onClick={() => p.closeModal(false)}>
                Cancel
              </button>
              <input type="hidden" name="id" value={p.itemId} />
              <button
                onClick={() => p.closeModal(false)}
                className={` ${
                  p.itemState ? "bg-red-400 " : "bg-green-400"
                } p-2 h-10 rounded-lg `}
              >
                {p.itemState ? "Delete" : "Active"}
              </button>
            </div>
          </form>
        </dialog>
      </div>
    </>
  );
}
