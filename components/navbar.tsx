"use client";

import Link from "next/link"
import { OrionLogo } from "./assets/orionlogo";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { MobileToggle } from "./mobileToggle";

export default function Navbar() {
  return (
    <header className="flex h-16 w-full shrink-0 items-center px-4 md:px-6">
      <Link href="#" className="mr-6 items-center" prefetch={false}>
        <OrionLogo height={38} width={151}/>
      </Link>
      <nav className="ml-auto items-center space-x-4 hidden md:flex">
        <Link
          href="https://github.com/exprays/orion"
          className="inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-muted-foreground focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          <GitHubLogoIcon className="h-5 w-5 mr-2"/>
          GitHub
        </Link>
        <Link
          href="https://orion.thestarsociety.tech/docs"
          className="inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-muted-foreground focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          <BookIcon className="h-5 w-5 mr-2" />
          Docs
        </Link>
      </nav>
      <nav className="ml-auto items-center space-x-4 block md:hidden">
        <MobileToggle />
      </nav>
    </header>
  )
}

function BookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}
