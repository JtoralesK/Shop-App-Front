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
export const linksNames: LinksNames[] = [
  { href: "/dashboard", name: "Workbench", icon: <FaHome />, key: 1 },
  {
    href: "/dashboard/invoices/add",
    name: "Add Sale",
    icon: <GiReceiveMoney />,
    key: 2,
  },
  {
    href: "/dashboard/users",
    name: "Users",
    icon: <FaUsers />,
    key: 3,
  },

  {
    href: "/dashboard/products",
    name: "Products",
    icon: <FaBoxOpen />,
    key: 4,
  },
  {
    href: "/dashboard/invoices",
    name: "Invoices",
    icon: <FaFileInvoiceDollar />,
    key: 5,
  },
  { href: "/dashboard/reports", name: "Reports", icon: <FaMap />, key: 6 },
  { href: "/login", name: "Logout", icon: <BiSolidLogOut />, key: 7 },
];

export const linksNamesProfile: LinksNamesProfile[] = [
  { href: "/dashboard/profile", name: "profile", key: 1 },
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
