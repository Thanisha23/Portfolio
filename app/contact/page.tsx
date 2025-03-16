"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Toaster, toast } from "sonner";
import { poppins } from "../fonts";
import { useForm } from "react-hook-form";
import {
  FaPaperPlane,
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success("Message sent successfully!", {
        description: "I'll get back to you as soon as possible.",
      });

      reset();
    } catch (error) {
      toast.error("Failed to send message", {
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-0 bg-black">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGNpcmNsZSBjeD0iMyIgY3k9IjMiIHI9IjAuNyIgZmlsbD0iIzMzMzMzMyIvPjwvc3ZnPg==')] opacity-15"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-700/30 to-black/50"></div>
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1IiBkPSJNMCAwaDMwMHYzMDBIMHoiLz48L3N2Zz4=')]"></div>
      </div>
      <div
        className="fixed w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-white/10 blur-3xl"
        style={{
          left: "30%",
          top: "30%",
          transform: "translate(-50%, -50%)",
        }}
      ></div>
      <div
        className="fixed w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-gray-400/10 blur-3xl"
        style={{
          right: "20%",
          bottom: "30%",
          transform: "translate(50%, 50%)",
        }}
      ></div>
      <Toaster position="top-center" richColors />
      <div
        className={`${poppins.className} min-h-screen relative z-10 flex items-center justify-center px-4 py-8 sm:py-12`}
      >
        <div className="w-full max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-6 md:gap-8 items-start"
          >
            <div className="flex flex-col items-center text-center mb-6 md:mb-0">
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mb-4 sm:mb-6"
              >
                <Image
                  src="/contact-img-final.png"
                  width={130}
                  height={130}
                  sizes="(max-width: 640px) 130px, (max-width: 768px) 140px, 160px"
                  className="w-[130px] sm:w-[140px] md:w-[160px] h-auto"
                  alt="Contact"
                  priority
                />
              </motion.div>

              <div className="mb-4 sm:mb-6">
                <h1 className="text-white text-xl sm:text-2xl font-[550] md:text-3xl mb-2">
                  Get in Touch
                </h1>
                <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-sm mx-auto">
                  Let's turn your project into something tentacool!
                </p>
              </div>

              <div className="flex flex-col gap-4 text-gray-300 text-sm">
                <motion.a
                  href="mailto:thanishab77@gmail.com"
                  className="flex items-center gap-2 hover:text-white transition-colors justify-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaEnvelope size={18} />
                  <span className="text-sm sm:text-base">
                    thanishab77@gmail.com
                  </span>
                </motion.a>

                <div className="flex justify-center gap-3 sm:gap-4 mt-2">
                  <motion.a
                    href="https://github.com/Thanisha23"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 sm:p-2 border border-zinc-50/30 rounded-full text-white hover:bg-white hover:text-black transition-colors"
                    whileHover={{ scale: 1.1 }}
                    aria-label="GitHub Profile"
                  >
                    <FaGithub size={18} />
                  </motion.a>

                  <motion.a
                    href="https://www.linkedin.com/in/thanisha-belchada-b39796261"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 sm:p-2 border border-zinc-50/30 rounded-full text-white hover:bg-white hover:text-black transition-colors"
                    whileHover={{ scale: 1.1 }}
                    aria-label="LinkedIn Profile"
                  >
                    <FaLinkedinIn size={18} />
                  </motion.a>

                  <motion.a
                    href="https://x.com/Thanisha23?t=X2xlsf3k4N10ZJ9A9j980g&s=09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 sm:p-2 border border-zinc-50/30 rounded-full text-white hover:bg-white hover:text-black transition-colors"
                    whileHover={{ scale: 1.1 }}
                    aria-label="Twitter/X Profile"
                  >
                    <FaXTwitter size={18} />
                  </motion.a>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-black/40 border border-zinc-50/30 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-lg w-full"
            >
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-3 sm:space-y-4"
              >
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className={`w-full bg-black/40 text-white border ${
                      errors.name ? "border-red-500" : "border-zinc-50/30"
                    } rounded-md py-2.5 sm:py-3 px-3 sm:px-4 outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors text-sm sm:text-base`}
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs sm:text-sm text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className={`w-full bg-black/40 text-white border ${
                      errors.email ? "border-red-500" : "border-zinc-50/30"
                    } rounded-md py-2.5 sm:py-3 px-3 sm:px-4 outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors text-sm sm:text-base`}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs sm:text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={3}
                    className={`w-full resize-none bg-black/40 text-white border ${
                      errors.message ? "border-red-500" : "border-zinc-50/30"
                    } rounded-md py-2.5 sm:py-3 px-3 sm:px-4 outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors text-sm sm:text-base`}
                    {...register("message", {
                      required: "Message is required",
                    })}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-xs sm:text-sm text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 bg-white text-black rounded-md font-medium transition-colors hover:bg-gray-200 disabled:opacity-70 disabled:cursor-not-allowed text-sm sm:text-base"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-4 w-4 sm:h-5 sm:w-5 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
