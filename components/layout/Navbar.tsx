"use client";
import { useTranslation } from "react-i18next";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
export default function Navbar() {
    const{t}=useTranslation();
    return (
        <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <h1 className="text-xl font-bold">
                    AP
                </h1>
                <ul className="hidden md:flex gap-8">
                    <li><a href="#home">{t("home")}</a></li>
                    <li><a href="#about">{t("about")}</a></li>
                    <li><a href="#projects">{t("projects")}</a></li>
                    <li><a href="#contact">{t("contact")}</a></li>
                    <li><a href="#skills">{t("skills")}</a></li>
                </ul>
                <ThemeToggle/>
                <LanguageSwitcher/>
            </div>
        </nav>
    );
}