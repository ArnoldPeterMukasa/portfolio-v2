export default function Footer(){
    return(
        <footer className="border-t py-8 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <p>
                     © {new Date().getFullYear()} Arnold Peter Mukasa.
                    All Rights Reserved.
                </p>
                <div className="flex gap-6">
                    <a
                    href="https://github.com/ArnoldPeterMukasa"
                    target="_blank"
                    >
                        GitHub
                    </a>
                    <a href="#">
                        LinkedIn
                    </a>
                    <a href="mailto:myglobaladdresssystem@gmail.com">
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
}