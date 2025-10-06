"use client";

import React from 'react';
import Image from 'next/image';

const CTALogo = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
      <div className="flex items-center ">
        <Image
          src="/images/nav-logo.png"
          alt="Name Change Gazette"
          width={125}
          height={23}
          className="h-20 w-auto brightness-0 invert"
          priority
        />
        <span className="ml-2 font-semibold text-white text-[16px] lg:text-5xl">NAME CHANGE GAZETTE</span>
      </div>
    </div>
  );
};

export default CTALogo;
