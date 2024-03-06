import { UserComponent } from "@/app/components/addViewUser";
import { auth } from "@/app/auth";

export default async function Profile() {
  const seccion: any = await auth();
  if (!seccion || !seccion.user) {
    // Puedes manejar el caso en el que seccion es null o user es undefined
    return <p>Error...</p>; // O cualquier otro enfoque que desees
  }
  return (
    <>
      <UserComponent user={seccion.user.user} typeComponent="view" />
    </>
  );
}
