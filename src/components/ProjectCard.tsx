import OutlinedButton from "./OutlinedButton"

import Paragraph from "./Paragraph"

import { useRef,useEffect } from "react";

import createObeserver from "../../observer";


const ProjectCard = ({projectName,description,imageLink
,sourceCode,livePage}:{projectName:string;imageLink:string;description:string;livePage:string;sourceCode:string})=>{

const details = useRef<Element>(null)
const image = useRef<Element>(null)

useEffect(()=>{
createObeserver(details.current,"visible-backwards-short",true)

createObeserver(image.current,"visible-short",true)

},[])

return(
  <>
    <div className={"card-body lg:flex"}>
      <div ref={details} className="basis-1/2 not-visible">
        <div className={"pb-5 text-gray-700"}>
          <h1 className={"font-medium text-2xl text-left"}>{projectName}</h1>

        </div>

        <div className={"pb-5"}>

          <Paragraph paragraphText={description}/>
        </div>

        <div className={"pb-10 flex items-center "}>
          <a href={livePage}><OutlinedButton buttonText="See live" styles="text-xs px-10 py-2 font-normal"/>
          </a>          <a href={sourceCode}><button className={"ml-5 font-light i"}>Source Code</button></a>
        </div>
      </div>

      <div ref={image} className="lg:basis-1/2 not-visible rounded-md shadow-2xl shadow-gray-700">
        <img src={imageLink} alt="card image" className={"rounded-md w-full"}/>
      </div>

    </div>
  </>

)

}

export default ProjectCard;
