import Image from "next/image";

type Props = {
  title: string;
  tC: String; //title color
  description: string;
  dC: String; //description color
  color: string;
  unableBar: boolean;
  progressNumber: number;
  image?: string;
};
import { ProgressBar } from "./progressBar";
export function MiniCardHome(p: Props) {
  return (
    <>
      <div className={`w-1/5 h-44 ${p.color} rounded-2xl p-3`}>
        <h1 className={`text-2xl font-bold ${p.tC}`}>{p.title}</h1>
        <p className={`text-sm ${p.dC} mt-4`}>{p.description}</p>
        <div className={`mt-12 ${p.unableBar ? "block" : "hidden"}`}>
          <p className="text-[10px] font-medium ">%{p.progressNumber}</p>
          <ProgressBar progressNumber={p.progressNumber} />
        </div>
        {p.image && (
          <div className="flex justify-end">
            <Image
              className="mt-8 text-right"
              src={p.image}
              width={50}
              height={50}
              alt=""
            />
          </div>
        )}
      </div>
    </>
  );
}
