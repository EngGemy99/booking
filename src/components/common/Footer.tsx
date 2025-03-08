"use client";

import { images } from "@/assets";
import {
  FaceBookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
  WhatUsAppIcon,
} from "@/icons";
import { isRtl } from "@/utils/IsRtl";
import { CustomContainer } from "@/Wrapper/CustomContainer";
import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import Title from "./Title";
import AccordionSidebar from "./AccordionSidebar";

const data = [
  {
    title: "Our Technology",
    links: [
      {
        title: "AI and Machine Learning",
        url: "",
      },
      {
        title: "NLP-Powered Search",
        url: "",
      },
      {
        title: "DataOps",
        url: "",
      },
      {
        title: "Automation",
        url: "",
      },
      {
        title: "Metaverse",
        url: "",
      },
      {
        title: "Decentralise Servers",
        url: "",
      },
    ],
  },
  {
    title: "Our Product",
    links: [
      {
        title: "TuRbo Booking engine",
        url: "",
      },
      {
        title: "Ai Agent ",
        url: "",
      },
      {
        title: "Travel CRM",
        url: "",
      },
      {
        title: "Engaging Holiday ",
        url: "",
      },
      {
        title: "Live Booking Desk",
        url: "",
      },
      {
        title: "Operator App",
        url: "",
      },
    ],
  },
  {
    title: " Our community",
    links: [
      {
        title: "Join as a traveler",
        url: "",
      },
      {
        title: "Academy",
        url: "",
      },
      {
        title: "Moments",
        url: "",
      },
      {
        title: "V Booking Hub",
        url: "",
      },
      {
        title: "Networking ",
        url: "",
      },
      {
        title: "Metaverse ",
        url: "",
      },
    ],
  },
  {
    title: "Do Business with us",
    links: [
      {
        title: "List your property",
        url: "",
      },
      {
        title: "Claim your business ",
        url: "",
      },
      {
        title: "TuRbo Travel suite ",
        url: "",
      },
      {
        title: "Travel Expert Program",
        url: "",
      },
      {
        title: "Agent Portal Login",
        url: "",
      },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        title: "About us ",
        url: "",
      },
      {
        title: "Contact us",
        url: "",
      },
      {
        title: "Enquiries   ",
        url: "",
      },
      {
        title: "Investor relations ",
        url: "",
      },
      {
        title: "Partner with us ",
        url: "",
      },
      {
        title: "support@vbooking.com",
        url: "",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        title: "Blog",
        url: "",
      },
      {
        title: "FAQs",
        url: "",
      },
      {
        title: "Training",
        url: "",
      },
      {
        title: "Privacy Policy",
        url: "",
      },
    ],
  },
];

const socialLinks = [
  {
    icon: <LinkedInIcon />,
    url: "",
  },
  {
    icon: <FaceBookIcon />,
    url: "",
  },
  {
    icon: <InstagramIcon />,
    url: "",
  },
  {
    icon: <TwitterIcon />,
    url: "",
  },
  {
    icon: <WhatUsAppIcon />,
    url: "",
  },
];

function Footer() {
  return (
    <footer className="bg-[#224A9A] text-white">
      <CustomContainer>
        <div className="hidden md:block">
          <div className="mb-32">
            <Image src={images.footerLogo} alt="logo" />
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-6 lg:gap-y-16">
            {data.map((item, index) => (
              <div key={index}>
                <h3 className="text-white text-lg font-semibold mb-4">
                  {item.title}
                </h3>
                <ul>
                  {item.links.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.url}
                        className="text-gray-300 hover:text-white transition"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="block md:hidden">
          <AccordionSidebar items={data} />
        </div>

        <div className="flex items-center justify-between sm:justify-end mt-32">
          <Title title="Connect with us" titleColor="text-white" className="" />
          <ul className="flex gap-4 sm:me-32 sm:ms-16">
            {socialLinks.map((link, index) => (
              <li key={index} className="cursor-pointer">
                {link.icon}
              </li>
            ))}
          </ul>
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>
        </div>

        <div className="mt-[44px]">
          <div
            className={`${
              isRtl() ? "sm:divide-x-reverse" : ""
            } sm:divide-slate-500 sm:divide-x-2 flex flex-wrap gap-3 justify-center`}
          >
            <Title
              title="Awards: Best Travel Tech 2022."
              titleColor="text-white"
              className="text-center"
            />
            <Title
              title="Trusted by 10,000+ agents globally."
              titleColor="text-white"
              className="ps-3 text-center"
            />
            <div className="flex gap-3">
              <Title
                title="Secure Payments: "
                titleColor="text-white"
                className="ps-3 text-center"
              />
              <div className="flex gap-3">
                {[images.payment1, images.payment2, images.payment3].map(
                  (payment, index) => (
                    <Image key={index} src={payment} alt="payment" />
                  )
                )}
              </div>
            </div>
          </div>
          <div
            className={`${
              isRtl() ? "sm:divide-x-reverse" : ""
            }  sm:divide-slate-500 sm:divide-x-2 flex flex-wrap gap-3 justify-center mt-10`}
          >
            <Title
              title="© 2025 V Booking. All rights reserved."
              titleColor="text-white text-center"
            />
            <Title
              title="Designed and Powered by V Booking Tech Solutions."
              titleColor="text-white"
              className="ps-3 text-center"
            />
          </div>
        </div>
      </CustomContainer>
    </footer>
  );
}

export default Footer;
