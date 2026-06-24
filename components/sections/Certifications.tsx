import {certifications} from "@/data/certifications";
export default function Certifications(){
    return (
        <section
        id="certifications"
        className="py-24 px-6"
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-12">
                    Certifications
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {certifications.map((cert)=>(
                        <div
                        key={cert.id}
                        className="rounded-xl border p-6"
                        >
                            <img
                            src={cert.image}
                            alt={cert.title}
                            className="h-40 w-full object-contain"
                            />
                            <h3 className="mt-4 text-xl font-semibold">
                                {cert.title}
                            </h3>
                            <p className="text-muted-foreground">
                                {cert.issuer}
                            </p>
                            <p className="mt-2 text-sm">
                                {cert.date}
                            </p>
                            <a
                            href={cert.link}
                            target="blank"
                            className="text-blue-500"
                            >
                                verify Certificate
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}