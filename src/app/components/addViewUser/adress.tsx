import { LabelText } from "@/app/UI/labelText";
import { PropSection } from "./index";
export const Adress = (p: PropSection) => {
  const { obj } = p;
  return (
    <div className="h-1/6 px-2">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-sm font-bold">Address</h2>
      </div>
      <div className="w-full flex flex-col gap-3">
        <div className=" flex flex-row gap-4">
          <LabelText
            text="Country"
            placeholder={obj.country}
            name="country"
            required
          />

          <LabelText
            text="Pastal Code"
            placeholder={obj.postalCode}
            name="pastalCode"
            required
          />
          <LabelText
            text="City/State"
            placeholder={obj.city}
            name="city"
            required
          />
        </div>
      </div>
    </div>
  );
};
