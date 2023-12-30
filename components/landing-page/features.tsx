import { FileEditIcon, LockIcon, UploadCloudIcon } from "lucide-react";
import React from "react";
import { Icons } from "../icons";

const Features = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container space-y-12 px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center">
          Key Features
        </h2>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 justify-center">
          <div className="grid gap-1">
            <Icons.feather className="w-8 h-8 mb-2" />
            <h3 className="text-lg font-bold">Simple Notetaking</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Capture your thoughts with our minimalistic, distraction-free
              editor.
            </p>
          </div>
          <div className="grid gap-1">
            <Icons.secure className="w-8 h-8 mb-2" />
            <h3 className="text-lg font-bold">Secure</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              We care about your privacy. Your notes are encrypted and safe.
            </p>
          </div>
          <div className="grid gap-1">
            <Icons.fileEdit className="w-8 h-8 mb-2" />
            <h3 className="text-lg font-bold">Easy to Use</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Clean and intuitive design makes note-taking a breeze.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
