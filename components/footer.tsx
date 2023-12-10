import React from "react";

export const Footer = () => {
  return (
    <footer className="mt-auto">
      <div className="mx-auto w-full max-w-screen-xl p-6 md:py-8">
        <div className="flex items-center justify-center">
          <div className="block text-sm text-muted-foreground sm:text-center">
            © {new Date().getFullYear()}{" "}
            <a
              target="_blank"
              href="https://github.com/shaikahmadnawaz/next-note"
              className="hover:underline"
            >
              Shaik Ahmad Nawaz
            </a>
            . All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
