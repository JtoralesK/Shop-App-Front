import { IoMdClose } from "react-icons/io";
type Props = {
  category: string;
  isOpen: boolean;
  itemId: number;
  setOpen: (open: boolean) => void;
};
export function Modal(p: Props) {
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
            className="border p-3 p-3 bg-secondary rounded-lg "
            method="dialog"
          >
            <div className="flex flex-row justify-end">
              <button
                type="button"
                onClick={() => p.setOpen(false)}
                className=""
              >
                <IoMdClose />
              </button>
            </div>
            <div className="flex justify-center pl-2 pr-2 pb-2">
              <div className="text-center ">
                <p className="font-bold mt-2">
                  You are about to delete a {p.category}
                </p>
                <p className="text-xs text-gray-700 font-medium mt-1">
                  This will delete your {p.category} with id {p.itemId}
                </p>
                <p className="text-gray-700">Are you sure?</p>
              </div>
            </div>
            <div className="flex flex-row justify-end gap-3">
              <button>Cancel</button>
              <button className="bg-red-500 px-2 py-1 rounded-lg">
                Delete
              </button>
            </div>
          </form>
        </dialog>
      </div>
    </>
  );
}
