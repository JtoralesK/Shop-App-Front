import { auth } from "@/app/auth";
import { ViewUserComponent } from "@/app/components/user/oneUser/view";
export default async function Profile() {
  const seccion: any = await auth();
  if (!seccion || !seccion.user) {
    // Puedes manejar el caso en el que seccion es null o user es undefined
    return <p>Error...</p>; // O cualquier otro enfoque que desees
  }
  return (
    <>
      <ViewUserComponent user={seccion.user.user} />
    </>
  );
}
