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
    lg: "px-[72px]",
    md: "px-[68px]",
    sm: "px-[40px]",
    xs: "px-[16px]", // Fixed typo here
  };

  // Return the div with the respective padding class and additional className
  return (
    <div className={`${containerSize[size]} ${className}`}>{children}</div>
  );
};
