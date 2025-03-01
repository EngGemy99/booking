import { CustomContainer } from "@/Wapper/CustomContainer";
import React from "react";
import Title from "../common/Title";
import Description from "../common/Description";
import {
  AITravelAgentIcon,
  EngagementHolidayBuilderIcon,
  LiveBookingDeskIcon,
  OperatorAppIcon,
  TuRboSearchEngineIcon,
  VBookingHubIcon,
} from "@/icons";
import { useTranslations } from "next-intl";

const UniqueProductsItems = [
  {
    title: "home.TuRbo_Search_Engine",
    icon: <TuRboSearchEngineIcon />,
  },
  {
    title: "home.AI_Travel_Agent",
    icon: <AITravelAgentIcon />,
  },
  {
    title: "home.Engagement_Holiday_Builder",
    icon: <EngagementHolidayBuilderIcon />,
  },
  {
    title: "home.Turbo_Travel_CRM",
    icon: <TuRboSearchEngineIcon />,
  },
  {
    title: "home.Live_Booking_Desk",
    icon: <LiveBookingDeskIcon />,
  },
  {
    title: "home.Operator_App",
    icon: <OperatorAppIcon />,
  },
  {
    title: "home.VBooking_Hub",
    icon: <VBookingHubIcon />,
  },
];

function UniqueProducts() {
  return (
    <CustomContainer size="lg" className="pt-16">
      <Title
        title="home.Our"
        titleColor="text-secondary"
        className="text-clamp-[22px,4vw,28px]"
      />
      <Title
        title="home.Unique_Products"
        titleColor="text-primary"
        className="text-clamp-[22px,4vw,28px]"
      />
      <Description
        Description="home.Crafting_Unique_Products_from_Innovative_Technology"
        DescriptionColor="text-grayText"
        className="text-clamp-[12px,3vw,16px]"
      />
      <div className="flex flex-wrap gap-6 mt-6">
        {UniqueProductsItems.map((item, index) => (
          <Box key={index} title={item.title} icon={item.icon} />
        ))}
      </div>
    </CustomContainer>
  );
}

export default UniqueProducts;

const Box = ({ title, icon }: any) => {
  return (
    <div className="bg-white p-[16px] rounded-[16px] flex flex-col justify-center items-center gap-4 flex-1 min-w-[200px]   ">
      {icon}
      <Title
        title={title}
        titleColor="text-secondary"
        className="text-wrap text-center font-semibold bg-gradient-to-r from-[#1C3D80] to-[#4676D7] inline-block text-transparent bg-clip-text"
      />
    </div>
  );
};
