// Code: UseCases component

import { EvervaultCardComponent } from "./magicui/evervault-component";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Vl7MBBhaOCn
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function UseCases() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Use Cases</div>
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl xl:text-7xl">Discover How Orion Can Help You</h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our product is designed to solve a wide range of problems. Explore the different use cases and see how it
                can benefit your business.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 py-12 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
          <div className="items-center justify-center space-y-4 p-6 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
          <EvervaultCardComponent mainText="Caching" description="A fast, highly available, resilient, and scalable caching layer" buttonText="Coming soon"/>
          </div>
          <div className="items-center justify-center space-y-4 p-6 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
          <EvervaultCardComponent mainText="AI" description="Implement vector search with Orion Bolt®" buttonText="Coming soon"/>
          </div>
          <div className="items-center justify-center space-y-4 p-6 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
          <EvervaultCardComponent mainText="Data" description="Deliver with low latency using Orion FlashX®" buttonText="Coming soon"/>
          </div>
          </div> 
        </div>
      </section>
    )
  }