
import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { poppins } from "../fonts";
const page = () => {
  return (
    <div className={`${poppins.className}`}>
      <div className=" relative mt-[5rem]">
       <div><div className="bg-green-500 w-1 h-1 shadow-[0_0_5px_5px_rgba(240,240,240,0.3)] rounded-full -top-[1rem] left-[4rem] absolute animate-pulse"></div>
        <div className="text-white text-base -top-[1.7rem] left-[4.8rem] absolute font-semibold mb-[2rem]">Available for hire</div></div>
        </div>
        <div className="pt-[1rem] ml-[4rem] md:w-[50rem] sm:w-[35rem] m-[1rem] w-[16rem] h-[6rem] bg-transparent rounded-2xl mt-[1rem] text-white font-bold text-2xl">Hey, I’m Thanisha a Full stack web developer.</div>
        <div className="">
        <div className="text-white font-semibold hover:text-black hover:bg-white border border-zinc-50 w-[14rem] h-[3rem] mx-auto mt-[4rem] rounded-3xl flex justify-center items-center gap-[1rem] transition-colors duration-500 ">
        <FaGithub size={27}/>
        Github
        </div>
        <div className="border border-zinc-50 text-white font-semibold hover:text-black hover:bg-white w-[14rem] h-[3rem] mx-auto mt-[1.5rem] rounded-3xl flex justify-center items-center gap-[1rem] transition-colors duration-500">
        <FaXTwitter size={25} />
        Twitter
        </div>
        <div className="text-white font-semibold hover:text-black hover:bg-white border border-zinc-50 w-[14rem] h-[3rem] mx-auto mt-[1.5rem] rounded-3xl flex justify-center items-center gap-[1rem] transition-colors duration-500"><FaLinkedinIn size={18} /> LinkedIn</div>
        <div className="text-white font-semibold hover:text-black hover:bg-white border border-zinc-50 w-[14rem] h-[3rem] mx-auto mt-[1.5rem] rounded-3xl flex justify-center items-center gap-[1rem] transition-colors duration-500">    <SiLeetcode />Leetcode</div>
        </div>
      {/* desc */}
        <div className="border-b border-zinc-50/30 text-gray-300 mx-auto w-full px-[5rem] text-left pb-[1rem] text-sm mt-[4rem]">
          My name is Thanisha Belchada and I am a Full Stack Developer from India with a passion for creating fun and amazing websites
        </div>
       
      <h1 className={`text-white flex justify-center items-center w-full h-[2rem] mt-[1rem] font-bold text-xl`}>My Tech Stack</h1>
      

       
    



   
    </div>
  )
}

export default page