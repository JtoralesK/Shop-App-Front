import Link from "next/link";

type Props = {
  name: string;
  icon: React.ReactNode;
  href: string;
  active: boolean;
  top?: string;
  hover?: boolean;
};

export function MenuLink(p: Props) {
  return (
    <div
      className={`${p.active && "bg-secondary text-black"} ${
        p.active ? "text-forth" : "text-firstWhite"
      } ${
        p.hover === false ? "" : "hover:font-bold "
      } flex flex-row gap-3 text-lg items-center cursor-pointer  w-9/12 p-2 rounded-lg pl-6 ${
        p.top && p.top
      }`}
    >
      {p.icon}
      <Link href={p.href}>{p.name}</Link>
    </div>
  );
}
