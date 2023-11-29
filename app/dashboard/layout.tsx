import Navbar from "@/components/layout/navbar";
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
    </div>
  );
}
