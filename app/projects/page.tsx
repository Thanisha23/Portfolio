"use client";
 
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/3d-card";
import {items} from "../lib/project-carditems";
import {FaGithub} from "react-icons/fa";
const page = () => {
  return (

    <div className="grid ml-[5rem] px-[4rem] mt-[3rem] mr-[10rem] grid-cols-2  py-[2rem] gap-0 relative">
      
{items.map((item,index)=> (

<CardContainer key={index} className="inter-var">
    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
      <CardItem
        translateZ="50"
        className="text-2xl font-bold text-neutral-600 dark:text-white mx-auto"
      >
       {item.name}
      </CardItem>
    
        <button className="absolute text-[0.7rem] bg-white px-[0.2rem] py-[0.1rem] top-[1rem] right-[1rem] rounded-md">{item.status}</button>
        <CardItem
        as="p"
        translateZ="60"
        className="text-neutral-500 text-sm max-w-sm h-9 overflow-hidden mt-4  dark:text-neutral-300 mx-auto"
      >
        {item.about}
      </CardItem>
      
      <CardItem translateZ="100" className="w-full mt-4">
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
          className="px-4 flex gap-4 justify-center items center py-2 rounded-xl text-xs font-normal dark:text-white mt-5"
        >
        {/* <Image
      src="/logos/react-2.svg"
      width={25}
      height={25}
      alt="Picture of the author"
    />
     <Image
     className="pt-2"
      src="/logos/tailwind-css-2.svg"
      width={25}
      height={25}
      alt="Picture of the author"
    />
     <Image
      src="/logos/logo-javascript.svg"
      width={25}
      height={25}
      alt="Picture of the author"
    /> */}

    {item.tech_stack.map((tech,techIndex)=> (

       <Image
       className={tech.includes('/logos/tailwind-css-2.svg') ? 'pt-2' : ''}
        src={tech}
        width={25}
        height={25}
        alt="Picture of the author"
      />

    ))}
    
        </CardItem>

      <div className="flex justify-between items-center mt-4">
        <CardItem
          translateZ={20}
          as="button"
          className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
        >
          Try now →
        </CardItem>
        <CardItem
          translateZ={20}
          as="button"
          className="px-2 py-2 rounded-3xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
        >
        <FaGithub size={20}/>
        </CardItem>
      </div>
    </CardBody>
  </CardContainer> 






))}
     
    {/* <CardContainer className="inter-var">
    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
      <CardItem
        translateZ="50"
        className="text-2xl font-bold text-neutral-600 dark:text-white mx-auto"
      >
       AnyDo:&gt;
      </CardItem>
    
        <button className="absolute text-[0.7rem] bg-white px-[0.2rem] py-[0.1rem] top-[1rem] right-[1rem] rounded-md">Completed</button>
        <CardItem
        as="p"
        translateZ="60"
        className="text-neutral-500 text-sm max-w-md mt-4  dark:text-neutral-300 mx-auto"
      >
        Hover over this card to unleash the power of CSS perspective
      </CardItem>
      
      <CardItem translateZ="100" className="w-full mt-4">
        <Image
          src="/anydo.jpeg"
          height="1000"
          width="1000"
          className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
          alt="thumbnail"
        />
      </CardItem>
      
      <CardItem
          translateZ={20}
          as="button"
          className="px-4 flex gap-4 justify-center items center py-2 rounded-xl text-xs font-normal dark:text-white mt-5"
        >
        <Image
      src="/logos/react-2.svg"
      width={25}
      height={25}
      alt="Picture of the author"
    />
     <Image
     className="pt-2"
      src="/logos/tailwind-css-2.svg"
      width={25}
      height={25}
      alt="Picture of the author"
    />
     <Image
      src="/logos/logo-javascript.svg"
      width={25}
      height={25}
      alt="Picture of the author"
    />
    
        </CardItem>

      <div className="flex justify-between items-center mt-4">
        <CardItem
          translateZ={20}
          as="button"
          className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
        >
          Try now →
        </CardItem>
        <CardItem
          translateZ={20}
          as="button"
          className="px-2 py-2 rounded-3xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
        >
        <FaGithub size={20}/>
        </CardItem>
      </div>
    </CardBody>
  </CardContainer> */}
  

  {/*  */}

  {/* <CardContainer className="inter-var">
    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
      <CardItem
        translateZ="50"
        className="text-2xl font-bold text-neutral-600 dark:text-white mx-auto"
      >
       AnyDo:&gt;
      </CardItem>
    
        <button className="absolute text-[0.7rem] bg-white px-[0.2rem] py-[0.1rem] top-[1rem] right-[1rem] rounded-md">Completed</button>
        <CardItem
        as="p"
        translateZ="60"
        className="text-neutral-500 text-sm max-w-md mt-4  dark:text-neutral-300 mx-auto"
      >
        Hover over this card to unleash the power of CSS perspective
      </CardItem>
      
      <CardItem translateZ="100" className="w-full mt-4">
        <Image
          src="/anydo.jpeg"
          height="1000"
          width="1000"
          className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
          alt="thumbnail"
        />
      </CardItem>
      
      <div className="flex justify-between items-center mt-20">
        <CardItem
          translateZ={20}
          as="button"
          className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
        >
          Try now →
        </CardItem>
        <CardItem
          translateZ={20}
          as="button"
          className="px-2 py-2 rounded-3xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
        >
        <FaGithub size={20}/>
        </CardItem>
      </div>
    </CardBody>
  </CardContainer> */}

   {/*////  */}

   {/* <CardContainer className="inter-var">
    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
      <CardItem
        translateZ="50"
        className="text-2xl font-bold text-neutral-600 dark:text-white mx-auto"
      >
       AnyDo:&gt;
      </CardItem>
    
        <button className="absolute text-[0.7rem] bg-white px-[0.2rem] py-[0.1rem] top-[1rem] right-[1rem] rounded-md">Completed</button>
        <CardItem
        as="p"
        translateZ="60"
        className="text-neutral-500 text-sm max-w-md mt-4  dark:text-neutral-300 mx-auto"
      >
        Hover over this card to unleash the power of CSS perspective
      </CardItem>
      
      <CardItem translateZ="100" className="w-full mt-4">
        <Image
          src="/anydo.jpeg"
          height="1000"
          width="1000"
          className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
          alt="thumbnail"
        />
      </CardItem>
      
      <div className="flex justify-between items-center mt-20">
        <CardItem
          translateZ={20}
          as="button"
          className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
        >
          Try now →
        </CardItem>
        <CardItem
          translateZ={20}
          as="button"
          className="px-2 py-2 rounded-3xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
        >
        <FaGithub size={20}/>
        </CardItem>
      </div>
    </CardBody>
  </CardContainer> */}
  
 
  
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