"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CardBody, CardContainer, CardItem } from "../components/3d-card";
import { items } from "../lib/project-carditems";
import { FaGithub } from "react-icons/fa";
import { poppins } from "../fonts";
import { motion } from "framer-motion";

const ProjectsPage = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
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
        className={`sm:mx-auto mx-auto md:ml-[11rem] md:px-[0.5rem] md:mr-[11rem] md:py-[2rem] relative z-10 ${poppins.className}`}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="md:ml-[5rem] ml-[2rem] w-[10.5rem] h-[3rem] md:h-[4rem] md:mt-[2rem] mt-[6rem] text-white md:text-4xl text-3xl font-semibold border-b border-b-zinc-50/30 md:pb-2"
          variants={itemVariants}
        >
          Projects
        </motion.div>
        <motion.div className="mx-[3rem] md:mt-[3rem] md:grid grid grid-cols-1 sm:grid sm:grid-cols-1 md:grid-cols-2">
          {items.map((item) => (
            <motion.div key={item.name} variants={itemVariants}>
              <CardContainer className="inter-var">
                <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-white/[0.1] dark:bg-gray-900/80 bg-gray-900/80 dark:border-white/[0.2] border-white/[0.2] w-[22rem] sm:w-[30rem] h-[29rem] md:h-[29rem] rounded-xl p-6 border backdrop-blur-sm flex flex-col">
                  <CardItem
                    translateZ="50"
                    className="text-2xl font-bold text-white dark:text-white mx-auto"
                  >
                    {item.name}
                  </CardItem>

                  <button className="absolute text-[0.7rem] bg-white px-[0.4rem] py-[0.1rem] top-[1rem] right-[1rem] rounded-md text-black">
                    {item.status}
                  </button>

                  <CardItem
                    as="p"
                    translateZ="60"
                    className="md:text-neutral-400 text-neutral-300 md:text-sm text-sm max-w-full md:min-h-[3rem] md:mb-2 mb-2 md:mt-3 mt-3 md:dark:text-neutral-300 dark:text-neutral-300 md:mx-auto mx-auto line-clamp-3"
                  >
                    {item.about}
                  </CardItem>

                  <CardItem
                    translateZ="100"
                    className="w-full mt-2 flex-shrink-0"
                  >
                    <Image
                      src={`/${item.image}`}
                      height="1000"
                      width="1000"
                      className="h-[13rem] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>

                  <CardItem
                    translateZ={20}
                    className="mt-2 flex-shrink-0 h-[3.5rem] overflow-hidden"
                  >
                    <div className="flex flex-wrap gap-2 justify-center items-center px-1 overflow-y-auto max-h-[3.5rem] scrollbar-container">
                      {Array.isArray(item.tech_stack) &&
                        item.tech_stack[0]?.name &&
                        item.tech_stack.map((tech, techIndex) => (
                          <img
                            key={techIndex}
                            src={tech.badge}
                            alt={tech.name}
                            height="25"
                            className="h-6"
                          />
                        ))}
                    </div>
                  </CardItem>

                  <div className="mt-auto pt-2 flex justify-between items-center w-full">
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white text-white"
                    >
                      <a href={item.link}>
                        {item.link === "" ? "Coming soon.." : "Check Live →"}
                      </a>
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-2 py-2 rounded-3xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      <a href={item.repo}>
                        <FaGithub size={20} />
                      </a>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default ProjectsPage;
