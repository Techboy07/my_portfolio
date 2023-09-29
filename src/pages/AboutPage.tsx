import { useRef,useEffect} from "react"

import createObeserver from "../../observer"



import HeadingText from "../components/HeadingText"


import Paragraph from "../components/Paragraph"


const AboutPage = ()=>{

  const image = useRef<HTMLDivElement>(null)
  const paragraphs = useRef<HTMLDivElement>(null)

 


 useEffect(()=>{
   if(paragraphs.current && image.current){

   const observedElements = [image.current,...paragraphs.current.children]


   

   observedElements.forEach(elem => {
       elem.classList.add("not-visible")
     createObeserver(elem)  
   })}
 },[])

  return (

    <>
      <section  id="about" className={"px-5 bg-sky-700 text-white lg:px-24"}>
        <div className="container mx-auto">                          
        <div className={"pt-24 pb-16"}>
          <HeadingText headingText={"about me"}/>
        </div>

          <div className="lg:flex lg:flex-nonelg:justify-center lg:items-center">


            <div className="basis-1/2">
              <div ref={image} className={"w-48 h-56 rounded-full border-2 border-white mx-auto mb-10 lg:w-80 aspect-1 lg:h-auto mx-auto"}>

<img src="/tbabs.png" alt="my-avatar" className={"w-full h-full object-cover rounded-full relative left-6  grayscale"}/>
</div>
              </div>

            <div ref={paragraphs} className={"pb-16 lg:basis-1/2 lg:pl-3"}>
              <Paragraph paragraphText={"I am a React and Node Developer mainly working with React and its accompanying tools to build highly interactive web applications."} color={"mb-3  lg:mb-5  "}/>


              <Paragraph paragraphText={"Being a huge fan of the MERNStack, I am able to accompany a design with React to a single page or multipage application which improves reactivity,performance and maintainability of projects."} color={"mb-3  lg:mb-5"}/>



              <Paragraph paragraphText={"Although I enjoy working mainly with React for the frontend I do have experience working with backend technologies and services such as Node, Express and Firebase to build full stack applications."} color={"mb-3 lg:mb-5"} />



              <p className={"font-light lg:text-lg"}>
    No matter your needs, be it a new custom-made website, a unique online store or have an idea for an engaging web or mobile application: Please feel free to <a href="#" className={"text-red-900"}>contact me</a> so we can discuss the details! You can also checkout <a href="https://github.com/Techboy07" className={"text-red-900"}> my Github</a>
  </p>
</div>
            </div>
          </div>
      </section>


    </>

  )
}


export default AboutPage
