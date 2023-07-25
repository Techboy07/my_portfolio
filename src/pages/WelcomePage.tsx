import OscillatingIcon from "../components/OscillatingIcon";


import OutlinedButton from "../components/OutlinedButton"
import { useState,useEffect } from "react";

import IntroText from "../components/IntroText";

const WelcomePage = ()=>{
  const [visible,setVisible] = useState<boolean>(false)
  const [visibilityClass, setVisibilityClass] = useState<string>("not-visible")


useEffect(
()=>{
  if(visible){
setVisibilityClass("visible")
  }
},[visible]
)


  return(

    <>
      <section className={"lg:px-24 h-screen"}>
<div className={"flex flex-col justify-center align-center h-full"}>
  <IntroText setVisible={setVisible} temp={"My name is Toluwalase I am a React and Node Developer"} styles={"text-gray-700 pb-10 px-5"}/>


          <div className={`${visibilityClass} flex justify-center gap-x-2`}>
          <div>
              <OutlinedButton buttonText={"view my work"}
                styles={"px-8 text-xs py-3 mr-2"}/>
            </div>

            <div>
              <OutlinedButton buttonText={"contact me"} styles={"px-8 text-xs py-3"}/>
            </div>
          </div>
i
  <div className={"absolute bottom-0 w-full lg:w-4/5 "}>
  <OscillatingIcon icon={"bx bxs-chevrons-down"} styles={"text-4xl text-center"}/>
 </div>
        </div>
      </section>

    </>

  )


}


export default WelcomePage;
