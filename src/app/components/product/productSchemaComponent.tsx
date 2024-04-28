import { FaArrowLeft } from "react-icons/fa";
type Prop = {
  form: JSX.Element;
  image: JSX.Element;
  title: string;
};
export function ProductSchema({ form, image, title }: Prop) {
  return (
    <div className="flex justify-center">
      <div
        className={`w-[800px] h-[82vh] rounded-lg bg-firstWhite p-4 flex flex-col justify-center`}
      >
        <div className="w-4 px-2">
          <button
            onClick={() => {
              window.history.back();
            }}
            className="bg-primary p-1 rounded-md text-firstWhite"
          >
            <FaArrowLeft />
          </button>
        </div>
        <div className="w-full h-1/6 flex justify-center items-center">
          <div className="text-center">
            <p className={`text-md font-medium`}>{title}</p>
            <p className="font-bold text-lg ">General Information</p>
          </div>
        </div>
        <div className="w-full flex flex-row h-5/6">
          <div className="w-5/12 h-full flex justify-center items-center justify-center ">
            <div className="w-11/12 h-4/5 border border-2 border-orange-200 border-dashed rounded-lg">
              {image}
            </div>
          </div>
          {form}
        </div>
      </div>
    </div>
  );
}
