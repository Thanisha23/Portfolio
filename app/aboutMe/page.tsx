"use client";
import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPython, FaDocker, FaGit, FaUbuntu } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode, SiTailwindcss, SiRedux, SiNextdotjs, SiPrisma, SiPostgresql, SiExpress, SiMongodb, SiTypescript, SiJavascript, SiCplusplus, SiZod, SiPnpm, SiCloudflare, SiJsonwebtokens, SiMui } from "react-icons/si";
import { poppins } from "../fonts";
import { motion } from "framer-motion";

const page = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent): void => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    setIsLoaded(true);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="fixed inset-0 z-0 bg-black">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGNpcmNsZSBjeD0iMyIgY3k9IjMiIHI9IjAuNyIgZmlsbD0iIzMzMzMzMyIvPjwvc3ZnPg==')] opacity-15"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-700/30 to-black/50"></div>
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1IiBkPSJNMCAwaDMwMHYzMDBIMHoiLz48L3N2Zz4=')]"></div>
      </div>
      <div
        className="fixed w-64 h-64 rounded-full bg-white/10 blur-3xl"
        style={{
          left: `${mousePosition.x / 10}px`,
          top: `${mousePosition.y / 10}px`,
          transform: "translate(-50%, -50%)",
          transition: "left 2s ease-out, top 2s ease-out",
        }}
      ></div>
      <div
        className="fixed w-96 h-96 rounded-full bg-gray-400/10 blur-3xl"
        style={{
          right: `${mousePosition.x / 15}px`,
          bottom: `${mousePosition.y / 15}px`,
          transform: "translate(50%, 50%)",
          transition: "right 3s ease-out, bottom 3s ease-out",
        }}
      ></div>

      <motion.div
        className={`${poppins.className} relative z-10`}
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        <div>
          <div className="relative mt-[7rem]">
            <div>
              <div className="bg-green-500 w-1 h-1 shadow-[0_0_5px_5px_rgba(240,240,240,0.3)] rounded-full -top-[1rem] md:left-[22rem] left-[4rem] absolute animate-pulse"></div>
              <div className="text-white text-base -top-[1.7rem] left-[4.8rem] md:left-[22.8rem] absolute font-semibold mb-[2rem]">
                Available for hire
              </div>
            </div>
          </div>
          <div className="pt-[3rem] w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto bg-transparent rounded-2xl mt-[1rem] text-white font-bold text-xl sm:text-2xl md:text-4xl lg:text-5xl text-center leading-relaxed md:leading-[3.5rem]">
  My journey from student to developer ~ in progress.
</div>

          <div className="md:w-[45rem] md:mt-[3rem] md:flex md:justify-center md:items-center md:gap-1 md:mx-auto">
            <a
              href="https://github.com/Thanisha23"
              className="text-white font-semibold hover:text-black hover:bg-white border border-zinc-50 w-[14rem] md:w-[10rem] h-[3rem] mx-auto mt-[4rem] rounded-3xl flex justify-center items-center gap-[1rem] md:mt-0 transition-colors duration-500 "
            >
              <FaGithub size={27} />
              Github
            </a>
            <a
              href="https://x.com/Thanisha23?t=X2xlsf3k4N10ZJ9A9j980g&s=09"
              className="border border-zinc-50 text-white font-semibold hover:text-black hover:bg-white w-[14rem] md:w-[10rem] h-[3rem] mx-auto mt-[1.5rem] md:mt-0 rounded-3xl flex justify-center items-center gap-[1rem] transition-colors duration-500"
            >
              <FaXTwitter size={25} />
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/thanisha-belchada-b39796261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="text-white font-semibold hover:text-black hover:bg-white border border-zinc-50 w-[14rem] md:w-[10rem] h-[3rem] mx-auto mt-[1.5rem] rounded-3xl flex justify-center items-center gap-[1rem] transition-colors duration-500 md:mt-0"
            >
              <FaLinkedinIn size={18} /> LinkedIn
            </a>
            <a
              href="https://leetcode.com/thanisha_b/"
              className="text-white font-semibold hover:text-black hover:bg-white border border-zinc-50 w-[14rem] md:w-[10rem] h-[3rem] mx-auto mt-[1.5rem] rounded-3xl flex justify-center items-center gap-[1rem] transition-colors duration-500 md:mt-0"
            >
              <SiLeetcode />
              Leetcode
            </a>
          </div>
          
          {/* Intro text */}
          <div className="text-center border-b border-zinc-50/30 text-gray-300 mx-auto w-full px-[3rem] pb-[1.5rem] text-lg md:text-md mt-[2rem] md:mt-[3rem] md:w-[35rem] ">
          Turning <span className="font-semibold">"just one more feature"</span> into a 3-hour coding spree.
          </div>

          {/* My Tech Stack heading */}
          <h1 className="text-white text-center mt-12 md:mt-16 font-bold text-2xl md:text-3xl mb-2">
            My Tech Stack
          </h1>
          <p className="text-gray-400 text-center mb-8 max-w-xl mx-auto px-4 text-sm md:text-base">
            Technologies and tools I've worked with and enjoy using
          </p>

          {/* Tech Stack Cards - Fixed Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 mb-16">
            {/* Frontend Card */}
            <motion.div
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
              }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-black/40 backdrop-blur-sm border border-zinc-50/30 rounded-xl overflow-hidden shadow-lg p-5"
            >
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-md p-2 mr-3">
                  <FaReact className="text-white text-xl" />
                </div>
                <h2 className="text-white font-bold text-xl">Frontend</h2>
              </div>
              
              <div className="space-y-3">
                <div className="space-y-1">
                  <p className="text-gray-400 text-xs uppercase tracking-wider">UI Libraries & Frameworks</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 text-white px-3 py-1 rounded flex items-center gap-1 text-xs font-medium">
                      <FaReact className="text-blue-400" /> React
                    </span>
                    <span className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 text-white px-3 py-1 rounded flex items-center gap-1 text-xs font-medium">
                      <SiNextdotjs className="text-white" /> Next.js
                    </span>
                    <span className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 text-white px-3 py-1 rounded flex items-center gap-1 text-xs font-medium">
                      <SiMui className="text-blue-300" /> Material UI
                    </span>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <p className="text-gray-400 text-xs uppercase tracking-wider">Styling</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 text-white px-3 py-1 rounded flex items-center gap-1 text-xs font-medium">
                      <SiTailwindcss className="text-cyan-400" /> Tailwind
                    </span>
                    <span className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 text-white px-3 py-1 rounded flex items-center gap-1 text-xs font-medium">
                      <FaHtml5 className="text-orange-500" /> HTML
                    </span>
                    <span className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 text-white px-3 py-1 rounded flex items-center gap-1 text-xs font-medium">
                      <FaCss3Alt className="text-blue-500" /> CSS
                    </span>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <p className="text-gray-400 text-xs uppercase tracking-wider">State Management</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-white px-3 py-1 rounded flex items-center gap-1 text-xs font-medium">
                      <SiRedux className="text-purple-500" /> Redux Toolkit
                    </span>
                    <span className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-white px-3 py-1 rounded flex items-center gap-1 text-xs font-medium">
                      <SiRedux className="text-purple-300" /> RTK Query
                    </span>
                    <span className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-white px-3 py-1 rounded text-xs font-medium">
                      Zustand
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Backend Card */}
            <motion.div
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.1 } }
              }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-black/40 backdrop-blur-sm border border-zinc-50/30 rounded-xl overflow-hidden shadow-lg p-5"
            >
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-md p-2 mr-3">
                  <FaNodeJs className="text-white text-xl" />
                </div>
                <h2 className="text-white font-bold text-xl">Backend</h2>
              </div>
              
              <div className="space-y-3">
                <div className="space-y-1">
                  <p className="text-gray-400 text-xs uppercase tracking-wider">Runtime & Frameworks</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 text-white px-3 py-1 rounded flex items-center gap-1 text-xs font-medium">
                      <FaNodeJs className="text-green-500" /> Node.js
                    </span>
                    <span className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 text-white px-3 py-1 rounded flex items-center gap-1 text-xs font-medium">
                      <SiExpress className="text-white" /> Express
                    </span>
                    <span className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 text-white px-3 py-1 rounded text-xs font-medium">
                      Hono
                    </span>
                    <span className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 text-white px-3 py-1 rounded flex items-center gap-1 text-xs font-medium">
                      <SiCloudflare className="text-orange-500" /> Cloudflare
                    </span>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <p className="text-gray-400 text-xs uppercase tracking-wider">Databases & ORM</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 text-white px-3 py-1 rounded flex items-center gap-1 text-xs font-medium">
                      <SiPostgresql className="text-blue-400" /> PostgreSQL
                    </span>
                    <span className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 text-white px-3 py-1 rounded flex items-center gap-1 text-xs font-medium">
                      <SiMongodb className="text-green-400" /> MongoDB
                    </span>
                    <span className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 text-white px-3 py-1 rounded flex items-center gap-1 text-xs font-medium">
                      <SiPrisma className="text-gray-300" /> Prisma
                    </span>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <p className="text-gray-400 text-xs uppercase tracking-wider">Authentication</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gradient-to-r from-teal-600/20 to-cyan-600/20 text-white px-3 py-1 rounded flex items-center gap-1 text-xs font-medium">
                      <SiJsonwebtokens className="text-yellow-400" /> JWT
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Programming Languages Card */}
            <motion.div
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.2 } }
              }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-black/40 backdrop-blur-sm border border-zinc-50/30 rounded-xl overflow-hidden shadow-lg p-5"
            >
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-md p-2 mr-3">
                  <SiJavascript className="text-white text-xl" />
                </div>
                <h2 className="text-white font-bold text-xl">Programming Languages</h2>
              </div>
              
              <div className="space-y-3">
                <div className="space-y-1">
                  <p className="text-gray-400 text-xs uppercase tracking-wider">Web Development</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gradient-to-r from-orange-600/20 to-red-600/20 text-white px-3 py-1 rounded flex items-center gap-1 text-xs font-medium">
                      <SiJavascript className="text-yellow-300" /> JavaScript
                    </span>
                    <span className="bg-gradient-to-r from-orange-600/20 to-red-600/20 text-white px-3 py-1 rounded flex items-center gap-1 text-xs font-medium">
                      <SiTypescript className="text-blue-400" /> TypeScript
                    </span>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <p className="text-gray-400 text-xs uppercase tracking-wider">General Purpose</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gradient-to-r from-red-600/20 to-pink-600/20 text-white px-3 py-1 rounded flex items-center gap-1 text-xs font-medium">
                      <SiCplusplus className="text-blue-500" /> C++
                    </span>
                    <span className="bg-gradient-to-r from-red-600/20 to-pink-600/20 text-white px-3 py-1 rounded flex items-center gap-1 text-xs font-medium">
                      <FaPython className="text-yellow-300" /> Python
                    </span>
                  </div>
                </div>
                
               
              </div>
            </motion.div>

            {/* Other Tools Card */}
            <motion.div
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.3 } }
              }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-black/40 backdrop-blur-sm border border-zinc-50/30 rounded-xl overflow-hidden shadow-lg p-5"
            >
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-violet-500 to-purple-500 rounded-md p-2 mr-3">
                  <FaDocker className="text-white text-xl" />
                </div>
                <h2 className="text-white font-bold text-xl">Development Tools</h2>
              </div>
              
              <div className="space-y-3">
                <div className="space-y-1">
                  <p className="text-gray-400 text-xs uppercase tracking-wider">Containerization & DevOps</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gradient-to-r from-violet-600/20 to-purple-600/20 text-white px-3 py-1 rounded flex items-center gap-1 text-xs font-medium">
                      <FaDocker className="text-blue-400" /> Docker
                    </span>
                    <span className="bg-gradient-to-r from-violet-600/20 to-purple-600/20 text-white px-3 py-1 rounded flex items-center gap-1 text-xs font-medium">
                      <FaGit className="text-orange-500" /> Git
                    </span>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <p className="text-gray-400 text-xs uppercase tracking-wider">Operating Systems</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gradient-to-r from-purple-600/20 to-fuchsia-600/20 text-white px-3 py-1 rounded flex items-center gap-1 text-xs font-medium">
                      <FaUbuntu className="text-orange-500" /> Ubuntu
                    </span>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <p className="text-gray-400 text-xs uppercase tracking-wider">Package Managers & Utilities</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gradient-to-r from-fuchsia-600/20 to-pink-600/20 text-white px-3 py-1 rounded flex items-center gap-1 text-xs font-medium">
                      <SiPnpm className="text-yellow-500" /> pnpm
                    </span>
                    <span className="bg-gradient-to-r from-fuchsia-600/20 to-pink-600/20 text-white px-3 py-1 rounded flex items-center gap-1 text-xs font-medium">
                      <SiZod className="text-blue-300" /> zod
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

{/* Experience and Achievements Section Heading */}
<h1 className="text-white text-center mt-16 font-bold text-2xl md:text-3xl mb-2">
  Experience & Achievements
</h1>
<p className="text-gray-400 text-center mb-8 max-w-xl mx-auto px-4 text-sm md:text-base">
  My professional journey and key accomplishments
</p>

{/* Experience Cards - Contained Grid Layout */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 mb-16">
  {/* Professional Experience Card */}
  <motion.div
    variants={{
      hidden: { y: 20, opacity: 0 },
      visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.1 } }
    }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className="bg-black/40 backdrop-blur-sm border border-zinc-50/30 rounded-xl overflow-hidden shadow-lg p-5"
  >
    <div className="space-y-5">
      <h3 className="text-white font-semibold text-lg border-b border-zinc-50/20 pb-2">Professional Experience</h3>
      
      {/* Internship - Engaze */}
      <div className="relative pl-6 border-l border-zinc-50/30">
        <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-indigo-500"></div>
        <div>
          <div className="flex flex-wrap justify-between">
            <h3 className="text-white font-semibold">Engaze | SDE Intern</h3>
            <span className="text-xs text-gray-400 bg-black/30 rounded-full px-2 py-0.5 ml-2">Aug'24 - Feb'25</span>
          </div>
          <p className="text-sm text-gray-300 mt-1">
          Built RESTful APIs, developed pages, created an admin dashboard, implemented modern frontend UI components, integrated third-party APIs, and managed application state using Redux.
          </p>
        </div>
      </div>
      
      {/* Internship - Aarsaar Technologies */}
      <div className="relative pl-6 border-l border-zinc-50/30">
        <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-indigo-500"></div>
        <div>
          <div className="flex flex-wrap justify-between">
            <h3 className="text-white font-semibold">Aarsaar Technologies | Frontend Developer</h3>
            <span className="text-xs text-gray-400 bg-black/30 rounded-full px-2 py-0.5 ml-2">Jul'24 - Aug'24</span>
          </div>
          <p className="text-sm text-gray-300 mt-1">
            Enhanced web page layouts for Yatri Cabs, implemented Redux for efficient state management, and helped convert the project from React to Next.js.
          </p>
        </div>
      </div>
      
      {/* Freelance Experience */}
      {/* <div className="relative pl-6 border-l border-zinc-50/30">
        <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-indigo-500"></div>
        <div>
          <div className="flex flex-wrap justify-between">
            <h3 className="text-white font-semibold">Freelance Full Stack Developer</h3>
            <span className="text-xs text-gray-400 bg-black/30 rounded-full px-2 py-0.5 ml-2">2022 - Present</span>
          </div>
          <p className="text-sm text-gray-300 mt-1">
            Creating responsive web applications with modern tech stacks.
          </p>
        </div>
      </div> */}
    </div>
  </motion.div>

  {/* Positions of Responsibility Card */}
  <motion.div
    variants={{
      hidden: { y: 20, opacity: 0 },
      visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.15 } }
    }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className="bg-black/40 backdrop-blur-sm border border-zinc-50/30 rounded-xl overflow-hidden shadow-lg p-5"
  >
    <div className="space-y-5">
      <h3 className="text-white font-semibold text-lg border-b border-zinc-50/20 pb-2">Positions & Education</h3>
      
      {/* Position */}
      <div className="relative pl-6 border-l border-zinc-50/30">
        <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-purple-500"></div>
        <div>
          <div className="flex flex-wrap justify-between">
            <h3 className="text-white font-semibold">Training and Placement Coordinator</h3>
            <span className="text-xs text-gray-400 bg-black/30 rounded-full px-2 py-0.5 ml-2">2021 - 2025</span>
          </div>
          <p className="text-sm text-gray-300 mt-1">
            Coordinated with faculty, TNP cell, and students for training and placement activities at TCET.
          </p>
        </div>
      </div>
      
      {/* Education */}
      <div className="relative pl-6 border-l border-zinc-50/30 mt-6">
        <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-indigo-500"></div>
        <div>
          <div className="flex flex-wrap justify-between">
            <h3 className="text-white font-semibold">Bachelor of Technology</h3>
            <span className="text-xs text-gray-400 bg-black/30 rounded-full px-2 py-0.5 ml-2">2021 - 2025</span>
          </div>
          <p className="text-sm text-gray-300 mt-1">
            Computer Science and Engineering
          </p>
          <p className="text-xs text-gray-400">
            Specialized in web development and cloud computing
          </p>
        </div>
      </div>
    </div>
  </motion.div>

  {/* Achievements Card */}
  <motion.div
    variants={{
      hidden: { y: 20, opacity: 0 },
      visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.2 } }
    }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className="bg-black/40 backdrop-blur-sm border border-zinc-50/30 rounded-xl overflow-hidden shadow-lg p-5"
  >
    <div className="space-y-4">
      <h3 className="text-white font-semibold text-lg border-b border-zinc-50/20 pb-2">Notable Achievements</h3>
      
      <div className="space-y-3">
        <div className="flex items-start">
          <div className="text-indigo-400 mr-3 mt-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-sm text-gray-300">
            <span className="text-white font-medium">SIH 2023 | Internal College Winner</span> - 
            Smart India Hackathon internal competition winner.
          </p>
        </div>
        
        <div className="flex items-start">
          <div className="text-indigo-400 mr-3 mt-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-sm text-gray-300">
            <span className="text-white font-medium">Aavishkaar Research Convention 2023</span> - 
            Advanced to state level after winning at Zonal Level.
          </p>
        </div>
{/*         
        <div className="flex items-start">
          <div className="text-indigo-400 mr-3 mt-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-sm text-gray-300">Deployed 10+ web applications with modern tech stacks</p>
        </div> */}
      </div>
    </div>
  </motion.div>

  {/* Certifications Card */}
  <motion.div
    variants={{
      hidden: { y: 20, opacity: 0 },
      visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.25 } }
    }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className="bg-black/40 backdrop-blur-sm border border-zinc-50/30 rounded-xl overflow-hidden shadow-lg p-5"
  >
    <div className="space-y-4">
      <h3 className="text-white font-semibold text-lg border-b border-zinc-50/20 pb-2">Certifications & Skills</h3>
      
      <div className="flex items-start">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-1.5 rounded-md mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <div>
          <h4 className="text-white font-medium text-sm">Postman API Fundamentals Student Expert</h4>
          <p className="text-xs text-gray-400">July 2023</p>
        </div>
      </div>
      
      {/* <div className="mt-4 pt-2 border-t border-zinc-50/10">
        <h4 className="text-white font-medium text-sm mb-2">Additional Skills</h4>
        <div className="flex flex-wrap gap-2">
          <span className="bg-gradient-to-r from-slate-700/50 to-slate-600/50 text-white px-2 py-1 rounded text-xs">Problem Solving</span>
          <span className="bg-gradient-to-r from-slate-700/50 to-slate-600/50 text-white px-2 py-1 rounded text-xs">API Development</span>
          <span className="bg-gradient-to-r from-slate-700/50 to-slate-600/50 text-white px-2 py-1 rounded text-xs">UI/UX Design</span>
          <span className="bg-gradient-to-r from-slate-700/50 to-slate-600/50 text-white px-2 py-1 rounded text-xs">System Design</span>
          <span className="bg-gradient-to-r from-slate-700/50 to-slate-600/50 text-white px-2 py-1 rounded text-xs">DSA</span>
        </div>
      </div> */}
    </div>
  </motion.div>
</div>
        </div>
      </motion.div>
    </>
  );
};

export default page;