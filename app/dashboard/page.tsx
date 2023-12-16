import { DashboardHeader } from "@/components/dashboard/header";
import { NoteCreateButton } from "@/components/dashboard/note-create-button";
import { DashboardShell } from "@/components/dashboard/shell";
import prisma from "@/db/db";
import { authOptions } from "@/lib/auth";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login");
  }

  const notes = await prisma.note.findMany({
    where: {
      authorId: user.id,
    },
    select: {
      id: true,
      title: true,
      published: true,
      createdAt: true,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });
  return (
    <DashboardShell>
      <DashboardHeader heading="Notes" text="Create and manage notes">
        <NoteCreateButton />
      </DashboardHeader>
    </DashboardShell>
  );
}
