type Props = {
  title: string;
  width: number; // number-12
};
export const Th = (p: Props) => {
  return (
    <th className={`w-${p.width}/12  text-center text-firstWhite`}>
      {p.title}
    </th>
  );
};
