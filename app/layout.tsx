import { ThemeProvider } from "@/components/layout/ThemeProvider";
/*import type { Metadata } from "next";*/
/*import { Geist, Geist_Mono } from "next/font/google";*/
import "./globals.css";
import type { Metadata } from "next";
import ScrollProgress from "@/components/ui/ScrollProgress";

export const metadata: Metadata = {
  title: "Arnold Peter Mukasa | Full Stack Developer & Network Engineer",
  description:
    "Portfolio of Arnold Peter Mukasa, Full Stack Developer, Network Engineer, and Cloud Enthusiast from Makerere University.",
  keywords: [
    "Arnold Peter Mukasa",
    "Full Stack Developer",
    "Network Engineer",
    "Cloud Engineer",
    "Makerere University",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [
    {
      name: "Arnold Peter Mukasa",
    },
  ],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ScrollProgress/>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
