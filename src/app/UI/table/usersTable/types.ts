import { User } from "@/app/utilities/users";
export interface UserTableI {
  users: User[];
  totalPages: number;
  currentPage: number;
  token: string;
}
