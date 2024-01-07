import { Th } from "@/app/UI/thComp";
type Thprops = {
  title: string;
  wP: number;
  id: number;
};
type Props = {
  files: Thprops[];
};
export function Theah(p: Props) {
  return (
    <>
      <thead className="bg-primary">
        <tr>
          {p.files.map((item) => {
            return <Th key={item.id} width={item.wP} title={item.title} />;
          })}
        </tr>
      </thead>
    </>
  );
}
