"use client";
import { UserComponent } from "@/app/components/addViewUser";
export default function UserView({ params }: any) {
  const id = parseInt(params.usertId, 10);
  return <UserComponent userId={id} />;
}
