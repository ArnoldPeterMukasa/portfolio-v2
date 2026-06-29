"use client";

import {
  Github,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t py-10 mt-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-10">

          <div>

            <h2 className="text-2xl font-bold">
              Arnold Peter Mukasa
            </h2>

            <p className="mt-4 text-muted-foreground">
              Full Stack Developer,
              Network & Cloud Engineer,
              IT Consultant.
            </p>

          </div>

          <div>

            <h3 className="font-semibold mb-4">

              {t("footer.quicklinks")}

            </h3>

            <div className="space-y-2">

              <a href="#about" className="block">About</a>

              <a href="#skills" className="block">Skills</a>

              <a href="#projects" className="block">Projects</a>

              <a href="#contact" className="block">Contact</a>

            </div>

          </div>

          <div>

            <h3 className="font-semibold mb-4">

              {t("footer.contact")}

            </h3>

            <div className="space-y-3">

              <p className="flex gap-2 items-center">

                <Mail size={18}/>

                your@email.com

              </p>

              <p className="flex gap-2 items-center">

                <Phone size={18}/>

                +256 xxx xxx xxx

              </p>

              <div className="flex gap-4 mt-4">

                <a
                  href="https://github.com/ArnoldPeterMukasa"
                  target="_blank"
                >
                  <Github/>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                >
                  <Linkedin/>
                </a>

              </div>

            </div>

          </div>

        </div>

        <hr className="my-8"/>

        <p className="text-center text-sm text-muted-foreground">

          © 2026 Arnold Peter Mukasa.
          {t("footer.rights")}

        </p>

      </div>

    </footer>
  );
}