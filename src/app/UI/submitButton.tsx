import { useFormStatus } from "react-dom";
import { MiniLoading } from "@/app/UI/miniSpinner";
type Prop = {
  itemState: boolean;
  loadingSubmit: (loading: boolean) => void;
  name: String;
  className?: string;
};
export function SubmitButton({
  itemState,
  loadingSubmit,
  name,
  className,
}: Prop) {
  const { pending } = useFormStatus();
  loadingSubmit(pending);
  if (itemState)
    return (
      <button
        type="submit"
        aria-disabled={pending}
        className={
          className
            ? className
            : `mt-4  bg-primary rounded-lg text-white w-full px-12 py-2 "h-10"`
        }
      >
        <span className="mr-2">
          <MiniLoading />
        </span>
        Loading...
      </button>
    );
  return (
    <button
      type="submit"
      aria-disabled={pending}
      className={
        className
          ? className
          : `mt-4  bg-primary rounded-lg text-white w-full px-12 py-2 "h-10"`
      }
    >
      {name}
    </button>
  );
}
