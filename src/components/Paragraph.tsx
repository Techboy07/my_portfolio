const Paragraph = ({paragraphText,color}:{paragraphText:string;color:string}) => 
  { 
  //const [visible, setVisible]= useState("")
  //  const [isIntersecting, setIsIntersecting] = useState(false)

  


  return (
    <p className={`${color} lg:font-normal lg:text-lg font-light`}>
      {paragraphText}
    </p>
  )
}



export default Paragraph;
