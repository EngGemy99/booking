import { CustomContainer } from "@/Wrapper/CustomContainer";
import React from "react";
import Title from "../common/Title";
import Description from "../common/Description";
import { images } from "@/assets";
import Image from "next/image";

const data = [
  images.OurPartners1,
  images.OurPartners2,
  images.OurPartners3,
  images.OurPartners4,
];
function OurPartners() {
  return (
    <CustomContainer size="lg" className="py-32">
      <div className="relative z-10">
        <div className="text-center">
          <Title
            title="Our"
            titleColor="text-secondary"
            className="text-clamp-[22px,4vw,36px]"
          />{" "}
          <Title
            title="Partners"
            titleColor="text-primary"
            className="text-clamp-[22px,4vw,36px]"
          />
          <Description
            Description="At V Booking, we believe in the power of community to drive growth, collaboration, and innovation in the travel industry. Through a suite of platforms and initiatives, we’re creating an inclusive ecosystem where travel professionals and travelers alike can connect, learn, and succeed together."
            DescriptionColor="text-grayText"
            className="text-clamp-[12px,4vw,18px]"
          />
        </div>
        <div className="grid grid-cols-2 gap-6 mt-20 xl:grid-cols-4">
          {data.map((item, index) => (
            <div key={index}>
              <Image src={item} alt="Our Partners" />
            </div>
          ))}
        </div>
      </div>
    </CustomContainer>
  );
}

export default OurPartners;
