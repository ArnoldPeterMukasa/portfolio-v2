"use client";

import Image from "next/image";
import FadeIn from "../ui/FadeIn";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <FadeIn>
      <section
        id="about"
        className="py-24 px-6"
      >
        <div className="mx-auto max-w-7xl grid gap-12 md:grid-cols-2 items-center">

          {/* Left Side */}

          <div className="flex justify-center">

            <Image
              src="/images/profile/profile.jpg"
              alt="Arnold Peter Mukasa"
              width={420}
              height={420}
              className="rounded-2xl object-cover shadow-xl"
            />

          </div>

          {/* Right Side */}

          <div>

            <p className="text-cyan-500 font-semibold uppercase tracking-widest">
              {t("about.heading")}
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              {t("about.title")}
            </h2>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {t("about.description")}
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">

              <div className="rounded-xl border p-5">
                <h3 className="font-semibold">
                  🎓 Education
                </h3>

                <p className="mt-2 text-muted-foreground">
                  Bachelor of Science in Computer Science
                </p>

                <p className="text-sm text-cyan-500">
                  Makerere University
                </p>
              </div>

              <div className="rounded-xl border p-5">
                <h3 className="font-semibold">
                  Current Role
                </h3>

                <p className="mt-2 text-muted-foreground">
                  IT Intern
                </p>

                <p className="text-sm text-cyan-500">
                  VINCI Construction
                </p>
              </div>

              <div className="rounded-xl border p-5">
                <h3 className="font-semibold">
                  Specialization
                </h3>

                <p className="mt-2 text-muted-foreground">
                  Full Stack Development
                </p>

                <p className="text-sm text-cyan-500">
                  Networking • Cloud • Cybersecurity
                </p>
              </div>

              <div className="rounded-xl border p-5">
                <h3 className="font-semibold">
                  Location
                </h3>

                <p className="mt-2 text-muted-foreground">
                  Kampala, Uganda
                </p>

                <p className="text-sm text-cyan-500">
                  Available for Collaboration
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>
    </FadeIn>
  );
}