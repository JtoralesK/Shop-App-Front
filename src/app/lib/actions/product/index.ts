"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { addProduct, addUser } from "../../data";
import { productSchema } from "../schemas/index";
import { changeProductState } from "../../data";

export const saveProductAction = async (FormData: FormData) => {
  const {
    name,
    description,
    price,
    stock,
    image,
    genderId,
    productCategoryId,
  } = Object.fromEntries(FormData);
  try {
    const product = productSchema.parse({
      name,
      description,
      price: parseInt(price.toString()),
      stock: parseInt(stock.toString()),
      image,
      genderId: parseInt(genderId.toString()),
      productCategoryId: parseInt(productCategoryId.toString()),
    });
    await addProduct(product);
    console.log("todo ok");
  } catch (error: any) {
    console.error(error.errors);
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};
export const deleteProductAction = async (FormData: FormData) => {
  const { id } = Object.fromEntries(FormData);
  const numeroId = parseInt(id.toString());
  try {
    await changeProductState(numeroId);
  } catch (err: any) {
    console.log("No se pudo eliminar el user,action ", err);
    throw err;
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};
