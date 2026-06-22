import {videos} from "@/data/videos";
import FadeIn from "../ui/FadeIn";
export default function VideoShowcase(){
    return (
        <FadeIn>
            <section
        id="videos"
        className="py-24 px-6"
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-12">
                    Video Showcase
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {videos.map((video)=>(
                        <div
                        key={video.id}
                        className="rounded-xl border p-6"
                        >
                            <h3 className="text-2xl font-semibold mb-4">
                                {video.title}
                            </h3>
                            <video
                            controls
                            className="w-full rounded-xl"
                            >
                                <source
                                src={video.path}
                                type="video/mp4"
                                />
                            </video>
                            <p className="mt-4 texxt=,uted-foreground">
                                {video.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </FadeIn>
        
    );
}