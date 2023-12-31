import { getServerSession } from "next-auth/next";
import { z } from "zod";
import { authOptions } from "@/lib/auth";
import prisma from "@/db/db";
import { getUserSubscriptionPlan } from "@/lib/subscriptions";
import { RequiresProPlanError } from "@/lib/exceptions";

const noteCreateSchema = z.object({
  title: z.string(),
  content: z.string().optional(),
});

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    console.log("Session:", session);

    if (!session) {
      return new Response("Unauthorized", { status: 401 });
    }

    const { user } = session;

    console.log("User ID:", user?.id);

    const notes = await prisma.note.findMany({
      select: {
        id: true,
        title: true,
        createdAt: true,
        updatedAt: true,
      },
      where: {
        authorId: user.id,
      },
    });

    return new Response(JSON.stringify(notes), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in GET route:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new Response("Unauthorized", { status: 403 });
    }

    const { user } = session;
    const subscriptionPlan = await getUserSubscriptionPlan(user.id);

    if (!subscriptionPlan?.isPro) {
      const count = await prisma.note.count({
        where: {
          authorId: user.id,
        },
      });

      if (count >= 3) {
        throw new RequiresProPlanError();
      }
    }

    if (!user?.id) {
      return new Response("User ID not found in session", { status: 422 });
    }

    const json = await req.json();

    const body = noteCreateSchema.parse(json);

    const note = await prisma.note.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: user.id,
      },
      select: {
        id: true,
      },
    });

    return new Response(JSON.stringify(note), {
      status: 201,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.errors), {
        status: 422,
      });
    }

    if (error instanceof RequiresProPlanError) {
      return new Response("Requires Pro Plan", { status: 402 });
    }

    console.error("Error in POST route:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
