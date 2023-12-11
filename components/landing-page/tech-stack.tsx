import React from "react";
import { Icons } from "../icons";

const TechStack = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container space-y-12 px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center">
          Tech Stack
        </h2>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <div className="grid gap-1">
            <Icons.nextJs className="w-8 h-8 mb-2" />
            <h3 className="text-lg font-bold">Next.js</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              A React framework for production grade applications.
            </p>
          </div>
          <div className="grid gap-1">
            <Icons.tailwindCss className="w-8 h-8 mb-2" />
            <h3 className="text-lg font-bold">Tailwind CSS</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              A utility-first CSS framework for rapid UI development.
            </p>
          </div>
          <div className="grid gap-1">
            <Icons.nextAuth className="w-8 h-8 mb-2" />
            <h3 className="text-lg font-bold">NextAuth</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Authentication for Next.js applications.
            </p>
          </div>
          <div className="grid gap-1">
            <Icons.postgreSql className="w-8 h-8 mb-2" />
            <h3 className="text-lg font-bold">PostgreSQL</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              An open source object-relational database system.
            </p>
          </div>
          <div className="grid gap-1">
            <Icons.prisma className="w-8 h-8 mb-2" />
            <h3 className="text-lg font-bold">Prisma</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              An open source database toolkit.
            </p>
          </div>
          <div className="grid gap-1">
            <Icons.stripe className="w-8 h-8 mb-2" />
            <h3 className="text-lg font-bold">Stripe</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Online payment processing for internet businesses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
