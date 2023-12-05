"use client";

import Link from "next/link";
import { User } from "next-auth";
import { UserNavDisplay } from "../user/user-nav-display";

interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
  user: Pick<User, "name" | "image" | "email">;
}

export default function Navbar({ user }: NavbarProps) {
  return (
    <header className="select-none sticky top-0 z-40 border-b bg-background">
      <nav className="mx-auto flex items-center justify-between px-4 md:px-8 lg:max-w-7xl">
        <div className="flex items-center justify-between py-3 md:block md:py-5">
          <Link href="/">
            <h1 className="text-2xl font-bold duration-200">NextNote</h1>
          </Link>
        </div>
        <UserNavDisplay
          user={{
            name: user?.name,
            image: user?.image,
            email: user?.email,
          }}
        />
      </nav>
    </header>
  );
}
