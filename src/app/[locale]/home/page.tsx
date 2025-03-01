import Header from "@/components/homeComponent/Header";
import TurboBookingSuite from "@/components/homeComponent/TurboBookingSuite";
import UniqueProducts from "@/components/homeComponent/UniqueProducts";
import WhyTuRbo from "@/components/homeComponent/WhyTuRbo";
import React from "react";

export default function HomePage() {
  return (
    <div>
      <Header />
      <div className=" bg-gradient-to-b from-[#F7FCFC] to-[#D7EFF1]">
        <UniqueProducts />
        <TurboBookingSuite />
        <WhyTuRbo />
      </div>
    </div>
  );
}
