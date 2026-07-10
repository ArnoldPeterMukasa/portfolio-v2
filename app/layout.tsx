import { ThemeProvider } from "@/components/layout/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import ScrollProgress from "@/components/ui/ScrollProgress";
import CursorGlow from "@/components/ui/CursorGlow";
import "@/lib/i18n";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-comfortaa",
  display: "swap",
});

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
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth" className={comfortaa.variable}>
      <body className="font-sans">
        <ScrollProgress />
        <CursorGlow />
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
