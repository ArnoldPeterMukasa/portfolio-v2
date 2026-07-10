"use client";

import FadeIn from "../ui/FadeIn";
import { certifications } from "@/data/certifications";
import { useTranslation } from "react-i18next";

export default function Certifications() {

    const { t, i18n } = useTranslation();

    return (
        <section id="certifications" className="px-6 py-24">
            <div className="mx-auto max-w-6xl">
                <FadeIn>
                    <div className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-600">
                                Credentials
                            </p>
                            <h2 className="text-4xl font-bold">{t("certifications.heading")}</h2>
                        </div>
                        <p className="max-w-xl text-muted-foreground">
                            Professional certifications that reinforce my work in security, networking, and modern development.
                        </p>
                    </div>
                </FadeIn>

                <div className="mb-10 grid gap-6 lg:grid-cols-2">
                    <div className="glass-panel rounded-[24px] p-6">
                        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-600">
                            Verified Credential
                        </p>
                        <h3 className="mt-3 text-2xl font-bold">Great Learning Certification</h3>
                        <p className="mt-4 text-muted-foreground">
                            View the actual Great Learning certificate issued to Peter Arnold Mukasa.
                        </p>
                        <a
                          href="/Peter%20Arnold%20Mukasa.pdf"
                          target="_blank"
                          rel="noreferrer"
                          className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-cyan-600 transition hover:bg-white/20"
                        >
                          View Certificate
                        </a>
                    </div>
                    <div className="glass-panel rounded-[24px] p-6">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/20 bg-white/10">
                            <img
                                src="/IMG_2939.JPG"
                                alt="AP Systems logo"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <p className="mt-4 text-muted-foreground">
                            AP Systems brand identity, representing modern engineering and polished systems thinking.
                        </p>
                    </div>
                </div>
                <div className="grid gap-8 md:grid-cols-3">
                    {certifications.map((cert) => (
                        <FadeIn key={cert.id}>
                            <div className="glass-panel h-full rounded-[24px] p-6">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="mb-6 h-36 w-full object-contain"
                                />
                                <h3 className="text-xl font-bold">{cert.title}</h3>
                                <p className="mt-2 text-cyan-500">{cert.issuer}</p>
                                <p className="mt-1 text-sm text-muted-foreground">{cert.year}</p>
                                <p className="mt-4 text-muted-foreground">{cert.description[i18n.language as "en" | "fr"]}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );

}