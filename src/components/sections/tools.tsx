"use client";

import React from "react";
import Marquee from "react-fast-marquee";

function MarqueeSection() {
  const logosGoingToLeft = [
    "/images/figma.png",
    "/images/PBB.png",
    "/images/PBI.png",
    "/images/Azure.png",
    "/images/Navattic.png",
    "/images/airtable.png",
    "/images/hotjar.png",
    "/images/ClickUp.png",
    "/images/Not.png"
  ];
  const logosGoingToRight = [
    "/images/PY.png",
    "/images/SQ.png",
    "/images/JS.png",
    "/images/TC.png",
    "/images/HTML.png",
  ];
  return (
    <section>
      {/* TOP SIDE */}
      <Marquee
        direction="left"
        gradient
        autoFill
        speed={20}
        pauseOnHover
        pauseOnClick
      >
        {logosGoingToLeft.map((item, index) => (
          <div key={index} className="mr-[89px]">
            <img src={item} alt="logo" />
          </div>
        ))}
      </Marquee>

      {/* BOTTOM SIDE */}
      <Marquee
        direction="right"
        className="mt-8"
        gradient
        autoFill
        speed={20}
        pauseOnHover
        pauseOnClick
      >
        {logosGoingToRight.map((item, index) => (
          <div key={index} className="mr-[89px]">
            <img src={item} alt="logo" />
          </div>
        ))}
      </Marquee>
    </section>
  );
}

export default MarqueeSection;
