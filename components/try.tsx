"use client";
import { TypewriterEffect } from "@/components/magicui/typewriter";

export function Try() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "your",
    },
    {
      text: "data",
    },
    {
      text: "with",
    },
    {
      text: "Orion™",
      className: "text-emerald-500 dark:text-blue-500",
    },
  ];
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 items-center text-center mx-auto">
              <div className="flex flex-col items-center justify-center h-[40rem] ">
                <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
                  The road to future starts from here
                </p>
                <TypewriterEffect words={words} />
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
                  <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
                    Join the community
                  </button>
                  <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
                    Try Orion™
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
