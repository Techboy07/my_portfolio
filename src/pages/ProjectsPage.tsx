import HeadingText from "../components/HeadingText"

import Paragraph from "../components/Paragraph"
import { useEffect } from "react"

import { useState } from "react";

import {getItems} from '../../firebase'

import ProjectCard from "../components/ProjectCard"

const ProjectPage = ()=>{


  interface project{

      name: string;
      description: string;
      image: string;
      live: string;
      sourceCode:string;

    }
const [projects, setProjects] = useState<project[]>([])
  useEffect(()=>{

    getItems("Projects").then( res => setProjects(res))

  },[])


  return(

    <>
      <section className="px-5">
        <div className="pt-24 pb-16">
          <HeadingText headingText={"projects"}/>
        </div>

        <Paragraph paragraphText={"The projects below are a combination of personal and client projects to showcase the value I can bring to your projects."} color={"text-center mb-32"}/>

        <div className="">

          {projects.map((project,idx)=> <div key={idx} className="pb-32">

              <ProjectCard projectName={project.name} imageLink={project.image} description={project.description} livePage={project.live} sourceCode={project.sourceCode}/>
          </div>)
          }


        </div>


      </section>

    </>
  )

}

export default ProjectPage
