import FadeIn from "../ui/FadeIn";

export default function Contact() {
  return (
    <FadeIn>
      <section id="contact" className="py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-4xl font-bold">Contact AP</h2>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-semibold">
                Let&apos;s develop and build together
              </h3>
              <p className="mb-8 text-muted-foreground">
                Thank you for visiting APM Site. I&apos;m currently open to full-time opportunities,
                freelance engineering contracts in cloud engineering, network engineering, and software
                development, and technical collaborations. If you&apos;re looking for a reliable developer to
                bring structure, security, and scalability to your digital solutions, I&apos;ve got you covered.
                You can reach out to me 24/7 by filling in the form below or contacting me directly via email.
              </p>
              <div className="space-y-4">
                <p>Email: myglobaladdresssystem@gmail.com</p>
                <p>Phone: 0200905814</p>
                <p>Location: Kampala (U)</p>
              </div>
            </div>

            <form className="space-y-4">
              <input type="email" placeholder="Email" className="w-full rounded-lg border p-3" />
              <textarea placeholder="Message" rows={5} className="w-full rounded-lg border p-3" />
              <button className="rounded-lg border px-6 py-3">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}