'use client';
import React from 'react';
import {links,socialLinks} from '../lib/navitems'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';


const SideBar = () => {
const pathname = usePathname();
console.log(`pathname ${usePathname()}`);
  return (
    <div className="relative ">
       <ul className='bg-transparent px-[0.4rem] py-[0.5] w-[3.8rem] h-[15.5rem] border-[2px] border-white-400/20 m-[1rem] absolute top-[12rem] left-[1rem] rounded-full flex-row justify-center items-center '>
      {links.map((link:any) => (
        <li key={link.name} onClick={()=>{
          console.log("clicked");
        }}>
          <Link href={link.href} legacyBehavior> 
           <a className={clsx(
            'w-[2.8rem] h-[2.8rem] flex  justify-center items-center mt-[0.8rem]  hover:bg-white rounded-full hover:text-black transition-colors duration-300',
            {
              'text-black bg-white': pathname === link.href,
              'text-white': pathname !== link.href,
            },
           )}
           >{link.icon}</a>
           </Link>
           </li>
      ))}
        
        </ul> 
         

        <ul className='bg-transparent w-[8.2rem] h-[3.8rem] border-[2px] text-white border-white-400/20 m-[1rem] absolute top-[2rem] right-[2rem] rounded-full flex-row justify-center items-center flex space-x-2'>
      {socialLinks.map((item:any,index:number) => (
        <li key={index} className='w-[2.8rem] h-[2.8rem] flex justify-center items-center   hover:bg-white rounded-full hover:text-black transition-colors duration-500'>{item.icon}</li>
      ))}
        
        </ul> 
    </div>
  )
}

export default SideBar