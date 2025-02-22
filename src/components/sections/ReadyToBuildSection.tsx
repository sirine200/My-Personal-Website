import React from "react";
import { gilroyBold } from "@/lib/utils";
import { cn } from "@/lib/utils";
import MainButton from "../common/MainButton";

function ContactMeFooter() {
  return (
    <footer className="flex flex-col md:flex-row justify-between gap-12 items-center bg-[#232529] px-6 py-16 m-0">
      <div className="text-center md:text-left">
        <p
          className={cn(
            gilroyBold.className,
            "text-[32px] md:text-[40px] text-white leading-tight md:leading-normal"
          )}
        >
          Let&apos;s Build Something Together
        </p>
        <p className="text-[#dedede] mt-4 text-lg md:text-xl max-w-lg mx-auto md:mx-0">
          Whether you want to discuss a project, ask a question, or just say
          hello, I&apos;m all ears! Let&apos;s connect and bring your ideas to
          life.
        </p>
        <div className="flex gap-4 justify-center md:justify-start mt-8">
        <a href="mailto:sirinesoltanii123@gmail.com?subject=Contact%20Request&body=Hi%20Sirine,%20I%20would%20like%20to%20get%20in%20touch.">
         <MainButton
         text="Contact Me"
         size="small"
         className="border-none rounded-lg bg-[#31373D] hover:bg-[#31373D] text-white transition-all duration-300 ease-in-out transform hover:scale-105"
         />
        </a>
        </div>
      </div>
   
    </footer>
  );
}

export default ContactMeFooter;
