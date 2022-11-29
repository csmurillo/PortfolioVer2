import React, {useState} from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Home from "../../components/Sections/Home";
import About from "../../components/Sections/About";
import Contact from "../../components/Sections/Contact";

import SearchProjects from "../../components/SearchProjects";
import Projects from "../../components/Sections/Projects";

import Image from "next/image";
import { useRouter } from 'next/router';

const Layout = ()=>{
    const router = useRouter();
    const [searchProjects, setSearchProjects]=useState(false);

    const openSearchProjects = ()=>{
        setSearchProjects(true);
    };
    const closeSearchProjects = ()=>{
        setSearchProjects(false);
        router.push('/#projects')
    };

    return (
        <div className="flex flex-col md:flex-row">
            <Header/>
            <Sidebar/>
            <main className="flex-1 w-full overflow-hidden absolute top-0 lg:relative">
                <Home/>
                <About/>
                <Projects openSearchProjects={openSearchProjects}/>
                <Contact/>
                {searchProjects&&<SearchProjects closeSearchProjects={closeSearchProjects}/>}
            </main>
        </div>
    );
}


export default Layout;




