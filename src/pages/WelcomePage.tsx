import OscillatingIcon from "../components/OscillatingIcon";


import OutlinedButton from "../components/OutlinedButton"

import IntroText from "../components/IntroText";

const WelcomePage = ()=>{


  return(

    <>
      <section className={"welcome h-screen"}>
<div className={"flex flex-col justify-center align-center h-full"}>
  <IntroText temp={"My name is Toluwalase I am a React and Node Developer"} styles={"text-gray-700 pb-10 px-5"}/>


          <div className={"flex justify-center gap-x-2"}>
          <div>
              <OutlinedButton buttonText={"view my work"}
                styles={"px-8 text-xs py-3 mr-2"}/>
            </div>

            <div>
              <OutlinedButton buttonText={"contact me"} styles={"px-8 text-xs py-3"}/>
            </div>
          </div>

  <div className={"w-full absolute bottom-0 flex justify-center"}>
  <OscillatingIcon icon={"bx bxs-chevrons-down"} styles={"text-4xl"}/>
 </div>
        </div>
      </section>

    </>

  )


}


export default WelcomePage;
