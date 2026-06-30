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
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

          {/* Left */}

          <div>

            <p className="mb-4 text-cyan-500 font-semibold">
              {t("hero.welcome")}
            </p>

            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              {t("hero.title")}
            </h1>

            <h2 className="mt-6 text-2xl text-muted-foreground">
              {t("hero.subtitle")}
            </h2>

            <p className="mt-8 text-lg leading-8 text-muted-foreground">
              {t("hero.description")}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="rounded-lg bg-cyan-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-cyan-700"
              >
                {t("buttons.projects")}
              </a>

              <a
                href="/resume.pdf"
                download
                className="rounded-lg border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-cyan-600 hover:text-white"
              >
                {t("buttons.resume")}
              </a>

            </div>

          </div>

          {/* Right */}

          <div className="flex justify-center">

            <Image
              src="/images/profile/profile.jpg"
              alt="Arnold Peter Mukasa"
              width={420}
              height={420}
              className="rounded-full border-4 border-cyan-500 object-cover shadow-2xl"
              priority
            />

          </div>

        </div>
      </section>
    </FadeIn>
  );
}