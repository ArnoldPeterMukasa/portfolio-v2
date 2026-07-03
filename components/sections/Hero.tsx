"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import FadeIn from "../ui/FadeIn";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <FadeIn>
      <section
        id="home"
        className="min-h-screen flex items-center px-6"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">

          {/* Left Side */}

          <div>

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2">

              <span className="h-2 w-2 rounded-full bg-green-500"></span>

              <p className="text-sm font-medium text-cyan-500">
                {t("hero.available")}
              </p>

            </div>

            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              {t("hero.title")}
            </h1>

            <h2 className="mt-6 text-2xl text-muted-foreground">
              {t("hero.subtitle")}
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
              {t("hero.description")}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="rounded-xl bg-cyan-600 px-7 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-cyan-700"
              >
                {t("buttons.projects")}
              </a>

              <a
                href="/resume.pdf"
                download
                className="rounded-xl border px-7 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:bg-cyan-600 hover:text-white"
              >
                {t("buttons.resume")}
              </a>

            </div>

          </div>

          {/* Right Side */}

          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl"></div>

              <Image
                src="/images/profile/profile.jpg"
                alt="Arnold Peter Mukasa"
                width={420}
                height={420}
                priority
                className="relative rounded-full border-4 border-cyan-500 object-cover shadow-2xl transition duration-500 hover:scale-105"
              />

            </div>

          </div>

        </div>
      </section>
    </FadeIn>
  );
}