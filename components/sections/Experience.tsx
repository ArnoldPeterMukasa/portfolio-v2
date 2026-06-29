"use client";

import { experience } from "@/data/experience";
import { useTranslation } from "react-i18next";
import FadeIn from "../ui/FadeIn";

export default function Experience() {

    const { t, i18n } = useTranslation();

    return (

        <section
            id="experience"
            className="py-24 px-6"
        >

            <div className="max-w-5xl mx-auto">

                <FadeIn>

                    <h2 className="text-4xl font-bold mb-14">

                        {t("experience.heading")}

                    </h2>

                </FadeIn>

                <div className="border-l-2 border-cyan-500 pl-8 space-y-12">

                    {experience.map((item) => (

                        <FadeIn key={item.id}>

                            <div className="relative">

                                <div className="absolute -left-[42px] h-5 w-5 rounded-full bg-cyan-500"></div>

                                <p className="text-cyan-500 font-semibold">

                                    {item.year}

                                </p>

                                <h3 className="text-2xl font-bold mt-2">

                                    {item.title[i18n.language as "en" | "fr"]}

                                </h3>

                                <p className="font-medium">

                                    {item.company}

                                </p>

                                <p className="mt-3 text-muted-foreground leading-7">

                                    {item.description[i18n.language as "en" | "fr"]}

                                </p>

                            </div>

                        </FadeIn>

                    ))}

                </div>

            </div>

        </section>

    );

}