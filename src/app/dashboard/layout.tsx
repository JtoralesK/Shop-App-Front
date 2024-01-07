import { Inter } from "next/font/google";
import { Sidebar } from "../UI/sidebar/sidebar";
import { Navbar } from "../UI/navbar";
const inter = Inter({ subsets: ["latin"] });
type Props = {
  children: React.ReactNode;
};
export default function Layout(p: Props) {
  return (
    <div className={inter.className}>
      <section className="w-screen h-screen bg-secondary flex flex-row ">
        <Sidebar />
        <div className="w-full h-full flex flex-col px-8 ">
          <Navbar />
          {p.children}
        </div>
      </section>
    </div>
  );
}
