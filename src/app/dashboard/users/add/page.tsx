import { defaultUser } from "@/app/utilities/users";
import { AddUserComponent } from "@/app/components/user/oneUser/add";
export default function Add() {
  return <AddUserComponent user={defaultUser} />;
}
