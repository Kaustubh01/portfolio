"use client"

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Typewriter from "typewriter-effect";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-screen">

      <AnimatePresence>
        {loading && (
          <motion.div
            className='absolute inset-0 bg-neutral-100 flex items-center justify-center'
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold text-gray-800 text-left">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Hi!")
                    .pauseFor(700)
                    .typeString("<br/>I'm <span style='color:#ef4444'>Kaustubh</span>")
                    .start();
                }}
                options={{ cursor: "" }}
              />
            </h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN CONTENT */}
      {!loading && (
        <motion.div
          className="w-full h-screen flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          
        </motion.div>
      )}

    </div>
  )
}

export default Home