import { BentoFeatures } from "./bento-features";


export default function Features() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 items-center text-center max-w-[1200px] mx-auto"> {/* Increased max-width */}
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl xl:text-7xl whitespace-nowrap">
                Discover What Makes Us Unique
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our product offers a range of powerful features to help you achieve your goals. Explore what sets us
                apart.
              </p>
            </div>
            <div className="pt-4">
                <BentoFeatures />
            </div>
          </div>
        </div>
      </section>
    )
}
