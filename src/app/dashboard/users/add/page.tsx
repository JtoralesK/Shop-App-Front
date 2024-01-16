"use client";
import { UserComponent } from "@/app/components/addViewUser";
import { usePathname } from "next/navigation";
export default function Add() {
  const pathname = usePathname();
  return <UserComponent userId={2} />;
}
