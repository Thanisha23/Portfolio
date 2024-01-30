"use client";
import React from "react";
const page = () => {
const users = [
  {
    name:"Thanisha",
    img:"./profile.jpg",
    profession:"Full Stack Web Developer",
    country:"India"
  }
]

  
  return (
    <div className="relative">
      <div className="mt-[5rem]">
       <div className="bg-green-500 w-1 h-1 shadow-[0_0_5px_5px_rgba(240,240,240,0.3)] rounded-full -top-[2rem] left-[6rem] absolute"></div>
        <div className="text-white text-base -top-[2.7rem] left-[7rem] absolute font-semibold">Available for hire</div>
        <div className="border border-zinc-50/30 mx-auto md:w-[50rem] sm:w-[35rem] m-[1rem] w-[25rem] h-[25rem] bg-transparent rounded-2xl">

          
        </div>
     

       




      </div>
    </div>
  )
}

export default page