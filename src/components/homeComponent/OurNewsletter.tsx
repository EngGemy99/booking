import React from "react";
import Title from "../common/Title";
import Description from "../common/Description";
import Button from "../common/Button";
import { CustomContainer } from "@/Wapper/CustomContainer";

function OurNewsletter() {
  return (
    <CustomContainer
      size="lg"
      className="bg-primary w-[90%] lg:w-[879px] mx-auto text-center p-32 rounded-[24px]"
    >
      <Title
        title="Join Our Newsletter"
        titleColor="text-white"
        className="text-center text-clamp-[22px,4vw,36px]"
      />
      <Description
        Description="Be the first to know about our latest updates, exclusive offers, and
more."
        DescriptionColor="text-white"
        className="text-center text-[12px]"
      />
      <div className="mt-32 mb-[8px] flex items-center justify-center gap-4">
        <input
          type="text"
          className="w-[80%] lg:w-[432px] h-[44px] rounded-[25px] bg-white outline-none ps-2"
        />
        <Button text="Subscribe" className="bg-white text-primary" />
      </div>
      <Description
        Description="We care about your data in our privacy policy."
        DescriptionColor="text-white"
        className="text-[14px]"
      />
    </CustomContainer>
  );
}

export default OurNewsletter;
