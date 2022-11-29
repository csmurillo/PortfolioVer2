import React,{useState,useEffect} from "react";
import ProjectCard from "../ProjectCard";
import {allProjects} from '../../../projects';
import styles from "../../../styles/pagination.module.css";

const Paginate = ()=>{
    const [loading,setLoading]=useState(false);
    const [currentPage,setCurrentPage]=useState(1);
    const [projectPerPage,setProjectPerPage]=useState(6);
    const [pages,setPages]=useState(1);

    const [projects,setProjects]=useState<{ name:string, project: string, github: string,liveSite:string,technologies:string[],images:string[] }[]>([]);
    const [projectShown,setProjectsShown]=useState<{ name:string, project: string, github: string,liveSite:string,technologies:string[],images:string[] }[]>([]);

    useEffect(()=>{
        setProjects(allProjects);
    },[]);
    
    useEffect(()=>{
        if(projects.length>0){
            let start = ((currentPage-1)*projectPerPage);
            let end = (currentPage*projectPerPage)-1;
            let tempProjectShown=[];
            for(start; start<=end; start++){
                tempProjectShown.push(projects[start]);
            }
            setLoading(true);
            setProjectsShown(tempProjectShown);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[currentPage]);

    useEffect(()=>{
        // project loaded
        if(projects.length>0){
            setPages((projects.length+1)/projectPerPage);
            let start = ((currentPage-1)*projectPerPage);
            let end = (currentPage*projectPerPage)-1;
            let tempProjectShown=[];
            for(start; start<=end; start++){
                tempProjectShown.push(projects[start]);
            }
            setProjectsShown(tempProjectShown);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[projects]);

    useEffect(()=>{
        setLoading(false);
    },[projectShown]);


    const nextPage = ()=>{
        let newPage = currentPage+1;
        if(newPage<=pages){
            setCurrentPage(newPage);
        }
    };
    const prevPage = ()=>{
        let newPage = currentPage-1;
        if(newPage>0){
            setCurrentPage(newPage);
        }
    };

    return(
        <section>
            {!loading&&<div className={styles.container+' mb-8'}>
                {projectShown.map((project,index)=>(
                    <div key={index} className={`project-${index} shadow-xl shadow-[#292929]`}>
                        <ProjectCard projectName={project.name} projectTitle={project.project} src={project.images[0]} liveSite={project.liveSite} github={project.github}/>
                    </div>
                ))}
            </div>}
            <div>
                <ul className="flex justify-between">
                    <li>
                        <button className="text-xl text-white bg-darkGray px-5 py-3 rounded" onClick={()=>{prevPage();}}>Prev</button>
                    </li>
                    <li>
                        <button className="text-xl text-white bg-darkGray px-5 py-3 rounded" onClick={()=>{nextPage()}}>Next</button>
                    </li>
                </ul>
            </div>
        </section>
    );
};


export default Paginate;






