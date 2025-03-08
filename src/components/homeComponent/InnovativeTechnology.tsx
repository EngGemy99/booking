"use client";
import { CustomContainer } from "@/Wrapper/CustomContainer";
import React, { useState } from "react";
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
      <div className="hidden sm:grid grid-cols-1 gap-4 lg:grid-cols-2 mt-24">
        {items.map((item, index) => (
          <Box key={index} {...item} />
        ))}
      </div>

      <div className="sm:hidden mt-24">
        <AccordionBox items={items} />
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
      <div>
        <Image src={image} alt={title} />
      </div>
      <div className="w-[222px] min-[450px]:w-full">
        <Title
          title={title}
          titleColor="text-secondary"
          className="text-clamp-[16px,3vw,22px] font-semibold text-wrap"
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

const AccordionBox = ({ items }: any) => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="w-full">
      {items.map((item: BoxProps, index: number) => (
        <div key={index} className="mb-10">
          <div
            className={`cursor-pointer bg-white px-24 py-16 rounded-[16px] ${
              openIndex === index ? "hidden" : ""
            }`}
            onClick={() => handleToggle(index)}
          >
            <Title title={item.title} titleColor="text-secondary" />
          </div>
          <div
            className={`accordion-content rounded-[16px] ${
              openIndex === index ? "open" : ""
            }`}
          >
            <Box {...item} />
          </div>
        </div>
      ))}
    </div>
  );
};
