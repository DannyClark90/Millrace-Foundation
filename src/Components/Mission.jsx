import React from "react";
import "../Sass/Components/_mission.scss";
import "../Sass/Base/_utilities.scss";
import Button from "./Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Mission() {
  return (
    <>
      <section className="mission">
      <motion.img
        className="logo"
        src="src/assets/Millrace Outline mod.png"
        alt="Millrace spinning logo"
        initial={{opacity:0}}
        animate={{rotateZ:360, opacity:1}}
        transition={{duration:2}}
      />
        <motion.article 
        className="mission__card"
        initial={{y:100, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:2}}
        >
          <h2 className="section-heading margin-bottom">Our Mission</h2>
          <p className="mission__card-paragraph margin-bottom">
            To help improve lives and our community, by providing a safe
            structured therapeutic work based environment, while teaching craft
            skills, which develops a sense of social inclusion for any
            beneficiary.
          </p>
          <div className="mission__card-buttons">
            <Link to="#">
              <Button label={"About Us"} color={"green"} />
            </Link>
            <Link to="#">
              <Button label={"What We Do"} color={"green"} />
            </Link>
          </div>
        </motion.article>
      </section>
    </>
  );
}
