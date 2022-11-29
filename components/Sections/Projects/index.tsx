import ProjectCard from "./ProjectCard";
import SearchAllProjecCard from "./SearchAllProjectCard";

import styles from "../../../styles/projects.module.css";

const Projects:React.FC = ()=>{
    return (
        <section id="projects" className="bg-[#1e1e1e] py-16
        px-4 
        xs:px-8 
        sm:px-10 
        md:px-16
        ">
            <h2 className="text-white text-4xl xs:text-5xl md:text-6xl mb-10">Projects</h2>
            <div className={styles.container}>
                <div className={styles.project1}>
                    <ProjectCard projectName="stocktracker" projectTitle="Stock Tracker" src="/images/project1/stocktracker.png" liveSite="https://stock-tracker-demo.netlify.app/" github="https://github.com/csmurillo/stock-tracker"/>
                </div>
                <div className={styles.project2}>
                    <ProjectCard projectName="postage" projectTitle="Postage" src="/images/project2/postage.png" liveSite="http://postage-app.herokuapp.com/" github="https://github.com/csmurillo/postage"/>
                </div>
                <div className={styles.project3}>
                    <ProjectCard projectName="pixelArt" projectTitle="Pixel Art" src="/images/project3/pixelArt.png" liveSite="https://pixel-art-demo.herokuapp.com/" github="https://github.com/csmurillo/PixelArt"/>
                </div>
                <a href="/projects" className={styles.searchAll}>
                    <SearchAllProjecCard src="/images/projects/projects.png"/>
                </a>
            </div>
        </section>
    );
};


export default Projects;



