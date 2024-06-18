/**
 * v0 by Vercel.
 * @see https://v0.dev/t/C8DbdfT111M
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Hero() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[550px_1fr] lg:gap-12 xl:grid-cols-[650px_1fr]">
            <img
              src="/placeholder.svg"
              width="550"
              height="550"
              alt="Orion"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-7xl font-bold tracking-tighter sm:text-8xl md:text-9xl lg:text-[100px]/none">
                  Orion
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Introducing a powerful platform that helps businesses streamline their operations and drive growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }