"use client";

import React from 'react';
import Image from 'next/image';

const CTALogo = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
      <Image
        src="/website-logo.svg"
        alt="Stardom"
        width={125}
        height={100}
        className="w-102 h-60 md:w-80 md:h-50 lg:w-148 lg:h-60 xl:w-[400px] xl:h-[343px] brightness-0 invert"
        priority
      />
    </div>
  );
};

export default CTALogo;
