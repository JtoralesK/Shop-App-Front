import Image from "next/image";

type Props = {
  title: string;
  stock: string;
  image: string;
};

export function HorizontalCard(p: Props) {
  return (
    <>
      <div className="bg-white h-24 w-9/12 rounded-lg p-2 flex flex-row">
        <div className="w-14 bg-red-200">
          <Image
            className="h-full w-full"
            width={60}
            height={40}
            alt={p.title}
            src={p.image}
          />
        </div>
        <div className="w-4/5 flex flex-row justify-between ml-2">
          <div className="flex flex-col ">
            <p className="text-md">{p.title}</p>
            <p className="text-xs">{p.stock}</p>
          </div>
          <button className="mt-8 bg-forth p-1 rounded-md text-firstWhite">
            More
          </button>
        </div>
      </div>
    </>
  );
}
