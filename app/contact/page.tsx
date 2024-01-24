"use client"
import React from "react";
import { cn } from "../utils/cn";
import { TypewriterEffect } from "../components/typewriter-effect-contact";
import Spotlight from "../components/Spotlight";
import Image from "next/image";
import { Instrument_Serif } from "next/font/google";
import { instrument_Serif } from "../fonts";
import Contact from "../components/Contact";
const page = () => {


  const sentence = "Even octopuses have great ideas – let's ink-ubate yours! Drop me a line below and let's turn your project into something tentacool";

  const words = sentence.split(/\s+/).map((word, index) => ({
    text: word,
    className: "", // Adjust the index based on your styling needs
  }));


  return (
    <div className="md:mx-[11rem] rounded-md flex items-center justify-center  md:flex flex-row md:flex-col md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
    <Spotlight
      className="-top-12 left-20 md:left-60 md:-top-20"
      fill="white"
    />

    <div className="md:mt-[6rem]  p-4 md:h-[40rem] md:max-w-full  mx-auto w-20rem pt-20 md:pt-0 md:grid md:grid-cols-2 nd:gap-8">
        {/* smaller screens */}
        {/* <div className="bg-transparent rounded-lg mx-auto my-auto  hidden">
          <Image
          className="animate-bounce-slow"
          src="/contact-img-final.png"
          width={1000}
          height={1000}
          alt="contact"
          />

<TypewriterEffect words={words} />
        </div> */}

              {/* for larger screens */}
        <div className="bg-transparent rounded-lg mx-auto my-auto">
          <Image
          className="animate-bounce-slow mb-1 mx-auto"
          src="/contact-img-final.png"
          width={150}
          height={150}
          alt="contact"
          />

<div className={`h-[5rem] w-full mx-auto text-xl text-white text-center mb-14 ${instrument_Serif.className} tracking-wider`}>
{/* <TypewriterEffect words={words} /> */}
<p>Even octopuses have great ideas –</p> 
<p>let's ink-ubate yours!</p> 
<p>Drop me a line below and let's turn </p>
<p>your project into something tentacool!</p>
</div>
        </div>
        {/* <div className="rounded-[2rem] bg-transparent border border-opacity-15 shadow-[0_25px_50px_-12px_rgba(255,255,255,0.5)] w-[20rem] h-[30rem] transition-shadow">
          <input type="text" placeholder="Your name" className="rounded-lg bg-black border border-zinc-50/30 text-white"/>
        </div> */}
      

      <div className="flex flex-col items-center justify-center rounded-[2rem] bg-transparent border border-opacity-15 shadow-[0_25px_50px_-12px_rgba(255,255,255,0.5)] w-[20rem] h-[27rem] transition-shadow">
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