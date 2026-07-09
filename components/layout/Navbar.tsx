"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-700/20 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link
          href="/"
          className="text-xl font-bold"
        >
          AP
        </Link>

        <ul className="hidden items-center gap-8 md:flex">

          <li>
            <Link href="/">
              {t("navbar.home")}
            </Link>
          </li>

          <li>
            <Link href="/about">
              {t("navbar.about")}
            </Link>
          </li>

          <li>
            <Link href="/projects">
              {t("navbar.projects")}
            </Link>
          </li>

          <li>
            <Link href="/experience">
              {t("navbar.experience")}
            </Link>
          </li>

          <li>
            <Link href="/certifications">
              {t("navbar.certifications")}
            </Link>
          </li>

          <li>
            <Link href="/videos">
              {t("navbar.videos")}
            </Link>
          </li>

          <li>
            <Link href="/contact">
              {t("navbar.contact")}
            </Link>
          </li>

        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>

      </div>
    </nav>
  );
}