const OutlinedButton = ({buttonText,styles})=>{

return(
<>
 <button className={`${styles} text-blue-900 text-md border-blue-900 border-2 rounded-full uppercase outline-none `}>{buttonText}</button>
</>
)

}


export default OutlinedButton;
