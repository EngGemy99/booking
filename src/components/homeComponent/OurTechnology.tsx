import { CustomContainer } from "@/Wrapper/CustomContainer";
import React from "react";
import Title from "../common/Title";
import Description from "../common/Description";
import Button from "../common/Button";

const data = [
  {
    title: "AI and Machine Learning",
    description:
      "Discover our advanced AI capabilities through Genielamp.ai to personalize experiences and automate itinerary processes with our Ai agent.",
  },
  {
    title: "Advanced Metaverse Technology",
    description:
      "Learn how we’re bringing immersive experiences to clients with VVERSE for 3D environments and interactive travel options.",
  },
  {
    title: "HTMX",
    description:
      "See how we leverage HTMX to create seamless, dynamic web experiences that increase engagement and speed.",
  },
  {
    title: "Decentralized Servers",
    description:
      "Explore our partnership with ThreeFold to boost security and performance with decentralized server architecture.",
  },
  {
    title: "Data Operations and Automation",
    description:
      "Read about our DataOps and automation processes in collaboration with Vindo.ai to drive efficiency and actionable insights.",
  },
];

function OurTechnology() {
  return (
    <CustomContainer className="pt-[44px]">
      <div className="bg-[url(../../assets/images/OurTechnologyBg.jpg)] bg-cover bg-center relative rounded-[26px] overflow-hidden p-[48px]">
        <div className="inset-0 absolute bg-[#224A9A] opacity-[.8]"></div>
        <div className="relative z-10">
          <div className="text-center">
            <Title
              title="Explore Our Technology"
              titleColor="text-white"
              className="text-clamp-[22px,4vw,36px] font-medium"
            />
            <Description
              Description="Read more about how we’re using these technologies to enhance the travel industry:"
              DescriptionColor="text-white"
              className="text-[12px]"
            />
          </div>
          {/* Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mt-16">
            {data.map((item, index) => (
              <Box
                key={index}
                title={item.title}
                description={item.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </CustomContainer>
  );
}

export default OurTechnology;

interface BoxProps {
  title: string;
  description: string;
  index: number;
}

const Box = ({ title, description, index }: BoxProps) => {
  const gridClasses = [
    "lg:col-span-2 lg:row-span-1",
    "lg:col-span-2 lg:row-span-1 lg:col-start-3",
    "lg:col-span-2 lg:row-span-1 lg:col-start-5",
    "lg:col-span-2 lg:row-span-1 lg:col-start-2 lg:row-start-2",
    "lg:col-span-2 lg:row-span-1 lg:col-start-4 lg:row-start-2",
  ];

  return (
    <div
      className={`p-16 rounded-[16px] bg-[#EFF9FA] ${gridClasses[index]} sm:col-span-1 md:col-span-1`}
    >
      <Title
        title={title}
        titleColor="text-primary"
        className="text-[16px] block font-bold mb-6"
      />
      <Description
        Description={description}
        DescriptionColor="text-grayText"
        className="text-[12px]"
      />
      <Button
        text="Learn More"
        className="mt-4 text-darkText border-[#D0D5DD] bg-white border"
      />
    </div>
  );
};
