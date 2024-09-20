import React from "react";

const HeroSection = () => {
  return (
    <div className="">
      <div className="banner bg-[#363636] "></div>
      <div className=" ">
        <div className=" flex items-center justify-center gap-[20px] boder bg-green-0 mb-10 absolute  bottom-3 left-0 right-0 ">
          <div className="w-[300px] h-[300px] bg-[#C02424] transform transition duration-300 hover:scale-125 overflow-hidden"></div>
          <div className="w-[260px] h-[260px] bg-[#146FE8] transform transition duration-500 hover:scale-125 overflow-hidden"></div>
          <div className="w-[300px] h-[300px] bg-[#E76666] transform transition duration-500 hover:scale-125 "></div>
          <div className="w-[260px] h-[260px] bg-[#A0FCD9] transform transition duration-500 hover:scale-125 "></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
