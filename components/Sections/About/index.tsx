import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import HTML from "../../../public/images/programminglogos/html.svg";
import CSS from "../../../public/images/programminglogos/css.svg";
import JS from "../../../public/images/programminglogos/javascript.svg";
import Nextjs from "../../../public/images/programminglogos/next.svg";
import Reactjs from "../../../public/images/programminglogos/react.svg";
import Node from "../../../public/images/programminglogos/nodes.svg";
import Express from "../../../public/images/programminglogos/express.svg";
import SocketIO from "../../../public/images/programminglogos/socket.svg";
import Heroku from "../../../public/images/programminglogos/heroku.svg";
import Bootstrap from "../../../public/images/programminglogos/bootstrap.svg";
import Figma from "../../../public/images/programminglogos/figma.svg";

const About:React.FC = ()=>{
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(".about-education-skills",{
            scrollTrigger:{
                trigger:".about-education-skills",
                start:"top 80%",
                toggleActions:"play none none none"
            },
            y:-100, 
            x:500,
            opacity:0, 
            duration:2 
        });
        gsap.from(".about-description",{
            scrollTrigger:{
                trigger:".about-description",
                start:"top 80%",
                toggleActions:"play none none none"
            },
            y:-100, 
            x:-500,
            opacity:0, 
            duration:2 
        });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={root} className="bg-[#262626] pt-20 pb-28 min-h-[620px]
        px-4 
        xs:px-8 
        sm:px-10 
        md:px-16 
        lg:px-20
    ">
        <div>
            <h1 className="text-black text-4xl xs:text-5xl md:text-6xl -ml-20 pl-20 pr-10 bg-[#dbdbdb] inline-block rounded-r-2xl mb-10">About</h1>
            <div className="lg:flex gap-24">
                <div className="w-full xl:w-1/2 about-description mb-10">
                    <p className="text-white text-xl xs:text-2xl">
                        Hello I am a Fullstack Developer. I have experience in building websites from the ground
                        up, using a variety of programming frameworks, and design tools. The main programming framework
                        I use is React.js, but I have experience in Laravel, Next.js, and Angular.
                        Below in the <Link href="/#projects">project section</Link> their is samples of my work, the first
                         three projects showcased I designed the UI/UX, and built the frontend/backend.
                        {/* Hello I am a Software Developer that is interterested in web development. Ever since
                        I took my first web course at my university and saw that I could not only create websites
                        that served the purpose to establish an online presence, but could also develop games
                        , real time apps, and any app that you I could imagine in the browser. I took the time 
                        to become a frontend/backend developer. */}
                    </p>
                </div>
                <div className="about-education-skills">
                    <div className="mb-4">
                        <h2 className="text-white underline text-3xl mb-2">Education</h2>
                        <p className="text-white font-semibold text-xl">California State University, Northridge</p>
                        <p className="text-white text-md">Bachelor of Computer Science</p>
                    </div>
                    <h2 className="text-white text-3xl underline mb-2">Skills</h2>
                    <div className="flex flex-wrap gap-2">
                        <div className="relative bg-white p-2 rounded">
                            <HTML className="w-10 h-10"/>
                        </div>
                        <div className="relative bg-white p-2 rounded">
                            <CSS className="w-10 h-10"/>
                        </div>
                        <div className="relative bg-white p-2 rounded">
                            <JS className="w-10 h-10"/>
                        </div>
                        <div className="relative bg-white p-2 rounded">
                            <Nextjs className="w-10 h-10"/>
                        </div>
                        <div className="relative bg-white p-2 rounded">
                            <Reactjs className="w-10 h-10"/>
                        </div>
                        <div className="relative bg-white p-2 rounded">
                            <Node className="w-10 h-10"/>
                        </div>
                        <div className="relative bg-white p-2 rounded">
                            <Express className="w-10 h-10"/>
                        </div>
                        <div className="relative bg-white p-2 rounded">
                            <SocketIO className="w-10 h-10"/>
                        </div>
                        <div className="relative bg-white p-2 rounded">
                            <Heroku className="w-10 h-10"/>
                        </div>
                        <div className="relative bg-white p-2 rounded">
                            <Bootstrap className="w-10 h-10"/>
                        </div>
                        <div className="relative bg-white p-2 rounded">
                            <Figma className="w-10 h-10"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default About;
