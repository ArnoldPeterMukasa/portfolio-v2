"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import FadeIn from "../ui/FadeIn";

export default function About() {
  const { t } = useTranslation();

  return (
    <FadeIn>
      <section className="mx-auto max-w-7xl py-20">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <div className="flex justify-center">

            <Image
              src="/images/profile/profile.jpg"
              alt="Arnold Peter Mukasa"
              width={450}
              height={450}
              className="rounded-3xl object-cover shadow-2xl"
            />

          </div>

          {/* Right */}

          <div>

            <p className="text-cyan-500 font-semibold uppercase tracking-widest">
              {t("about.heading")}
            </p>

            <h1 className="mt-4 text-5xl font-bold leading-tight">
              {t("about.title")}
            </h1>

            <p className="mt-8 leading-8 text-lg text-muted-foreground">
              {t("about.description")}
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">

              <div className="rounded-xl border p-5">
                <h3 className="font-bold">Education</h3>

                <p className="mt-2 text-muted-foreground">
                  Makerere University
                </p>

                <p className="text-sm">
                  BSc Computer Science
                </p>
              </div>

              <div className="rounded-xl border p-5">
                <h3 className="font-bold">
                  Experience
                </h3>

                <p className="mt-2 text-muted-foreground">
                  VINCI Construction
                </p>

                <p className="text-sm">
                  IT Intern
                </p>
              </div>

              <div className="rounded-xl border p-5">
                <h3 className="font-bold">
                  Specialization
                </h3>

                <p className="mt-2 text-muted-foreground">
                  Full Stack Development
                </p>

                <p className="text-sm">
                  Networking • Cloud • Security
                </p>
              </div>

              <div className="rounded-xl border p-5">
                <h3 className="font-bold">
                  Location
                </h3>

                <p className="mt-2 text-muted-foreground">
                  Kampala, Uganda
                </p>

                <p className="text-sm">
                  Available for opportunities
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>
    </FadeIn>
  );
}