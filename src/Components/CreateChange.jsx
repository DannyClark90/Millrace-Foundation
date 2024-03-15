import React from "react";
import "../Sass/Components/_issues.scss";
import "../Sass/Base/_utilities.scss";
import { motion, useScroll } from "framer-motion";

export default function CreateChange() {
  const animationVariants = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <>
      <motion.h2
        className="section-heading"
        variants={animationVariants}
        initial="initial"
        transition={{ duration: 0.8 }}
        whileInView="animate"
        viewport={{ once: true }}
      >
        How We Create Change
      </motion.h2>
      <section className="create-change">
      <div className="create-change__image-container">
          <div className="create-change__image-container--images">
            <motion.img
              className="chair"
              src="src/assets/Chair_Before.png"
              alt="Antique chair before restoration."
              variants={animationVariants}
              initial="initial"
              transition={{ duration: 0.8 }}
              whileInView="animate"
              viewport={{ once: true }}
            />

            <motion.img
              className="chair"
              src="src/assets/Chairs_Progress_1.png"
              alt="Antique chair sanded & polished. Finish restored!"
              variants={animationVariants}
              initial="initial"
              transition={{ duration: 0.8 }}
              whileInView="animate"
              viewport={{ once: true }}
            />
          </div>

          <div className="create-change__images">
            <motion.img
              className="chair"
              src="src/assets/Chairs_Progress_2.png"
              alt="Antique chair cushion base re-woven."
              variants={animationVariants}
              initial="initial"
              transition={{ duration: 0.8 }}
              whileInView="animate"
              viewport={{ once: true }}
            />

            <motion.img
              className="chair"
              src="src/assets/Chair_After.png"
              alt="Antique chair after restoration."
              variants={animationVariants}
              initial="initial"
              transition={{ duration: 0.8 }}
              whileInView="animate"
              viewport={{ once: true }}
            />
          </div>
        </div>

        <motion.article
          className="create-change__article"
          variants={animationVariants}
          initial="initial"
          transition={{ duration: 0.8 }}
          whileInView="animate"
          viewport={{ once: true }}
        >
          <p>
            We provide a safe, structured therapeutic work based environment
            which enables each beneficiary to build their individual capacity
            and workplace skills.{" "}
          </p>
          <br />
          <p>
            By fostering and developing group working, the beneficiaries
            increase in self worth, self confidence and ability, while reducing
            their isolation in society. In addition it empowers them to fully
            participate in their community, enabling them to reach their full
            potential.
          </p>
          <br />
          <p>Leading to:</p>
          <ul className="margin-left-3">
            <li>Further Education</li>
            <li>Increased Employment opportunities</li>
          </ul>
          <br />
          <h3 className="section-heading--sub margin-bottom">
            Making The Difference
          </h3>

          <p>
            The therapy, sense of satisfaction, and well-being the beneficiaries work provides helps not only bring transformation to the projects they work on, but also to their lives.
          </p>
          <br />
          <p>
            As well as hands-on practical training, we also aim to provide Business and IT skills to increase employability for our beneficiaries.
          </p>
          <br />
          <p>
            In addition, we improve the environment by recycling unwanted
            furniture.
          </p>
        </motion.article>
      </section>
    </>
  );
}
