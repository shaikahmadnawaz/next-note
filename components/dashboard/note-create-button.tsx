"use client";

import { useRouter } from "next/navigation";
import * as React from "react";
import { Button } from "../ui/button";
import { Icons } from "../icons";
import { toast } from "../ui/use-toast";

export function NoteCreateButton() {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const onClick = async () => {
    setIsLoading(true);

    const response = await fetch("/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Untitled Note",
      }),
    });

    setIsLoading(false);

    if (!response?.ok) {
      if (response.status === 402) {
        return toast({
          title: "Limit of 3 notes reached.",
          description: "Please upgrade to the PRO plan.",
          variant: "destructive",
        });
      }
      return toast({
        title: "Something went wrong.",
        description: "Your note was not created. Please try again.",
        variant: "destructive",
      });
    }

    const note = await response.json();

    router.refresh();

    router.push(`/editor/${note.id}`);
  };

  return (
    <Button onClick={onClick} disabled={isLoading}>
      {isLoading ? (
        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Icons.add className="mr-2 h-4 w-4" />
      )}
      New note
    </Button>
  );
}
