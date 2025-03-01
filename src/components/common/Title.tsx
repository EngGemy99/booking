import { useTranslations } from "next-intl";
import React from "react";

interface TitleProps {
  title: string;
  titleColor: string;
  className?: string;
  isGradient?: boolean;
  gradientDir?: string;
  from?: string;
  to?: string;
}

function Title({
  title,
  titleColor,
  className,
  isGradient,
  gradientDir = "to-r",
  from,
  to,
}: TitleProps) {
  const t = useTranslations();

  // Handle gradient classes based on isGradient, gradientDir, from, and to
  let gradientClass = "";
  if (isGradient && from && to) {
    // gradientClass = `bg-gradient-${gradientDir} from-[${from}] to-[${to}]  inline-block text-transparent bg-clip-text`;
    // gradientClass = `bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text`;
  }

  console.log({
    gradientClass,
  });

  return (
    <span
      className={`${titleColor} ${className} ${gradientClass} whitespace-pre`}
    >
      {t(title)}
    </span>
  );
}

export default Title;
