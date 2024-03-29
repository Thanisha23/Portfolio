"use client";
 
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/3d-card";
import {items} from "../lib/project-carditems";
import {FaGithub} from "react-icons/fa";
import { poppins } from "../fonts";
const page = () => {
  return (

    <div className={`sm:mx-auto mx-auto md:ml-[11rem] md:px-[0.5rem]  md:mr-[11rem]  md:py-[2rem] relative ${poppins.className}`}>
    <div className="md:ml-[5rem] ml-[2rem] w-[10.5rem] h-[3rem] md:h-[4rem] md:mt-[2rem] mt-[6rem] text-white md:text-4xl text-3xl font-semibold border-b border-b-zinc-50/30  md:pb-2 ">Projects</div>
      <div className="mx-[3rem] md:mt-[3rem] md:grid grid grid-cols-1 sm:grid sm:grid-cols-1 md:grid-cols-2">
{items.map((item)=> (

<CardContainer key={item.name} className="inter-var">
    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[22rem] sm:w-[30rem] h-[29rem] md:h-[29rem] rounded-xl p-6 border  ">
      <CardItem
        translateZ="50"
        className="text-2xl font-bold text-neutral-600 dark:text-white mx-auto"
      >
       {item.name}
      </CardItem>
    
        <button className="absolute text-[0.7rem] bg-white px-[0.4rem] py-[0.1rem] top-[1rem] right-[1rem] rounded-md text-black">{item.status}</button>
        <CardItem
        as="p"
        translateZ="60"
        className="md:text-neutral-500 text-neutral-500 md:text-sm text-sm md:max-w-sm max-w-sm md:h-10 h-10 md:overflow-hidden overflow-hidden md:mt-3 mt-3 md:dark:text-neutral-300 dark:text-neutral-300 md:mx-auto mx-auto"
      >
        {item.about}
      </CardItem>
      
      <CardItem translateZ="100" className="w-full mt-4 ">
        <Image
          src={`/${item.image}`}
          height="1000"
          width="1000"
          className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
          alt="thumbnail"
        />
      </CardItem>
      
      <CardItem
          translateZ={20}
          as="button"
          className="px-4 flex gap-4 justify-center items center py-2 rounded-xl text-xs font-normal dark:text-white md:mt-2 mt-2"
        >
        

    {item.tech_stack.map((tech,techIndex)=> (

       <Image key={techIndex}
       className={tech.includes('/logos/tailwind-css-2.svg') ? 'pt-1' : ''}
        src={tech}
        width={25}
        height={25}
        alt="Picture of the author"
      />

    ))}
    
        </CardItem>

      <div className="md:flex flex md:justify-between justify-between md:items-center items center">
        <CardItem
          translateZ={20}
          as="button"
          className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
        >

          <a href={item.link}>Check Live →</a>
         
        </CardItem>
        <CardItem
          translateZ={20}
          as="button"
          className="px-2 py-2 rounded-3xl bg-black dark:bg-white mb-3 dark:text-black text-white text-xs font-bold"
        >
          <a href={item.repo}>
        <FaGithub size={20}/>
        </a>
        </CardItem>
      </div>
    </CardBody>
  </CardContainer> 
))}
</div>
</div>

  )
}

export default page

{/* <CardItem
        as="p"
        translateZ="60"
        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
      >
        Hover over this card to unleash the power of CSS perspective
      </CardItem> */}