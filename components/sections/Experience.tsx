import {experiences} from "@/data/experience";
import FadeIn from "../ui/FadeIn";
export default function Experience(){
    return (
        <FadeIn>
            <section
            id="experience"
            className="py-24 px-6"
            >
                <div className="max-z-5xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12">
                        EXperience
                    </h2>
                    <div className="space-y-8">
                        {experiences.map((exp, index)=>(
                            <div
                            key={index}
                        className="border-l-4 border-cyan-500 pl-6"
                             >
                                <h3 className="text-2xl font-semibold">
                                    {exp.title}
                                </h3>
                                <h4 className="font-meduim text-cyan-400">
                                    {exp.organisation}
                                </h4>
                                <p className="mt-2 text-muted-foreground">
                                    {exp.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </FadeIn>
    );
}
 