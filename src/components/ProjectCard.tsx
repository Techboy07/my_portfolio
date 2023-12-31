import OutlinedButton from "./OutlinedButton"

import Paragraph from "./Paragraph"

import { useRef,useEffect } from "react";

import createObeserver from "../../observer";


const ProjectCard = ({projectName,description,imageLink
,sourceCode,livePage}:{projectName:string;imageLink:string;description:string;livePage:string;sourceCode:string})=>{

const details = useRef<HTMLDivElement>(null)
const image = useRef<HTMLDivElement>(null)

useEffect(()=>{
  if(details.current){
createObeserver(details.current,"visible-backwards-short",true)
  }
  if(image.current){
createObeserver(image.current,"visible-short",true)
  }
},[])

return(
  <>
    <div className={"card-body lg:flex"}>
      <div ref={details} className="basis-1/2 not-visible">
        <div className={"pb-5 text-gray-700"}>
          <h1 className={"font-medium capitalize text-2xl text-left"}>{projectName}</h1>

        </div>

        <div className={"pb-5 break-word lg:pr-16"}>

          <Paragraph paragraphText={description} color={""}/>
        </div>

        <div className={"pb-10 flex items-center "}>
          { livePage != "" && <a href={livePage}><OutlinedButton buttonText="See live" styles="text-xs px-10 py-2 font-normal"/>
          </a> }       { sourceCode!="" && <a target="blank" href={sourceCode}><button className={"ml-5 font-light i"}>Source Code</button></a>}
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
