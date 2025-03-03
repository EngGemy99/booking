import React from "react";
import Title from "../common/Title";
import Description from "../common/Description";
import { CustomContainer } from "@/Wrapper/CustomContainer";
import {
  ExhibitionCentersIcon,
  NetworkingPlatformIcon,
  VBookingAcademyIcon,
  VBookingHubIcon,
  WorldTravelLibraryIcon,
} from "@/icons";
import ScrollableCards from "../common/ScrollableCards";

const data = [
  {
    title: "Networking Platform",
    description:
      "Our Networking Platform is designed for agents, experts, and travelers to connect, collaborate, and thrive together. It offers a dynamic space to attend events, socialize, gain new skills, and expand professional networks.",
    subDescription: "Join Our community as a",
    icon: <NetworkingPlatformIcon />,
  },
  {
    title: "VBooking Academy",
    description:
      "The VBooking Academy empowers agents and experts with the skills and knowledge needed to excel. Courses cover essential areas like: Travel Industry Education, Destination Knowledge, Using V Booking Tools, Marketing & Sales Training",
    icon: <VBookingAcademyIcon />,
  },
  {
    title: "Exhibition Centers",
    description:
      "Our Exhibition Centers in the Metaverse provide unique opportunities to network and discover. These virtual exhibitions connect agents, suppliers, experts, and travelers to explore new destinations and foster partnerships in a fully immersive environment.",
    subDescription: "Explore Virtual Exhibitions as a Travel Expert",
    icon: <ExhibitionCentersIcon />,
  },
  {
    title: "World Travel Library",
    description:
      "The World Travel Library is an expert-level encyclopedia offering insights on global destinations. Whether you’re a traveler seeking inspiration or an agent expanding expertise, this library has it all.",
    icon: <WorldTravelLibraryIcon />,
  },
  {
    title: "VBooking Hub",
    description:
      "The VBooking Hub is a secure marketplace designed for agents to manage transactions, customize pricing, and access a wide range of travel products. Ideal for creating unique client experiences.",
    icon: <VBookingHubIcon width={100} height={100} />,
  },
];

function TravelCommunity() {
  return (
    <CustomContainer
      size="lg"
      className="bg-[url(../../assets/images/TravelCommunityBg.jpg)] bg-cover bg-center pt-[64px] mt-[32px] relative pb-[3rem]"
    >
      <div className="absolute inset-0 opacity-[.7] bg-gradient-to-b from-[#F7FCFC] to-[#F7E0F8]"></div>
      <div className="relative z-10">
        <div className="text-center">
          <p>
            <Title
              title="Bringing the "
              titleColor="text-secondary"
              className="text-clamp-[22px,4vw,36px]"
            />
            <Title
              title="Travel Community "
              titleColor="text-primary"
              className="text-clamp-[22px,4vw,36px]"
            />
            <Title
              title="Together"
              titleColor="text-secondary"
              className="text-clamp-[22px,4vw,36px]"
            />
          </p>
          <Description
            Description="At V Booking, we believe in the power of community to drive growth, collaboration, and innovation in the travel industry.Through a suite of platforms and initiatives, we’re creating an inclusive ecosystem where travel professionals and travelers alike can connect, learn, and succeed together."
            DescriptionColor="text-grayText"
            className="text-clamp-[12px,4vw,18px]"
          />
        </div>
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mt-16">
          {data.map((item, index) => (
            <Box
              key={index}
              title={item.title}
              description={item.description}
              subDescription={item.subDescription}
              icon={item.icon}
              index={index}
            />
          ))}
        </div>

        <div className="block sm:hidden">
          <ScrollableCards
            options={data}
            renderCard={(option, index) => (
              <Box index={index} {...option} className="w-[340px] h-[450px]" />
            )}
          />
        </div>
      </div>
    </CustomContainer>
  );
}

export default TravelCommunity;
interface BoxProps {
  title: string;
  description: string;
  subDescription?: string;
  icon: React.ReactNode;
  index: number;
  className?: string;
}
const Box = ({
  title,
  description,
  subDescription,
  icon,
  index,
  className,
}: BoxProps) => {
  const gridClasses = [
    "lg:col-span-2 lg:row-span-1",
    "lg:col-span-2 lg:row-span-1 lg:col-start-3",
    "lg:col-span-2 lg:row-span-1 lg:col-start-5",
    "lg:col-span-2 lg:row-span-1 lg:col-start-2 lg:row-start-2",
    "lg:col-span-2 lg:row-span-1 lg:col-start-4 lg:row-start-2",
  ];
  return (
    <div
      className={`p-24 rounded-[24px] bg-white ${gridClasses[index]} sm:col-span-1 md:col-span-1 ${className}`}
    >
      {icon}
      <Title title={title} titleColor="text-primary" className="text-[22px]" />
      <Description
        Description={description}
        DescriptionColor="text-grayText"
        className="text-[14px]"
      />
      {subDescription && (
        <Description
          Description={subDescription}
          DescriptionColor="text-secondary"
          className="text-[14px] mt-20"
        />
      )}
    </div>
  );
};
