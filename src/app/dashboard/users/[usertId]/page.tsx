"use client";
import { userViewStore } from "@/app/store/ViewUserContext";
import { UserComponent } from "@/app/components/addViewUser";
export default function UserView({ params }: any) {
  const { user } = userViewStore();
  return <UserComponent user={user} />;
}
