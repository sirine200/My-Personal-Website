import React from "react";
import Image from "next/image";
import Contact from "@/components/added/contact"

export default function Hero({ id }: { id: string }) {
  return (
    <section id={id} className="  max-w-screen-xl mx-auto relative w-full mb-60">
     
      <div className="relative w-full h-auto">
      <Image
       id="hero-image"
       src="/images/About.png" 
       alt="Hero Image"
       width={1920}
       height={1080} 
       style={{ objectFit: 'cover', width: '100%', height: 'auto' }} 
       quality={100} 
      />
      
      <div className="absolute  left-0 right-0" style={{ bottom: '-20%'  }}>
        <Contact/>
          
        </div>
      </div>
    </section>
  );
}


