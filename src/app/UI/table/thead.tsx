import { Th } from "@/app/UI/thComp";
type Thprops = {
  title: string;
  wP: number;
  id: number;
};
type Props = {
  files: Thprops[];
  bg?: string;
};
export function Theah(p: Props) {
  return (
    <>
      <thead className={`${p.bg ? p.bg : "bg-primary"}`}>
        <tr>
          {p.files.map((item) => {
            return <Th key={item.id} width={item.wP} title={item.title} />;
          })}
        </tr>
      </thead>
    </>
  );
}
