const OscillatingIcon = ({icon,styles}:{icon:string; styles:string})=>{


return(
<>
<div className={`${styles} p-2 text-2xl animate-bounce`}>
<i className={icon}></i>
</div>
</>
)

}

export default OscillatingIcon;
