import {skillsCategories} from "@/data/skills"
import FadeIn from "../ui/FadeIn";
export default function Skills(){
    return(
        <FadeIn>
            <section 
        id="skills"
        className="py-24 px-6"
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-12">
                    SKILLS 
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {skillsCategories.map((category)=>(
                        <div
                        key={category.title}
                        className="rounded-xl border p-6"
                        >
                            <h3 className="text-2xl font-semibold mb-4">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill)=>(
                                    <span
                                    key={skill}
                                    className="rounded-full border px-3 py-1 text-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </FadeIn>
    );
}