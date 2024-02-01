"use server";
import { revalidatePath } from "next/cache";
import { signIn, signOut } from "../auth";
import { changeUserState } from "./data";
import { redirect } from "next/navigation";
export async function uploadImage() {
  console.log("upload image");
}
export const authenticate = async (FormData: FormData) => {
  const { email, password } = Object.fromEntries(FormData);
  try {
    await signIn("credentials", { email, password });
  } catch (err: any) {
    if (err.message.includes("CredentialsSignin")) {
      return "Wrong Credentials";
    }
    throw err;
  }
};
export const signOutAction = async () => {
  console.log("signing out");
  await signOut();
};

export const deleteUserAction = async (FormData: FormData) => {
  const { id } = Object.fromEntries(FormData);
  const numeroId = parseInt(id.toString());
  try {
    changeUserState(numeroId);
  } catch (err: any) {
    console.log("No se pudo eliminar el user ", err);
    throw err;
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};
