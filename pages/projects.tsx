import SearchProjects from "../components/SearchProjects";
import Link from "next/link";
const Projects = ()=>{
    return (
        <>
            <header className="min-w-[300px] bg-black px-10 lg:absolute lg:top-0 lg:left-0 border-b-2 border-l-gray-100 lg:border-b-0">
                <Link href="/" className="logoContainer inline-block">
                    <p className="logo">
                        <span>A</span>
                        <span className="logoA">A</span>
                    </p>
                </Link>
            </header>
            <main className="min-w-[300px] h-full bg-black flex-1 py-10 px-10 sm:px-32 lg:px-44 lg:mt-0 xl:px-48 3xl:py-40">
                <SearchProjects/>
            </main>
        </>
    );
};

export default Projects;



