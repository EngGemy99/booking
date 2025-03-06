import { images } from "@/assets";
import { CustomContainer } from "@/Wrapper/CustomContainer";
import Image from "next/image";
import Button from "../common/Button";
import Description from "../common/Description";
import Title from "../common/Title";

function Header() {
  return (
    <CustomContainer className="flex items-center flex-col-reverse lg:flex-row md:gap-[35px] xl:gap-[123px] bg-[#F7FCFC]">
      <div className="lg:w-[813px]">
        <Title
          title="home.header.empowering_tourism"
          titleColor="text-primary"
          className="text-clamp-[36px,4vw,64px] block font-medium"
        />
        <Title
          title="home.header.elevating_experiences"
          className="text-clamp-[36px,4vw,64px] font-medium"
          titleColor="text-secondary"
        />
        <div className="">
          <Description
            Description="home.header.vbooking_your_partner_in_seamless_travel_solutions"
            DescriptionColor="text-text mb-[6px] text-[14px]"
          />
          <Description
            Description="home.header.revolutionizing_global_travel_with_cutting_edge_ai"
            DescriptionColor="text-text"
            className="text-wrap font-normal text-[12px]"
          />
        </div>
        <div className="flex gap-4 mt-24">
          <Button
            text="home.header.join_our_community"
            className="text-white"
          />
          <Button
            text="common.book_demo"
            className="border-primary border bg-white text-primary"
          />
        </div>
      </div>
      <div className="lg:w-[484px]">
        <Image src={images.headerImage} alt="image header" />
      </div>
    </CustomContainer>
  );
}

export default Header;
