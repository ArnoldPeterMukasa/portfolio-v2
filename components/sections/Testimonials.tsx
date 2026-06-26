import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6">
        <div className="maxi-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">
                Testimonials
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((item) => (
                <div key={item.id} className="rounded-xl border p-6">
                  <p className="text-muted-foreground italic">"{item.feedback}"</p>
                  <div className="mt-6 flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-14 w-14 rounded-full object-cover"
                    />
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