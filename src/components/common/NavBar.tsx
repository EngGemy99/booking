"use client";
import { images } from "@/assets";
import { CustomContainer } from "@/Wrapper/CustomContainer";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import Button from "./Button";
import Title from "./Title";
import { ArrowButton, CloseIcon } from "@/icons";
import { Plus, X } from "lucide-react";
import AccordionSidebar from "./AccordionSidebar";

type LinkType = {
  title: string;
  links?: { title: string; url: string }[];
};
const links: LinkType[] = [
  {
    title: "home.navbar.turbo",
    links: [
      {
        title: "AI and Machine Learning",
        url: "",
      },
    ],
  },
  {
    title: "home.navbar.our_technology",
    links: [
      {
        title: "AI and Machine Learning",
        url: "",
      },
    ],
  },
  {
    title: "home.navbar.our_product",
    links: [
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
    links: [
      {
        title: "AI and Machine Learning",
        url: "",
      },
    ],
  },
];

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
                      {link?.links && link?.links?.length > 0 && (
                        <ArrowButton />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="hidden lg:flex items-center gap-4">
                <LanguageSwitcher />

                <Button
                  text="home.navbar.login"
                  className="text-white bg-primary flex items-center gap-2 h-[40px]"
                  withIcon={true}
                />
              </div>

              <button
                onClick={toggleMenu}
                className="block rounded-full bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 lg:hidden"
              >
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

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 lg:hidden overflow-y-auto">
          <div className="p-4">
            <div className="flex justify-between items-center my-[18px]">
              <a href="#">
                <Image src={images.smallLogo} alt="logo" />
              </a>
              <CloseIcon onClick={toggleMenu} className="cursor-pointer" />
            </div>

            <AccordionSidebar
              items={links}
              className=" text-grayText bg-white"
            />

            {/* <nav className="mt-24">
              <ul className="space-y-4">
                {links.map((link, index) => (
                  <li key={index} className="border-b border-gray-100 pb-4">
                    <div className="flex items-center justify-between">
                      <Link
                        href="#"
                        className="text-gray-700 text-lg font-medium"
                      >
                        <span>{link.title}</span>
                      </Link>
                      {link?.links &&
                        link?.links?.length > 0 && (
                          <button
                            onClick={() => toggleExpand(index)}
                            className="p-1"
                          >
                            <Plus className="h-5 w-5 text-gray-500" />
                          </button>
                        )}
                    </div>

                    {link?.links &&
                      link?.links?.length > 0 &&
                      expandedItems.includes(index) && (
                        <div className="mt-4 pl-4 space-y-3">
                          {link.links.map((item, itemIndex) => (
                            <Link
                              key={itemIndex}
                              href={item.url || "#"}
                              className="block text-gray-600 hover:text-secondary"
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      )}
                  </li>
                ))}
              </ul>
            </nav> */}

            <div className="mt-8 space-y-4">
              {/* Mobile buttons section */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <Button
                  text="home.navbar.login_supplier"
                  className="text-white bg-primary flex items-center justify-center gap-2 h-[40px] rounded-[25px] px-4"
                />
                <Button
                  text="home.navbar.login_agent"
                  className="text-white bg-primary flex items-center justify-center gap-2 h-[40px] rounded-[25px] px-4"
                />
              </div>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </CustomContainer>
  );
}

export default NavBar;
