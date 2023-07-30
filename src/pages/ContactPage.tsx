
import { useState,useRef,ChangeEvent } from "react";
import {FormEvent} from "react";
import HeadingText from "../components/HeadingText";
import {send} from "@emailjs/browser";


import Paragraph from "../components/Paragraph"

const ContactPage = ()=>{
  const[fullName,setFullName]= useState("")
  const[email,setEmail]= useState("")
  const[textMessage , setTextMessage]= useState("")
  const [disabled, setDisabled] = useState(false)


  const contactForm = useRef<HTMLFormElement>(null)
  const nameInput = useRef<HTMLInputElement>(null)
  const messageInput = useRef<HTMLInputElement>(null)
  const emailInput = useRef<HTMLInputElement>(null)


  const {
    VITE__EMAIL_SERVICE_ID
  ,VITE__EMAIL_TEMPLATE_ID
  ,VITE__EMAIL_PUBLIC_KEY} = import.meta.env


function formSubmit(e:FormEvent){

  e.preventDefault()
  if(Boolean(fullName) && Boolean(email) && Boolean(textMessage) && disabled == false){
    setDisabled(true)
    const emailParams = {
      name: `${fullName}`,
      message: `clientEmail: ${email},
      details: ${textMessage}`
    }

    send(
      VITE__EMAIL_SERVICE_ID,
      VITE__EMAIL_TEMPLATE_ID,
      emailParams,
      VITE__EMAIL_PUBLIC_KEY
    )
    .then(()=>{
      alert("meassage succefully sent")
      resetState()
    })
  }else if(disabled){
    alert("you've already sen't a message")

  }else{
    [nameInput, emailInput, messageInput].forEach(elem => {if(elem.current && Boolean(elem.current.value) == false){
      elem.current.classList.add("border-red-500")
    }else{
      elem.current?.classList.remove("border-red-500")

    }
    })
  }

}



function resetState(){
  setFullName("")
  setEmail("")
  setTextMessage("")
}

return(
  <>
    <section id="contact" className="px-5 lg:px-24 pb-16 bg-sky-700 text-white">
      <div className="pb-16 pt-24">
        <HeadingText headingText={"contact"}/>
      </div>

      <div className="container mx-auto">

        <Paragraph paragraphText={"Have an idea for a web or mobile application ? Need a professional website or online store for your business?"} color={"mb-3"}/>

        <Paragraph paragraphText={"No matter your needs, I'm here to help you craft your ideas and bring them to life. Feel free to contact me."} color={"mb-3"}/>

        <Paragraph paragraphText={"Tel:09076673849 08118503070"} color={"mb-3"}/>
        <Paragraph paragraphText={"OR"} color={"mb-3"}/>
        <Paragraph paragraphText={"Email:technogodwr@gmail.com"} color={"mb-3"}/>
      

      <form ref={contactForm} onSubmit={formSubmit}>
        <label htmlFor="name">Full Name</label>
        <input ref={nameInput} type={"text"} id="name" className={"w-full h-10 bg-transparent border border-white outline-0 rounded p-2"} onChange={(e:ChangeEvent<HTMLInputElement>)=> setFullName(e.target.value)} value={fullName}/>

        <label htmlFor="email">Email</label>
        <input ref={emailInput} type={"email"} id="email" className={"w-full h-10 bg-transparent border border-white rounded outline-0 p-2"} onChange={(e:ChangeEvent<HTMLInputElement>)=>setEmail(e.target.value)} value={email}/>



        <label htmlFor="message">Message</label>
        <input ref={messageInput} type="text" id="message" className={"w-full h-32 bg-transparent border border-white rounded mb-3 outline-0 p-2"} onChange={(e:ChangeEvent<HTMLInputElement>)=>setTextMessage(e.target.value)} value={textMessage}/>

        <input type="Submit" className="rounded p-3 border border-white text-white bg-transparent outline-0 hover:bg-white hover:text-sky-700 focus:bg-white focus:text-sky-900" value={"Submit"} readOnly/>
      </form>
</div>
    </section>

  </>
)
}


export default ContactPage;
