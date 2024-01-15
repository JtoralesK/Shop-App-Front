import {
  FaMap,
  FaHome,
  FaFileInvoiceDollar,
  FaUsers,
  FaBoxOpen,
} from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { BiSolidLogOut } from "react-icons/bi";
type LinksNames = {
  href: string;
  name: string;
  icon: React.ReactNode;
  key: number;
};
type LinksNamesProfile = {
  href: string;
  name: string;
  key: number;
};
export enum Links {
  Dashboard = "/dashboard",
  Users = "/dashboard/users",
  Products = "/dashboard/products",
  Invoices = "/dashboard/invoices",
  Reports = "/dashboard/reports",
  AddUsers = "/dashboard/users/add",
  AddInovices = "/dashboard/invoices/add",
  AddProducts = "/dashboard/products/add",
  Login = "/login",
  Profile = "/dashboard/profile",
}
export const linksNames: LinksNames[] = [
  { href: Links.Dashboard, name: "Workbench", icon: <FaHome />, key: 1 },
  {
    href: Links.AddInovices,
    name: "Add Sale",
    icon: <GiReceiveMoney />,
    key: 2,
  },
  {
    href: Links.Users,
    name: "Users",
    icon: <FaUsers />,
    key: 3,
  },

  {
    href: Links.Products,
    name: "Products",
    icon: <FaBoxOpen />,
    key: 4,
  },
  {
    href: Links.Invoices,
    name: "Invoices",
    icon: <FaFileInvoiceDollar />,
    key: 5,
  },
  { href: Links.Reports, name: "Reports", icon: <FaMap />, key: 6 },
  { href: Links.Login, name: "Logout", icon: <BiSolidLogOut />, key: 7 },
];

export const linksNamesProfile: LinksNamesProfile[] = [
  { href: Links.Profile, name: "profile", key: 1 },
  {
    href: "/dashboard/profile/changePassword",
    name: "Change Password",
    key: 2,
  },
  {
    href: "/dashboard/profile/changeImageProfile",
    name: "Change Image ",
    key: 3,
  },
];
