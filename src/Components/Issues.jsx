import React from "react";
import "../Sass/Components/_issues.scss";
import "../Sass/Base/_utilities.scss";
import { motion, useScroll } from "framer-motion";

export default function Issues() {
  const animationVariants = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="issues">
      <motion.h2
        className="section-heading margin-bottom-4"
        variants={animationVariants}
        initial="initial"
        transition={{ duration: 0.8 }}
        whileInView="animate"
        viewport={{ once: true }}
      >
        The Issues
      </motion.h2>
      <div className="issues__grid">
        <motion.img
          className="issues__img"
          src="src/assets/Issues.png"
          alt="Depressed looking person"
          variants={animationVariants}
          initial="initial"
          transition={{ duration: 0.8 }}
          whileInView="animate"
          viewport={{ once: true }}
        />

        <motion.div
          className="issues__card"
          variants={animationVariants}
          initial="initial"
          transition={{ duration: 0.8 }}
          whileInView="animate"
          viewport={{ once: true }}
        >
          <p>
            4 to 10% of people in Essex will experience mental illness in their
            lifetime.
          </p>
        </motion.div>

        <motion.div
          className="issues__card"
          variants={animationVariants}
          initial="initial"
          transition={{ duration: 0.8 }}
          whileInView="animate"
          viewport={{ once: true }}
        >
          <p>
            Common mental health problems such as depression, anxiety and
            suicidal thoughts can affect you and your family at anytime.
          </p>
        </motion.div>

        <motion.div
          className="issues__card"
          variants={animationVariants}
          initial="initial"
          transition={{ duration: 0.8 }}
          whileInView="animate"
          viewport={{ once: true }}
        >
          <p>
            Mixed anxiety and depression have been estimated to cause one fifth
            of days lost from work in the UK. One of the major causes of social
            isolation today.
          </p>
        </motion.div>

        <motion.div
          className="issues__card"
          variants={animationVariants}
          initial="initial"
          transition={{ duration: 0.8 }}
          whileInView="animate"
          viewport={{ once: true }}
        >
          <p>
            High rates of suicide exist currently in our local community and in
            some areas above the national average.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
