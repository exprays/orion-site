"use client";
import React from "react";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "@/components/magicui/glowing-stars";
import { useRouter } from "next/navigation";


export function GlowingStarsBackgroundCardComp() {

  const router = useRouter();

  const onClick = () => {
    router.push("https://golang.org/");
  }

  return (
    <div className="flex py-20 items-center justify-center antialiased">
      <GlowingStarsBackgroundCard>
        <GlowingStarsTitle>Built with Go</GlowingStarsTitle>
        <div className="flex justify-between items-end">
          <GlowingStarsDescription>
            The power of inbuilt concurrency and performance
          </GlowingStarsDescription>
          <div onClick={onClick} className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center cursor-pointer">
            <Icon />
          </div>
        </div>
      </GlowingStarsBackgroundCard>
    </div>
  );
}

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="h-4 w-4 text-white stroke-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  );
};
