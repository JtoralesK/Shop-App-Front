import Image from "next/image";
import { PropSection } from "./index";
export const FirstSection = (p: PropSection) => {
  const { obj } = p;
  return (
    <>
      <div className="h-1/6  flex flex-row w-full px-2 items-center">
        <div className="w-1/12 rounded-full h-2/3">
          <Image
            width={100}
            height={100}
            alt=""
            src={obj?.profileImg ? obj.profileImg : ""}
            className="rounded-full h-full w-full bg-cover px-1"
          />
        </div>
        <div className="w-full flex flex-row justify-between items-center">
          <div className="px-3">
            <p>
              {obj?.name} {obj?.lastName}
            </p>
            <p className="text-sm text-gray-700">{obj?.bio}</p>
            <p className="text-xs text-gray-700">
              {obj?.cityState} {obj?.country}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
