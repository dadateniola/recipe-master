import Sidebar from "@/components/dashboard/Sidebar";
import { Metadata } from "next";

const metadata: Metadata = {
  title: {
    template: "%s | Recipe Master",
    default: "Recipe Master",
  },
  description: "Dashboard for Recpe management",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="max-h-screen bg-zinc-100 flex">
      <Sidebar />
      <main className="flex-1 min-h-dvh bg-white flex flex-col">
        {/* <AdminHeader /> */}
        <section className="flex-1 max-h-screen overflow-y-scroll scrollbar-hide">
          {children}
        </section>
      </main>
      {/* <Toaster /> */}
    </section>
  );
}
