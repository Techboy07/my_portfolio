import HeadingText from "../components/HeadingText";

import Paragraph from "../components/Paragraph";

import DetailCard from "../components/DetailCard";


interface detail{
  imageLink:string;
  detailHeader: string;
  detailText: string;
}


const details:detail[]=[

  {imageLink:"/discussion.svg",
    detailHeader:"Non-Binding Introductory Meeting",
    detailText:"The first meeting or call is always free and non-binding. It serves the purpose of defining the scope of the project and talking about possible solutions. If the expectations are not met in the end for whatever reason, that's unfortunate, but definitely not a problem.",

},
{imageLink:"/money.svg",
  detailHeader:"Transparent Pricing",
  detailText:"The price of a project will vary depending on the scope of the project. Only if the scope of the project changes during development will the price be adjusted accordingly with prior agreement. Therefore it is always clear on what the final price will be, and there will be no surprises.",

},{imageLink:"/marketing.svg",
detailHeader:"Personal Relationship",
detailText:"You won't be dealing with a big web agency. This makes the relationship more personal, as I will be your contact person throughout the entire process for any inquiries. If you have any requests that go beyond my range of services, I can readily rely on a network of competent freelancers and third party services.",

},{imageLink:"/ai.svg",
detailHeader:"State of the Art Solutions",
detailText:"It is 2023 and you should see that in the final product. This means much more than responsiveness and cross-browser-compatibility and involves best practices regarding performance, accessibility, security and usability. This results in secure websites and applications, fast load times and happy customers.",

},
{imageLink:"/seo.svg",
  detailHeader:"Technical SEO",
  detailText:"You want customers to find your website / web application on search engines, especially on Google. Having the right content is the best way to get there. But besides that, there's a lot of things that can be done that are going to influence your ranking. Performance, accessibility and having static assets to name just a few.",
},
]










const DetailPage = ()=>{

  return(

    <>
      <section className={"px-5 lg:px-24 bg-sky-700 text-white"}>

        <div className="container mx-auto">
        <div className="pt-24 pb-16">
          <HeadingText headingText={"details"}/>

        </div>


        <Paragraph paragraphText={"Creating a relationship of trust and a pleasant atmosphere is essential for every successful partnership. Therefore, when working as a freelancer, the following aspects are part of all of my projects:"} color={"pb-10"}/>


        <div className="pb-10">

          {details.map((detail, idx)=> <div key={idx} className="mb-10">

            <DetailCard imageLink={detail.imageLink} detailHeader={detail.detailHeader} detailText={detail.detailText}/>
          </div>)}

        </div>
</div>

      </section>

    </>)
}


export default DetailPage;
