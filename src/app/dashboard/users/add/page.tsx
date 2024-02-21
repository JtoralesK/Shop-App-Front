import { UserComponent } from "@/app/components/addViewUser";
import { defaultUser } from "@/app/utilities/users";

export default function Add() {
  return <UserComponent user={defaultUser} />;
}
