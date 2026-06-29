"use client";

import FadeIn from "../ui/FadeIn";
import { certifications } from "@/data/certifications";
import { useTranslation } from "react-i18next";

export default function Certifications() {

    const { t, i18n } = useTranslation();

    return (

        <section
            id="certifications"
            className="py-24 px-6"
        >

            <div className="max-w-6xl mx-auto">

                <FadeIn>

                    <h2 className="text-4xl font-bold mb-12">

                        {t("certifications.heading")}

                    </h2>

                </FadeIn>

                <div className="grid md:grid-cols-3 gap-8">

                    {certifications.map((cert) => (

                        <FadeIn key={cert.id}>

                            <div className="rounded-xl border p-6 h-full">

                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="h-36 w-full object-contain mb-6"
                                />

                                <h3 className="text-xl font-bold">

                                    {cert.title}

                                </h3>

                                <p className="text-cyan-500">

                                    {cert.issuer}

                                </p>

                                <p className="text-sm mt-1">

                                    {cert.year}

                                </p>

                                <p className="mt-4 text-muted-foreground">

                                    {cert.description[i18n.language as "en" | "fr"]}

                                </p>

                            </div>

                        </FadeIn>

                    ))}

                </div>

            </div>

        </section>

    );

}