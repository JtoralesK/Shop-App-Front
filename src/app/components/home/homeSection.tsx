import Image from "next/image";
import { MiniCardsSection } from "./minicardsSection";
import { HorizontalCardsSection } from "./horizontalCardsSection";
import { auth } from "../../auth";
export async function HomeSection() {
  const session: any = await auth();

  return (
    <>
      <div className="flex gap-1 flex-col">
        <h1 className="text-3xl font-bold">Hello! {session.user.user.name}</h1>
        <p className="text-md">
          Never put off till tomorrow what can be done today!
        </p>
        <p className="text-md text-forth pt-2">Today</p>
      </div>
      <div className="w-full flex flex-row mt-4 ">
        <MiniCardsSection />
        <div className="w-4/12 h-44  flex justify-end">
          <div className="w-10/12 bg-primary h-full rounded-2xl shadow-lg shadow-primary flex flex-row p-4">
            <div className="w-1/2 flex flex-col">
              <h5 className="text-xl text-firstWhite">People working</h5>
              <p className="text-orange-200 text-3xl font-bold">10</p>
            </div>
            <div className="w-1/2">
              <Image
                width={120}
                height={120}
                alt="woman"
                src={"/standWoman1.png"}
              ></Image>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 w-full h-full flex flex-row ">
        <HorizontalCardsSection />
        <div className="w-7/12 h-full ">
          <div className="w-full h-full  ">
            <h5>Best product</h5>
            <div className="mt-3  bg-firstWhite rounded-lg h-5/6 flex flex-row py-4 px-8">
              <div className="w-2- mr-6">
                <h6 className="font-bold text-2xl">Trainers Red</h6>
                <p className="mt-3 text-forth">
                  adidas men&apos;s trainers are the perfect blend of style and
                  function
                </p>
                <button className="mt-24 bg-primary rounded-2xl px-8 py-2">
                  See more
                </button>
              </div>
              <Image
                className="rounded-lg w-1-3 flex justify-end shadow"
                src="/products/zapatillas.png"
                width={200}
                height={200}
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
