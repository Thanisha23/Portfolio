import React from "react";
import { cn } from "../utils/cn";
import Spotlight from "../components/Spotlight";
import Image from "next/image";
const page = () => {
  return (
    <div className="md:ml-[19rem] h-full w-[60rem] rounded-md flex flex-col md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
    <Spotlight
      className="-top-40 left-0 md:left-60 md:-top-20"
      fill="white"
    />

     {/* <h1 className="md:px-[9rem] text-lg mt-[8rem] md:text-lg font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
     Even octopuses have great ideas – let's ink-ubate yours! Drop me a line below and let's turn your project into something tentacool. 🐙📞
      </h1> */}
    <div className="mt-[6rem] p-4 h-[40rem] max-w-full  mx-auto w-full pt-20 md:pt-0 grid grid-cols-2 gap-8">
      {/* <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Spotlight <br /> is the new trend.
      </h1> */}
      {/* <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
        Spotlight effect is a great way to draw attention to a specific part
        of the page. Here, we are drawing the attention towards the text
        section of the page. I don&apos;t know why but I&apos;m running out of
        copy.
      </p> */}

      {/* <div className="bg-red-200 w-[15rem] h-[80rem] mx-auto mt-[14rem]" >Lets COnnect</div> */}
        <div className="bg-transparent rounded-lg mx-auto my-auto">
          <Image
          className="animate-bounce-slow"
          src="/contact-img-final.png"
          width={1000}
          height={1000}
          alt="contact"
          />
        </div>
        <div className="rounded-[8rem] bg-transparent border border-opacity-15 shadow-[0_25px_50px_-12px_rgba(255,255,255,0.5)] w-full h-full transition-shadow">om sai ram</div>
      
    </div>
  </div>
  )
}

export default page