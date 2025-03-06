import { images } from "@/assets";
import { CustomContainer } from "@/Wrapper/CustomContainer";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import Button from "./Button";
import Title from "./Title";
import { ArrowButton } from "@/icons";

type LinkType = {
  title: string;
  dropdownItems?: { title: string; url: string }[];
};
const links: LinkType[] = [
  {
    title: "home.navbar.turbo",
    dropdownItems: [
      {
        title: "AI and Machine Learning",
        url: "",
      },
    ],
  },
  {
    title: "home.navbar.our_technology",
    dropdownItems: [
      {
        title: "AI and Machine Learning",
        url: "",
      },
    ],
  },
  {
    title: "home.navbar.our_product",
    dropdownItems: [
      {
        title: "AI and Machine Learning",
        url: "",
      },
    ],
  },
  {
    title: "home.navbar.why_us",
  },
  {
    title: "home.navbar.contacts",
  },
  {
    title: "home.navbar.resources",
    dropdownItems: [
      {
        title: "AI and Machine Learning",
        url: "",
      },
    ],
  },
];

function NavBar() {
  return (
    <CustomContainer className="mt-[36px] !py-0">
      <header className="bg-white h-[80px]">
        <div className=" flex items-center gap-48">
          <a href="#">
            <Image src={images.logo} alt="logo" />
          </a>

          <div className="flex flex-1 items-center justify-end lg:justify-between">
            <nav aria-label="Global" className="hidden lg:block">
              <ul className="flex items-center gap-24 text-sm">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="flex items-center gap-4 text-gray-600 hover:text-secondary transition text-[16px]"
                    >
                      <Title title={link.title} titleColor="" />
                      {link?.dropdownItems &&
                        link?.dropdownItems?.length > 0 && <ArrowButton />}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-4">
                <LanguageSwitcher />

                <Button
                  text="home.navbar.login"
                  className="text-white bg-primary flex items-center gap-2 h-[40px]"
                  withIcon={true}
                />
              </div>

              <button className="block rounded-full bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 lg:hidden">
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </CustomContainer>
  );
}

export default NavBar;
