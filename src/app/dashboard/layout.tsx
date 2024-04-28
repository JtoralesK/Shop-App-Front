import { Inter } from "next/font/google";
import { Sidebar } from "../UI/sidebar/sidebar";
import { Navbar } from "../UI/navbar";
import { auth } from "../auth";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });
type Props = {
  children: React.ReactNode;
};
export default async function Layout(p: Props) {
  const session: any = await auth();
  //console.log(session, "layout");
  return (
    <div className={inter.className}>
      <section className="w-screen h-screen bg-secondary flex flex-row ">
        <Sidebar userRol={session.user.user.role} />
        <div className="w-full h-full flex flex-col px-8 ">
          <Navbar />
          {p.children}
        </div>
      </section>
      <ToastContainer />
    </div>
  );
}
