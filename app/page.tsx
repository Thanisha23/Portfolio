

// pages/index.tsx
"use client";
import { TypewriterEffect } from "./components/typewriter-effect";
import './styles/Home.module.css'; // Import your styles
import { NextPage } from 'next';
import { instrument_Serif} from '../app/fonts';
import React from "react";
import SparklesCore from "./components/SparklesCore";
const LandingPage: NextPage = () => {
  const words = [
    {
      text: "Hey,",
    },
    {
      text: "I",
    },
    {
      text: " ",
    },
    {
      text: "am",
    },
    {
      text: " ",
    },
    {
      text: "Thanisha",
      className: "text-blue-500 dark:shadow-2xl",
    },
  ];
  // bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-blue-500 to-purple-600
  // return (
  //   <div className={`flex flex-col  items-center justify-center h-[40rem] tracking-wider ${lilita_One.className}`}>
    
  //   <TypewriterEffect words={words} />
  //   </div>
  // );

  return (
    // <div className="h-[25rem] w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md">
    //   {/* <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
    //     Aceternity
    //   </h1> */}
    //   <div className={`flex flex-col h-[11rem] items-center justify-center  tracking-[0.2rem] ${cinzel.className}`}>
    
    //  <TypewriterEffect words={words} />
    //    </div>
    //   <div className="w-screen h-[40vh] relative">
    //     {/* Gradients */}
    //     <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
    //     <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-trans18rent via-indigo-500 to-transparent h-px w-3/4" />
    //     <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
    //     <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
    //     {/* Core component */}
    //     <SparklesCore
    //       background="transparent"
    //       minSize={0.4}
    //       maxSize={1}
    //       particleDensity={1200}
    //       className="w-full h-[30rem]"
    //       particleColor="#FFFFFF"
    //     />
 
    //     {/* Radial Gradient to prevent sharp edges */}
    //     <div className="absolute inset-0 w-full bg-transparent [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
    //   </div>
    // </div>


    // <div className="flex flex-col h-screen items-center justify-between overflow-hidden rounded-md">
    //    <div className="flex-grow" />
    //   <div className={`flex flex-col h-[5rem] items-center justify-center  tracking-[0.2rem] ${cinzel.className}`}>
    //   <TypewriterEffect words={words} />
    // </div>

   
    // <div className="w-screen h-[40vh] relative">
    //   {/* Gradients */}
    //   <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
    //   <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
    //   <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
    //   <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

    //   {/* Core component */}
    //   <SparklesCore
    //     background="transparent"
    //     minSize={0.4}
    //     maxSize={1}
    //     particleDensity={1200}
    //     className="w-full h-[30rem]"
    //     particleColor="#FFFFFF"
    //   />

    //   {/* Radial Gradient to prevent sharp edges */}
    //   <div className="absolute inset-0 w-full bg-transparent [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
    // </div>


    // </div>

    <div className="flex flex-col h-[40rem] bg-black items-center justify-between overflow-hidden rounded-md">
       <div className="flex-grow" />
      <div className={`flex flex-col h-[5rem] items-center justify-center z-20 tracking-[0.2rem] ${instrument_Serif.className}`}>
      <TypewriterEffect words={words} />
    </div>

   
    <div className="w-[70rem] h-[40vh] mt-[0.5rem] relative">
      {/* Gradients */}
      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

      {/* Core component */}
      <SparklesCore
        background="transparent"
        minSize={0.4}
        maxSize={1}
        particleDensity={1200}
        className="w-full h-full"
        particleColor="#FFFFFF"
      />

      {/* Radial Gradient to prevent sharp edges */}
      <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
    </div>


    </div>
  );
};

export default LandingPage;
