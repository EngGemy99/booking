"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import Link from "next/link";
import Title from "./Title";
import { isRtl } from "@/utils/IsRtl";

interface LinkItem {
  title: string;
  url: string;
}

interface AccordionItem {
  title: string;
  links?: LinkItem[]; // Make links optional
}

interface AccordionSidebarProps {
  items: AccordionItem[];
  className?: string;
}

export default function AccordionSidebar({
  items,
  className = "",
}: AccordionSidebarProps) {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (itemTitle: string) => {
    setOpenItem(openItem === itemTitle ? null : itemTitle);
  };

  return (
    <div className={`bg-[#2a4795]  p-4 rounded-sm ${className}`}>
      <div className="space-y-1">
        {items.map((item) => (
          <div
            key={item.title}
            className="last:border-b last:border-blue-400 last:border-opacity-30 last:pb-24"
          >
            <button
              onClick={() => toggleItem(item.title)}
              className="flex items-center justify-between w-full py-3 text-left font-medium"
            >
              <div className="flex items-center">
                {item.links && item.links.length > 0 && (
                  <div
                    className={`transition-transform duration-300 ${
                      openItem === item.title ? "rotate-45" : ""
                    }`}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                  </div>
                )}
                <Title
                  title={item.title}
                  titleColor=""
                  className="text-inherit font-semibold"
                />
              </div>
            </button>
            {item.links && item.links.length > 0 && (
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItem === item.title
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-6 pb-3 space-y-2">
                  {item.links.map((link, index) => (
                    <Link
                      key={index}
                      href={link.url || "#"}
                      className={`block text-sm text-inherit transition-all  hover:text-inherit ${
                        isRtl()
                          ? "hover:translate-x-[-4px]"
                          : "hover:translate-x-1"
                      }`}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
