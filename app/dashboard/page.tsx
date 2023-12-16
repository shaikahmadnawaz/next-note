import { EmptyPlaceholder } from "@/components/empty-placeholder";
import { DashboardHeader } from "@/components/dashboard/header";
import { NoteCreateButton } from "@/components/dashboard/note-create-button";
import { NoteItem } from "@/components/dashboard/note-item";
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
      <div>
        {notes?.length ? (
          <div className="divide-y divide-border rounded-md border">
            {notes.map((note) => (
              <NoteItem key={note.id} note={note} />
            ))}
          </div>
        ) : (
          <EmptyPlaceholder>
            <EmptyPlaceholder.Icon name="note" />
            <EmptyPlaceholder.Title>No notes created</EmptyPlaceholder.Title>
            <EmptyPlaceholder.Description>
              You don&apos;t have any notes yet. Start creating content.
            </EmptyPlaceholder.Description>
            <NoteCreateButton />
          </EmptyPlaceholder>
        )}
      </div>
    </DashboardShell>
  );
}
