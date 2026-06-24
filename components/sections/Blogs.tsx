import { blogs } from "@/data/blogs";

export default function Blog() {
  return (
    <section
      id="blog"
      className="py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-12">
          Articles & Insights
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="rounded-xl border p-6"
            >
              <h3 className="text-2xl font-semibold">
                {blog.title}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                {blog.date}
              </p>

              <p className="mt-4 text-muted-foreground">
                {blog.description}
              </p>

              <button className="mt-6 rounded-lg border px-4 py-2">
                Read More
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}