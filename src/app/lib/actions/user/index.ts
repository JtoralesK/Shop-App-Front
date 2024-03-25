"use server";
import { revalidatePath } from "next/cache";
import { changeUserState } from "../../data";
import { redirect } from "next/navigation";
import { addUser } from "../../data";
import { userSchema } from "../schemas";

export const deleteUserAction = async (FormData: FormData) => {
  const { id } = Object.fromEntries(FormData);
  const numeroId = parseInt(id.toString());
  try {
    await changeUserState(numeroId);
  } catch (err: any) {
    console.log("No se pudo eliminar el user,action ", err);
    throw err;
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const SaveUserAction = async (state: any, FormData: FormData) => {
  const {
    image,
    firstName,
    lastName,
    email,
    phoneNumber,
    genderType,
    roleType,
    country,
    postalCode,
    city,
    confirmedPassword,
  } = Object.fromEntries(FormData);
  let ok = false;
  console.log(postalCode, 12412414);
  try {
    const user = userSchema.parse({
      name: firstName,
      lastName,
      email,
      password: confirmedPassword,
      role_Id: parseInt(roleType.toString()),
      profileImgUrl: image,
      gender_Id: parseInt(genderType.toString()),
      city,
      postalCode,
      phoneNumber,
      country,
    });
    const response = await addUser(user);
    if (response.status === 200) {
      ok = true;
      if (response.data.errorResponse.error) {
        ok = false;
        return response.data.errorResponse.messageError;
      }
    }
  } catch (error: any) {
    console.error(error.errors, "2");
  }
  if (ok) {
    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
  }
};
