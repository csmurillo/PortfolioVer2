import React, {useState} from "react";

import Image from "next/image";
import ProjectSlider from "../../components/ProjectSlider";

import {TfiNewWindow} from 'react-icons/tfi';
import {BsGithub} from 'react-icons/bs';

import HTML from "../../public/images/programminglogos/html.svg";
import CSS from "../../public/images/programminglogos/css.svg";
import JS from "../../public/images/programminglogos/javascript.svg";
import Nextjs from "../../public/images/programminglogos/next.svg";
import Reactjs from "../../public/images/programminglogos/react.svg";
import Laravel from "../../public/images/programminglogos/laravel.svg";
import Bootstrap from "../../public/images/programminglogos/bootstrap.svg";
import Node from "../../public/images/programminglogos/nodes.svg";
import Express from "../../public/images/programminglogos/express.svg";
import SocketIO from "../../public/images/programminglogos/socket.svg";
import Link from "next/link";

const ViewProjectLayout = ({projectData}:any)=>{

    return (
        <>
            <header className="bg-black px-10 lg:absolute lg:top-0 lg:left-0 border-b-2 border-l-gray-100 lg:border-b-0">
                <div className="logoContainer">
                    <p className="logo">
                        <span>A</span>
                        <span className="logoA">A</span>
                    </p>
                </div>
            </header>
            <main className="sm:px-20 lg:px-40 xl:px-72 lg:pt-20 bg-black h-screen pt-2">
                <div className="mb-5 flex justify-end lg:justify-start mr-2 sm:mr-0">
                    <Link href="/#projects" className="bg-[#3d3d3d] text-white px-4 py-2 rounded">Back</Link>
                </div>
                <ProjectSlider images={projectData.images}/>
                <div className="flex gap-4">
                    <a href={projectData.liveSite} target="_blank" rel="noopener noreferrer" className="bg-[#2f2f2f] w-1/2 py-4 hover:cursor-pointer flex justify-center">
                        <p className="text-white self-center">Live Site</p>
                    </a>
                    <a href={projectData.github} target="_blank" rel="noopener noreferrer" className="bg-[#2f2f2f] w-1/2 py-4 hover:cursor-pointer flex justify-center">
                        <div className="flex">
                            <p className="text-white self-center mr-2">Github</p>
                            <div className="w-full flex justify-center self-center">
                                <BsGithub className="w-8 h-8 fill-white"/>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="flex flex-col justify-between md:flex-row px-4 md:px-0">
                    <h1 className="text-white text-2xl font-semibold">{projectData.project}</h1>
                    <section className="flex flex-wrap gap-2">
                        {projectData.technologies.map((tech:string,index:number)=>{
                            if(tech=="html5"){
                                return (<div key={index} className="relative rounded p-2 bg-white">
                                <HTML className="w-10 h-10"/>
                            </div>);
                            }
                            else if(tech=="css"){
                                return (<div key={index} className="relative rounded p-2 bg-white">
                                <CSS className="w-10 h-10"/>
                            </div>);
                            }
                            else if(tech=="javascript"){
                                return (<div key={index} className="relative rounded p-2 bg-white">
                                <JS className="w-10 h-10"/>
                            </div>);
                            }
                            else if(tech=="next.js"){
                                return (<div key={index} className="relative rounded p-2 bg-white">
                                <Nextjs className="w-10 h-10"/>
                            </div>);
                            }
                            else if(tech=="react.js"){
                                return (<div key={index} className="relative rounded p-2 bg-white">
                                <Reactjs className="w-10 h-10"/>
                            </div>);
                            }
                            else if(tech=="laravel"){
                                return (<div key={index} className="relative rounded p-2 bg-white">
                                <Laravel className="w-10 h-10"/>
                            </div>);
                            }
                            else if(tech=="bootstrap"){
                                return (<div key={index} className="relative rounded p-2 bg-white">
                                <Bootstrap className="w-10 h-10"/>
                            </div>);
                            }
                            else if(tech=="node.js"){
                                return (<div key={index} className="relative rounded p-2 bg-white">
                                <Node className="w-10 h-10"/>
                            </div>);
                            }
                            else if(tech=="express.js"){
                                return (<div key={index} className="relative rounded p-2 bg-white">
                                <Express className="w-10 h-10"/>
                            </div>);
                            }
                            else if(tech=="socketio"){
                                return (<div key={index} className="relative rounded p-2 bg-white">
                                <SocketIO className="w-10 h-10"/>
                            </div>);
                            }
                        })}
                    </section>
                </div>
                <div className="px-4 md:px-0">
                    <h2 className="text-white text-xl">Description:</h2>
                    <p className="text-white">{projectData.description}</p>
                </div>
            </main>
        </>
    );
}


export default ViewProjectLayout;




