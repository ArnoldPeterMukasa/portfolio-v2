"use client";

import { experience } from "@/data/experience";
import { useTranslation } from "react-i18next";
import FadeIn from "../ui/FadeIn";

export default function Experience() {

    const { t, i18n } = useTranslation();

    return (
        <section id="experience" className="px-6 py-24">
            <div className="mx-auto max-w-5xl">
                <FadeIn>
                    <div className="mb-14 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-600">
                                Journey
                            </p>
                            <h2 className="text-4xl font-bold">{t("experience.heading")}</h2>
                        </div>
                        <p className="max-w-xl text-muted-foreground">
                            A trajectory shaped by technical growth, hands-on learning, and a focus on building dependable systems.
                        </p>
                    </div>
                </FadeIn>

                <div className="space-y-6 border-l-2 border-cyan-500/40 pl-8">
                    {experience.map((item) => (
                        <FadeIn key={item.id}>
                            <div className="glass-panel relative rounded-[24px] p-6">
                                <div className="absolute -left-[42px] h-5 w-5 rounded-full bg-cyan-500"></div>
                                <p className="font-semibold text-cyan-500">{item.year}</p>
                                <h3 className="mt-2 text-2xl font-bold">{item.title[i18n.language as "en" | "fr"]}</h3>
                                <p className="font-medium">{item.company}</p>
                                <p className="mt-3 leading-7 text-muted-foreground">{item.description[i18n.language as "en" | "fr"]}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );

}