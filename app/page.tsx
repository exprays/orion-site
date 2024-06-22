import DockerInstructions from "@/components/docker-inst";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import { Try } from "@/components/try";
import UseCases from "@/components/use-cases";

export default function Home() {
  return (
    <main className="h-screen w-full flex items-center justify-center">
      <div className="flex flex-col relative h-screen w-full overflow-y-auto dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
        <div className="p-4">
          <Navbar />
        </div>
        {/* Hero component */}
        <div className="p-4">
          <Hero />
        </div>
        {/* DockerInstructions component */}
        <div className="p-4">
          <DockerInstructions />
        </div>
        {/** Features */}
        <div className="p-4">
          <Features />
        </div>
        {/** Use cases */}
        <div className="p-4">
          <UseCases />
        </div>
        {/** Try now */}
        <div className="p-4">
          <Try />
        </div>
        {/** Footer */}
        <div className="p-4">
          <Footer />
        </div>
      </div>
    </main>
  );
}
