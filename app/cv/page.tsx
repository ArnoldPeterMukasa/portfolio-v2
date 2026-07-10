import Link from "next/link";

export const metadata = {
  title: "CV | Arnold Peter Mukasa",
  description: "Professional CV for Arnold Peter Mukasa",
};

export default function CVPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col gap-8 px-6 py-24">
      <section className="glass-panel rounded-[32px] p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-600">Curriculum Vitae</p>
            <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Arnold Peter Mukasa</h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Full Stack Developer, Network Engineer, and Cloud Enthusiast focused on building secure,
              scalable, and reliable digital systems.
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-5 py-4 text-sm text-cyan-600">
            <p className="font-semibold">Available for</p>
            <p>Internships • Freelance • Full-time roles</p>
          </div>
        </div>
      </section>

      <section className="glass-panel overflow-hidden rounded-[32px]">
        <iframe src="/resume.pdf" title="Arnold Peter Mukasa CV" className="h-[80vh] w-full" />
      </section>

      <div className="flex flex-wrap gap-4">
        <Link href="/" className="rounded-full border border-white/20 bg-white/10 px-5 py-3 font-medium backdrop-blur-xl hover:bg-white/20">
          Back to Portfolio
        </Link>
        <a href="/resume.pdf" download className="rounded-full bg-cyan-600 px-5 py-3 font-medium text-white hover:bg-cyan-700">
          Download Resume PDF
        </a>
      </div>
    </main>
  );
}
