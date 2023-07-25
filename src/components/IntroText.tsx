import {useState, useEffect} from 'react'


const IntroText = ({temp,styles,setVisible}:{temp:string;styles:string;setVisible:Function})=>{

const [text, setText] = useState("");


useEffect(()=>{
let i = 0;
let str = "";

const myInterval = setInterval(()=>{
  if(i < temp.length){
 str += temp[i]
 setText(str)
 i++
 } else{
   setVisible(true)
 clearInterval(myInterval)
 }
 },100)
 

},[])

return(
<>
  <h1 className={`${styles} text-3xl lg:text-6xl font-semibold text-center text-tetiary`}>{text}</h1>
</>
)

}

export default IntroText;
