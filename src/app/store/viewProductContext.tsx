import { create } from "zustand";
import { Product } from "@/app/utilities/products";
import { persist } from "zustand/middleware";
export const productViewStore = create<ProductViewStore>()(
  persist(
    (set) => ({
      product: {} as Product,
      setProduct: async (newProduct: Product) => set({ product: newProduct }),
    }),
    { name: "productView-storage" }
  )
);

interface ProductViewStore {
  product: Product;
  setProduct: (newProduct: Product) => void;
}
