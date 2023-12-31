import { useRef , useEffect} from "react";

import createObserver from "../../observer"



const HeadingText = ({headingText}:{headingText:string})=> {

  const target = useRef<HTMLHeadingElement>(null)

useEffect(() => {
  if(target.current){
  createObserver((target.current as Element),"visible-backwards")}
},[])
return  (<h1 ref={target} className={"not-visible font-medium text-3xl lg:text-4xl uppercase text-center tracking-wider "}>{headingText}</h1>)


}

export default HeadingText;
