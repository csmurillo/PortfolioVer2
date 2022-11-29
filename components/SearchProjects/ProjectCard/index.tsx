import Link from "next/link";
import Image from "next/image";
import {BsGithub} from 'react-icons/bs';
import {TfiNewWindow} from 'react-icons/tfi';
import {GrView} from 'react-icons/gr';

interface projectProps{
    projectName:string,
    projectTitle:string,
    src:string,
    liveSite:string,
    github:string
}

const ProjectCard:React.FC<projectProps> = ({projectName,projectTitle,src,liveSite,github})=>{
    return (
        <article className="relative w-full h-full flex flex-col">
            <Link href={projectName} className="relative h-[80%] rounded-t-xl group">
                <div className="absolute top-0 left-0 w-full h-full items-center justify-center z-10 hidden group-hover:flex hover:cursor-pointer">
                    <div className="bg-[#eeeeee8d] flex flex-col rounded">
                        <GrView className="w-10 h-10 view-eye self-center"/>
                        <p className="font-semibold">View More</p>
                    </div>
                </div>
                <Image className=" rounded-t-xl" fill src={src} alt="pixel art website"/>
            </Link>
            <div className="w-full flex-1 bg-black px-4 py-2 rounded-b-xl flex justify-between">
                <p className="text-white font-medium text-2xl xl:text-3xl self-center">{projectTitle}</p>
                <div className="flex gap-4">
                    <a href={liveSite} target="_blank" rel="noopener noreferrer" className="hover:cursor-pointer">
                        <div className="w-full flex justify-center">
                            <TfiNewWindow className="w-8 h-8 fill-white"/>
                        </div>
                        <p className="text-white">Site</p>
                    </a>
                    <a href={github} target="_blank" rel="noopener noreferrer" className="hover:cursor-pointer">
                        <div className="w-full flex justify-center">
                            <BsGithub className="w-8 h-8 fill-white"/>
                        </div>
                        <p className="text-white">Github</p>
                    </a>
                </div>
            </div>
        </article>
    );
};


export default ProjectCard;



