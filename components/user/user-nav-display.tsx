import Link from "next/link";
import { User } from "next-auth";

import { UserAccountNav } from "./user-account-nav";
import { Button } from "../ui/button";

interface UserNavDisplayProps extends React.HTMLAttributes<HTMLDivElement> {
  user: Pick<User, "name" | "image" | "email">;
}

export function UserNavDisplay({ user }: UserNavDisplayProps) {
  if (user.email === null || user.email === undefined) {
    return (
      <Link href="/login">
        <Button>Sign in</Button>
      </Link>
    );
  }

  return (
    <UserAccountNav
      user={{
        name: user.name,
        image: user.image,
        email: user.email,
      }}
    />
  );
}
