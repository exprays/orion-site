"use client";

import { cn } from "@/lib/utils";
import SecurityLogo from "@/components/assets/security.svg";
import DiscLogo from "@/components/assets/datadisk.svg";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { LockClosedIcon, LightningBoltIcon, FileTextIcon, DiscIcon } from "@radix-ui/react-icons";
import { Share2Icon } from "lucide-react";
import { AnimatedBeamMultipleOutputDemo } from "./animated-beam-multiple-outputs";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";
import Marquee from "./magicui/marquee";
import { AnimatedList } from "./magicui/animated-list";

const files = [
  {
    name: "aof.orion",
    body: "The file for the Orion databse persistence layer. It is used to store data in a way that is easy to retrieve and update.",
  },
  {
    name: "keys.gpg",
    body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
  },
  {
    name: "seed.txt",
    body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover databse snapshots.",
  },
];

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "Database connected",
    description: "exprays",
    time: "15m ago",

    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "User signed up",
    description: "exprays",
    time: "10m ago",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "New message",
    description: "exprays",
    time: "5m ago",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "Snapshot saved",
    description: "exprays",
    time: "2m ago",
    icon: "🗞️",
    color: "#1E86FF",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] transform cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

const features = [
  {
    Icon: FileTextIcon,
    name: "Save your files",
    description: "We automatically save your files as you type.",
    href: "/",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
    <Marquee
      pauseOnHover
      className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
    >
      {files.map((f, idx) => (
        <figure
          key={idx}
          className={cn(
            "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
            "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
            "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
          )}
        >
          <div className="flex flex-row items-center gap-2">
            <div className="flex flex-col">
              <figcaption className="text-sm font-medium dark:text-white ">
                {f.name}
              </figcaption>
            </div>
          </div>
          <blockquote className="mt-2 text-xs">{f.body}</blockquote>
        </figure>
      ))}
    </Marquee>
    ),
  },
  {
    Icon: LightningBoltIcon,
    name: "Low Latency",
    description: "Real-time updates and low latency.",
    href: "/",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute max-h-[400px] min-h-[400px] max-w-[32rem] rounded-lg border bg-black p-6 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105">
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
    ),
  },
  {
    Icon: LockClosedIcon,
    name: "Security first",
    description: "Built with security in mind.",
    className: "col-span-3 lg:col-span-1",
    href: "/",
    cta: "Learn more",
    background: (
      <Card className="bg-black absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105">
        <CardContent>
          <Image
            src={SecurityLogo}
            alt="Security"
            width={200}
            height={200}
          />
        </CardContent>
      </Card>
    ),
  },
  {
    Icon: Share2Icon,
    name: "Integrations",
    description: "Supports 100+ integrations and counting.",
    href: "/",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: DiscIcon,
    name: "Persistent Data",
    description: "No memory loss on restart",
    className: "col-span-3 lg:col-span-1",
    href: "/",
    cta: "Learn more",
    background: (
      <Card className="bg-black absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105">
        <CardContent>
          <Image
            src={DiscLogo}
            alt="Disc"
            width={200}
            height={200}
          />
        </CardContent>
      </Card>
    ),
  },
];

export function BentoFeatures() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
