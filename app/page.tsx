

// pages/index.tsx
"use client";

import { NextPage } from 'next';

import React from "react";

import Home from './components/Home';
const LandingPage: NextPage = () => {
 
 
  return (
    <div className='flex justify-center items-center h-screen'>
      <Home />
    </div>

    
  );
};

export default LandingPage;
