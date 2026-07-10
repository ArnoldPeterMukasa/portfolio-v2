"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { href: "/", labelKey: "navbar.home" },
  { href: "/about", labelKey: "navbar.about" },
  { href: "/projects", labelKey: "navbar.projects" },
  { href: "/experience", labelKey: "navbar.experience" },
  { href: "/certifications", labelKey: "navbar.certifications" },
  { href: "/videos", labelKey: "navbar.videos" },
  { href: "/contact", labelKey: "navbar.contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { t } = useTranslation();

  return (
    <nav className="sticky top-0 z-50 border-b border-white/20 bg-background/40 shadow-[0_10px_40px_rgba(0,0,0,0.12)] backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="group inline-flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/20 bg-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-transform duration-300 group-hover:scale-105">
            <Image src="/IMG_2939.JPG" alt="AP Systems logo" fill sizes="40px" className="object-cover" priority />
          </div>
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Arnold
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-cyan-500/20 text-cyan-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]"
                      : "text-foreground/80 hover:bg-white/20 hover:text-foreground"
                  }`}
                >
                  {t(item.labelKey)}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}