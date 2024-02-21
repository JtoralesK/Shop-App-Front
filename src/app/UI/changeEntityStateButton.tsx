type Prop = {
  id: number;
  active: boolean;
  deleteItem: (id: number) => any;
};

export const ChangeEntityStateButton = (p: Prop) => {
  return (
    <button
      onClick={() => {
        p.deleteItem(p.id);
      }}
      className={` ${
        p.active ? "bg-red-400 " : "bg-green-400"
      } p-2 h-10 rounded-lg `}
    >
      {p.active ? "Delete" : "Active"}
    </button>
  );
};
