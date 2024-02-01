
import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { poppins } from "../fonts";
const page = () => {
  return (
    <div className={`${poppins.className}`}>
      <div className=" relative mt-[7rem]">
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
     <div className="mt-[1.5rem] mb-[2rem] flex flex-col gap-10 justify-center items-center">

    {/* card 1*/}
     <div className="w-[19rem] h-[9rem] bg-[#1E1E1F] rounded-lg  border border-zinc-50/30 text-white">
      <h2 className="p-[0.5rem] px-[1rem] mt-[0.5rem] text-white font-semibold text-lg">Frontend</h2>
      <div className="flex  justify-center items-center gap-3"> <div className="bg-[#2D2D2D] p-[0.2rem] px-[0.4rem] rounded-md text-sm">React</div>
      <div className="bg-[#2D2D2D] p-[0.2rem] px-[0.4rem] rounded-md text-sm">Tailwind</div>
      <div className="bg-[#2D2D2D] p-[0.2rem] px-[0.4rem] rounded-md text-sm">HTML</div>
      <div className="bg-[#2D2D2D] p-[0.2rem] px-[0.4rem] rounded-md text-sm">CSS</div>
      
      </div>
      <div className="flex  justify-center items-center gap-4 mt-2"> 
      <div className="bg-[#2D2D2D] p-[0.2rem] px-[0.4rem] rounded-md text-sm">Nextjs</div>
      <div className="bg-[#2D2D2D] p-[0.2rem] px-[0.4rem] rounded-md text-sm">Shadcn</div>
      {/* <div className="bg-red-300 px-1 rounded-md">CSS</div> */}
      
      </div>
     {/* hover:scale-[1.2] hover:z-10 hover:transition-transform hover:duration-300 */}


        </div>
        {/* card 2*/}
        <div className="w-[19rem] h-[9rem] bg-[#1E1E1F] rounded-lg  border border-zinc-50/30 text-white">
      <h2 className="p-[0.5rem] px-[1rem] mt-[0.5rem] text-white font-semibold text-lg">Backend</h2>
      <div className="flex  justify-center items-center gap-3"> <div className="bg-[#2D2D2D] p-[0.2rem] px-[0.4rem] rounded-md text-sm">NodeJs</div>
      <div className="bg-[#2D2D2D] p-[0.2rem] px-[0.4rem] rounded-md text-sm">Express</div>
      <div className="bg-[#2D2D2D] p-[0.2rem] px-[0.4rem] rounded-md text-sm">MongoDB</div>
      
      
      </div>
      <div className="flex  justify-center items-center gap-4 mt-2"> 
      <div className="bg-[#2D2D2D] p-[0.2rem] px-[0.4rem] rounded-md text-sm">JWT</div>
      <div className="bg-[#2D2D2D] p-[0.2rem] px-[0.4rem] rounded-md text-sm">Mongoose</div>
      {/* <div className="bg-red-300 px-1 rounded-md">CSS</div> */}
      
      </div>
     {/* hover:scale-[1.2] hover:z-10 hover:transition-transform hover:duration-300 */}


        </div>

        {/* card 3*/}
        <div className="w-[19rem] h-[9rem] bg-[#1E1E1F] rounded-lg  border border-zinc-50/30 text-white">
      <h2 className="p-[0.5rem] px-[1rem] mt-[0.5rem] text-white font-semibold text-lg">Programming Languages</h2>
      <div className="flex  justify-center items-center gap-3"> <div className="bg-[#2D2D2D] p-[0.2rem] px-[0.4rem] rounded-md text-sm">C++</div>
      <div className="bg-[#2D2D2D] p-[0.2rem] px-[0.4rem] rounded-md text-sm">Javascript</div>
      <div className="bg-[#2D2D2D] p-[0.2rem] px-[0.4rem] rounded-md text-sm">Typescript</div>
     
      
      </div>
      <div className="flex  justify-center items-center gap-4 mt-2"> 
      <div className="bg-[#2D2D2D] p-[0.2rem] px-[0.4rem] rounded-md text-sm">Python</div>
     

      
      </div>
   


        </div>

        {/* card 4*/}
        <div className="w-[19rem] h-[9rem] bg-[#1E1E1F] rounded-lg  border border-zinc-50/30 text-white">
      <h2 className="p-[0.5rem] px-[1rem] mt-[0.5rem] text-white font-semibold text-lg">Other stuff</h2>
      <div className="flex  justify-center items-center gap-3"> <div className="bg-[#2D2D2D] p-[0.2rem] px-[0.4rem] rounded-md text-sm">zod</div>
      <div className="bg-[#2D2D2D] p-[0.2rem] px-[0.4rem] rounded-md text-sm">Ubuntu</div>
      <div className="bg-[#2D2D2D] p-[0.2rem] px-[0.4rem] rounded-md text-sm">Git</div>
     
      
      </div>
      <div className="flex  justify-center items-center gap-4 mt-2"> 
      <div className="bg-[#2D2D2D] p-[0.2rem] px-[0.4rem] rounded-md text-sm">Pnpm</div>
     

      
      </div>
   


        </div>
     </div>
       
    

      

   
    </div>
  )
}

export default page