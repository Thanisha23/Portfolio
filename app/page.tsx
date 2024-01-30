

// pages/index.tsx
"use client";
import { TypewriterEffect } from "./components/typewriter-effect";
import './styles/Home.module.css'; // Import your styles
import { NextPage } from 'next';
import { satisfy } from "./fonts";
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
 
  return (


    <div className="flex flex-col h-[40rem] md:h-[45rem] bg-black items-center justify-between overflow-hidden rounded-md">
       <div className="flex-grow" />
      <div className={`flex flex-col h-[1rem] md:h-[5rem] items-center justify-center z-20 tracking-wide md:tracking-[0.2rem] ${satisfy.className}`}>
      <TypewriterEffect words={words} />
    </div>

   
    <div className="md:w-[70rem] w-[40rem] h-[40vh] md:h-[40vh] md:mt-[0.5rem] mt-[0.5rem] relative">
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
      <div className="absolute inset-0 w-full md:w-full h-full md:h-full bg-black [mask-image:radial-gradient(150px_150px_at_top,transparent_20%,white)] md:[mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
    </div>


    </div>
  );
};

export default LandingPage;
