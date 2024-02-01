import { User } from "@/app/utilities/users";
type ChangeStateUserButtonProp = {
  item: User;
  deleteItem: (id: number) => any;
};

export const ChangeStateUserButton = (p: ChangeStateUserButtonProp) => {
  return (
    <button
      onClick={() => {
        p.deleteItem(p.item.id);
      }}
      className={` ${
        p.item.active ? "bg-red-400 " : "bg-green-400"
      } p-2 h-10 rounded-lg `}
    >
      {p.item.active ? "Delete" : "Active"}
    </button>
  );
};
