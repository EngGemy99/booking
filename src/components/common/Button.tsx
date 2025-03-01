import React from "react";
interface ButtonProps {
  text: string;
  className: string;
}
function Button({ text, className }: ButtonProps) {
  return (
    <button className={`bg-primary rounded-[50px] py-10 px-18  ${className}`}>
      {text}
    </button>
  );
}

export default Button;
