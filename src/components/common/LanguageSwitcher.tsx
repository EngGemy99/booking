"use client";

import { ReactNode, useTransition, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { EnFlagIcon } from "@/icons";
import Title from "./Title";
import { Locale } from "@/i18n/routing";
import { isRtl } from "@/utils/IsRtl";
import Loader from "./Loader";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LanguageSwitcher() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = window.location.pathname;
  const [locale, setLocale] = useState<Locale>("en");

  const checkIsRtl = isRtl();

  useEffect(() => {
    const storedLocale = localStorage.getItem("locale") as Locale;
    if (storedLocale) {
      setLocale(storedLocale);
    }
  }, []);

  function handleClick() {
    const newLocale = locale === "en" ? "ar" : "en";
    setLocale(newLocale);
    localStorage.setItem("locale", newLocale);

    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);

    startTransition(() => {
      router.replace(newPathname);
    });
  }

  return (
    <div>
      <div
        onClick={handleClick}
        className={`bg-[#F2F4F7] w-[78px] h-[40px] py-6 px-12 divide-x-2 ${
          checkIsRtl ? "divide-x-reverse" : ""
        } divide-[#EAECF0] flex rounded-[100px] cursor-pointer`}
      >
        <div className="pe-6">
          <EnFlagIcon />
        </div>
        <Title
          title={locale === "en" ? "EN" : "AR"}
          titleColor="text-grayText"
          className="ps-6"
        />
      </div>
    </div>
  );
}
