"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const { i18n, t } = useTranslation();

  const featured = projects.slice(0, 3);

  return (
    <section className="py-24 px-6">

      <div className="mx-auto max-w-7xl">

        <div className="mb-12 flex items-center justify-between">

          <h2 className="text-4xl font-bold">
            {t("projects.heading")}
          </h2>

          <Link
            href="/projects"
            className="font-semibold text-cyan-500 hover:underline"
          >
            {t("buttons.viewAll")}
          </Link>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {featured.map((project) => (

            <div
              key={project.id}
              className="group overflow-hidden rounded-[28px] border border-white/20 bg-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-2xl transition duration-300 hover:-translate-y-2 hover:shadow-[0_25px_90px_rgba(0,0,0,0.16)]"
            >

              <div className="overflow-hidden">

                <Image
                  src={project.image}
                  alt={
                    i18n.language === "fr"
                      ? project.title.fr
                      : project.title.en
                  }
                  width={600}
                  height={400}
                  loading="eager"
                  className="h-60 w-full object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold">

                  {i18n.language === "fr"
                    ? project.title.fr
                    : project.title.en}

                </h3>

                <p className="mt-4 line-clamp-3 text-muted-foreground">

                  {i18n.language === "fr"
                    ? project.description.fr
                    : project.description.en}

                </p>

                <div className="mt-6 flex items-center justify-between">
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-cyan-500 transition-colors hover:text-cyan-400"
                  >
                    <span>{t("buttons.viewAll")}</span>
                    <span>→</span>
                  </Link>

                  <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-600">
                    Visit
                  </span>
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}