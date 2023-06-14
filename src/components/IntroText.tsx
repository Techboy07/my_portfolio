import {useState, useEffect} from 'react'


const IntroText = ({temp,styles})=>{

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
 clearInterval(myInterval)
 }
 },100)

},[])

return(
<>
 <h1 className={styles}>{text}</h1>
</>
)

}

export default IntroText;
