"use client";

import { useTranslation } from "react-i18next";
import { projects } from "@/data/projects";
import { collaborators } from "@/data/collaborators";
import FadeIn from "../ui/FadeIn";

export default function Projects() {
  const { i18n, t } = useTranslation();

  return (
    <FadeIn>
      <section
        id="projects"
        className="py-24 px-6"
      >
        <div className="mx-auto max-w-7xl">

          <h2 className="mb-12 text-center text-4xl font-bold">
            {t("projects.heading")}
          </h2>

          <div className="grid gap-10 md:grid-cols-2">

            {projects.map((project) => (

              <div
                key={project.id}
                className="overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                <img
                  src={project.image}
                  alt={
                    i18n.language === "fr"
                      ? project.title.fr
                      : project.title.en
                  }
                  className="h-60 w-full object-cover"
                />

                <div className="p-6">

                  <div className="mb-4 flex items-center justify-between">

                    <h3 className="text-2xl font-bold">
                      {i18n.language === "fr"
                        ? project.title.fr
                        : project.title.en}
                    </h3>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        project.status.en === "Completed"
                          ? "bg-green-600 text-white"
                          : "bg-yellow-500 text-black"
                      }`}
                    >
                      {i18n.language === "fr"
                        ? project.status.fr
                        : project.status.en}
                    </span>

                  </div>

                  <p className="mt-4 leading-7 text-muted-foreground">
                    {i18n.language === "fr"
                      ? project.description.fr
                      : project.description.en}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">

                    {project.technologies.map((tech) => (

                      <span
                        key={tech}
                        className="rounded-full border px-3 py-1 text-sm"
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                  {project.collaborators.length > 0 && (

                    <div className="mt-8">

                      <h4 className="mb-4 text-lg font-semibold">
                        {t("projects.collaborators")}
                      </h4>

                      <div className="space-y-4">

                        {project.collaborators.map((id) => {

                          const person = collaborators.find(
                            (c) => c.id === id
                          );

                          if (!person) return null;

                          return (

                            <div
                              key={person.id}
                              className="flex items-center gap-4 rounded-xl border p-3"
                            >

                              <img
                                src={person.image}
                                alt={person.name}
                                className="h-14 w-14 rounded-full object-cover"
                              />

                              <div>

                                <h5 className="font-semibold">
                                  {person.name}
                                </h5>

                                <p className="text-sm text-cyan-500">
                                  {person.role}
                                </p>

                                <p className="text-sm text-muted-foreground">
                                  {person.university}
                                </p>

                                <a
                                  href={`mailto:${person.email}`}
                                  className="text-sm text-blue-500 hover:underline"
                                >
                                  {person.email}
                                </a>

                              </div>

                            </div>

                          );
                        })}

                      </div>

                    </div>

                  )}

                  <div className="mt-8 flex gap-4">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl border px-5 py-2 transition hover:bg-cyan-600 hover:text-white"
                    >
                      GitHub
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl bg-cyan-600 px-5 py-2 text-white transition hover:bg-cyan-700"
                    >
                      {t("buttons.live")}
                    </a>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>
    </FadeIn>
  );
}