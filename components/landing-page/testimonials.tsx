/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Card, CardContent } from "../ui/card";

const Testimonials = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Hear From Our Users
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardContent className="space-y-2">
              <p className="text-gray-500 dark:text-gray-400">
                "NextNote has been a game changer for me. It's easy to use and I
                love the cloud sync feature!"
              </p>
              <p className="font-bold">- Gnana</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="space-y-2">
              <p className="text-gray-500 dark:text-gray-400">
                "I switched to NextNote and never looked back. It's the best
                note-taking app out there."
              </p>
              <p className="font-bold">- Vijay</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="space-y-2">
              <p className="text-gray-500 dark:text-gray-400">
                "NextNote makes my workflow seamless. It's fantastic!"
              </p>
              <p className="font-bold">- Varshith</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
