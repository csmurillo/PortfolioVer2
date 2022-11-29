import React,{useState,useEffect} from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import Menu from "./Menu";


const Header: React.FC = ()=>{

    const [menu,setMenu]=useState(false);

    const activeMenu = ()=>{
        setMenu(true);
        document.getElementsByTagName('body')[0].classList.add("overflow-y-hidden");
    };
    const closeMenu = ()=>{
        setMenu(false);
        document.getElementsByTagName('body')[0].classList.remove("overflow-y-hidden");
    };

    useEffect(()=>{
        const screenChange = ()=>{
            if(window.innerWidth>992){
                setMenu(false);
                document.getElementsByTagName('body')[0].classList.remove("overflow-y-hidden");
            }
        };
        
        window.addEventListener('resize',screenChange);
        screenChange();

        return ()=>{
            window.removeEventListener('resize',screenChange);
        };
    },[]);

    return (
       <>
            <header className="px-5 w-full lg:hidden flex justify-between bg-black z-50 lg:px-16">
                <div className="logoContainer">
                    <p className="logo">
                        <span>A</span>
                        <span className="logoA">A</span>
                    </p>
                </div>
                {!menu && 
                (
                    <div className="flex items-center">
                    <AiOutlineMenu className="text-white w-8 h-8 cursor-pointer" onClick={activeMenu}/>
                </div>)
                }
                {menu && 
                (
                <div className="flex items-center">
                    <IoClose className="text-white w-8 h-8 cursor-pointer" onClick={closeMenu}/>
                </div>)
                }
            </header>
            <div className="absolute lg:hidden w-full h-full flex">
                {menu && <Menu closeMenu={closeMenu}/>}
            </div>
        </>
    );
}


export default Header;