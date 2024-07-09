"use client";

import ShinyButton from "./magicui/shiny-button";
import { GlowingStarsBackgroundCardComp } from "./star-card";


export default function Hero() {

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
            <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl/none">
                Database of future.
              </h1>
              
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Orion is a powerful in-memory database that is built on the Key-value store written from scratch. It is designed to be fast, reliable and easy to use.
              </p>
              <div className="pt-4">
              <ShinyButton text="Beta 0.0.1 available now"/>
              </div>
            </div>
          </div>
          <GlowingStarsBackgroundCardComp />
        </div>
      </div>
    </section>
  )
}