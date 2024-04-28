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
  console.log(name + " se va add prodc", FormData);
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
    console.error("Add product Error " + error.errors);
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};
export const editProductAction = async (FormData: FormData) => {
  const { id } = Object.fromEntries(FormData);
  const newObject = editProductSchemaVerificateNan(FormData);
  try {
    const product = productSchemaOptional.parse(newObject);

    await editProduct(parseInt(id.toString()), product);
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

const editProductSchemaVerificateNan = (FormData: FormData) => {
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
  let newObject: any = {};
  newObject.id = parseInt(id.toString());
  if (name) newObject.name = name;
  if (description) newObject.description = description;
  if (price) newObject.price = parseInt(price.toString());
  if (stock) newObject.stock = parseInt(stock.toString());
  if (image) newObject.image = image;
  if (genderId && parseInt(genderId.toString()) > 0)
    newObject.genderId = parseInt(genderId.toString());
  if (productCategoryId && parseInt(productCategoryId.toString()) > 0)
    newObject.productCategoryId = parseInt(productCategoryId.toString());
  return newObject;
};
