"use client";

import Link from "next/link";
import { User } from "next-auth";
import { UserNavDisplay } from "../user/user-nav-display";
import { Icons } from "../icons";
import { ModeToggle } from "../mode-toggle";

interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
  user: Pick<User, "name" | "image" | "email">;
}

export default function Navbar({ user }: NavbarProps) {
  return (
    <header className="select-none sticky top-0 z-40 border-b bg-background">
      <nav className="mx-auto flex items-center justify-between px-4 md:px-8 lg:max-w-7xl">
        <div className="flex items-center justify-between py-3 md:block md:py-5">
          <Link
            className="flex items-center justify-center text-2xl font-bold"
            href="/"
          >
            <div className="bg-primary rounded-full p-[9px]">
              <Icons.note className="h-6 w-6 text-white" />
            </div>

            <span className="ml-2">NextNote</span>
            <span className="sr-only">NextNote</span>
          </Link>
        </div>
        <div className="flex justify-center items-center gap-x-4">
          <ModeToggle />
          <UserNavDisplay
            user={{
              name: user?.name,
              image: user?.image,
              email: user?.email,
            }}
          />
        </div>
      </nav>
    </header>
  );
}
