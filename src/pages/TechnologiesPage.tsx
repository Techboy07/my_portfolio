import { useState, useEffect, useRef } from "react";
import { stateObject } from "../App";
import createObeserver from "../../observer";
import Paragraph from "../components/Paragraph";
import { tech } from "../../mytypes";
import HeadingText from "../components/HeadingText";

const TechnologiesPage = ({ state }: { state: stateObject }) => {
  const [technologies, setTechnologies] = useState<tech[]>([...state.techs]);

  const paragraphs = useRef<HTMLDivElement>(null);

  const techs = state.techs;

  useEffect(() => {
    setTechnologies(techs);
    const observedElements = paragraphs.current?.children;
    if (observedElements) {
      for (const elem of observedElements) {
        elem.classList.add("not-visible");
        createObeserver(elem);
      }
    }
  }, [techs]);

  return (
    <>
      <section className={"px-5 lg:px-24 container mx-auto"}>
        <div className={"pt-24 pb-16"}>
          <HeadingText headingText={"technologies i use"} />
        </div>

        <div ref={paragraphs}>
          <Paragraph
            paragraphText={
              "The web is changing rapidly and with it the possibilities to implement websites and web applications. Following the modern JAMSTACK-philosophy and using tools like Static Site Generators, Headless CMS and a serverless architecture make it possible to create modern, state of the art web experiences."
            }
            color={"mb-3 lg:mb-8"}
          />

          <Paragraph
            paragraphText={
              "Until recently, creating dynamic websites with tools like Wordpress was common practice. Compared to modern technologies though, today this approach seems inflexible and clunky, especially regarding the performance of the resulting website."
            }
            color={"mb-3 lg:mb-8"}
          />

          <p className={"font-light mb-3 lg:mb-8 lg:text-lg lg:font-normal"}>
            Javascript libraries like{" "}
            <span className={"font-medium lg:text-semibold"}>React</span> and
            modern Static Site Generators like{" "}
            <span className={"font-medium lg:text-semibold"}>Nextjs </span>{" "}
            allow for the creation of static assets (or server side rendering)
            with all the possibilities dynamic web applications have to offer.
            So you'll get the best of both worlds. That entails a range of
            advantages, especially regarding the performance, the flexibility,
            the security, the scalability and the costs of the resulting
            website. All while content creators - through the integration of a
            Headless CMS like{" "}
            <span className={"font-medium lg:text-semibold"}>Contentul</span>-
            have the possibility, to flexibly adjust all of the content based on
            their requirements.
          </p>

          <Paragraph
            paragraphText={
              "And that's what it's all about in the end: Creating the best possible experience for your users."
            }
            color={"mb-3 lg:mb-8"}
          />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 w-full items-center pb-24 justify-evenly">
          {technologies.map((tech, idx) => (
            <div key={idx} className="w-36 flex items-center lg:w-52">
              <img src={tech.imageLink} alt="tech image" className="w-full" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TechnologiesPage;
