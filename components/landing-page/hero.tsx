import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
              Simplify Your Note Taking
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              With NextNote, keep your thoughts organized and accessible.
              Capture, edit, and share your notes from any device, anywhere.
            </p>
          </div>
          <div className="space-x-4">
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50"
              href="/login"
            >
              Get Started
            </Link>
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md border border-primary bg-white px-4 py-2 text-sm font-medium text-primary shadow-sm transition-colors hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50"
              href="/login"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
