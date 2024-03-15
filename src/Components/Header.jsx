import React from "react";
import "../Sass/Layout/_header.scss";
import { motion } from "framer-motion"

export default function Header({PrimaryHeading, SubHeading}) {

  return (
    <>
      <header className="header">
        <h1 className="heading-primary">
          <motion.span 
          initial={{x:-100, opacity:0}} 
          animate={{x:0, opacity: 1}}
          transition={{duration: 2}}
          className="heading-primary--main">
            {PrimaryHeading}
          </motion.span>
          <motion.span 
          initial={{x:100, opacity:0}} 
          animate={{x:0 , opacity: 1}}
          transition={{duration: 2}}
          className="heading-primary--sub">{SubHeading}
          </motion.span>
        </h1>
      </header>
    </>
  );
}

// Welcome to The millrace foundation
// Action On Mental Health