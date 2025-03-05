import { ArrowButton } from "@/icons";
import React from "react";
import Title from "./Title";
interface ButtonProps {
  text: string;
  className: string;
  withIcon?: boolean;
}
function Button({ text, className, withIcon }: ButtonProps) {
  return (
    <button className={`bg-primary rounded-[50px] py-10 px-18  ${className}`}>
      <Title title={text} titleColor="" />
      {withIcon && <ArrowButton />}
    </button>
  );
}

export default Button;
