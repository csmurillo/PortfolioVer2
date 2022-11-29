import React, {useState} from 'react'
import Head from 'next/head'

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Home from "../components/Sections/Home";
import About from "../components/Sections/About";
import Contact from "../components/Sections/Contact";

import SearchProjects from "../components/SearchProjects";
import Projects from "../components/Sections/Projects";
import { useRouter } from 'next/router';

interface homeProps{
  emailServiceID:string,
  emailTemplateID:string,
  emailKey:string,
  googleMapsKey:string,
  googleMapID:string
}

const Main = ({emailServiceID,emailTemplateID,emailKey,googleMapsKey,googleMapID}:homeProps) => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Nextjs App" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex flex-col md:flex-row min-w-[300px]">
            <Header/>
            <Sidebar/>
            <main className="flex-1 w-full overflow-hidden absolute top-0 lg:relative min-w-[300px]">
                <Home/>
                <About/>
                <Projects/>
                <Contact emailServiceID={emailServiceID} emailTemplateID={emailTemplateID} emailKey={emailKey} 
                  googleMapsKey={googleMapsKey} googleMapID={googleMapID}/>
            </main>
        </div>
    </>
  )
}

export async function getServerSideProps(){
  const emailServiceID = process.env.EMAIL_SERVICE;
  const emailTemplateID = process.env.EMAIL_TEMPLATE;
  const emailKey = process.env.EMAIL_KEY;
  const googleMapsKey = process.env.GOOGLE_MAPS_API;
  return {
    props:{
      emailServiceID,
      emailTemplateID,
      emailKey,
      googleMapsKey
    }
  }
}

export default Main;