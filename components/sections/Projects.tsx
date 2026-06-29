"use client";
import { useTranslation } from "react-i18next";
import { projects } from "@/data/projects";
import {collaborators} from "@/data/collaborators";
import FadeIn from "../ui/FadeIn";
export default function Projects() {
  const {t, i18n}=useTranslation();
  return (
    <FadeIn>
      <section
      id="projects"
      className="py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">
          {t("projects.heading")}
        </h2>

        <div className="grid md:grid-cols-2 gap-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-lg border overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title[i18n.language as "en" | "fr"]}
                className="h-125 w-143 object-center"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold">
                  {project.title[i18n.language as "en" | "fr"]}
                </h3>

                <p className="mt-4 text-muted-foreground">
                  {project.description[i18n.language as "en" | "fr"]}
                </p>

                <div className="mt-4">
                  <span className="rounded-full bg-cyan-600 px-3 py-1 text-sm text-white">
                    {project.status[i18n.language as "en" | "fr"]}
                  </span>
                 </div>

                <div className="mt-6 flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    className="rounded-lg border px-4 py-2"
                  >
                    {t("projects.github")}
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className="rounded-lg border px-4 py-2"
                  >
                    {t("projects.live")}
                  </a>
                </div>
                {project.collaborators.length> 0 && (
                  <div className="mt-6">
                    <h4 className="font-semibold mb-4">
                      {t("projects.collaborators")}
                    </h4>
                    <div className="space-y-2">
                      {project.collaborators.map((id)=>{
                        const person = collaborators.find(
                          (c)=> c.id == id
                        );
                        if (!person) return null;
                        return(
                          <div
                          key={person.id}
                          className="flex items-center gap-2 rounded-lg border p-3"
                          >
                            <img
                            src={person.image}
                            alt={person.name}
                            className="h-25 w-25 rounded-center object-cover"
                            />
                            <div>
                              <h5 className="font-medium">
                                {person.name}  
                              </h5>
                              <p className="text-xs text-muted-foreground">
                                {person.email}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {person.role}
                              </p>

                              <p className="text-xs text-muted-foreground">
                                {person.university}
                              </p>
                            </div>
                          </div>
                        );                       
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </FadeIn>
  );
}