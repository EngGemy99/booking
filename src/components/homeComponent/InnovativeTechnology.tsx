import { CustomContainer } from "@/Wrapper/CustomContainer";
import React from "react";
import Title from "../common/Title";
import Description from "../common/Description";
import { images } from "@/assets";
import Image, { StaticImageData } from "next/image";

const items = [
  {
    title: "home.InnovativeTechnology.html_to_htmx",
    description: "home.InnovativeTechnology.html_to_htmx_description",
    image: images.InnovativeTechnology1,
  },
  {
    title: "home.InnovativeTechnology.cold_calls_to_ai_automation",
    description: "home.InnovativeTechnology.ai_customer_support",
    image: images.InnovativeTechnology2,
  },
  {
    title: "home.InnovativeTechnology.2d_media_to_metaverse",
    description: "home.InnovativeTechnology.metaverse_transition",
    image: images.InnovativeTechnology3,
  },
  {
    title: "home.InnovativeTechnology.big_data_to_dataops",
    description: "home.InnovativeTechnology.dataops_approach",
    image: images.InnovativeTechnology4,
  },
  {
    title: "home.InnovativeTechnology.traditional_search_to_nlp",
    description: "home.InnovativeTechnology.nlp_search",
    image: images.InnovativeTechnology5,
  },
  {
    title: "home.InnovativeTechnology.centralized_to_decentralized_servers",
    description: "home.InnovativeTechnology.decentralized_servers",
    image: images.InnovativeTechnology6,
  },
];
function InnovativeTechnology() {
  return (
    <CustomContainer>
      <div className="text-center">
        <Title
          title="common.our"
          titleColor="text-secondary"
          className="text-clamp-[22px,4vw,36px]"
        />{" "}
        <Title
          title="home.InnovativeTechnology.innovative_technology"
          titleColor="text-primary"
          className="text-clamp-[22px,4vw,36px]"
        />
        <Description
          Description="home.InnovativeTechnology.transformation_to_advanced_technology"
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
