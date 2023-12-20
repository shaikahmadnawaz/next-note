import { notFound, redirect } from "next/navigation";
import { User, Note } from "@prisma/client";

import { authOptions } from "@/lib/auth";
import prisma from "@/db/db";
import { getCurrentUser } from "@/lib/session";
import { Editor } from "@/components/editor";

async function getPostForUser(noteId: Note["id"], userId: User["id"]) {
  return await prisma.note.findFirst({
    where: {
      id: noteId,
      authorId: userId,
    },
  });
}

interface EditorPageProps {
  params: { noteId: string };
}

export default async function EditorPage({ params }: EditorPageProps) {
  const user = await getCurrentUser();

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login");
  }

  const note = await getPostForUser(params.noteId, user.id);

  if (!note) {
    notFound();
  }

  return (
    <Editor
      note={{
        id: note.id,
        title: note.title,
        content: note.content,
        published: note.published,
      }}
    />
  );
}
