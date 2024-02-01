import { create } from "zustand";
import { User } from "../utilities/users";
import { persist } from "zustand/middleware";
export const userViewStore = create<UserViewStore>()(
  persist(
    (set) => ({
      user: {} as User,
      setUser: async (newUser: User) => set({ user: newUser }),
    }),
    { name: "userView-storage" }
  )
);

interface UserViewStore {
  user: User;
  setUser: (newUser: User) => void;
}
