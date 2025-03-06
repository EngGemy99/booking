import { CustomContainer } from "@/Wrapper/CustomContainer";
import React from "react";
import Title from "../common/Title";
import Description from "../common/Description";
import { images } from "@/assets";
import Image, { StaticImageData } from "next/image";

const items = [
  {
    title: "HTML to HTMX",
    description:
      "We’ve evolved from conventional HTML to HTMX, delivering dynamic, interactive experiences directly within the browser. This means faster load times and a more engaging user experience.",
    image: images.InnovativeTechnology1,
  },
  {
    title: "Cold Calls & Messages to Full AI-Driven Automation",
    description:
      "Instead of traditional customer support, we deploy fully automated AI solutions that provide real-time, customized assistance across multiple channels, reducing response times and improving client satisfaction.",
    image: images.InnovativeTechnology2,
  },
  {
    title: "2D Media to the Metaverse",
    description:
      "Transitioning from standard 2D visuals, we now offer immersive metaverse capabilities that revolutionize client interactions, providing virtual tours, 3D environments, and holographic communication to bring destinations to life.",
    image: images.InnovativeTechnology3,
  },
  {
    title: "Normal Big Data Analysis to Data Operations (DataOps)",
    description:
      "Our DataOps approach goes beyond standard data analysis, incorporating real-time data operations to drive actionable insights, refine decision-making, and optimize business processes at every level.",
    image: images.InnovativeTechnology4,
  },
  {
    title: "Traditional Search Engines to NLP-Powered Search",
    description:
      "Moving beyond basic search functions, we leverage Natural Language Processing (NLP) to understand client needs more accurately, delivering relevant, personalized search results that improve user experience and conversion rates.",
    image: images.InnovativeTechnology5,
  },
  {
    title: "Centralized Servers to Decentralized Servers",
    description:
      "We’re moving from centralized to decentralized server architecture, enhancing data security, reducing latency, and increasing resilience. This approach ensures operational continuity and scalability across global markets.",
    image: images.InnovativeTechnology6,
  },
];
function InnovativeTechnology() {
  return (
    <CustomContainer className="pt-[44px]">
      <div className="text-center">
        <Title
          title="home.Our"
          titleColor="text-secondary"
          className="text-clamp-[22px,4vw,36px]"
        />{" "}
        <Title
          title="home.Innovative_Technology"
          titleColor="text-primary"
          className="text-clamp-[22px,4vw,36px]"
        />
        <Description
          Description="home.A_Transformation_from_Traditional_to_Advanced_Technology"
          DescriptionColor="text-grayText"
          className="text-[12px]"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 mt-24">
        {items.map((item, index) => (
          <Box key={index} {...item} />
        ))}
      </div>
    </CustomContainer>
  );
}

export default InnovativeTechnology;

interface BoxProps {
  title: string;
  image: StaticImageData;
  description: string;
}
const Box = ({ title, image, description }: BoxProps) => {
  return (
    <div className="bg-white p-16 flex items-center gap-4 rounded-lg">
      <Image src={image} alt={title} />
      <div>
        <Title
          title={title}
          titleColor="text-secondary"
          className="text-[22px] font-semibold text-wrap"
        />
        <Description
          Description={description}
          DescriptionColor="text-grayText"
          className="text-[12px] font-normal text-wrap"
        />
      </div>
    </div>
  );
};
