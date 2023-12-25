import { Sidebar } from "@/components/dashboard/sidebar";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { dashboardLinks } from "@/config/links";
import { getCurrentUser } from "@/lib/session";
import { notFound } from "next/navigation";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default async function DashboardLayoutProps({
  children,
}: DashboardLayoutProps) {
  const user = await getCurrentUser();

  if (!user) {
    return notFound();
  }

  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <Navbar
        user={{
          name: user?.name,
          image: user?.image,
          email: user?.email,
        }}
      />
      <div className="container max-w-7xl grid flex-1 gap-12">
        {/* <aside className="hidden w-[200px] flex-col md:flex">
          <Sidebar items={dashboardLinks.data} />
        </aside> */}
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}
