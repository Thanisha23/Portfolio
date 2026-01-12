"use client";

import { useEffect, useState } from "react";
import { poppins } from "../fonts";
import Link from "next/link";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    interface MousePosition {
      x: number;
      y: number;
    }

    const handleMouseMove = (e: MouseEvent): void => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    setIsLoaded(true);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={`${poppins.className} min-h-screen relative overflow-hidden flex items-center justify-center`}
    >
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
      <div
        className={`relative z-10 flex flex-col items-center justify-center w-full px-4 sm:px-6 transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-full max-w-4xl mx-auto text-center">
          <div className="animate-fadeIn mb-6">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold md:font-extrabold md:leading-tight">
              Hey, I'm{" "}
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-300 text-transparent bg-clip-text">
                Thanisha,
              </span>{" "}
              <br />
             self-taught developer with a passion for building.
            </h1>
          </div>

          <div className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto opacity-80 mb-8 sm:mb-10">
            Full-stack developer crafting seamless apps for web & mobile. <br />
            Turning ideas into reality, one line of code at a time.
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/projects"
              className="w-full sm:w-auto px-6 py-3 text-base sm:text-lg rounded-full bg-white hover:bg-opacity-90 flex justify-center items-center gap-2 text-black font-medium transition-transform hover:scale-105 shadow-lg hover:shadow-white/20"
            >
              <div className="flex items-center gap-2">
                <span>View my work</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                  />
                </svg>
              </div>
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-3 rounded-full text-base sm:text-lg bg-transparent border border-gray-400 text-white hover:bg-white/10 flex justify-center items-center gap-2 transition-transform hover:scale-105 shadow-lg hover:shadow-white/20"
            >
              <div className="flex items-center gap-2">
                <span>Get in touch</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
