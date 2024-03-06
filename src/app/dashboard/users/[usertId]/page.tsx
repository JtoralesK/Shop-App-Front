"use client";
import { userViewStore } from "@/app/store/ViewUserContext";
import { ViewUserComponent } from "@/app/components/user/oneUser/view";
export default function UserView() {
  const { user } = userViewStore();
  return <ViewUserComponent user={user} />;
}
