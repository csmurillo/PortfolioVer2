import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Home:React.FC = ()=>{
    const root = useRef<HTMLDivElement>(null);

    const pop=(className:string)=>{
        gsap.to(className,{
            y:-20,
            duration:.1,
            scale:1.20,
        });
        gsap.to(className,{
            y:0,
            delay:.1,
            duration:1,
            scale:1,
            ease:'bounce',
        });
    }    

    useEffect(() => {
        let ctx = gsap.context(() => {
            const timeLine = gsap.timeline({defaults:{duration:1}});
            timeLine.from(".top-letters",{x:-40,y:-40,ease:"bounce",opacity:0});
            timeLine.from(".top-letters2nd",{x:-40,y:-40,ease:"bounce",opacity:0});
            timeLine.from(".title-section",{x:-400});
            timeLine.from(".button-section",{opacity:0});
        }, root);

        return () => ctx.revert();
    }, []);

  return (
    <section id="home" ref={root} className="h-screen flex min-h-[620px] bg-homePattern">
        {/* background by SVGBackgrounds.com  */}
        <div
          className="mt-24 pt-24 flex-1 px-4 
          xs:px-8 
          sm:px-10 
          md:px-16 
          lg:px-20 lg:mt-0 lg:pt-0 lg:flex lg:items-center 
          ">
            <div>
                <div className="mb-10 text-3xl xs:text-5xl md:text-6xl lg:text-7xl">
                    <p className="top-letters flex mb-2">
                        <span className="helloH text-white cursor-pointer" onMouseEnter={()=>{pop('.helloH')}}>H</span>
                        <span className="helloE text-white cursor-pointer" onMouseEnter={()=>{pop('.helloE')}}>e</span>
                        <span className="helloL1 text-white cursor-pointer" onMouseEnter={()=>{pop('.helloL1')}}>l</span>
                        <span className="helloL2 text-white cursor-pointer" onMouseEnter={()=>{pop('.helloL2')}}>l</span>
                        <span className="helloO text-white cursor-pointer" onMouseEnter={()=>{pop('.helloO')}}>o</span> 
                        <span className="letterI text-white cursor-pointer mx-2" onMouseEnter={()=>{pop('.letterI')}}>I</span>
                        <span className="amA text-white cursor-pointer" onMouseEnter={()=>{pop('.amA')}}>a</span>
                        <span className="amM text-white cursor-pointer" onMouseEnter={()=>{pop('.amM')}}>m</span>
                    </p>
                    <p className="flex top-letters2nd mb-8">
                        <span className="angelA text-white cursor-pointer" onMouseEnter={()=>{pop('.angelA')}}>A</span>
                        <span className="angelN text-white cursor-pointer" onMouseEnter={()=>{pop('.angelN')}}>n</span>
                        <span className="angelG text-white cursor-pointer" onMouseEnter={()=>{pop('.angelG')}}>g</span>
                        <span className="angelE text-white cursor-pointer" onMouseEnter={()=>{pop('.angelE')}}>e</span>
                        <span className="angelL text-white cursor-pointer mr-2" onMouseEnter={()=>{pop('.angelL')}}>l</span>
                        <span className="murilloM text-white cursor-pointer" onMouseEnter={()=>{pop('.murilloM')}}>M</span>
                        <span className="murilloU text-white cursor-pointer" onMouseEnter={()=>{pop('.murilloU')}}>u</span>
                        <span className="murilloR text-white cursor-pointer" onMouseEnter={()=>{pop('.murilloR')}}>r</span>
                        <span className="murilloI text-white cursor-pointer" onMouseEnter={()=>{pop('.murilloI')}}>i</span>
                        <span className="murilloL1 text-white cursor-pointer" onMouseEnter={()=>{pop('.murilloL1')}}>l</span>
                        <span className="murilloL2 text-white cursor-pointer" onMouseEnter={()=>{pop('.murilloL2')}}>l</span>
                        <span className="murilloO text-white cursor-pointer" onMouseEnter={()=>{pop('.murilloO')}}>o</span>
                    </p>
                </div>
                <div className="title-section flex mb-16">
                    <p className="full-stack-dev text-[#d5d5d5] text-xl xs:text-2xl" onMouseEnter={()=>{pop('.full-stack-dev')}}>Full Stack Developer</p>
                </div>
                <a href="angelmurillo.pdf" className="button-section px-10 py-2 text-[#d8d8d8] bg-darkGray cursor-pointer hover:text-white xs:text-lg sm:text-xl" download>Resume</a>
            </div>
        </div>
    </section>
  );
}

export default Home;