const OutlinedButton = ({buttonText,styles}:{buttonText:string;styles:string})=>{

return(
<>
  <button className={`${styles} text-sky-700 text-md border-sky-700 border-2 rounded-full uppercase lg:text-lg outline-none `}>{buttonText}</button>
</>
)

}


export default OutlinedButton;
