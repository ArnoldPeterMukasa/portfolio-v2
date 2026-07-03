"use client";

import { useTranslation } from "react-i18next";

export default function TechBanner() {
  const { i18n } = useTranslation();

  const technologies =
    i18n.language === "fr"
      ? [
          "Développement Full Stack",
          "Next.js",
          "React",
          "TypeScript",
          "Cloud",
          "Docker",
          "Cisco",
          "Fortinet",
          "Cybersécurité",
          "Linux",
          "VoIP",
          "Active Directory",
          "Veeam",
          "SharePoint",
          "PostgreSQL",
        ]
      : [
          "Full Stack Development",
          "Next.js",
          "React",
          "TypeScript",
          "Cloud",
          "Docker",
          "Cisco",
          "Fortinet",
          "Cybersecurity",
          "Linux",
          "VoIP",
          "Active Directory",
          "Veeam",
          "SharePoint",
          "PostgreSQL",
        ];

  return (
    <section className="overflow-hidden border-y bg-cyan-600 py-3 text-white">

      <div className="flex whitespace-nowrap animate-marquee">

        {[...technologies, ...technologies].map((tech, index) => (

          <span
            key={index}
            className="mx-8 font-medium tracking-wide"
          >
            • {tech}
          </span>

        ))}

      </div>

    </section>
  );
}