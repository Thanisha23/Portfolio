import { NextPage } from "next";
import React from "react";
import Home from "./components/Home";

const LandingPage: NextPage = () => {
  return (
    <main className="flex justify-center items-center h-screen ">
      <Home />
    </main>
  );
};

export default LandingPage;
