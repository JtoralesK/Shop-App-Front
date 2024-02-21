export interface Product {
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  productCategory: Category;
  gender: Gender;
  createdAt: string;
  active: boolean;
  id: number;
}
interface Category {
  id: number;
  productCategory: string;
}
interface Gender {
  id: number;
  genderType: string;
}
export const Categories = [
  "TShirt",
  "Pants",
  "Dress",
  "Jacket",
  "Footwear",
  "Underwear",
  "Sportswear",
  "FashionAccessories",
  "Sleepwear",
  "Swimwear",
  "Hoddie",
];
const defaultGender = {
  id: 1,
  genderType: "",
};
const defaultCategory = {
  id: 1,
  productCategory: "",
};
export const defaultProduct: Product = {
  name: "Iphone x",
  description: "string",
  price: 1000,
  stock: 1,
  image: "string",
  productCategory: defaultCategory,
  gender: defaultGender,
  createdAt: "21-2-2024",
  active: true,
  id: 1,
};
