import { CustomContainer } from "@/Wapper/CustomContainer";
import React from "react";
import Title from "../common/Title";
import Description from "../common/Description";
import Image, { StaticImageData } from "next/image";
import Button from "../common/Button";
import { images } from "@/assets";

const items = [
  {
    title: "TWholesale Tour Operators (B2B)+(B2C)",
    image: images.laptop,
    description:
      "Automate operations, manage inventories, and create tailored packages for greater efficiency and growth.",
  },
  {
    title: "Incoming Agencies (DMCs)",
    image: images.laptop,
    description:
      "Improve customer satisfaction with fast searches, AI recommendations, and a wide selection of travel products.",
  },
  {
    title: "Online Travel Agencies (OTAs)",
    image: images.laptop,
    description:
      "Improve customer satisfaction with fast searches, AI recommendations, and a wide selection of travel products.",
  },
  {
    title: "Holiday Rental Managers",
    image: images.laptop,
    description:
      "Streamline bookings, pricing, and guest communication to maximize occupancy and enhance guest experiences.",
  },
];

function TurboBookingSuite() {
  return (
    <CustomContainer size="lg" className="pt-[44px]">
      <div className="text-center">
        <Title
          title="Turbo"
          titleColor="text-secondary"
          className="text-clamp-[22px,4vw,36px]"
        />{" "}
        <Title
          title="Booking Suite"
          titleColor="text-primary"
          className="text-clamp-[22px,4vw,36px]"
        />
        <Description
          Description="Empower your business with an advanced platform designed to receive and manage bookings online. Streamline reservation processes, improve client experiences, and seamlessly handle inquiries, ensuring your business stays competitive in the digital travel landscape."
          DescriptionColor="text-grayText"
          className="text-[12px]"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mt-10">
        {items.map((item, index) => (
          <Box key={index} {...item} />
        ))}
      </div>
    </CustomContainer>
  );
}

export default TurboBookingSuite;

interface BoxProps {
  title: string;
  image: StaticImageData;
  description: string;
}

const Box = ({ title, image, description }: BoxProps) => {
  return (
    <div className="bg-white p-[16px] flex items-center justify-center flex-col rounded-[16px]">
      <Image src={image} alt={title} className="mb-16" />

      <Title
        title={title}
        titleColor="text-secondary"
        className="text-wrap text-center font-semibold text-22"
      />
      <Description
        Description={description}
        DescriptionColor="text-grayText"
        className="text-wrap text-center text-12"
      />
      <div className="mt-24 flex gap-16">
        <Button
          text="Learn More"
          className="border border-[#D0D5DD] text-black bg-white"
        />
        <Button text="Book Demo" className="text-white" />
      </div>
    </div>
  );
};
