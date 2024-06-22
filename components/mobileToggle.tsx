"use client";

import { MenuIcon} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { OrionIcon } from "./assets/orion-icon";
import { OrionLogo } from "./assets/orionlogo";

export const MobileToggle = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <MenuIcon className="h-6 w-6 cursor-pointer" />
            </SheetTrigger>
            <SheetContent className="bg-black">
            <Link href="#" className="flex p-8">
              <OrionLogo height={18} width={70}/>
            </Link>
            <Link
              href="https://github.com/exprays/orion"
              className="flex flex-row items-center justify-center rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-muted-foreground focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
          <GitHubLogoIcon className="h-5 w-5 mr-2"/>
          GitHub
        </Link>
        <Link
          href="https://orion.thestarsociety.tech/docs"
          className="flex flex-row items-center justify-center rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-muted-foreground focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          <BookIcon className="h-5 w-5 mr-2" />
          Docs
        </Link>
            </SheetContent>
        </Sheet>
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
  
  
  