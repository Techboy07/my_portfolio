import HeadingText from "../components/HeadingText";

import Paragraph from "../components/Paragraph";

const ContactPage = ()=>{


  const formSubmit = (e)=>{
    e.preventDefault()

  }


  return(
    <>
      <section className="px-5 pb-16 bg-sky-700 text-white">
        <div className="pb-16 pt-24">
          <HeadingText headingText={"contact"}/>
        </div>

        <div className="">

          <Paragraph paragraphText={"Have an idea for a web or mobile application ? Need a professional website or online store for your business?"} color={"mb-3"}/>

          <Paragraph paragraphText={"No matter your needs, I'm here to help you craft your ideas and bring them to life. Feel free to contact me."} color={"mb-3"}/>

          <Paragraph paragraphText={"Tel:09076673849 08118503070"} color={"mb-3"}/>
          <Paragraph paragraphText={"OR"} color={"mb-3"}/>
          <Paragraph paragraphText={"Email:technogodwr@gmail.com"} color={"mb-3"}/>
        </div>

        <form onSubmit={formSubmit}>
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" className={"w-full h-10 bg-transparent border border-white outline-0 rounded p-2"}/>

          <label htmlFor="email">Email</label>
          <input type="text" id="email" className={"w-full h-10 bg-transparent border border-white rounded outline-0 p-2"}/>


          <label htmlFor="select">Select Project(s)</label>

          <div className="flex flex-wrap">

            <div className="mr-3"><input type="checkbox" id="webApp"/> <label htmlFor="webApp">Web Application</label></div>


            <div>
              <input type="checkbox" id="website"/> <label htmlFor="website">Website</label>
            </div>

          </div>
          <label htmlFor="message">Message</label>
          <input type="text" id="message" className={"w-full h-32 bg-transparent border border-white rounded mb-3 outline-0 p-2"}/>

          <input type="submit" className="rounded p-3 border border-white text-white bg-transparent outline-0"/>
        </form>

      </section>

    </>
  )
}


export default ContactPage;
