import Hero from "@/components/hero";
import LandingPage from "@/components/landing";


export default function Home() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-between">
      <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <Hero />

    </div>
    </main>
  );
}
