import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-4xl font-bold">Testimonials</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((item) => (
            <div key={item.id} className="rounded-xl border p-6">
              <p className="italic text-muted-foreground">“{item.feedback}”</p>
              <div className="mt-6 flex items-center gap-4">
                <img src={item.image} alt={item.name} className="h-14 w-14 rounded-full object-cover" />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.role}. {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}