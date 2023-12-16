import { Note } from "@prisma/client";
import { Skeleton } from "../ui/skeleton";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { NoteOperations } from "./note-operations";

interface NoteItemProps {
  note: Pick<Note, "id" | "title" | "published" | "createdAt">;
}

export const NoteItem = function NoteItem({ note }: NoteItemProps) {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="grid gap-1">
        <Link
          href={`/editor/${note.id}`}
          className="font-semibold hover:underline"
        >
          {note.title}
        </Link>
        <div>
          <p className="text-sm text-muted-foreground">
            {formatDate(note.createdAt?.toDateString())}
          </p>
        </div>
      </div>
      <NoteOperations note={{ id: note.id, title: note.title }} />
    </div>
  );
};

NoteItem.Skeleton = function NoteItemSkeleton() {
  return (
    <div className="p-4">
      <div className="space-y-3">
        <Skeleton className="h-5 w-2/5" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </div>
  );
};
