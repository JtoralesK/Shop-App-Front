import { Inter } from "next/font/google";
import { Sidebar } from "../components/sidebar/sidebar";
import { Navbar } from "../components/navbar";

const inter = Inter({ subsets: ["latin"] });
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={inter.className}>
      <section className="w-screen h-screen bg-secondary flex flex-row ">
        <Sidebar />
        <div className="w-full h-full flex flex-col px-8 ">
          <Navbar />
          {children}
        </div>
      </section>
    </div>
  );
}
