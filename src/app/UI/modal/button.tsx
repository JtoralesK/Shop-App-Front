"use client";
import { useEffect } from "react";
import { useFormStatus } from "react-dom";
type Prop = {
  itemState: boolean;
  closeModal?: (open: boolean) => void;
  loadingSubmit: (loading: boolean) => void;
};
export function SubmitButton(p: Prop) {
  const { pending } = useFormStatus();
  p.loadingSubmit(pending);
  useEffect(() => {
    if (pending === false) {
      if (p.closeModal) p.closeModal(false);
    }
  }, [pending]);

  return (
    <button
      type="submit"
      aria-disabled={pending}
      className={` ${
        p.itemState ? "bg-red-400 " : "bg-green-400"
      } p-2 h-10 rounded-lg `}
    >
      {p.itemState ? "Delete" : "Active"}
    </button>
  );
}
