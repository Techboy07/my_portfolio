import Paragraph from "./Paragraph";

const DetailCard = ({imageLink,detailText,detailHeader}:{imageLink:string;detailText:string;detailHeader:string})=>{








return(
  <>
    <div>
<div className={'w-20 mb-3'}>

  <img src={imageLink} alt="detail-image"/>
</div>

<div className={"mb-3"}>
<h4 className={"font-bold"}>{detailHeader}</h4>
</div>
<div className={"mb-3"}>
  <Paragraph paragraphText={detailText} color={"text-gray-500"}/>
</div>

    </div>

  </>
)


}


export default DetailCard;
