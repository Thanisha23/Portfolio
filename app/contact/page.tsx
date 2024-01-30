"use client"
import React from "react";

import Spotlight from "../components/Spotlight";
import Image from "next/image";

import { satisfy } from "../fonts";
import Contact from "../components/Contact";
const page = () => {





  return (
    <div className="md:mx-[6rem] rounded-md flex items-center justify-center  md:flex flex-row md:flex-col md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
    <Spotlight
      className="-top-12 left-20 md:left-60 md:-top-20"
      fill="white"
    />

    <div className="md:mt-[6rem]  p-4 md:h-[40rem] md:max-w-full  mx-auto w-20rem pt-20 md:pt-0 md:grid md:grid-cols-2 md:gap-11">
        

              {/* for larger screens */}
        <div className="bg-transparent rounded-lg mx-auto my-auto">
          <Image
          className="animate-bounce-slow mb-1 mx-auto"
          src="/contact-img-final.png"
          width={150}
          height={150}
          alt="contact"
          />

<div className={`h-[5rem] w-full mx-auto text-xl md:text-3xl text-white text-center md:mb-[8rem] ${satisfy.className} tracking-wider`}>
{/* <TypewriterEffect words={words} /> */}

<p>Drop me a line below and let's turn </p>
<p>your project into something tentacool!</p>
</div>
        </div>
      

      <div className="md:mt-[4rem] md:px-[1rem] px-[1rem] pt-7 rounded-[2rem] md:rounded-[1rem] bg-transparent border border-opacity-15 shadow-[0_25px_50px_-12px_rgba(255,255,255,0.5)] w-[20rem] md:w-[24rem] h-[27rem] md:h-[28rem] transition-shadow">
  <Contact />
</div>


    </div>
  </div>
  )
}

export default page


     {/* <h1 className="md:px-[9rem] text-lg mt-[8rem] md:text-lg font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
     Even octopuses have great ideas – let's ink-ubate yours! Drop me a line below and let's turn your project into something tentacool. 🐙📞
      </h1> */}