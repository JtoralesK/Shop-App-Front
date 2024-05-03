import Link from "next/link";
import Image from "next/image";
type Prop2 = {
  user: any;
  data: number;
};

export const PeopleWorking = (prop: Prop2) => {
  return (
    <div className="w-10/12 bg-primary h-full rounded-2xl shadow-lg shadow-primary flex flex-row p-4">
      <div className="w-1/2 flex flex-col">
        <h5 className="text-xl text-firstWhite">People working</h5>
        <p className="text-orange-200 text-3xl font-bold">{prop.data}</p>
        {prop.user.role.roleType === "ADMIN" && (
          <Link href={"/dashboard/users/"}>
            <button className="mt-8 bg-forth p-1 rounded-md text-firstWhite ">
              Employers
            </button>
          </Link>
        )}
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
  );
};
