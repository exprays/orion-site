import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

import localFont from 'next/font/local'
 
// Font files can be colocated inside of `app`
const satoshi = localFont({
  src: './Satoshi-Variable.woff',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Orion",
  description: "Database of future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={satoshi.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            forcedTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
