import HeadingText from "../components/HeadingText"

import Paragraph from "../components/Paragraph"
import { useEffect , useState} from "react"

import {getItems} from '../../firebase.config'

import ProjectCard from "../components/ProjectCard"
import {project} from "../../mytypes"

const ProjectPage = ()=>{


  const [projects, setProjects] = useState<project[]>([])

  useEffect(()=>{

    getItems("Projects").then(
       (res: any) => {
         const arr:project[] = res.map((elem:any) => {
        return {
          description: elem.description,
          live: elem.live,
          image: elem.image,
          sourceCode: elem.sourceCode
    ,name: elem.name}})
      setProjects(arr)})
    },[])


    return(

      <>
        <section id="projects" className="px-5 lg:px-24">
          <div className="pt-24 pb-16">
            <HeadingText headingText={"projects"}/>
          </div>

          <Paragraph paragraphText={"The projects below are a combination of personal and client projects to showcase the value I can bring to your projects."} color={"text-center mb-32"}/>

          <div className="">

            {
              projects.map((project,idx)=> <div key={idx} className="pb-32">

                <ProjectCard projectName={project.name} imageLink={project.image} description={project.description} livePage={project.live} sourceCode={project.sourceCode}/>
              </div>)

            }


          </div>


        </section>

      </>
    )
  }

  export default ProjectPage
