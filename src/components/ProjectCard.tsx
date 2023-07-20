import OutlinedButton from "./OutlinedButton"

import Paragraph from "./Paragraph"

const ProjectCard = ({projectName,description,imageLink}:{projectName:string;imageLink:string;description:string})=>{



  return(
    <>
      <div className={"card-body"}>
      <div className={"pb-5"}>
        <h1 className={"font-medium text-xl  text-left"}>{projectName}</h1>
      </div>

      <div className={"pb-5"}>
        
        <Paragraph paragraphText={description}/>
      </div>

      <div className={"pb-5 flex "}>
        <OutlinedButton buttonText="See live" styles="px-8 py-1 font-light"/>

        <button className={"ml-5 uppercase font-light "}>source code</button>
      </div>

      <div>
        <img src={imageLink} alt="card image" className={"rounded-md w-full"}/>
      </div>

        </div>
    </>

  )

}

export default ProjectCard;
