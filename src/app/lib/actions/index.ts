"use server";
import { signIn, signOut } from "@/app/auth";

export const authenticate = async (state: any, FormData: FormData) => {
  //state = null;
  const { email, password } = Object.fromEntries(FormData);
  try {
    await signIn("credentials", { email, password });
  } catch (err: any) {
    if (
      err.message === "Read more at https://errors.authjs.dev#credentialssignin"
    ) {
      return "Wrong Credentials";
    }
    throw err;
  }
};
export const signOutAction = async () => {
  await signOut();
};
