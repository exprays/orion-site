
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Analytics } from "@vercel/analytics/react";

import localFont from 'next/font/local'
import { constructMetadata } from "@/lib/metadata";
 
// Font files can be colocated inside of `app`
const satoshi = localFont({
  src: './Satoshi-Variable.woff',
  display: 'swap',
})

export const metadata = constructMetadata();

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
           <Analytics />
          </ThemeProvider>
      </body>
    </html>
  );
}
