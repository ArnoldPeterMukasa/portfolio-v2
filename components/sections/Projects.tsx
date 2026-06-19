import { projects } from "@/data/projects";
import {collaborators} from "@/data/collaborators";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-lg border overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-125 w-143 object-center"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-4 text-muted-foreground">
                  {project.description}
                </p>

                {/*<div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border px-3 py-1 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>*/}

                <div className="mt-6 flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    className="rounded-lg border px-4 py-2"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className="rounded-lg border px-4 py-2"
                  >
                    TAP-Me
                  </a>
                </div>
                {project.collaborators.length> 0 && (
                  <div className="mt-6">
                    <h4 className="font-semibold mb-4">
                      Collaborators
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
  );
}