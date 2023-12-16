"use client";

import { useRouter } from "next/navigation";
import * as React from "react";
import { Button } from "../ui/button";

export function NoteCreateButton() {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  return <Button>New note</Button>;
}
