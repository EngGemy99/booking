import { images } from "@/assets";
import { CustomContainer } from "@/Wapper/CustomContainer";
import Image from "next/image";
import Button from "../common/Button";
import Description from "../common/Description";
import Title from "../common/Title";

function Header() {
  return (
    <CustomContainer
      size="lg"
      className="flex items-center gap-[79px] bg-[#F7FCFC] px-[72px]"
    >
      <div className="flex-1">
        <Title
          title="Empowering Tourism,"
          titleColor="text-primary"
          className="text-clamp-[22px,6vw,64px] block font-medium"
        />
        <Title
          title="Elevating Experiences."
          className="text-clamp-[22px,6vw,64px] font-medium"
          titleColor="text-secondary"
        />
        <Description
          Description="VBooking: Your Partner in Seamless Travel Solutions."
          DescriptionColor="text-text mb-[6px]"
        />
        <Description
          Description="Revolutionizing global travel with cutting-edge AI and automated systems, we empower your business with innovative tools and seamless all-in-one solutions, driving ultimate efficiency, innovation, and success in the digital age."
          DescriptionColor="text-text"
          className="text-wrap font-normal text-[12px]"
        />
        <div className="flex gap-4 mt-6">
          <Button text="Join our community" className="text-white" />
          <Button
            text="Book Demo"
            className="border-primary border bg-white text-primary"
          />
        </div>
      </div>
      <Image src={images.headerImage} alt="image header" />
    </CustomContainer>
  );
}

export default Header;
