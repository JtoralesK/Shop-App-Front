import { LabelText } from "@/app/UI/labelText";
type Prop = {
  typeComponent: "add" | "view";
};
export const ChangePassword = (p: Prop) => {
  return (
    <div className="h-1/6 px-2 mt-3">
      <div>
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-sm font-bold text-red-500">
            {p.typeComponent === "add" ? "Create Password" : "Change Password"}
          </h2>
        </div>
        <div className="w-full flex flex-col gap-3">
          <div className="flex flex-row gap-4 w-2/3">
            <LabelText
              text="New Password"
              placeholder={"********"}
              type="password"
              name="newPassword"
              required
            />
            <LabelText
              text="Confirmed Password"
              placeholder={"********"}
              type="password"
              name="confirmedPassword"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};
