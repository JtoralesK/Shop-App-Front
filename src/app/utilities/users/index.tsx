export interface AllUserResponse {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  content: User[];
}

export type User = {
  id: number;
  name: string;
  email: string;
  lastName: string;
  phoneNumber: string;
  country: string;
  postalCode: string;
  city: string;
  active: boolean;
  gender: Gender;
  role: Role;
  createdAt: string;
  profileImgUrl: string;
};

export type FalseUser = {
  name: string;
  email: string;
  bio: string;
  lastName: string;
  phoneNumber: string;
  country: string;
  postalCode: string;
  cityState: string;
  userId: number;
  active: boolean;
  genre: string;
  createdAt: string;
  profileImg: string;
};
type genderType = "Male" | "Female" | "Other";
export const Genders = ["Male", "Female", "Other"];
export const Roles = ["Admin", "Employee"];
export type Gender = {
  id: number;
  genderType: genderType;
};
export type Role = {
  id: number;
  roleType: string;
};
export const defaultUser: User = {
  id: 1,
  name: "Alejandro",
  email: "alejandro@example.com",
  lastName: "González",
  phoneNumber: "123-456-7890",
  country: "Argentina",
  postalCode: "12345",
  city: "Buenos Aires",
  active: true,
  gender: { id: 1, genderType: "Other" },
  role: { id: 1, roleType: "" },
  createdAt: "2022-02-02",
  profileImgUrl: "/defaultAvatar.jpg",
};
