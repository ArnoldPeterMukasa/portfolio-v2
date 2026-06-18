export default function GitHubStats() {
  return (
    <section
      id="github"
      className="py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-12">
          GitHub Statistics
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <img
            src="https://github-readme-stats.vercel.app/api?username=ArnoldPeterMukasa&show_icons=true&theme=tokyonight"
            alt="GitHub Stats"
            className="w-full"
          />

          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=ArnoldPeterMukasa&layout=compact&theme=tokyonight"
            alt="Top Languages"
            className="w-full"
          />

        </div>

      </div>
    </section>
  );
}