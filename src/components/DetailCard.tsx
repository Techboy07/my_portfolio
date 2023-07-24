import Paragraph from "./Paragraph";

const DetailCard = ({imageLink,detailText,detailHeader}:{imageLink:string;detailText:string;detailHeader:string})=>{








return(
  <>
    <div className="lg:flex lg:gap-5">
      <div className={'w-20 mb-3 lg:basis-2/5'}>
  
        <img className="lg:h-3/5" src={imageLink} alt="detail-image"/>
</div>
      <div className="">
<div className={"mb-3"}>
<h4 className={"font-bold"}>{detailHeader}</h4>
</div>
<div className={"mb-3"}>
  <Paragraph paragraphText={detailText} color={""}/>
</div>
</div>
    </div>

  </>
)


}


export default DetailCard;
