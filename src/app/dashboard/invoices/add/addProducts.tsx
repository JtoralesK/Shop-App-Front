import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import { productsArray } from "@/app/utilities/products";
import { Theah } from "@/app/UI/table/thead";
import { FaPlusCircle } from "react-icons/fa";
type Prop = {
  onClick: () => void;
};
export function AddProducts(props: Prop) {
  const changeSection = () => {
    if (props.onClick) {
      props.onClick();
    }
  };
  let con = 0;
  return (
    <>
      <div className="w-7/12  bg-firstWhite flex flex-col gap-4">
        <div className={`w-full h-[90%] p-3`}>
          <div>
            <button
              onClick={changeSection}
              className="bg-primary p-1 rounded-md text-firstWhite"
            >
              <FaArrowLeft />
            </button>
          </div>
          <div className="overflow-y-auto h-52 border">
            <table className="w-full ">
              <Theah
                files={[
                  { title: "Title", wP: 6, id: 1 },
                  { title: "Price", wP: 2, id: 3 },
                  { title: "Stock", wP: 2, id: 5 },
                  { title: "Add", wP: 2, id: 5 },
                ]}
              />
              <tbody className="bg-secondary">
                {productsArray.map((item) => {
                  if (con < 10) {
                    con++;
                    return (
                      <tr className="h-14" key={item.productId}>
                        <td className="">
                          <div className="flex justify-center  items-center px-4">
                            <div className="w-11/12 flex flex-row items-center justify-start gap-2  ">
                              <Image
                                className="w-8 rounded-3xl"
                                width={40}
                                height={40}
                                src={""}
                                alt=""
                              />
                              {item.name}
                            </div>
                          </div>
                        </td>
                        <td className="text-center ">{item.price}</td>
                        <td className="text-center ">{item.stock}</td>
                        <td className="">
                          <div className="flex justify-center items-center ">
                            <FaPlusCircle />
                          </div>
                        </td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </div>
          <div>hola</div>
        </div>
        <div className="w-full h-[10%] bg-secondary border"></div>
      </div>
    </>
  );
}
/*
 */
