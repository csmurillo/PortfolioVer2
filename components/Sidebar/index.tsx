import Link from 'next/link';
import {BsGithub,BsLinkedin} from 'react-icons/bs';

const Sidebar: React.FC = ()=>{
    return (
        <header className="sticky top-0 min-h-[632px] w-[10rem] h-screen text-white hidden bg-black lg:flex items-center">
            <div className="w-full">
                <div className="flex justify-center mb-10">
                    <div>
                        <div className="logoContainer flex justify-center">
                            <p className="logo">
                                <span>A</span>
                                <span className="logoA">A</span>
                            </p>
                        </div>
                        <div>
                            <p className="font-name">Angel Murillo</p>
                        </div>
                    </div>
                </div>
                <nav>
                    <ul className="text-2xl flex flex-col gap-4">
                        <li className="text-center">
                            <Link href="#home">
                                <p className="inline hover:cursor-pointer hover:underline">Home</p>
                            </Link>
                        </li>
                        <li className="text-center">
                            <Link href='#about'>
                                <p className="inline hover:cursor-pointer hover:underline">About</p>
                            </Link>
                        </li>
                        <li className="text-center">
                            <Link href='#projects'>
                                <p className="inline hover:cursor-pointer hover:underline">Projects</p>
                            </Link>
                        </li>
                        <li className="text-center mb-10">
                            <Link href='#contact'>
                                <p className="inline hover:cursor-pointer hover:underline">Contact</p>
                            </Link>
                        </li>
                        <li className='flex justify-center'>
                            <ul className='flex gap-4'>
                                <Link href="https://github.com/csmurillo" target="_blank" rel="noopener noreferrer">
                                    <BsGithub className="w-8 h-8 fill-white"/>
                                </Link>
                                <Link href="https://www.linkedin.com/in/angel-murillo-80b790253/" target="_blank" rel="noopener noreferrer">
                                    <BsLinkedin className="w-8 h-8 fill-white"/>
                                </Link>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}


export default Sidebar;