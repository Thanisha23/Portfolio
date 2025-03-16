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
                <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-white/[0.1] dark:bg-gray-900/80 bg-gray-900/80 dark:border-white/[0.2] border-white/[0.2] w-[22rem] sm:w-[30rem] h-[29rem] md:h-[29rem] rounded-xl p-6 border backdrop-blur-sm">
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
                    className="md:text-neutral-500 text-neutral-300 md:text-sm text-sm md:max-w-sm max-w-sm md:h-10 h-10 md:overflow-hidden overflow-hidden md:mt-3 mt-3 md:dark:text-neutral-300 dark:text-neutral-300 md:mx-auto mx-auto"
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
                    className="px-4 flex gap-4 justify-center items center py-2 rounded-xl text-xs font-normal text-white dark:text-white md:mt-2 mt-2"
                  >
                    {item.tech_stack.map((tech, techIndex) => (
                      <Image
                        key={techIndex}
                        className={
                          tech.includes("/logos/tailwind-css-2.svg")
                            ? "pt-1"
                            : tech.includes("/logos/express-1")
                            ? "pt-2"
                            : ""
                        }
                        src={tech}
                        width={
                          tech.includes("/logos/hono-1.png")
                            ? 20
                            : tech.includes("/logos/express-1")
                            ? 70
                            : 25
                        }
                        height={25}
                        alt="Picture of the author"
                      />
                    ))}
                  </CardItem>

                  <div className="md:flex flex md:justify-between justify-between md:items-center items center">
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white text-white"
                    >
                      <a href={item.link}>{item.link === "" ? "Coming soon..": "Check Live →"}</a>
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-2 py-2 rounded-3xl bg-black dark:bg-white mb-3 dark:text-black text-white text-xs font-bold"
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
