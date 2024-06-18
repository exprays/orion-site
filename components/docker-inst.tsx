/**
 * v0 by Vercel.
 * @see https://v0.dev/t/gogpqgo1rV0
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function DockerInstructions() {
  return (
    <div className="w-full">
      <section className="w-full py-10 md:py-16 lg:py-18">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="rounded-lg border border-gray-200 p-6 shadow-md dark:border-gray-800">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Run with Docker</h3>
            </div>
            <div className="mt-4 rounded-md bg-gray-100 p-4 font-mono text-sm dark:bg-gray-800">
              <code>docker run -p 6379:6379 exprays/orion:latest
              </code>
            </div>
            <div className="mt-2 flex items-center space-x-2">
              <Button variant="outline" size="sm">
                Copy
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Effortless Deployment with Containers
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Get the database up and running in minutes with our docker image. Simply run the command to get started.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                See Documentation
              </Link>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  )
}