import React from "react";
import CustomHeader from "../common/CustomHeader";


function Offers({ id }: { id: string }) {
  
  return (
    <section id={id} className='mb-35  max-w-screen-xl mx-auto'>
      <div className='mb-10'>
        <CustomHeader
          title="What I do "
          description="My business foundation lets me understand what matters to your organization, and my technical skills allow me to make it happen."
        />
      </div>

      <div className=" w-full flex flex-wrap  gap-[28px]  ml-[10px] items-center justify-center my-[64px] bg-white">
      <div className="flex justify-center gap-[28px]  items-center">
        <img
          src="/images/Product Management.png"
          alt="design image"
          className="block transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
         <img
          src="/images/Data Analytics.png"
          alt="design image"
          className="block transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
      </div>
      <div className="flex justify-center gap-[28px]  items-center">
         
        <img
          src="/images/Development.png"
          alt="design image"
          className=" block transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
        <img
          src="/images/App Concepting.png"
          alt="design image"
          className="block transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
      </div>
    </div>
      

      
    </section>
  );
}

export default Offers;
