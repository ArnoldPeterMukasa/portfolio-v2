"use client";

import { useTranslation } from "react-i18next";
import { stats } from "@/data/stats";
import FadeIn from "../ui/FadeIn";

export default function Stats() {
  const { i18n } = useTranslation();

  return (
    <FadeIn>
      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat) => (
            <div
              key={stat.id}
              className="rounded-2xl border p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-5xl font-bold text-cyan-600">
                {stat.value}
              </h3>

              <p className="mt-3 text-muted-foreground">
                {i18n.language === "fr"
                  ? stat.label.fr
                  : stat.label.en}
              </p>
            </div>
          ))}

        </div>
      </section>
    </FadeIn>
  );
}