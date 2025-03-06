import {
  AiToolIcon,
  AutomationIcon,
  BookingManagementIcon,
  HolidayPackagesIcon,
  ItineraryBuilderIcon,
  OnePlatFormIcon,
  QuotationSystemIcon,
} from "@/icons";
import InventoryManagementIcon from "@/icons/src/inventoryManagement";
import { CustomContainer } from "@/Wrapper/CustomContainer";
import Description from "../common/Description";
import Title from "../common/Title";

const items = [
  {
    title: "All-in-One Platform",
    description:
      "Manage every aspect of your travel business seamlessly under one roof.",
    icon: <OnePlatFormIcon />,
  },
  {
    title: "Advanced Itinerary Builder",
    description:
      "Design detailed and interactive travel plans, personalized to perfection.",
    icon: <ItineraryBuilderIcon />,
  },
  {
    title: "Real-Time Booking Management",
    description:
      "Stay updated with instant availability, bookings, and modifications.",
    icon: <BookingManagementIcon />,
  },
  {
    title: "Dynamic Quotation System",
    description:
      "Effortlessly create and customize quotes tailored to your clients' needs.",
    icon: <QuotationSystemIcon />,
  },
  {
    title: "Engaging Holiday Packages",
    description:
      "Offer dynamic, visually appealing, and customizable travel experiences.",
    icon: <HolidayPackagesIcon />,
  },
  {
    title: "Supplier & Inventory Management",
    description:
      "Streamline operations with centralized control over suppliers and services.",
    icon: <InventoryManagementIcon />,
  },
  {
    title: "Automation & Efficiency",
    description:
      "Save time and reduce manual tasks with automated processes and workflows.",
    icon: <AutomationIcon />,
  },
  {
    title: "AI-Powered Tools",
    description:
      "Enhance efficiency with smart automation, recommendations, and customer support.",
    icon: <AiToolIcon />,
  },
];
function WhyTuRbo() {
  return (
    <CustomContainer
      className="
    mt-[44px] "
    >
      <div className="bg-[#F8E6F9] p-32 rounded-[20px]">
        <div className="text-center">
          <Title
            title="Why"
            titleColor="text-secondary"
            className="text-clamp-[22px,4vw,36px]"
          />{" "}
          <Title
            title="TuRbo"
            titleColor="text-primary"
            className="text-clamp-[22px,4vw,36px]"
          />
          <Description
            Description="Empower your business with an advanced platform designed to receive and manage bookings online."
            DescriptionColor="text-grayText"
            className="text-[12px]"
          />
          <Description
            Description="Streamline reservation processes, improve client experiences, and seamlessly handle inquiries, ensuring your business stays competitive in the digital travel landscape."
            DescriptionColor="text-grayText"
            className="text-[12px]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mt-16">
          {items.map((item, index) => (
            <Box key={index} index={index} {...item} />
          ))}
        </div>
      </div>
    </CustomContainer>
  );
}

export default WhyTuRbo;

interface BoxProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}
const Box = ({ title, description, icon, index }: BoxProps) => {
  const gridClasses = [
    "lg:col-span-2 lg:row-span-1", // div1
    "lg:col-span-2 lg:row-span-1 lg:col-start-3", // div2
    "lg:col-span-2 lg:row-span-1 lg:col-start-5", // div3
    "lg:col-span-2 lg:row-span-1 lg:col-start-1 lg:row-start-2", // div4
    "lg:col-span-2 lg:row-span-1 lg:col-start-3 lg:row-start-2", // div5
    "lg:col-span-2 lg:row-span-1 lg:col-start-5 lg:row-start-2", // div6
    "lg:col-span-2 lg:row-span-1 lg:col-start-2 lg:row-start-3", // div7
    "lg:col-span-2 lg:row-span-1 lg:col-start-4 lg:row-start-3", // div8
  ];
  return (
    <div
      className={`flex items-center flex-col text-center ${gridClasses[index]} space-x-4 bg-white p-16 rounded-[20px] sm:col-span-1 md:col-span-1`}
    >
      <div>{icon}</div>
      <div>
        <Title
          title={title}
          titleColor="text-secondary"
          className="text-[18px]"
        />
        <Description
          Description={description}
          DescriptionColor="text-grayText"
        />
      </div>
    </div>
  );
};
