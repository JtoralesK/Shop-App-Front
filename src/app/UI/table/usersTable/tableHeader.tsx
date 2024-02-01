import { Theah } from "../thead";

export function TableHeader() {
  return (
    <Theah
      files={[
        { title: "Full name", wP: 3, id: 1 },
        { title: "Email", wP: 3, id: 2 },
        { title: "Created At", wP: 2, id: 3 },
        { title: "Rol", wP: 1, id: 4 },
        { title: "Status", wP: 1, id: 5 },
        { title: "Action", wP: 2, id: 6 },
      ]}
    />
  );
}
