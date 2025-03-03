import React, { ReactNode } from "react";

interface CustomContainerProps {
  size: "lg" | "md" | "sm" | "xs";
  children: ReactNode;
  className?: string;
}

export const CustomContainer = ({
  size = "lg",
  className = "",
  children,
}: CustomContainerProps) => {
  const containerSize = {
    lg: "px-72",
    md: "px-[68px]",
    sm: "px-[40px]",
    xs: "px-[16px]",
  };

  return <div className={`px-16 md:px-[72px] ${className} `}>{children}</div>;
};
