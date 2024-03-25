"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { addProduct, editProduct } from "../../data";
import { productSchema, productSchemaOptional } from "../schemas/index";
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
  } catch (error: any) {
    console.error(error.errors);
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};
export const editProductAction = async (FormData: FormData) => {
  const {
    id,
    name,
    description,
    price,
    stock,
    image,
    genderId,
    productCategoryId,
  } = Object.fromEntries(FormData);
  console.log(price, stock, image, genderId, productCategoryId, "here");
  try {
    const product = productSchemaOptional.parse({
      id: parseInt(id.toString()),
      name,
      description,
      price: parseInt(price.toString()),
      stock: parseInt(stock.toString()),
      image,
      genderId: parseInt(genderId.toString()),
      productCategoryId: parseInt(productCategoryId.toString()),
    });
    // console.log(product);
    //await editProduct(parseInt(id.toString()), product);
  } catch (error: any) {
    // console.error(error.errors);
  }
  // revalidatePath("/dashboard/products");
  //redirect("/dashboard/products");
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
