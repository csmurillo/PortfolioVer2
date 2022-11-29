import Image from "next/image";

import { IoIosSearch } from 'react-icons/io';


interface searchAllProjectsProps{
    src:string
}

const SearchAllProjectsCard:React.FC<searchAllProjectsProps> = ({src})=>{
    return (
        <article className="relative w-full h-full z-0 hover:cursor-pointer group">
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10">
                <div>
                    <div className="flex justify-center"><IoIosSearch className="w-20 h-20 fill-white"/></div>
                    <p className="text-2xl text-center text-white group-hover:underline">Search All 12 Project</p>
                </div>
            </div>
            <div className="relative h-full -z-10 opacity-50">
                <Image className="rounded-lg" fill src={src} alt="pixel art website"/>
            </div>
        </article>
    );
};


export default SearchAllProjectsCard;



