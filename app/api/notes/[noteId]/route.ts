import { getServerSession } from "next-auth";
import * as z from "zod";

import { authOptions } from "@/lib/auth";
import prisma from "@/db/db";
import { notePatchSchema } from "@/lib/validations/note";

const routeContextSchema = z.object({
  params: z.object({
    noteId: z.string(),
  }),
});

async function verifyCurrentUserHasAccessToPost(noteId: string) {
  const session = await getServerSession(authOptions);
  const count = await prisma.note.count({
    where: {
      id: noteId,
      authorId: session?.user.id,
    },
  });

  return count > 0;
}

export async function PATCH(
  req: Request,
  context: z.infer<typeof routeContextSchema>
) {
  try {
    const { params } = routeContextSchema.parse(context);

    if (!(await verifyCurrentUserHasAccessToPost(params.noteId))) {
      return new Response(null, { status: 403 });
    }

    const json = await req.json();
    const body = notePatchSchema.parse(json);

    await prisma.note.update({
      where: {
        id: params.noteId,
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });

    return new Response(null, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 });
    }

    return new Response(null, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  context: z.infer<typeof routeContextSchema>
) {
  try {
    const { params } = routeContextSchema.parse(context);

    if (!(await verifyCurrentUserHasAccessToPost(params.noteId))) {
      return new Response(null, { status: 403 });
    }

    await prisma.note.delete({
      where: {
        id: params.noteId as string,
      },
    });

    return new Response(null, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 });
    }
    return new Response(null, { status: 500 });
  }
}
