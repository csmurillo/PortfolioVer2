import React,{useEffect} from "react";
import Link from 'next/link';
import {BsGithub,BsLinkedin} from 'react-icons/bs';

interface menuProps{
    closeMenu():any
}

const Menu: React.FC<menuProps> = ({closeMenu})=>{
    return (
        <nav className="mt-24 flex-1 z-10 bg-[#212121]">
            <ul className='w-full pt-10 flex flex-col gap-3'>
                <li>
                    <Link href="#home" className='py-3 w-full block text-white text-2xl text-center' onClick={closeMenu}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="#about" className='py-3 w-full block text-white text-2xl text-center' onClick={closeMenu}>
                        About
                    </Link>
                </li>
                <li>
                    <Link href="#projects" className='py-3 w-full block text-white text-2xl text-center' onClick={closeMenu}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link href="#contact" className='py-3 w-full block text-white text-2xl text-center' onClick={closeMenu}>
                        Contact
                    </Link>
                </li>
                <li className="mt-10">
                    <ul className='flex justify-center gap-10'>
                        <li>
                            <Link href="https://github.com/csmurillo" target="_blank" rel="noopener noreferrer">
                                <BsGithub className="w-10 h-10 fill-white"/>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.linkedin.com/in/angel-murillo-80b790253/" target="_blank" rel="noopener noreferrer">
                                <BsLinkedin className="w-10 h-10 fill-white"/>
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;