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

function Title({ title, titleColor, className }: TitleProps) {
  const t = useTranslations();

  return <span className={`${titleColor} ${className}`}>{t(title)}</span>;
}

export default Title;
