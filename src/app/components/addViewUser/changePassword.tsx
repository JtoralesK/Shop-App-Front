import { LabelText } from "@/app/UI/labelText";
import { PropSection } from "./index";
export const ChangePassword = (p: PropSection) => {
  const { obj } = p;
  return (
    <div className="h-1/6 px-2 mt-3">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-sm font-bold text-red-500">Change Password</h2>
      </div>
      <form className="w-full flex flex-col gap-3">
        <div className="flex flex-row gap-4">
          <LabelText
            text="Old Password"
            placeholder={"********"}
            type="password"
          />

          <LabelText
            text="New Password"
            placeholder={"********"}
            type="password"
          />
          <LabelText
            text="Confirmed Password"
            placeholder={"********"}
            type="password"
          />
        </div>
      </form>
    </div>
  );
};
