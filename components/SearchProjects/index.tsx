import { useRouter } from 'next/router';
import React from "react";
import Paginate from "./Paginate";

const SearchProjects:React.FC = () => {
    const router = useRouter();

    return (
        <section>
            <div className="flex flex-col lg:flex-row mb-5">
                <button onClick={() => router.back()} className="text-white text-2xl self-end lg:self-start px-6 py-2 rounded bg-darkGray 3xl:px-10 3xl:py-4 3xl:text-4xl">Back</button>
            </div>
            {/* <div className="lg:flex lg:h-full"> */}
                <div>
                    <h1 className="text-3xl xs:text-5xl text-white mb-8 xl:text-5xl 3xl:text-7xl">Projects</h1>
                    <div>
                        <Paginate/>
                    </div>
                </div>
            {/* </div> */}
        </section>
    );
};

export default SearchProjects;

