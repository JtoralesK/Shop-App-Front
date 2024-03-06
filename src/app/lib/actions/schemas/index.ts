import { z } from "zod";

export const userSchema = z.object({
  name: z.string().nonempty(),
  lastName: z.string().nonempty(),
  email: z.string().email().nonempty(),
  password: z.string().nonempty(),
  role_Id: z.number().min(1),
  profileImgUrl: z.string().nonempty(),
  gender_Id: z.number().min(1),
  city: z.string().nonempty(),
  postalCode: z.string().nonempty(),
  phoneNumber: z.string().nonempty(),
  country: z.string().nonempty(),
});
export const productSchema = z.object({
  name: z.string().nonempty(),
  description: z.string().nonempty(),
  price: z.number().min(1),
  stock: z.number().min(1),
  image: z.string().nonempty(),
  genderId: z.number().min(1),
  productCategoryId: z.number().min(1),
});

export const invoiceSchema = z.object({
  costumer: z.string().nonempty(),
  biller: z.number().min(1),
  paymentMethodId: z.number().min(1),
  invoiceItems: z.array(
    z.object({
      product: z.number().min(1),
      amount: z.number().min(1),
    })
  ),
});
