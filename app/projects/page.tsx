"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/3d-card";
import { items } from "../lib/project-carditems";
import { FaGithub } from "react-icons/fa";
import { poppins } from "../fonts";
import { motion } from "framer-motion";

const ProjectsPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.div
      className={`sm:mx-auto mx-auto md:ml-[11rem] md:px-[0.5rem] md:mr-[11rem] md:py-[2rem] relative ${poppins.className}`}
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
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[22rem] sm:w-[30rem] h-[29rem] md:h-[29rem] rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-2xl font-bold text-neutral-600 dark:text-white mx-auto"
                >
                  {item.name}
                </CardItem>

                <button className="absolute text-[0.7rem] bg-white px-[0.4rem] py-[0.1rem] top-[1rem] right-[1rem] rounded-md text-black">
                  {item.status}
                </button>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="md:text-neutral-500 text-neutral-500 md:text-sm text-sm md:max-w-sm max-w-sm md:h-10 h-10 md:overflow-hidden overflow-hidden md:mt-3 mt-3 md:dark:text-neutral-300 dark:text-neutral-300 md:mx-auto mx-auto"
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
                  className="px-4 flex gap-4 justify-center items center py-2 rounded-xl text-xs font-normal dark:text-white md:mt-2 mt-2"
                >
                  {item.tech_stack.map((tech, techIndex) => (
                    <Image
                      key={techIndex}
                      className={
                        tech.includes('/logos/tailwind-css-2.svg')
                          ? 'pt-1'
                          : tech.includes('/logos/express-1')
                          ? 'pt-2'
                          : ''
                      }
                      src={tech}
                      width={
                        tech.includes('/logos/hono-1.png')
                          ? 20
                          : tech.includes('/logos/express-1')
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
  );
};

export default ProjectsPage;