export default function Contact(){
    return(
        <section
        id="contact"
        className="py-24 -px6"
        >
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-12">
                    Contact AP
                </h2>
                <div className="grid mid:grid-cols-2 gap-12">
                    {/*lef side*/}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">
                            Let's develop and Build together
                        </h3>
                        <p className="text-muted-foreground mb-8">
                            thank you for visiting APM-Site. i am currently open to full-time opportunities,
                            freelance engineering contracts that's (cloud engineering, network engineering and software engineering/development), and
                            technical collaborations. If you are looking for reliable developer to bring structure, security and scalability to your digital solutions,
                            i got you covered. you can reach-out to me 24/7 by filling in the form below or reach-out directly via email. 
                        </p>
                        <div className="space-y-4">
                            <p>Email: myglobaladdresssystem@gmail.com</p>
                            <p>Phone:0200905814</p>
                            <p>location: Kampala (U)</p>
                        </div>
                    </div>
                    {/*Right side */}
                    <form className="space-y-4">
                        <input
                        type="email"
                        placeholder="Email"
                        className="w-full rounded-lg border p-3"
                        />
                        <textarea
                        placeholder="message"
                        rows={5}
                        className="wn-full rounded-lg border p-3"
                        />
                        <button
                        className="rounded-lg border px-6 py-3"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}