"use client";
import { userViewStore } from "@/app/store/ViewUserContext";
import { UserComponent } from "@/app/components/addViewUser";
export default function UserView() {
  const { user } = userViewStore();
  return <UserComponent user={user} />;
}
