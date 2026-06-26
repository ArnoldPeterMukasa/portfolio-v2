"use client";

import { useTranslation } from "react-i18next";
import FadeIn from "../ui/FadeIn";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <FadeIn>
      <section
        id="home"
        className="flex min-h-screen items-center justify-center px-6"
      >
        <div className="max-w-4xl text-center">

          <p className="mb-4 text-cyan-500 font-medium">
            {t("hero.welcome")}
          </p>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            {t("hero.title")}
          </h1>

          <h2 className="mt-6 text-xl md:text-2xl text-muted-foreground">
            {t("hero.subtitle")}
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {t("hero.description")}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <a
              href="#projects"
              className="rounded-lg bg-primary px-6 py-3 text-primary-foreground hover:opacity-90 transition"
            >
              {t("buttons.projects")}
            </a>

            <a
              href="/resume.pdf"
              download
              className="rounded-lg border px-6 py-3 hover:bg-slate-800 hover:text-white transition"
            >
              {t("buttons.resume")}
            </a>

          </div>

        </div>
      </section>
    </FadeIn>
  );
}