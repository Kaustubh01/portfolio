"use client"

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Typewriter from "typewriter-effect";
import Hero from './components/hero';
import Projects from './components/projects';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full min-h-screen">

      {/* MAIN CONTENT */}
      {!loading && (
        <motion.div className="w-full min-h-screen flex flex-col">
          <Hero/>
          
          <Projects/>
        </motion.div>
      )}

    </div>
  )
}

export default Home