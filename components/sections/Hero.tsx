export default function Hero(){
    return (
        <section
        id="home"
        className="flex min-h-screen items-center justify-center px-6"
        >
            <div className="max-w-4xl text-center">
                <p className="mb-4 text-cyan-500 font-medium">
                    welcome to APM-Site
                </p>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                    I'm Arnold Peter Mukasa
                </h1>
                <h2 className="mt-6 text-xl md:text-2xl text-muted-foreground">
                    Full Stack Developer  | Network Engineer | Tech Enthusiast
                    <br />
                    IT Consultant | Coffee Driven-Problem Solver
                </h2>
                <p className="mt-4 text-xl text-muted-foreground">
                    A passionate software developer specializing in building exceptional digital experiences. With a strong foundation in web development and a keen eye for design, I create seamless and engaging applications that delight users. Let's build something amazing together!..and solve real-world problems.
                </p>
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <a
                    href="#projects"
                    className="rounded-lg bg-primary px-6 py-3 text-primary-forground"
                    >
                        View Projects
                    </a>
                    <a
                    href="/resume.pdf"
                    className="rounded-lg border px-6 py-3"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
}
