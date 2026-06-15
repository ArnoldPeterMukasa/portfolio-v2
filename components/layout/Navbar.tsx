import ThemeToggle from "./ThemeToggle";
export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <h1 className="text-xl font-bold">
                    Arnold Peter Mukasa
                </h1>
                <ul className="hidden md:flex gap-8">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#skills">Skills</a></li>
                </ul>
                <ThemeToggle/>
            </div>
        </nav>
    );
}