import React from "react";

export default function Footer() {
  return (
    <footer className="mt-auto border-t">
      <div className="mx-auto w-full max-w-screen-xl p-6 md:py-8">
        <div className="flex items-center justify-center">
          <div className="block text-sm text-muted-foreground sm:text-center">
            Built by{" "}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/shaikahmadnawaz"
              className="underline"
            >
              Shaik Ahmad Nawaz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
