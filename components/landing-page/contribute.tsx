import Link from "next/link";
import React from "react";

const Contribute = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Open Source
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            This project is open sourced on GitHub. Feel free to contribute!
          </p>
          <Link
            className="text-primary hover:underline"
            href="https://github.com/shaikahmadnawaz/next-note"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit our GitHub repository
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contribute;
